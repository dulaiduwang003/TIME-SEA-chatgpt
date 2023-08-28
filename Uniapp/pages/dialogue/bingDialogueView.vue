<template>
  <view class="chat-container">
    <view class="init_container" v-if="chatTemporary.length<=0">
      <view>
        <view class="bot_logo">
          <image src="/static/assets/bing.svg"/>
        </view>
        <view class="bot_introduce">
          {{ title }}
        </view>
      </view>
    </view>
    <!--聊天框-->
    <view v-else class="animation-fade">
      <scroll-view scroll-y :scrollTop="scrollTop">
        <view class="chat-container" id="scroll-view-content">
          <view v-for="(item,index) in chatTemporary" :key="index">
            <!--用户-->
            <view class="context-spacing">
              <view class="chat-model-user chat-model slide-animation" @click="copyPersonContext(index)">
                <view class="chat-content chat-content-user">
                  {{ item.question }}
                </view>
                <view class="avatar-user avatar">
                  <image
                      :src="userInfo.avatar?conversionImage(userInfo.avatar): '/static/images/individual/defaultAvatar.jpg'"/>
                </view>
              </view>
            </view>
            <view class="context-spacing">
              <!--机器人-->
              <view class="chat-model-bot chat-model slide-animation">
                <view class="avatar-bot avatar">
                  <image src="/static/assets/bing.svg"/>
                </view>
                <view class="chat-content chat-content-bot">
                  <view v-show="!item.answer">
                    <view class="loading-animation">
                      <view class="dot0"></view>
                      <view class="dot1"></view>
                      <view class="dot2"></view>
                      <view class="dot3"></view>
                      <view class="dot4"></view>
                    </view>
                  </view>
                  <mp-html v-show="item.answer" :copy-link="true" :tagStyle="md" :container-style="md" :markdown="true"
                           :lazy-load="true"
                           :selectable="true" :content="item.answer"/>
                </view>

              </view>
              <view class="slot-btn" v-if="item.isSucceed">
                <view class="levitation_btn" v-if="item.answer.trim().length>0"
                      @click="starDialogue(item.question,item.answer,index)">
                  <van-icon :name="item.starId?'star' :'star-o' " :color="item.starId?'#FFC45F':''"/>
                  ️ {{ item.starId ? '取消收藏' : '收藏' }}
                </view>
                <view class="levitation_btn" @click="copyBotContext(index)">
                  <van-icon name="coupon-o"/>
                  ️ 复制
                </view>
              </view>
            </view>
          </view>
        </view>
      </scroll-view>
    </view>
    <!-- 暂停输出-->
    <view class="stop_container" v-show="!isNextSend">
      <view class="stop_model">
        <view class="stop_style" @click="closeSocket()">
          <van-icon name="pause-circle-o"/>
          <text>暂停输出</text>
        </view>
      </view>
    </view>
    <!--悬浮-->
    <view class="floating" :animation="animationData ? animationData : ''">
      <view class="levitation_btn_container frames" v-show="isNextSend">
        <view class="levitation_btn" @click="clearDialogue">
          <van-icon name="clock-o"/>
          ️ 清空屏幕
        </view>
        <view class="levitation_btn" @click="isMemoryDisplay=true">
          <van-icon name="birthday-cake-o"/>
          ️ 记忆回溯
        </view>
      </view>
      <view class="input_container">
        <!--输入框-->
        <textarea cursor-spacing="10" id="textarea" :show-confirm-bar="false" :auto-height="true" maxlength="-1"
                  confirm-type="done"
                  placeholder-class="placeholder-class"
                  @confirm="sendMessage($event)" v-model="input" :disabled="!isNextSend"
                  :placeholder="isNextSend?'有什么问题尽管问我...':'思考中...'"/>
        <!-- 提交按钮-->
        <view :class="isNextSend?'send_btn':'send_btn_active'" @click="sendMessage($event)">
          <image src="/static/assets/send.svg"/>
        </view>
      </view>
    </view>
    <!--    记忆回溯-->
    <van-popup :show="isMemoryDisplay" round="true" close-on-click-overlay="true" @close="closeMemory"
               closeable>
      <view class="memory-container">
        <view class="memory-logo">
          <image src="/static/assets/bing.svg"/>
        </view>
        <view class="memory-title">
          NEW BING PLUS
        </view>
        <view class="memory-button-model">
          <view class="memory-button" @click="createdNewChat">
            <van-icon name="comment-o" size="40rpx"/>
            <text>创建新的聊天</text>
          </view>
        </view>
        <view class="memory-scroll">
          <scroll-view scroll-y>
            <view class="memory--row" v-for="(item,index) in dialogueCache.array" :key="index">
              <view class="memory-data">
                <view class="memory-left" @click="switchChat(index)">
                  <view style="  white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color: #d0d0d0;">
                    {{ item.title }}
                  </view>
                  <view style="padding-top: 10rpx;font-size: 15rpx;color: #656565">
                    {{ conversionTime(item.time) }}
                  </view>
                </view>
                <view class="memory-right" @click="removeChat(index)">
                  <image :src="dialogueCache.index===index?'/static/assets/selected02.svg':'/static/assets/close.svg'"/>
                </view>
              </view>
            </view>
          </scroll-view>
        </view>
      </view>
    </van-popup>
  </view>
</template>

<script>
import md from "@/static/css/md";
import mpHtml from "@/wxcomponents/mp-html/mp-html.vue";
import env from "@/utils/env";
import {getBing, getToken, getUser, removeChat, removeToken, removeUser, setBing,} from "@/utils/utils";
import {deleteStarDialogue, putStarDialogue} from "@/api/user";
import {conversionImage} from "@/utils/image";
import {conversionTime} from "@/utils/date";


export default {
  computed: {
    env() {
      return env
    },
    md() {
      return md.tagStyle
    }
  },
  created() {
    //获取当前登录用户信息
    this.userInfo = getUser();
    let cache = getBing();

    if (cache) {
      this.dialogueCache = JSON.parse(cache)
      const index = this.dialogueCache.index;
      let data = this.dialogueCache.array[index].data;
      this.chatTemporary = data.template
      this.context = data.context
    } else {
      this.dialogueCache = {
        index: 0,
        array: [
          {
            title: '新对话',
            time: Date.now(),
            data: {
              template: [],
              context: []
            }
          }
        ]
      }
      setBing(JSON.stringify(this.dialogueCache))
    }
  },
  //刷新次数
  onUnload() {
    uni.$emit('master_userInfo')
    removeChat()
    this.closeSocket()
  },
  onLoad() {
    const _this = this
    //加载动画
    const animation = uni.createAnimation({

      duration: 1000,
      timingFunction: 'ease-in-out'
    })
    animation.translate(0, -50).step()
    _this.animationData = animation.export()
    //加载动画
    _this.loadTitle();

  },
  data() {
    return {
      //缓存记忆数据
      dialogueCache: {},
      isMemoryDisplay: false,
      //MODE
      mode: false,
      userInfo: {},
      //用户输入内容
      input: '',
      //窗口聊天数据
      chatTemporary: [],
      //真实聊天数据
      context: [],
      //下一次发送
      isNextSend: true,
      //坐标值
      scrollTop: 0,
      //动画
      animationData: {},
      //标题动画
      title: '',
      //当前对话索引
      index: 0,
      cache: {}
    };
  },
  methods: {
    conversionTime,
    conversionImage,
    closeMemory: function () {
      this.isMemoryDisplay = false
    },
    /**
     *     创建新对话
     */
    createdNewChat: function () {
      this.dialogueCache.array.unshift({
        title: '新对话',
        time: Date.now(),
        data: {
          template: [],
          context: []
        }
      })
      this.dialogueCache.index = 0
      this.context = []
      this.chatTemporary = []
      setBing(JSON.stringify(this.dialogueCache))
    },
    /**
     * 切换对话
     * @param index
     */
    switchChat: function (index) {
      this.dialogueCache.index = index
      let data = this.dialogueCache.array[index].data;
      this.chatTemporary = data.template
      this.context = data.context
      setBing(JSON.stringify(this.dialogueCache))
      this.isMemoryDisplay = false
    },
    writeChat: function () {
      let item = this.chatTemporary;
      this.dialogueCache.array[this.dialogueCache.index].time = Date.now();
      this.dialogueCache.array[this.dialogueCache.index].data = {
        context: this.context,
        template: item
      }
      if (item.length > 0) {
        this.dialogueCache.array[this.dialogueCache.index].title = (item[item.length - 1].question).trim().slice(0, 25)
      }
      setBing(JSON.stringify(this.dialogueCache))
    },
    /**
     * 删除对话
     */
    removeChat: function (index) {
      if (index !== this.dialogueCache.index) {
        let i = parseInt(this.dialogueCache.index);
        if (index < i) {
          this.dialogueCache.index = (i - 1)
        }
        this.dialogueCache.array.splice(index, 1)
      }
      setBing(JSON.stringify(this.dialogueCache))
    },
    /**
     * 关闭连接
     */
    closeSocket: function () {
      uni.closeSocket({
        success: function () {


        },
        fail: function (err) {
          console.log('连接被正常关闭')
        }
      });
    },
    getUser,
    /**
     * 复制BOT内容
     * @param index
     */
    copyBotContext: function (index) {
      let answer = this.chatTemporary[index].answer;
      uni.setClipboardData({
        data: answer,
        success: function () {
          uni.showToast({
            title: '复制成功',
            icon: 'success'
          });
        }
      });
    },
    /**
     * 复制自己内容
     * @param index
     */
    copyPersonContext: function (index) {
      let answer = this.chatTemporary[index].question;
      uni.setClipboardData({
        data: answer,
        success: function () {
          uni.showToast({
            title: '复制成功',
            icon: 'success'
          });
        }
      });
    },
    /**
     * 发送消息
     */
    sendMessage: function () {
      const _this = this
      //对话中不执行
      if (!this.isNextSend) {
        return;
      }

      //获取用户输入文本
      let verifyInput = _this.input;
      if (/^\s*$/.test(verifyInput)) {
        uni.showToast({
          title: '不能发送空白消息',
          icon: 'none',
          duration: 2000
        });
        return;
      }
      // 将字符串中的英文转为大写并去除空格 方便校验
      verifyInput = verifyInput.toUpperCase().replace(/\s/g, '');
      // 检验字符串是否包含关键词
      if (env.filtration.some(keyword => verifyInput.includes(keyword))) {
        uni.showToast({
          title: '请勿发布违法微信社区相关的消息',
          icon: 'none',
          duration: 2000
        });
        return
      }
      _this.isNextSend = false
      const requestInput = this.input
      _this.input = ''
      //构建聊天窗口
      const temp = {
        //问题
        question: requestInput,
        //回答
        answer: "",
        //回答是否完毕
        isSucceed: false,
        //收藏
        starId: undefined
      };
      this.cache = temp
      this.chatTemporary.push(temp)
      //构建成功之后要记录这条答案的坐标 后面根据坐标回填数据
      const index = this.chatTemporary.length - 1
      this.index = index
      //页面往下面划 需要延迟500毫秒
      setTimeout(() => {
        _this.scrollToBottom()
      }, 200)

      uni.connectSocket({
        url: env.baseWs + '/bing/api/' + getToken()
      });
      /**
       * 建立连接成功
       */
      uni.onSocketOpen(function () {
        uni.sendSocketMessage({
          data: JSON.stringify(requestInput)
        });

      });
      /**
       * 建立连接失败 (需要回填错误信息)
       * 这里出现建立连接报错 一般是用户TOKEN 或者 服务器API出现了问题 可以直接清除登录用户信息
       * 重定向至 登录页
       */
      uni.onSocketError(function () {
        removeToken()
        removeUser()
        uni.reLaunch({
          url: '/pages/master/master?swiperIndex=1'
        })
      });
      //回收消息
      uni.onSocketMessage(function (res) {
        _this.chatTemporary[index].answer = res.data
        //每一次输出都往下面靠
        _this.scrollToBottom()
      });
      //关闭消息
      uni.onSocketClose(function () {
        uni.setNavigationBarTitle({title: requestInput});
        //深拷贝防止值转移
        _this.chatTemporary[index].isSucceed = true
        if (_this.chatTemporary[index].answer.trim().length > 0) {
          _this.context.push(temp);
        } else {
          _this.chatTemporary.splice(index, 1)
        }
        _this.writeChat();
        _this.isNextSend = true;
      });

    }
    ,
    /**
     * 滑动到底部
     */
    scrollToBottom: function () {
      uni.createSelectorQuery().select('#scroll-view-content').boundingClientRect((dom) => {
        if (dom.height > 0) this.$set(this, 'scrollTop', dom.height)
      }).exec()
    },
    /**
     * 初始化动画
     */
    loadTitle: function () {
      let botWord = env.botInitialization;
      const _this = this
      const text = botWord[Math.floor(Math.random() * botWord.length)];
      let i = 0;
      let timer = setInterval(function () {
        try {
          if (i <= _this.title.length) {
            _this.title = text.slice(0, i++) + '|'
          } else {
            _this.title = text
            //关闭
            clearInterval(timer)
          }
        } catch (e) {
          clearInterval(timer)
        }
      }, 60);
    },
    /**
     *  收藏
     * @param a
     * @param b
     * @param index
     */
    starDialogue: async function (a, b, index) {
      try {
        let starId = this.chatTemporary[index].starId;
        if (starId) {
          await deleteStarDialogue(starId);
          uni.showToast({
            title: '取消成功',
            icon: 'none',
            duration: 2000
          })
          this.chatTemporary[index].starId = undefined
        } else {
          this.chatTemporary[index].starId = await putStarDialogue({
            issue: a,
            answer: b
          });
          uni.showToast({
            title: '收藏成功',
            icon: 'none',
            duration: 2000
          })

        }
        this.writeChat()

      } catch (e) {
        uni.showToast({
          title: e,
          icon: 'none',
          duration: 2000
        })
      }

    },
    /**
     *  清空对话
     */
    clearDialogue: function () {
      const _this = this
      if (this.isNextSend) {
        uni.showModal({
          title: '提示',
          content: '确定要清空记录嘛?',
          success: function (res) {
            if (res.confirm) {
              _this.chatTemporary = []
              _this.context = []
              _this.input = ""
              _this.isNextSend = true
              _this.writeChat()
            }
          }
        });
      } else {
        uni.showToast({
          title: 'Sorry , 请先等待回复完毕',
          icon: 'none',
          duration: 2000
        });
      }


    }
  },

  components: {
    mpHtml,
  }
}
</script>

<style lang="scss">


.slide-animation {
  animation: slideEase 0.5s ease-in-out forwards;
}

@keyframes slideEase {
  0% {
    transform: translateX(-100px);
  }
  100% {
    transform: translateX(0);
  }
}

page {
  background-color: rgb(16, 16, 16);
}

.avatar {
  width: 80rpx;
  height: 80rpx;
  overflow-x: hidden;
  border-radius: 100%;
}

.avatar-user {
  margin-left: 30rpx
}

.avatar-bot {
  margin-right: 30rpx
}

.avatar image {
  width: 100%;
  height: 100%
}

.levitation_btn_container {
  position: absolute;
  top: -60rpx;
  left: 0rpx;
  display: flex;

  padding: 0 10rpx;
  color: #a7a7a7;
  align-items: center
}

.levitation_btn {
  background-color: #232223;
  padding: 8rpx 20rpx;
  border-radius: 10rpx;
  font-size: 25rpx;
  margin-right: 10rpx
}

.mode_btn {
  background-color: rgb(250, 182, 2);
  padding: 8rpx 20rpx;
  border-radius: 10rpx;
  font-size: 25rpx;
  margin-right: 10rpx;
  color: white;
}

.input_container {
  display: flex;
  justify-content: space-between;
  align-items: flex-end
}

textarea {
  color: #c9c9c9;
  background-color: rgb(35, 34, 35);
  padding: 10rpx 10rpx;
  width: 510rpx;
  border-radius: 10rpx;
  max-height: 500rpx;
  min-height: 75rpx;
  margin-right: 30rpx;

}

scroll-view {
  height: 80vh;

}

.chat-model {
  display: flex;
  align-items: flex-start;

}

.chat-model-user {
  justify-content: flex-end;
}

.chat-model-bot {
  justify-content: flex-start;
}

.send_btn {
  width: 100rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(250, 182, 2);
  height: 75rpx;
  padding: 8rpx;
  border-radius: 10rpx;
}

.send_btn_active {
  width: 100rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(130, 103, 32);
  height: 75rpx;
  padding: 8rpx;
  border-radius: 10rpx;
}

.send_btn_active image {
  width: 40rpx;
  height: 40rpx
}

.send_btn image {
  width: 40rpx;
  height: 40rpx
}

.chat-content {
  min-width: 80rpx;
  max-width: 450rpx;
  border-radius: 20rpx;
  padding: 20rpx;
  font-size: 26rpx
}

.chat-content-user {
  background-color: rgb(78, 179, 101);
}

.chat-content-bot {
  background-color: rgb(44, 44, 44);
  color: #c9c9c9;
  padding-top: 0;
  padding-bottom: 0;

}

.floating {
  padding: 15rpx 40rpx;
  padding-top: 20rpx;
  position: fixed;
  bottom: -50px;
  left: 0;
  background-color: rgb(24, 24, 24);
  width: 748rpx;
  display: flex;
  z-index: 99;
  padding-bottom: 80rpx;
}


.floating-text {
  padding-left: 15rpx;
  font-size: 30rpx;
  color: #ffffff;
}

.chat-container {
  padding: 20rpx;
  animation: fadeIn 0.5s ease-in-out forwards;
}

.dot0,
.dot1,
.dot2,
.dot3 {
  background: rgb(250, 182, 2);
  width: 30rpx;
  height: 30rpx;
  border-color: #464646;
  border-radius: 50%;
}

.dot0 {
  animation: jump 1.3s -0.64s linear infinite;
}

.dot1 {
  animation: jump 1.3s -0.32s linear infinite;
}

.dot2 {
  animation: jump 1.3s -0.16s linear infinite;
}

.dot3 {
  animation: jump 1.3s linear infinite;
}

@keyframes jump {
  0%,
  80%,
  100% {
    transform: scale(0);
    background-color: #F9F9F9;
  }
  40% {
    transform: scale(1.0);
    background-color: rgb(250, 182, 2);
  }
}

.init_container {
  animation: fadeIn 0.5s ease-in-out forwards;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.init_container image {
  width: 150rpx;
  height: 150rpx
}

.bot_logo {
  animation: beating 0.7s infinite alternate;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slot-btn {
  padding-left: 110rpx;
  display: flex;
  margin-top: 10rpx;
  color: #a7a7a7
}

.context-spacing {
  margin-bottom: 80rpx
}

@keyframes beating {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10px);
  }
}

.stop_container {
  position: fixed;
  bottom: 20vh;
  left: 0;
  animation: fadeIn 0.5s ease-in-out forwards;
}

.frames {
  animation: fadeIn 0.5s ease-in-out forwards;
}

.stop_model {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 750rpx
}

.stop_style {
  background-color: #232223;
  color: #c5c5c5;
  padding: 10rpx 40rpx;
  border-radius: 15rpx;
  font-size: 26rpx;
  display: flex;
  align-items: center
}

.stop_style text {
  padding-left: 15rpx
}

.bot_introduce {
  text-align: center;
  height: 200rpx;
  color: white;
  padding: 0 100rpx;
  padding-top: 40rpx;
  line-height: 80rpx;
  font-size: 30rpx;
}

.loading-animation {
  display: flex;
  padding: 30rpx 0
}

.animation-fade {
  animation: fadeIn 0.5s ease-in-out forwards;
}

.placeholder-class {
  font-size: 30rpx;
}

.memory-container {
  background-color: #1a1a1a;
  width: 600rpx
}

.memory-logo {
  display: flex;
  align-items: center;
  justify-content: center
}

.memory-logo image {
  width: 130rpx;
  height: 130rpx;
  margin-top: 80rpx
}

.memory-title {
  text-align: center;
  color: #e5e5e5;
  font-weight: 550;
  font-size: 35rpx;
  padding-top: 40rpx
}

.memory-button-model {
  padding-top: 20rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20rpx
}

.memory-button {
  font-size: 26rpx;
  border-radius: 10rpx;
  background-color: rgb(222, 163, 7);
  color: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20rpx 60rpx
}

.memory-button text {
  padding-left: 20rpx
}

.memory-scroll {
  padding: 20rpx;
}

.memory-scroll scroll-view {
  background-color: #000000;
  height: 550rpx;
  border-radius: 20rpx
}

.memory--row {
  padding: 20rpx
}

.memory-data {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20rpx
}

.memory-left {
  font-size: 26rpx;
  border-bottom: 1rpx whitesmoke solid;
  width: 455rpx;
  padding: 10rpx 0;
}

.memory-right {
  display: flex;
  justify-content: center;
  align-items: center
}

.memory-right image {
  width: 40rpx;
  height: 40rpx
}
</style>
