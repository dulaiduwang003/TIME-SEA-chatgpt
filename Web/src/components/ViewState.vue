<template>
  <div class="ViewState ViewStateCenter">
    <div v-if="Type === 'load'" class="ViewStateLoad">
      <div class="loadAnimation"></div>
      <div class="loadText">{{ LoadText }}</div>
    </div>
    <div v-else-if="Type === 'empty' || Type === 'error'" class="errCen">
      <el-empty
        class="ViewStateCover"
        :description="Type === 'empty' ? EmptyText : ErrorText"
      ></el-empty>
      <div
        v-if="IsShowBottom"
        @click="clickTheButton"
        hover-class="empty-but-hover"
        hover-start-time="0"
        hover-stay-time="0"
        class="ViewStateBottom"
      >
        {{ ButtonText }}
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ViewState",
  props: {
    // TODO 组件类型
    Type: {
      type: String,
      default: "load",
    },
    // TODO 加载文案
    LoadText: {
      type: String,
      default: "加载中...",
    },
    // TODO 数据为空文案
    EmptyText: {
      type: String,
      default: "数据为空",
    },
    // TODO 错误文案
    ErrorText: {
      type: String,
      default: "加载错误",
    },
    // TODO 按钮文字
    ButtonText: {
      type: String,
      default: "重新加载",
    },
    // TODO 错误图片
    ErrorCover: {
      type: String,
      default: "@/assets/error.svg",
    },
    // TODO 为空图片
    EmptyCover: {
      type: String,
      default: "@/assets/empty.svg",
    },
    // TODO 是否显示按钮
    IsShowBottom: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    // TODO 返回给父级点击事件
    function clickTheButton() {
      emit("ClickTheButton");
    }

    return {
      clickTheButton,
    };
  },
});
</script>

<style scoped>
.ViewState {
  background-color: var(--bgColor2);
  user-select: none;
  width: 100%;
  /*height: 500 rpx;*/
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.ViewStateCenter {
  width: 100%;
  height: 100%;
  margin: auto;
}

.ViewStateLoad {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.ViewStateCover {
  width: 200px;
  height: 200px;
}

.ViewStateBottom {
  margin-top: 25px;
  width: 150px;
  height: 35px;
  border-radius: 100px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bgboxShadowColor1);
  color: var(--textColor1);
  cursor: pointer;
}

.loadText {
  margin-top: 50px;
  color: var(--el-text-color-secondary);
  font-size: 15px;
}

.loadAnimation {
  position: relative;
  width: 50px;
}

.loadAnimation:before {
  width: 20px;
  height: 20px;
  border-radius: 20px;
  content: "";
  position: absolute;
  background: #a86dbc;
  animation: loadAnimationBefore 1.5s infinite ease-in-out;
}

.loadAnimation:after {
  width: 20px;
  height: 20px;
  border-radius: 20px;
  content: "";
  position: absolute;
  background: #ae4b5d;
  left: 22px;
  animation: loadAnimationAfter 1.5s infinite ease-in-out;
}

@keyframes loadAnimationBefore {
  0% {
    transform: translateX(0px) rotate(0deg);
  }

  50% {
    transform: translateX(50px) scale(1.2) rotate(260deg);
    background: #6798e6;
    border-radius: 0;
  }

  100% {
    transform: translateX(0px) rotate(0deg);
  }
}

@keyframes loadAnimationAfter {
  0% {
    transform: translateX(0px);
  }

  50% {
    transform: translateX(-50px) scale(1.2) rotate(-260deg);
    background: #6969c1;
    border-radius: 0;
  }

  100% {
    transform: translateX(0px);
  }
}

.errCen {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
