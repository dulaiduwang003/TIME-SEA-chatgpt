<template>
  <div>
    <img
      src="../assets/ball.svg"
      class="floating-ball"
      ref="ball"
      @mousedown="handleMouseDown"
      @click="dialogVisible = true"
    />
    <el-dialog
      v-model="dialogVisible"
      class="el-dialog"
      style="background-color: var(--bgColor1)"
      align-center="true"
      width="800px"
    >
      <div class="logo">
        <img src="../assets/logoHead.svg" />
      </div>
      <div class="title">常见问题</div>
      <el-scrollbar height="380px" class="el-scrollbar">
        <div class="row" v-for="(item, index) in data" :key="index">
          <div class="line">
            <div style="width: 30px">Q:</div>
            <div style="width: 620px">
              {{ item.q }}
            </div>
          </div>
          <div class="line">
            <div style="width: 30px">A:</div>
            <div style="width: 620px">
              {{ item.a }}
            </div>
          </div>
        </div>
      </el-scrollbar>
    </el-dialog>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "LeftNavigationBar",
  methods: {},
  setup() {
    const data = ref([
      {
        q: "如何获取Ai币",
        a: "可以通过微信小程序观看广告获取一定次数(无限制获取)或通过网页端打赏也可获得相应Ai币,还可以通过兑换码来兑换Ai币(点击头像进入兑换中心即可)",
      },
      {
        q: "有哪些功能?每个功能消耗多少次Ai币?",
        a: "智能对话(GPT-3) 每一次调用消耗1个Ai币 增强对话(GPT-4)每一次调用消耗 20个币,绘图类功能通用消耗5个币/次,当然也不乏免费功能 如超级实验室中的功能 包括其中的 智能对话 微软必应 克劳德 模型等 ,不过亦有缺陷 不是很稳定 偶尔可能回复失败 多尝试几次即可(NERVE支持GPT-3和GPT-4)",
      },
      {
        q: "绘图功能在哪里?",
        a: "绘图功能存在于小程序端,也仅仅是小程序才可以绘制图片",
      },
      {
        q: "小程序数据和网页数据同步的吗?",
        a: "是的,数据是同步的 不过两者仅仅的交互为 Ai币互通 个人头像以及用户信息 对话收藏功能串联(小程序支持进入场景),在v1.3.0后 如何是邮箱注册的账号需要前往小程序(编排)中手动绑定邮箱即可实现数据同步",
      },
      {
        q: "小程序功能和网页端功能一样吗?",
        a: "网页端有的 小程序都有,但小程序有的 网页端不一定有,比如 绘图类功能",
      },
      {
        q: "我想提一些新功能或者我也想部署这个项目可以吗?",
        a: "当然可以!可以去GitHub (https://github.com/dulaiduwang003/TIME-SEA-chatgpt) 提Issues 或者 联系作者微信(本站为开源项目演示站点) SeatimeIsland,另外可以动手点个小星星哦 ,ps 个人B站: 反方向的钟_9",
      },
      {
        q: "项目是什么开发的?部署难不难",
        a: "项目主要分为3个部分,Java(后端) UniApp(微信小程序) Vue(网页端) 实现, 中间件为 MySQL Redis,总体来说 很简单... 不懂群里可以问,另外v1.3.0可能会做Docker快速部署",
      },
    ]);

    const ball = ref(null);
    // 在 setup() 中定义以下响应式数据
    const isDragging = ref(false);
    const position = ref({ x: 0, y: 0 });

    const dialogVisible = ref(false);

    // 鼠标按下事件处理
    const handleMouseDown = (e) => {
      isDragging.value = true;
      position.value = {
        x: e.clientX - ball.value.offsetLeft,
        y: e.clientY - ball.value.offsetTop,
      };
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    };

    onMounted(() => {
      setInitialPosition();
    });

    // 鼠标移动事件处理
    const handleMouseMove = (e) => {
      if (!isDragging.value) return;
      const newPositionX = e.clientX - position.value.x;
      const newPositionY = e.clientY - position.value.y;
      ball.value.style.left = `${newPositionX}px`;
      ball.value.style.top = `${newPositionY}px`;
    };

    function setInitialPosition() {
      const ballWidth = ball.value.offsetWidth + 40;
      const ballHeight = ball.value.offsetHeight + 100;

      // 设置初始位置
      const initialPositionX = window.innerWidth - ballWidth;
      const initialPositionY = window.innerHeight - ballHeight;

      ball.value.style.left = `${initialPositionX}px`;
      ball.value.style.top = `${initialPositionY}px`;
    }

    // 鼠标松开事件处理
    const handleMouseUp = () => {
      isDragging.value = false;
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      handleAdsorb();
    };

    function handleAdsorb() {
      const windowWidth = window.innerWidth;
      const ballWidth = ball.value.offsetWidth;
      const ballLeft = ball.value.offsetLeft;
      const edgeThreshold = 30; // 边缘触发阈值

      // 不满足吸附条件则直接返回
      if (
        (ballLeft >= edgeThreshold &&
          ballLeft <= windowWidth / 2 - edgeThreshold) ||
        (ballLeft < windowWidth - ballWidth - edgeThreshold &&
          ballLeft > windowWidth / 2 + edgeThreshold)
      ) {
        return;
      }

      const shouldStickToLeft = ballLeft < windowWidth / 2;
      const newPositionX = shouldStickToLeft
        ? -ballWidth / 2
        : windowWidth - ballWidth / 2;

      // 动画过渡，替换250为需要的过渡时间
      ball.value.animate(
        [{ left: `${ballLeft}px` }, { left: `${newPositionX}px` }],
        250
      );
    }

    return {
      data,
      ball,
      handleMouseDown,
      dialogVisible,
    };
  },
});
</script>

<style scoped>
.floating-ball {
  position: fixed;
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  cursor: copy;
  z-index: 999;
}

.el-dialog {
  height: 600px;
  border-radius: 10px;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo img {
  width: 50px;
  height: 50px;
}

.title {
  text-align: center;
  font-size: 15px;
  padding-top: 20px;
  color: #d0d0d0;
  font-weight: 550;
  padding-bottom: 40px;
}

.row {
  padding: 20px;
  margin: 10px 30px;
  background-color: black;
  border-radius: 5px;
}

.line {
  margin-top: 8px;
  display: flex;

  align-items: flex-start;
}
</style>
