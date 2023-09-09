<template>
  <div class="body">
    <div class="container">
      <div class="flex-container">
        <div class="box">
          <div style="height: 100%">
            <div style="height: 90%; overflow-y: auto">
              <div class="header">
                <div class="title">
                  <span>正向提示词</span>
                  <el-popover
                    placement="bottom"
                    effect="dark"
                    title="牛逼"
                    :width="300"
                    trigger="hover"
                    content="666"
                  >
                    <template #reference>
                      <el-icon>
                        <info-filled />
                      </el-icon>
                    </template>
                  </el-popover>
                </div>
                <div class="button">
                  <el-button size="small" color="#626aef">优化提示词</el-button>
                </div>
              </div>
              <div class="input">
                <el-input
                  placeholder="描述你要画的图(英文更加准确)"
                  type="textarea"
                  rows="5"
                ></el-input>
              </div>
              <div class="header">
                <div class="title">
                  <span>反向提示词(可选)</span>
                  <el-popover
                    placement="bottom"
                    effect="dark"
                    title="牛逼"
                    :width="300"
                    trigger="hover"
                    content="666"
                  >
                    <template #reference>
                      <el-icon>
                        <info-filled />
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
                ></el-input>
              </div>
              <div class="header">
                <div class="title">
                  <span>绘画风格</span>
                  <el-popover
                    placement="bottom"
                    effect="dark"
                    title="牛逼"
                    :width="300"
                    trigger="hover"
                    content="666"
                  >
                    <template #reference>
                      <el-icon>
                        <info-filled />
                      </el-icon>
                    </template>
                  </el-popover>
                </div>
              </div>
              <div style="padding: 15px">
                <el-select
                  v-model="form.modelName"
                  class="m-2"
                  placeholder="Select"
                  size="large"
                  style="width: 100%"
                >
                  <el-option
                    v-for="item in modelList"
                    :key="item.modelName"
                    :label="item.modelText"
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
                    title="牛逼"
                    :width="300"
                    trigger="hover"
                    content="666"
                  >
                    <template #reference>
                      <el-icon>
                        <info-filled />
                      </el-icon>
                    </template>
                  </el-popover>
                </div>
              </div>
              <div style="padding: 15px">
                <el-upload
                  style="
                    background-color: rgb(20, 21, 21);
                    width: 100px;
                    height: 100px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  "
                  action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                  :show-file-list="false"
                >
                  <img v-if="form.file" :src="form.file" class="avatar" />
                  <el-icon v-else class="avatar-uploader-icon"
                    ><Plus
                  /></el-icon>
                </el-upload>
              </div>
            </div>
            <div
              style="
                border-top: 1px solid #565656;
                display: flex;
                align-items: center;
                justify-content: right;
                height: 10%;
                padding-right: 15px;
              "
            >
              <el-button round color="#626aef">立即生成</el-button>
            </div>
          </div>
        </div>
        <div class="content">a</div>
      </div>
    </div>
  </div>
  <LoginDialog :show="loginVisible" @close="loginVisible = false" />
</template>

<script>
import { ref } from "vue";

import LoginDialog from "@/components/LoginDialog.vue";
import { InfoFilled, Plus } from "@element-plus/icons-vue";

export default {
  name: "PresetCharacterView",
  components: { Plus, InfoFilled, LoginDialog },
  setup() {
    const modelList = ref([
      {
        modelName: "动漫",
        modelText: "水彩",
      },
    ]);

    const form = ref({
      modelName: "",
      file: "",
    });

    let loginVisible = ref(false);

    return {
      modelList,
      loginVisible,
      form,
    };
  },
};
</script>

<style scoped>
:deep(.el-textarea__inner) {
  background: rgb(20, 21, 21);
  box-shadow: none;
  max-height: 400px;

  padding: 10px;
  font-size: 10px;
  color: #646464;

  &:hover {
    box-shadow: none;
    background: rgb(20, 21, 21);
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
  background-color: rgb(38, 42, 44);
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
  margin-top: 30px;
}

.item {
  width: 80%;
  height: 160px;
  background-color: rgb(27, 30, 32);
  margin-bottom: 15px;
  border-radius: 8px;
  font-size: 15px;
  color: #303030;
  padding: 20px;
  box-shadow: 0 5px 7px rgba(35, 35, 35, 0.06);
}

.item:hover {
  background-color: rgb(62, 61, 61);
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
  background: rgb(20, 21, 21);
  font-weight: 400;
  color: #b7b7b7;
}

:deep(.el-input__wrapper) {
  background: rgb(20, 21, 21);
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
  border: 1px solid #4b535a;
  height: 97%;
  width: 25%;
  background-color: rgb(29, 32, 34);
  margin: 10px;
  border-radius: 10px;
  color: rgb(229, 234, 243);
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
}
</style>
