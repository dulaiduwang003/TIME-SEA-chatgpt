<template>
  <view class="container">
    <view class="problem">
      {{ issue }}
    </view>
    <view class="answer">
      <view class="label">
        回答
      </view>
      <scroll-view scroll-y class="scroll-view">
        <mp-html :copy-link="true" :tagStyle="md" :container-style="md" :markdown="true"
                 :lazy-load="true"
                 :selectable="true" :content="answer"/>
      </scroll-view>
    </view>
    <view class="btn">
      <van-button type="primary" block color="#7f80fd" @click="toGptDialogue">进入对话场景</van-button>
    </view>
    <loading-component ref="loadingRef" msg="正在获取收藏结果" :degree="0.8"/>
  </view>
</template>

<script>
import md from "@/static/css/md";
import {getUserStarDetail} from "@/api/user";
import mpHtml from "@/wxcomponents/mp-html/mp-html.vue";
import {setChat} from "@/utils/utils";
import LoadingComponent from "@/wxcomponents/components/loadingComponent.vue";

export default {
  computed: {
    md() {
      return md
    }
  },
  components: {
    LoadingComponent,
    mpHtml,
  },
  data() {
    return {
      issue: '',
      answer: '',
      starId: undefined
    };
  },
  onLoad(option) {
    let loadingRef = this.$refs.loadingRef;
    loadingRef.openShow();
    this.starId = option.starId
    this.getUserStarDetail();
    setTimeout(() => {
      loadingRef.closeShow()
    }, 500)
  },
  methods: {
    toGptDialogue: function () {
      setChat({
        //问题
        question: this.issue,
        //回答
        answer: this.answer,
        //回答是否完毕
        isSucceed: true,
        //收藏
        starId: this.starId
      })
      uni.navigateTo({
        url: '/pages/dialogue/gptDialogueView?continue=true'
      })
    },
    /**
     * 获取详情
     * @returns {Promise<void>}
     */
    getUserStarDetail: async function () {
      try {
        let newVar = await getUserStarDetail(this.starId);
        if (newVar) {
          const {issue, answer, starId} = newVar
          this.issue = issue
          this.answer = answer
        }
      } catch (e) {
        uni.showToast({
          title: e,
          icon: 'none',
          duration: 2000
        })
      }
    }
  }
}
</script>

<style lang="scss">
.problem {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  font-size: 40rpx;
  font-weight: 550;
  margin-bottom: 100rpx
}

.answer {
  border-radius: 20rpx;
  padding: 20rpx;
  background-color: #161616
}

.label {
  font-size: 27rpx;
  color: #949494;
  padding-bottom: 30rpx
}

scroll-view {
  height: 66vh;

}

.container {
  padding: 20rpx;
  color: #ffffff
}

.btn {
  margin-top: 3vh
}

</style>
