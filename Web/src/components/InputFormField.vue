<template>
  <div style="width: 100%">
    <!-- 
    放到一起好改样式


    父组件使用代码
    <InputFormField
      ref="inputRef"
      :aiLoading="aiLoading"
      :inputText="input"
      @update:inputText="input = $event"
      @update:model="model = $event"
      @onSubmit="onSubmit"
    />

    1、重置文字   父组件代码
        inputRef.value.resetInputValue();
    2、输入框聚焦   父组件代码
        inputRef.value.$refs.inputRefInner.focus();

   -->
    <div class="InputFormFieldWapper">
      <el-select
        v-model="modelInner"
        v-if="needSelect"
        class="selectWrapper"
        placeholder="Ai模型"
        @change="updateModel"
        style="width: 105px; text-indent: 10px"
      >
        <el-option value="BASIC" label="标准" />
        <el-option value="ADVANCED" label="智能" />
      </el-select>
      <el-input
      :style="{marginLeft: needSelect?'0px':'10px' }"
        @keydown="handleKeyDown"
        v-model="inputTextInner"
        autosize
        @input="updateInputText"
        ref="inputRefInner"
        type="textarea"
        :placeholder="aiLoading ? '思考中..' : '输入你想问的...'"
        :disabled="aiLoading"
      >
      </el-input>
      <div class="animation-dot" v-if="aiLoading">
        <div class="dot0"></div>
        <div class="dot1"></div>
        <div class="dot2"></div>
        <div class="dot3"></div>
        <div class="dot4"></div>
      </div>
      <div @click="onSubmit" class="sendIcon" v-else>
        <el-icon :size="20">
          <Promotion />
        </el-icon>
      </div>
    </div>
  </div>
</template>

<script>
import { Promotion } from "@element-plus/icons-vue";
import { ref, defineComponent, watch } from "vue";

export default defineComponent({
  name: "InputFormField",
  components: {
    Promotion,
  },
  props: {
    needSelect: {
      type: Boolean,
      default: true,
    },
    // 选择的模型
    model: {
      type: String,
      default: null,
    },
    // 选择的模型
    inputText: {
      type: String,
      default: null,
    },
    // 加载状态
    aiLoading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    // 通过ref监听组件值
    let inputTextInner = ref(null);
    let modelInner = ref("BASIC");
    const inputRefInner = ref(null);

    //监听父的model 双向绑定需要
    watch(
      () => props.model,
      (newVal) => {
        modelInner = newVal;
      }
    );

    // 使用watch监听content变量的变化
    watch(inputTextInner, (newVal, oldValue) => {
      // console.log("watch输入内容改变了", newVal);
      emit("update:inputText", newVal);
    });

    // 重置值
    function resetInputValue() {
      if (inputRefInner.value) {
        inputRefInner.value.clear();
      }
    }

    //提交内容的快捷键监听
    function handleKeyDown(e) {
      // 判断是否按下了 alt 键和 enter 键
      if (e.ctrlKey && e.keyCode === 13) {
        // 执行你的操作
        // console.log("Alt + Enter 被按下");

        emit("onSubmit");
      }
    }

    //提交内容的快捷键监听
    function onSubmit() {
      // console.log("点击了提交onSubmit()");
      emit("onSubmit");
    }

    // 更新父model  选择智能还是标准
    function updateModel(value) {
      // console.log("更新父组件的model", value);
      modelInner = value;
      emit("update:model", value);
    }

    // 更新输入文本，
    function updateInputText(value) {
      // console.log("更新值", value);
      inputTextInner.value = value;
    }

    return {
      updateInputText,
      onSubmit,
      handleKeyDown,
      updateModel,
      resetInputValue,
      inputTextInner,
      modelInner,
      inputRefInner,
    };
  },
});
</script>

<style lang="scss" scoped>
.InputFormFieldWapper {
  display: flex;
  width: 100%;
  align-items: center;

  .sendIcon {
    flex-shrink: 0;
    margin: 0 12px 0px 12px;
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
}

:deep(.selectWrapper) {
  .el-input,
  .el-input {
    .el-input__wrapper {
      box-shadow: none !important;
      background: none !important;

      &:hover {
        box-shadow: none;
        background: none !important;
      }
    }
  }

  &.el-select--disabled {
    background: white;
    .el-input__wrapper {
      background: #fff;
    }
  }
}

:deep(.InputFormFieldWapper) {
  .el-textarea__inner {
    background: #272c2f;
    box-shadow: none;
    max-height: 400px;
    padding: 20px;
    margin: 10px 0px;
    width: 100%;

    color: #eee;
    &:hover {
      box-shadow: none;
      background: #272c2f;
    }

    &.el-select--disabled {
      background: white;
    }
  }
}

.animation-dot {
  display: flex;
  padding-right: 10px;
  margin: 0 12px;
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

.dot_0,
.dot_1,
.dot_2,
.dot_3 {
  background: rgb(166, 129, 236);
  width: 15px;
  height: 15px;
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



</style>
