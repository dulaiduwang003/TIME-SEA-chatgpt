<template>
	<div class="body">
		<div class="container">
			<div style="height: 80px"></div>
			<block v-if="item.desc">
				<view class="title">&{{ item.desc }}</view>
				<view class="dividingLine"></view>
			</block>
			<view class="illustrate">请在下方告诉AI你想要什么</view>
			<el-input class="textareaBox" type="textarea" :rows="10" placeholder="请输入" v-model="item.body" />

			<block v-for="(item, index) in item.enterTheList" :key="index">
				<view class="illustrate">{{ item.name }}</view>
				<el-input v-model="item.data" placeholder="请输入" class="inputBox"></el-input>
			</block>

			<button @click="generate" class="determineTheBuild" type="primary">生成</button>
			<button @click="router().back()" class="determineTheBuildBack" type="primary">返回上一页</button>
		</div>
	</div>
</template>

<script>
import {
	ref
} from "vue";
import {
	useRouter
} from 'vue-router'
import {
	ElMessage,
	ElNotification
} from 'element-plus'
import router from "@/router";
import {
	GetUserInfo
} from "../../../api/BSideApi";
import store from "@/store";

export default {
	name: "CreateEditView",
	methods: {
		router() {
			return router
		}
	},
	setup() {
		let router = useRouter()
		let item = ref(JSON.parse(decodeURIComponent(router.currentRoute.value.query.item)));

		function generate() {
			if (!this.item.body) return ElMessage({
				message: '请输入内容',
				type: 'warning'
			});

			getUser();
			let frequency = store.getters.userinfo.frequency;
			if (parseInt(frequency) <= 0) {
				ElNotification({
					title: '错误',
					message: 'SUPER币不足，可前往小程序签到领取，或使用兑换码兑换Ai币，在网页端赞助也可获得Ai币',
					type: 'error',
				})
				return
			}

			// TODO 合成问题
			let problemData = ''
			if (item.value.enterTheList) item.value.enterTheList.slice(-2).forEach(({
				name,
				data
			}, index) => {
				if (index === item.value.enterTheList.length - 1) {
					problemData += name
					problemData += ':'
					problemData += data
					problemData += '，'
				} else {
					problemData += name
					problemData += ':'
					problemData += data + '，'
				}
			})
			problemData += item.value.body

			router.push({
				path: '/create_detail',
				query: {
					role: item.value.role ? encodeURIComponent(JSON.stringify(item.value.role)) : false,
					item: encodeURIComponent(JSON.stringify(problemData))
				}
			})
		}

		async function getUser() {
			try {
				let res = await GetUserInfo()

				store.commit("setUserinfo", res);
			} catch (e) {
				console.log(e)
			}
		}

		return {
			item,
			generate
		}
	}
}
</script>

<style scoped>
.body {
	scroll-behavior: smooth;
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	flex-direction: column;
	flex: 1;
	align-items: center;
	padding: 0 20px 100px;
	display: flex;
	overflow: auto;
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
	max-width: 800px;
	width: 100%;
	box-sizing: border-box;
	padding: 0 20px 100px;
  animation: explainAnimation 0.3s;
}


.title {
	font-size: 18px;
	font-weight: bold;
	line-height: 1.4;
	color: #ffffff;
	margin-bottom: 15px;
	display: block;
}

.dividingLine {
	width: 100%;
	height: 1px;
	background-color: #e8e8e8;
	margin-top: 10px;
	margin-bottom: 20px;
	display: block;
}

.illustrate {
	display: block;
	margin: 10px 0;
	color: #ffffff;
	font-size: 13px;
}

>>>.inputBox>.el-input__wrapper {
	box-shadow: none;
	width: 100%;
	height: 40px;
	border-radius: 8px;
	background-color: rgb(27,30,32);
	color: white;
	font-size: 15px;
	box-sizing: border-box;
	padding: 0 15px;
	outline: none;
	margin-bottom: 10px;
}

>>>.textareaBox>.el-textarea__inner {
	width: 100%;
	border-radius: 7.5px;
  background-color: rgb(27,30,32);
	color: #ffffff;
	font-size: 15px;
	outline: none;
	margin-bottom: 20px;
	box-shadow: none;
	box-sizing: border-box;
	padding: 15px;
}

.determineTheBuild {
	font-size: 15px;
	background-color: rgb(48,53,57);
	color: #fff;
	border-radius: 100px;
	height: 40px;
	width: 300px;
	max-width: 100%;
	line-height: 40px;
	border: 0;
	display: table;
	margin: 50px auto 0 auto;
	cursor: pointer;
}


.determineTheBuild:hover {
	background-color: #56575a;
}

.determineTheBuildBack {
	font-size: 15px;
	background-color: #000000;
	color: #ffffff;
	border-radius: 100px;
	height: 40px;
	width: 300px;
	max-width: 100%;
	line-height: 40px;
	border: 0;
	display: table;
	margin: 30px auto 30px auto;
	cursor: pointer;
}

.determineTheBuildBack:hover {
	background: #535353;
}

@media only screen and (max-width: 767px) {
	.container {
		padding: 0;
	}
}
</style>
