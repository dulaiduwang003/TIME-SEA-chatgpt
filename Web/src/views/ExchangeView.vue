<template>
	<div class="panel-container">
		<div class="body">
			<div>
				<img class="logo" :src="require('../assets/logoHead.svg')" alt="">
			</div>
			<div class="title">
				兑换魔法币
			</div>
			<input type="text" class="input" placeholder="请输入兑换码" v-model="inputValue" maxlength="8" />
			<el-button type="primary" color="#626aef" class="button" @click="submit">兑换</el-button>
			<a href="https://www.mofaxi.cn/shop" target="_blank" style="text-decoration: none;">
            <el-button type="primary" color="#626aef" class="button" >购买兑换码</el-button>
            </a>

		</div>
	</div>
</template>
<script>
	import {
		ref
	} from "vue";
	import router from "@/router";
	import {
		ElLoading,
		ElNotification
	} from "element-plus";
	import {
		GetUserInfo,
		UseExchangeCode
	} from "../../api/BSideApi";
	import store from "@/store";

	export default {
		name: "exchangeView",

		methods: {
			router() {
				return router
			}
		},
		setup() {
			const inputValue = ref('')

			async function submit() {
				if (inputValue.value.length < 8) {
					ElNotification({
						title: '错误',
						message: '兑换码格式错误',
						type: 'error',
					})
					return
				}
				// 显示加载图标
				ElLoading.service({
					fullscreen: true,
					text: '正在兑换中...',
					spinner: 'el-icon-loading',
					background: 'rgba(0, 0, 0, 0.7)',
				});
				try {
					await UseExchangeCode(inputValue.value);
					await getUser();
					ElNotification({
						title: '成功',
						message: '兑换成功',
						type: 'success',
					})

				} catch (e) {
					ElNotification({
						title: '错误',
						message: e,
						type: 'error',
					})
				}
				// 关闭加载图标
				ElLoading.service().close();
			}

			async function getUser() {
				try {
					let res = await GetUserInfo()
					console.log(res)
					store.commit("setUserinfo", res);
				} catch (e) {
					console.log(e)
				}
			}

			return {
				submit,
				inputValue
			}
		}
	}
</script>

<style scoped>
	.body {

		animation: explainAnimation 0.3s;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		flex-direction: column;
		flex: 1;
		align-items: center;
		padding: 60px 20px 0;
		display: flex;
		overflow: auto;
	}

	input:focus {
		outline: none;
	}

	.panel-container {
		overflow: auto;
		overflow-y: scroll;
		height: 100%;
	}

	.logo {
		width: 100px;
		height: 100px;
		padding-top: 10vh
	}

	.title {
		font-size: 24px;
		font-weight: 550;
		padding-top: 20px
	}

	.input {
		background-color: #ededed;
		border: none;
		height: 35px;
		width: 230px;
		margin-top: 20px;
		text-align: center;
		border-radius: 5px
	}

	.button {
		width: 230px;
		margin-top: 20px
	}


	@keyframes explainAnimation {
		from {
			transform: scale(0);
		}

		to {
			transform: scale(1);
		}
	}
</style>