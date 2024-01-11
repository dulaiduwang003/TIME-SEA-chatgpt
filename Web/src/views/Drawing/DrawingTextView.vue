<template>
  <div class="body">
    <div class="container">
      <div class="flex-container" v-if="isNet">
        <div class="box">
          <div style="height: 100%">
            <div style="height: 90%; overflow-y: auto">
              <div class="header">
                <div class="title">
                  <span>正向提示词</span>
                  <el-popover
                      placement="bottom"
                      effect="dark"
                      title="提示词"
                      :width="300"
                      trigger="hover"
                      content="用于指定生成图像的文本提示，可以是一个或多个句子 示例: 风景,雨天,树林 "
                  >
                    <template #reference>
                      <el-icon>
                        <info-filled/>
                      </el-icon>
                    </template>
                  </el-popover>
                </div>
              </div>
              <div class="input">
                <el-input
                    placeholder="描述你要画的图(英文更加准确)"
                    type="textarea"
                    rows="5"
                    v-model="form.prompt"
                ></el-input>
              </div>
              <div class="header">
                <div class="title">
                  <span>反向提示词(可选)</span>
                  <el-popover
                      placement="bottom"
                      effect="dark"
                      title="过滤"
                      :width="300"
                      trigger="hover"
                      content="用于指定生成图像时的负面文本提示，可以用于约束生成图像的内容。简单来说就是 你不想本次绘图中出现的内容 例如: 雪,动物 "
                  >
                    <template #reference>
                      <el-icon>
                        <info-filled/>
                      </el-icon>
                    </template>
                  </el-popover>
                </div>
              </div>
              <div class="input">
                <el-input
                    placeholder="过滤本次绘图出现的事物(英文更加准确)"
                    type="textarea"
                    rows="5"
                    v-model="form.negative_prompt"
                ></el-input>
              </div>
              <div class="header">
                <div class="title">
                  <span>绘画风格</span>
                  <el-popover
                      placement="bottom"
                      effect="dark"
                      title="输出模型"
                      :width="300"
                      trigger="hover"
                      content="用于控制生成图像的数据模型，可以影响图像的内容和样式"
                  >
                    <template #reference>
                      <el-icon>
                        <info-filled/>
                      </el-icon>
                    </template>
                  </el-popover>
                </div>
              </div>
              <div style="padding: 15px">
                <el-select
                    v-model="form.modelName"
                    class="m-2"
                    placeholder="请选择绘画风格"
                    size="large"
                    style="width: 100%"
                >
                  <el-option
                      v-for="item in modelList"
                      :key="item.modelName"
                      :label="item.textName"
                      :value="item.modelName"
                  />
                </el-select>
              </div>
              <div class="header">
                <div class="title">
                  <span>参考图(可选)</span>
                  <el-popover
                      placement="bottom"
                      effect="dark"
                      title="参考图"
                      :width="300"
                      trigger="hover"
                      content="生成于参考图相似的图片内容"
                  >
                    <template #reference>
                      <el-icon>
                        <info-filled/>
                      </el-icon>
                    </template>
                  </el-popover>
                </div>
              </div>
              <div style="padding: 15px">
                <el-upload
                    style="
                    background-color: var(--bgColor2);
                    width: 100px;
                    height: 100px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  "
                    :auto-upload="false"
                    :on-change="onChange"
                    :show-file-list="false"
                >
                  <img v-if="tempFile" :src="tempFile" style="width: 100px;height: 100px"/>
                  <el-icon v-else class="avatar-uploader-icon">
                    <Plus
                    />
                  </el-icon>
                </el-upload>
              </div>
              <div class="header">
                <div class="title">
                  <span>迭代步数</span>
                  <el-popover
                      placement="bottom"
                      effect="dark"
                      title="绘制次数"
                      :width="300"
                      trigger="hover"
                      content="生成图像时的最大步骤数，步骤数越多，生成的图像可能会更加详细，但处理时间也会增加。"
                  >
                    <template #reference>
                      <el-icon>
                        <info-filled/>
                      </el-icon>
                    </template>
                  </el-popover>
                </div>
              </div>
              <div style="padding: 15px">
                <el-select
                    v-model="form.steps"
                    class="m-2"
                    placeholder="Select"
                    size="large"
                    style="width: 100%"
                >
                  <el-option
                      v-for="item in stepsList"
                      :key="item"
                      :label="item"
                      :value="item"
                  />
                </el-select>
              </div>
              <div class="header">
                <div class="title">
                  <span>采样方法</span>
                  <el-popover
                      placement="bottom"
                      effect="dark"
                      title="采样器"
                      :width="300"
                      trigger="hover"
                      content="用于控制生成图像的采样器索引，可以影响图像的内容和样式。"
                  >
                    <template #reference>
                      <el-icon>
                        <info-filled/>
                      </el-icon>
                    </template>
                  </el-popover>
                </div>
              </div>
              <div style="padding: 15px">
                <el-select
                    v-model="form.sampler_index"
                    class="m-2"
                    placeholder="Select"
                    size="large"
                    style="width: 100%"
                >
                  <el-option
                      v-for="item in samplerList"
                      :key="item"
                      :label="item"
                      :value="item"
                  />
                </el-select>
              </div>
              <div class="header">
                <div class="title">
                  <span>尺寸比例</span>
                  <el-popover
                      placement="bottom"
                      effect="dark"
                      title="图片比例"
                      :width="300"
                      trigger="hover"
                      content="生成绘图的宽度和高度比例"
                  >
                    <template #reference>
                      <el-icon>
                        <info-filled/>
                      </el-icon>
                    </template>
                  </el-popover>
                </div>
              </div>
              <div class="size-container">
                <div :class="item.isSelected?'size-model-selected':'size-model'" v-for="(item,index) in sizeList"
                     :key="index" @click="onChangeSize(index)">
                  <div>
                    <div class="size-logo">
                      <img :src="require('../../assets/'+item.image)" alt=""/>
                    </div>
                    <div class="size-proportion">
                      {{ item.proportion }}
                    </div>
                    <div class="size-text">{{ item.text }}</div>
                  </div>
                </div>

              </div>
            </div>
            <div
                style="
                border-top: 1px solid var(--textColor5);
                display: flex;
                align-items: center;
                justify-content: space-between;
                height: 10%;
                padding: 0 10px;
                font-weight: 500;
              "
            >
              <div style="font-size: 9px">
                每次绘图消耗10个SUPER币
              </div>
              <div>
                <el-button round color="var(--themeColor2)" @click="onSubmit" :loading="load===1">
                  立即生成
                </el-button>
              </div>
            </div>
          </div>
        </div>
        <div class="content">
          <div v-if="load===0">
            <div style="text-align: center;padding-bottom: 40px">创作欣赏</div>
            <div style="max-width: 480px">
              <el-row :gutter="4">
                <el-col v-for="(item,index) in imageList" :key="index" :md="8">
                  <el-image class="public-image" :src="imageUrl+item" fit="cover" :preview-src-list="[imageUrl+item]"/>
                </el-col>
              </el-row>
            </div>
            <div style="text-align: center;font-size: 13px;margin-top: 20px;font-weight: 500;color: #888888">
              快来生成属于自己的创作吧~
            </div>
          </div>
          <ViewState v-if="load===1" LoadText="正在生成(你可以进行其他操作,请勿刷新浏览器)..."/>
          <el-image v-if="load===2" :src="imageUrl+image"
                    style="width:500px;height: 350px" fit="cover" :preview-src-list="[imageUrl+image]"/>
          <ViewState
              v-if="load===3"
              @ClickTheButton="back"
              Type="error"
              ErrorText="哦豁!绘制失败了 请稍后再试"
              IsShowBottom
              ButtonText="好的"
          />
        </div>
      </div>
      <ViewState
          v-else
          @ClickTheButton="sdConnect"
          Type="error"
          ErrorText="绘图服务貌似未开启"
          IsShowBottom
          ButtonText="重新检查"
      />
    </div>
  </div>
  <LoginDialog :show="loginVisible" @close="loginVisible = false"/>
</template>

<script>
import {onMounted, ref} from "vue";

import LoginDialog from "@/components/LoginDialog.vue";
import {InfoFilled, Plus} from "@element-plus/icons-vue";
import {
  DrawingSdTask,
  GetDrawingDataResult,
  GetDrawingResult,
  GetPublicRandomOps,
  GetSdModelList,
  SdConnectivity
} from "../../../api/BSideApi";
import store from "@/store";
import {ElLoading, ElNotification} from "element-plus";
import ViewState from "@/components/ViewState.vue";
import router from "@/router";

export default {
  name: "DrawingTextView",
  computed: {
    store() {
      return store
    }
  },
  components: {ViewState, Plus, InfoFilled, LoginDialog},
  setup() {
    const isNet = ref(false)

    const tempFile = ref('')

    const modelList = ref([]);

    const imageUrl = ref('')

    const imageList = ref([])

    const stepsList = ref([20, 40, 60, 80, 100])

    const samplerList = ref([
      "Euler a", "Euler", "LMS", "Heun", "DPM2", "DPM2 a", "DPM++ 2S a", "DPM++ 2M", "DPM++ SDE",
      "DPM fast", "DPM adaptive", "LMS Karras", "DPM2 Karras", "DPM2 a Karras", "DPM++ 2S a Karras",
      "DPM++ 2M Karras", "DPM++ SDE Karras", "DDIM"
    ])

    const load = ref(0)

    const sizeList = ref([
      {
        proportion: '1:1',
        text: '头像',
        image: 'size-1-1.f9b344b9.svg',
        isSelected: true,
        width: 512,
        height: 512
      },
      {
        proportion: '1:2',
        text: '手机壁纸',
        image: 'size-1-2.62c2da58.svg',
        isSelected: false,
        width: 1080,
        height: 2160
      },
      {
        proportion: '3:4',
        text: '文案图',
        image: 'size-3-4.ba364264.svg',
        isSelected: false,
        width: 384,
        height: 512
      },
      {
        proportion: '4:3',
        text: '小红书',
        image: 'size-4-3.a0ec2a1c.svg',
        isSelected: false,
        width: 512,
        height: 384
      },
      {
        proportion: '9:16',
        text: '海报',
        image: 'size-9-16.498b0472.svg',
        isSelected: false,
        width: 768,
        height: 1365
      },
      {
        proportion: '16:9',
        text: '电脑壁纸',
        image: 'size-4-3.a0ec2a1c.svg',
        isSelected: false,
        width: 1980,
        height: 1080
      }
    ])

    onMounted(() => {
      imageUrl.value = process.env.VUE_APP_IMAGE;
      if (store.getters.userinfo) {
        sdConnect()
        getPublicOps()
        getSdModelList()
      } else {
        loginVisible.value = true
      }
    })

    async function sdConnect() {
      try {
        ElLoading.service({
          fullscreen: true,
          text: "正在检查SD绘图服务器是否开启...",
          spinner: "el-icon-loading",
          background: "rgba(0, 0, 0, 0.7)",
        });

        let promise = await SdConnectivity();
        if (!promise) {
          ElNotification({
            title: "错误",
            message: "绘图服务器暂未开启,请联系站点管理员开启绘图服务",
            type: "error",
          });
          isNet.value = false
        } else {
          isNet.value = true
        }
        ElLoading.service().close();

      } catch (e) {
        ElLoading.service().close();
        ElNotification({
          title: "错误",
          message: e,
          type: "error",
        });
        router.go(-1)
      }
    }

    function onChange(e) {
      console.log(e.raw.type)
      if (e.raw.type === 'image/jpg' || e.raw.type === 'image/png' || e.raw.type === 'image/jpeg') {
        if (e.raw.size / 1024 / 1024 > 2) {
          ElNotification({
            title: "错误",
            message: '图片大小不得超过2MB',
            type: "error",
          });
          return false
        }
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (event) => {
            tempFile.value = event.target.result
            form.value.images = e.raw
            console.log(e)
            resolve(e);
          };
          reader.onerror = (error) => {
            reject(error);
          };
          reader.readAsDataURL(e.raw);
        });
      } else {
        ElNotification({
          title: "错误",
          message: '请上传正确的图片',
          type: "error",
        });
        return false
      }
    }

    async function getPublicOps() {
      try {
        imageList.value = await GetPublicRandomOps()
      } catch (e) {
        console.log(e)
      }
    }

    async function getSdModelList() {
      try {
        let newVar = await GetSdModelList();
        if (newVar.length > 0) {
          modelList.value = newVar
          form.value.modelName = modelList.value[0].modelName
        }

      } catch (e) {
        console.log(e)
      }
    }

    const image = ref('')

    const form = ref({
      modelName: "",
      images: "",
      steps: 20,
      sampler_index: "Euler a",
      width: 512,
      height: 512,
      prompt: '',
      negative_prompt: '',
    });
    let loginVisible = ref(false);

    function onChangeSize(index) {
      sizeList.value.forEach((s, i) => {
        s.isSelected = i === index;
        if (i === index) {
          form.value.height = s.height;
          form.value.width = s.width;
        }
      });
    }

    async function onSubmit() {
      if (load.value === 1) {
        return
      }
      let value = form.value;
      if (!value.prompt) {
        ElNotification({
          title: "错误",
          message: '请设置绘画提示词',
          type: "error",
        });
        return
      }
      const formData = new FormData();
      // 添加自定义参数到 FormData
      for (const key in form.value) {
        if (form.value[key]) {
          formData.append(key, form.value[key]);
          console.log(key)
        }
      }
      formData.append('env', 0)
      load.value = 1
      try {
        let promise = await DrawingSdTask(formData);
        startTimer(promise.drawingId)
      } catch (e) {
        load.value = 0
        ElNotification({
          title: "错误",
          message: e,
          type: "error",
        });

      }
    }

    const timerId = ref(null);

    // 创建定时器
    const startTimer = (id) => {
      timerId.value = setInterval(async () => {
        try {
          let promise = await GetDrawingResult(id);
          if (promise) {
            clearInterval(timerId.value);
            timerId.value = null;
            let newVar = await GetDrawingDataResult(id);
            // eslint-disable-next-line no-prototype-builtins
            if (newVar.hasOwnProperty('drawingImage')){
              image.value = newVar.drawingImage.generateImage
            }else {
              image.value = newVar.drawingText.generateImage
            }

            load.value = 2
            ElNotification({
              title: "提示",
              message: "图片绘制成功 请前往绘图查看",
              type: "success",
            });
          }
        } catch (e) {
          console.log(e)
          load.value = 3
          clearInterval(timerId.value);
          timerId.value = null;
        }
      }, 3000);
    };

    function back() {
      load.value = 0
    }

    return {
      sdConnect,
      isNet,
      image,
      back,
      load,
      onSubmit,
      onChange,
      tempFile,
      onChangeSize,
      imageUrl,
      modelList,
      loginVisible,
      form,
      imageList,
      stepsList,
      samplerList,
      sizeList
    };
  },
};
</script>

<style lang="scss" scoped>
:deep(.el-textarea) {
  .el-textarea__inner {
    background: var(--bgColor2);
    box-shadow: none;
    max-height: 400px;
    padding: 10px;
    font-size: 10px;
    color: var(--textColor2);

    &:hover {
      box-shadow: none;
      background: var(--bgColor2);
    }
  }

  ::placeholder {
    color: var(--textColor4); /* 将颜色值修改为您想要的占位符文字颜色 */
  }

  /* 兼容性处理 */
  :-ms-input-placeholder {
    color: var(--textColor4); /* 将颜色值修改为您想要的占位符文字颜色 */
  }
}

.body {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  flex-direction: column;
  flex: 1;
  align-items: center;

  display: flex;
  overflow: hidden;
  background-color: var(--bgColor2);
}

@keyframes explainAnimation {
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
}

.container {
  animation: explainAnimation 0.3s;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.list:first-child {
  margin-top: 60px;
}

.list {
  margin-bottom: 40px;
}

.title {
  font-size: 14px;
  font-weight: 550;
}

.content {
  width: 100%;
  margin-top: 10px;
}

.item {
  width: 80%;
  height: 160px;
  background-color: var(--bgColor1);
  margin-bottom: 15px;
  border-radius: 8px;
  font-size: 15px;
  color: var(--bgColor2);
  padding: 20px;
  box-shadow: 0 5px 7px rgba(35, 35, 35, 0.06);
}

.item:hover {
  background-color: var(--bgColor1);
  cursor: pointer;
  transition: background-color 0.2s;
}

@media only screen and (max-width: 767px) {
  .container {
    padding: 0;
  }

  .list:first-child {
    margin-top: 30px;
  }

  .list {
    padding-left: 20px;
    padding-right: 20px;
  }

  .content {
    padding-left: 20px;
    padding-right: 20px;
    box-sizing: border-box;
  }
}

:deep(.el-input__inner) {
  background: var(--bgColor2);
  font-weight: 400;
  color: var(--textColor2);
}

:deep(.el-input__wrapper) {
  background: var(--bgColor2);
  box-shadow: none;
}

:deep(.el-input-group__append, .el-input-group__prepend) {
  border: none !important;
}

.flex-container {
  display: flex;
  justify-content: space-between;
  height: 100%;
}

.box {
  border: 1px solid var(--textColor5);
  height: 97%;
  width: 25%;
  max-width: 350px;
  background-color: var(--bgColor1);
  margin: 10px;
  border-radius: 10px;
  color: var(--textColor1);
  font-size: 14px;
  font-weight: 550;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  display: flex;
  align-items: center;
  padding: 15px 15px 0;
}

.title span {
  padding-right: 5px;
}

.button {
  padding: 15px 15px 0;
}

.input {
  padding: 15px;
}

.content {
  height: 100%;
  width: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 550;
  font-size: 18px;
}

.public-image {
  width: 150px;
  height: 190px;
  margin-bottom: 5px;
  border-radius: 8px
}

div::-webkit-scrollbar {
  display: none;
}

.size-container {
  padding: 10px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.size-model {
  border-radius: 5px;
  margin: 5px auto;
  width: 98px;
  height: 90px;
  background-color: var(--dColor1);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--dColor1);
}

.size-model-selected {
  border-radius: 5px;
  margin: 5px auto;
  width: 98px;
  height: 90px;
  background-color: var(--dColor2);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(129, 102, 231);
}


.size-logo {
  padding-bottom: 5px
}

.size-logo img {
  width: 23px;
  height: 23px
}

.size-proportion {
  padding-bottom: 2px
}

.size-text {
  font-size: 9px;
  font-weight: 500;
  color: #636363
}
</style>
