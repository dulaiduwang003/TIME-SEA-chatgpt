<template>
  <div class="body" ref="scrollRef">
    <div v-if="conversationList.length <= 1" class="explain">
      <div class="logo">
        {{ data.icon }}
      </div>
      <div class="expositoryCase">{{ data.botInitialization }}</div>
      <div class="consume">
        <el-icon>
          <Goods />
        </el-icon>
        <div class="consumeText">每次提问消耗1个SUPER币</div>
      </div>
      <div class="beCareful">请注意不支持违法、违规等不当信息内容</div>
    </div>
    <div v-else class="questions">
      <div
        v-for="(item, index) in conversationList"
        :key="index"
        class="item slide-animation"
        v-show="index !== 0"
      >
        <div class="question">
          <el-avatar
            class="flexShrink"
            :size="28"
            :icon="UserFilled"
            :src="
              store.getters.userinfo.avatar
                ? imageUrl + store.getters.userinfo.avatar
                : require('../assets/my.png')
            "
          />
          <div class="text">{{ item.user }}</div>
        </div>
        <div class="answer">
          <div style="flex: 0">
            <div
              style="
                font-size: 20px;
                background-color: #ddddf8;
                border-radius: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
              "
            >
              <div
                style="
                  width: 28px;
                  height: 28px;
                  text-align: center;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                "
              >
                {{ data.icon }}
              </div>
            </div>
          </div>
          <div v-if="item.assistant" style="flex: 1">
            <v-md-editor
              :model-value="item.assistant"
              mode="preview"
              @copy-code-success="handleCopyCodeSuccess"
            />
            <div v-if="!item.isError" class="operation">
              <div @click="copyAnswer(item.assistant)" class="operationItem">
                <el-icon size="14">
                  <CopyDocument />
                </el-icon>
                <div class="operationExplain">复制结果</div>
              </div>
              <div
                @click="onCollection(item, index)"
                class="operationItem operationItemSelected"
                v-show="!item.isCollection"
              >
                <el-icon size="14">
                  <Star />
                  {{ item.isCollection }}
                </el-icon>
                <div class="operationExplain">收藏</div>
              </div>
            </div>
          </div>
          <div v-else class="typing"></div>
        </div>
      </div>
    </div>
    <div class="suspend" v-show="aiLoading" @click="closeSocket">
      <el-icon :size="16">
        <VideoPause />
      </el-icon>
      <div>暂停输出</div>
    </div>
    <div class="footer">
      <div class="footer-bar">
        <div
          class="clear"
          @click="clear"
          v-show="store.getters.userinfo && !aiLoading"
        >
          <div style="padding-top: 4px">
            <el-icon size="13px" style="padding-right: 3px">
              <Clock />
            </el-icon>
          </div>
          <div>清理屏幕</div>
        </div>
        <InputFormField
          ref="inputRef"
          :needSelect="false"
          :aiLoading="aiLoading"
          :inputText="input"
          @update:inputText="input = $event"
          @update:model="model = $event"
          @onSubmit="onSubmit"
        />
      </div>
      <div class="icp">
        <!-- 将以下链接和文本替换成您的ICP备案信息 -->
        <a href="https://beian.miit.gov.cn" target="_blank">沪ICP备2023035605号</a>
      </div>
    </div>
  </div>
  <LoginDialog :show="loginVisible" @close="loginVisible = false" />
</template>

<script>
import { nextTick, onMounted, ref } from "vue";
import {
  CopyDocument,
  Goods,
  UserFilled,
  VideoPause,
} from "@element-plus/icons-vue";
import { ElNotification } from "element-plus";
import { FavoritesAdd, GetUserInfo } from "../../api/BSideApi";
import { useStore } from "vuex";
import LoginDialog from "@/components/LoginDialog.vue";
import InputFormField from "@/components/InputFormField.vue";
import store from "@/store";

export default {
  name: "dialogueView",
  components: {
    InputFormField,
    VideoPause,
    CopyDocument,
    Goods,
    LoginDialog,
  },
  computed: {
    store() {
      return store;
    },
    UserFilled() {
      return UserFilled;
    },
  },
  setup() {
    let inputRef = ref(null);
    let data = ref({});
    let store = useStore();
    let scrollRef = ref(null);
    let input = ref("");
    let conversationList = ref([]);
    let loginVisible = ref(false);
    let socket = ref(null);
    let aiLoading = ref(false);
    let model = ref("gpt-3.5-turbo");
    let dataIndex = ref(0);
    const imageUrl = ref("");
    const rate = ref(50);
    const memory = ref(10);
    const size = ref(1000);
    onMounted(() => {
      if (store.getters.userinfo) getUser();
      //获取图片域名
      imageUrl.value = process.env.VUE_APP_IMAGE;
      rate.value = parseInt(process.env.VUE_APP_RATE);
      memory.value = parseInt(process.env.VUE_APP_MEMORY);
      size.value = parseInt(process.env.VUE_APP_MEMORY_SIZE);
      let item = localStorage.getItem("roleData");

      data.value = JSON.parse(item);

      const { question, answer } = data.value.content[0];
      conversationList.value.push({
        user: question,
        assistant: answer,
        isError: false,
      });
    });

    function clear() {
      if (socket.value) {
        socket.value.close();
        socket.value = null;
      }
      conversationList.value = conversationList.value.slice(0, 1);
    }

    // TODO 提交问题
    async function onSubmit() {
      if (!store.getters.userinfo) return (loginVisible.value = true);
      if (input.value.trim() === "") return;
      let index = conversationList.value.length;
      try {
        let content = input.value;
        // 调用子组件方法，清空内容
        inputRef.value.resetInputValue();
        conversationList.value.push({
          user: content,
        });
        aiLoading.value = true;
        // TODO 滚动到底部
        scrollToTheBottom();

        // TODO 上下文
        let messages = [];
        conversationList.value
            .slice(-memory.value)
            .forEach(({isError, user, assistant}, index, arr) => {
              if (!isError) {
                let truncatedUser = user
                let truncatedAssistant = assistant
                if (arr.length > 2) {
                  if (index !== arr.length - 1 && index !== arr.length - 2) {
                    truncatedUser =
                        user.length > size.value ? user.slice(0, size.value) + "..." : user;
                    truncatedAssistant =
                        assistant && assistant.length > size.value
                            ? assistant.slice(0, size.value) + "..."
                            : assistant;
                  }
                }
                messages.push({
                  role: "user",
                  content: truncatedUser,
                });
                if (truncatedAssistant) {
                  messages.push({
                    role: "assistant",
                    content: truncatedAssistant,
                  });
                }
              }

            });
        dataIndex.value = index;
        webSocket({
          messages: {
            messages: messages,
          },
          index: index,
        });
      } catch (err) {
        conversationList.value[index].assistant = err;
        conversationList.value[index].isError = true;
      }
    }

    function webSocket({ messages, index }) {
      if (typeof WebSocket == "undefined") {
        console.log("您的浏览器不支持WebSocket");
      } else {
        if (socket.value != null) {
          socket.value.close();
          socket.value = null;
        }

        socket.value = new WebSocket(
          process.env.VUE_APP_WSS +
            "/gpt-web/api/" +
            localStorage.getItem("token") +
            "/" +
            model.value
        );
        // TODO 建立连接
        socket.value.onopen = function () {
          console.log("websocket已连接");
          socket.value.send(JSON.stringify(messages));
          conversationList.value[index].isError = true;
        };
        // TODO 接收消息
        socket.value.onmessage = function (news) {
          messageQueue.push({
            msg: news.data,
            index: index,
          }); // 将接收到的消息存储到队列中
          displayMessages(); // 显示消息
        };
        // TODO 关闭连接
        socket.value.onclose = function () {
          waitUntilMessageQueueClear(index);
        };
        // TODO 处理错误
        socket.value.onerror = function () {
          ElNotification({
            title: "信息过期",
            message: "登录信息已过期,请重新登录",
            type: "error",
          });
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          location.reload();
        };
      }
    }

    const messageQueue = []; // 消息队列
    let isDisplaying = false; // 是否正在显示消息
    function displayMessages() {
      if (isDisplaying) {
        return; // 如果正在显示消息，则直接返回，等待下一次调用
      }
      isDisplaying = true;
      const message = messageQueue.shift(); // 取出队列中的第一个消息
      if (message) {
        let i = 0;

        // eslint-disable-next-line no-inner-declarations
        function displayNextCharacter() {
          const index = message.index;
          const msg = message.msg;
          const character = msg.charAt(i++);
          if (character) {
            if (conversationList.value[index].assistant) {
              conversationList.value[index].assistant += character;
            } else {
              conversationList.value[index].assistant = character;
            }
            scrollToTheBottom();
            setTimeout(displayNextCharacter, rate.value);
          } else {
            isDisplaying = false;
            displayMessages(); // 显示下一条消息
          }
        }

        displayNextCharacter();
      } else {
        isDisplaying = false; // 重置标志以便下次能够正确显示消息
      }
    }

    function waitUntilMessageQueueClear(index) {
      return new Promise((resolve) => {
        let interval = setInterval(() => {
          if (messageQueue.length === 0) {
            let assistant = conversationList.value[index].assistant;
            conversationList.value[index].isError = false;
            if (!assistant) {
              conversationList.value.splice(index, 1);
            }
            getUser();
            aiLoading.value = false;
            // TODO 滚动到底部
            scrollToTheBottom();
            // 在回复完成后将输入框设置为聚焦状态
            nextTick(() => {
              // 组件内部方法，聚焦
              inputRef.value.$refs.inputRefInner.focus();
            });
            clearInterval(interval);
            resolve();
          }
        }, 50);
      });
    }

    async function getUser() {
      let res = await GetUserInfo();

      store.commit("setUserinfo", res);
    }

    // TODO 滚动到底部
    function scrollToTheBottom() {
      setTimeout(() => {
        scrollRef.value.scrollTop = scrollRef.value.scrollHeight;
      }, 20);
    }

    // TODO 复制代码块
    function handleCopyCodeSuccess(code) {
      navigator.clipboard.writeText(code);
      ElNotification({
        message: "复制成功",
        type: "success",
      });
    }

    // TODO 复制答案
    function copyAnswer(data) {
      navigator.clipboard.writeText(data);
      ElNotification({
        message: "复制成功",
        type: "success",
      });
    }

    function closeSocket() {
      if (socket.value) {
        messageQueue.length = 0;
        socket.value.close();
        socket.value = null;
      }
    }

    async function onCollection(item, index) {
      try {
        let bol = !conversationList.value[index].isCollection;
        if (bol) {
          try {
            await FavoritesAdd({
              issue: item.user,
              answer: item.assistant,
            });
            ElNotification({
              message: "收藏成功",
              type: "success",
            });
          } catch (e) {
            ElNotification({
              message: e,
              type: "error",
            });
          }
        }
        conversationList.value[index].isCollection = true;
      } catch (e) {
        ElNotification({
          message: e,
          type: "error",
        });
      }
    }

    return {
      clear,
      inputRef,
      model,
      onSubmit,
      input,
      conversationList,
      scrollRef,
      handleCopyCodeSuccess,
      loginVisible,
      onCollection,
      copyAnswer,
      aiLoading,
      closeSocket,
      dataIndex,
      imageUrl,
      data,
    };
  },
};
</script>
<style scoped>
.slide-animation {
  animation: slideEase 0.5s ease-in-out forwards;
}

@keyframes beating {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-10px);
  }
}

@keyframes slideEase {
  0% {
    transform: translateX(-100px);
  }

  100% {
    transform: translateX(0);
  }
}

.body {
  scroll-behavior: smooth;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  flex-direction: column;
  flex: 1;
  align-items: center;
  padding: 0 20px 120px;
  display: flex;
  overflow: auto;
  background-color: var(--bgColor2);
}

.footer {
  width: 100%;
  box-sizing: border-box;
  z-index: 1;
  pointer-events: none;
  background: linear-gradient(rgba(246, 246, 246, 0), var(--bgColor2) 25%);
  flex-shrink: 0;
  padding: 30px 20px;
  display: flex;
  position: absolute;
  bottom: 0;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
}

.footer-bar {
  min-height: 60px;
  max-width: 800px;
  width: 100%;
  pointer-events: auto;
  background: var(--bgColor1);
  border-radius: 8px;
  box-shadow: 0 5px 7px rgb(0 0 0 / 6%);
  display: flex;
  align-items: center;
  animation: footerBarAnimation 0.3s;
}

@keyframes footerBarAnimation {
  from {
    transform: translateY(150%);
  }

  to {
    transform: translateY(0);
  }
}

>>> .footer-bar > .el-input > .el-input__wrapper {
  box-shadow: none;
  font-size: 16px;
  box-sizing: border-box;
  width: 100%;
  min-height: 60px;
  resize: none;
  -webkit-appearance: none;
  background: var(--bgColor1) 0 0;
  border: 0;
  flex: 1;
  margin: 0;
  padding: 16px 20px;
  line-height: 28px;
}

>>> .footer-bar > .el-input > .el-input-group__prepend {
  box-shadow: none;
  font-size: 16px;
  box-sizing: border-box;
  min-height: 60px;
  resize: none;
  -webkit-appearance: none;
  background: 0 0;
  border: 0;
  margin: 0;
  padding: 0;
  line-height: 28px;
}

>>> .footer-bar > .el-input > .el-input-group__prepend > .el-select {
  margin: 0;
}

>>> .footer-bar
  > .el-input
  > .el-input-group__prepend
  > .el-select
  > .select-trigger
  > .el-input
  > .el-input__wrapper {
  box-shadow: none !important;
  font-size: 15px;
  height: 62px;
  padding: 0 20px;
}

.sendIcon {
  flex-shrink: 0;
  margin: 0 12px;
  width: 36px;
  height: 36px;
  color: #fff;
  cursor: pointer;
  background: #686efe;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  display: flex;
}

.questions {
  width: 100%;
  max-width: 800px;
  box-sizing: border-box;
  padding: 0 32px;
}

.questions > .item {
  box-sizing: border-box;
  background-color: var(--bgColor1);
  /*border: 1px solid #ececec;*/
  border-radius: 8px;
  flex-direction: column;
  margin-top: 26px;
  padding: 0 20px;
  display: flex;
  overflow: hidden;
}

.flexShrink {
  flex-shrink: 0;
}

.question,
.answer {
  padding: 20px 8px;
  display: flex;
}

.answer {
  border-top: 1px solid var(--borderColor);
  position: relative;
}

.question > .text,
.answer > .text {
  min-height: 28px;
  box-sizing: border-box;
  white-space: pre-wrap;
  flex: 1;
  margin-left: 16px;
  font-size: 16px;
  line-height: 28px;
  position: relative;
  color: var(--textColor1);
}
::v-deep(.vuepress-markdown-body) {
  padding: 0 0 0 16px;
  color: var(--textColor1);
  background-color: var(--bgColor1);
}

.explain {
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: explainAnimation 0.3s;
  color: var(--textColor1);
}

@keyframes explainAnimation {
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
}

.suspend {
  animation: explainAnimation 0.3s;
  position: fixed;
  bottom: 150px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  box-shadow: 0 5px 7px var(--bgboxShadowColor1);
  background-color: var(--bgColor1);
  padding: 5px 20px;
  font-size: 13px;
  color: var(--textColor1);
  border-radius: 5px;
}

.suspend div {
  padding-bottom: 1px;
  padding-left: 8px;
}

.logo {
  width: 100px;
  font-size: 80px;
  margin-bottom: 20px;
  animation: beating 0.7s infinite alternate;
  text-align: center;
}

.expositoryCase {
  font-size: 20px;
  margin-top: 15px;
  text-align: center;
  width: 500px;
  line-height: 1.8;
}

.consume {
  display: flex;
  align-items: center;
  margin-top: 30px;
}

.consumeText {
  margin-left: 10px;
  font-size: 15px;
}

.beCareful {
  padding: 40px 6px 12px;
  color: var(--textColor2);
  font-size: 15px;
  line-height: 1.6;
}

.typing {
  height: 20px;
  width: 3px;
  background-color: whitesmoke;
  border-radius: 100px;
  margin-top: 4px;
  margin-left: 16px;
  animation: typingAnimation 0.6s linear infinite;
}

@keyframes typingAnimation {
  from {
    visibility: hidden;
  }

  50% {
    visibility: hidden;
  }

  to {
    visibility: visible;
  }
}

>>> .answer > .el-avatar,
>>> .question > .el-avatar {
  background-color: white;
}

.operation {
  display: flex;
  margin-top: 20px;
}

.operationItem {
  height: 30px;
  cursor: pointer;
  box-sizing: border-box;
  padding: 0 15px;
  margin-right: 5px;
  display: flex;
  align-items: center;
  background-color: var(--bgColor2);
  border-radius: 100px;
  font-size: 13px;
  color: var(--textColor1);
}

.operationItemSelected {
  background-color: var(--themeColor1);
  color: var(--themeTextColor);
}

.operationExplain {
  margin-left: 5px;
}

@keyframes jumpT {
  0%,
  80%,
  100% {
    transform: scale(0);
    background-color: #f9f9f9;
  }

  40% {
    transform: scale(1);
    background-color: rgb(186, 156, 241);
  }
}

.dot0,
.dot1,
.dot2,
.dot3 {
  background: rgb(166, 129, 236);
  width: 10px;
  height: 10px;
  border-color: #464646;
  border-radius: 50%;
}

.dot0 {
  animation: jumpT 1.3s -0.64s linear infinite;
}

.dot1 {
  animation: jumpT 1.3s -0.32s linear infinite;
}

.dot2 {
  animation: jumpT 1.3s -0.16s linear infinite;
}

.dot3 {
  animation: jumpT 1.3s linear infinite;
}

@media only screen and (max-width: 767px) {
  .explain {
    margin: auto;
    width: 100%;
  }

  .expositoryCase {
    width: 100%;
  }

  .questions {
    padding: 0 0px;
  }
}

.clear {
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  z-index: 1;
  font-size: 8px;
  border-radius: 5px;
  padding: 3px 10px;
  box-shadow: 0 5px 7px rgb(0 0 0 / 6%);
  color: var(--textColor4);
  background-color: var(--bgColor1);
}
::v-deep(.scrollbar__wrap) {
  background-color: var(--bgColor1);
}
::v-deep(.vuepress-markdown-body tr:nth-child(2n)) {
  background-color: var(--bgColor1);
}
.icp a {
  color: #333; /* 链接颜色，可根据需要调整 */
  text-decoration: none; /* 去除下划线 */
  font-size: 14px;
  text-align: center; /* 使文本居中 */
}

.icp a:hover {
  text-decoration: underline; /* 鼠标悬停时添加下划线 */
}
</style>
