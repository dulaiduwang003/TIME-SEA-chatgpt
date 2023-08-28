<template>
  <view class="chat-container">
    <view class="init_container" v-if="chatTemporary.length<=0">
      <view>
        <view class="bot_logo">
          {{ data.icon }}
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
                      :src="userInfo.avatar?conversionImage(userInfo.avatar) : '/static/images/individual/defaultAvatar.jpg'"/>
                </view>
              </view>
            </view>
            <view class="context-spacing">
              <!--机器人-->
              <view class="chat-model-bot chat-model slide-animation">
                <view class="avatar-bot avatar">
                  {{ data.icon }}
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
      <view class="levitation_btn_container" v-show="isNextSend">
        <view class="levitation_btn" @click="clearDialogue">
          <van-icon name="clock-o"/>
          ️ 清空屏幕
        </view>
        <view :class="mode?'mode_btn':'levitation_btn'" @click="mode =!mode">
          <van-icon name="exchange"/>
          ️ {{ mode ? 'MODE-4' : 'MODE-3' }}
        </view>
      </view>
      <view class="input_container">
        <!--输入框-->
        <textarea id="textarea" :show-confirm-bar="false" :auto-height="true" maxlength="-1" confirm-type="done"
                  placeholder-class="placeholder-class"
                  @confirm="sendMessage($event)" v-model="input" :disabled="!isNextSend"
                  :placeholder="isNextSend?'有什么问题尽管问我...':'思考中...'"/>
        <!-- 提交按钮-->
        <view :class="isNextSend?'send_btn':'send_btn_active'" @click="sendMessage($event)">
          <image src="/static/assets/send.svg"/>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import md from "@/static/css/md";
import mpHtml from "@/wxcomponents/mp-html/mp-html.vue";
import env from "@/utils/env";
import {getChat, getToken, getUser, removeChat, removeToken, removeUser} from "@/utils/utils";
import {conversionImage} from "@/utils/image";
import {deleteStarDialogue, putStarDialogue} from "@/api/user";


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
  },
  onUnload() {
    uni.$emit('master_userInfo')
    this.closeSocket()
    //移除对话链
    removeChat()
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
    this.data = getChat()
    _this.loadTitle(this.data.botInitialization);
    _this.context.push(...this.data.content)
  },

  data() {
    return {
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
      data: {}
    };
  },
  methods: {
    conversionImage,
    /**
     * 关闭连接
     */
    closeSocket: function () {
      uni.closeSocket({
        success: function () {
          // 关闭连接成功
          console.log('用户主动关闭连接')
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
      this.chatTemporary.push(temp)
      //构建成功之后要记录这条答案的坐标 后面根据坐标回填数据
      const index = this.chatTemporary.length - 1
      //页面往下面划 需要延迟500毫秒
      setTimeout(() => {
        _this.scrollToBottom()
      }, 200)
      /**
       * 与服务器建立连接
       */
      const model = this.mode ? 'gpt-4-0314' : 'gpt-3.5-turbo'
      uni.connectSocket({
        url: env.baseWs + '/gpt/api/' + getToken() + '/' + model
      });
      /**
       * 建立连接成功
       */
      uni.onSocketOpen(function () {
        //建立连接成功
        if (_this.context.length > env.memory) {
          _this.context.splice(1, 1);
        }
        _this.context.forEach(item => {
          if (item.question.length > env.contextLength) {
            item.question = item.question.substring(0, env.contextLength) + "//省略...";
          }
          if (item.answer.length > env.contextLength) {
            item.answer = item.answer.substring(0, env.contextLength) + "//省略...";
          }
        });
        uni.sendSocketMessage({
          data: JSON.stringify({
            "prompt": requestInput,
            "context": _this.context
          })
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
        _this.chatTemporary[index].answer += res.data
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
    loadTitle: function (bot) {
      const _this = this
      let i = 0;
      let timer = setInterval(function () {
        try {
          if (i <= _this.title.length) {
            _this.title = bot.slice(0, i++) + '|'
          } else {
            _this.title = bot
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
  font-size: 60rpx;
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
  width: 400rpx;
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
  background-color: #7f80fd;
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
  background-color: #7f80fd;
  height: 75rpx;
  padding: 8rpx;
  border-radius: 10rpx;
}

.send_btn_active {
  width: 100rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2b2b58;
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
  background: #7f80fd;
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
    background-color: #5b5cd7;
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
  font-size: 120rpx;
}

.slot-btn {
  padding-left: 110rpx;
  display: flex;
  margin-top: 10rpx;
  color: #a7a7a7
}

.stop_container {
  position: fixed;
  bottom: 20vh;
  left: 0;
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

</style>
