- <a href="#c1" title="概要">概要</a>
- <a href="#c2" title="支持的平台">支持的平台</a>
- <a href="#c3" title="使用方式">使用方式</a>
- <a href="#c4" title="属性说明">属性说明</a>
- <a href="#c5" title="事件说明">事件说明</a>
- <a href="#c6" title="组件方法">组件方法</a>
- <a href="#c7" title="refresh的使用示例">refresh的使用示例</a>
- <a href="#c8" title="隐藏单项图片示例">隐藏单项图片示例</a>
- <a href="#c9" title="完整示例">完整示例</a>
- <a href="#c10" title="温馨提示">温馨提示</a>
- <a href="#c11" title="关注我，不迷路">关注我，不迷路</a>
- <a href="#c12" title="个人作品展示">个人作品展示</a>
 
<div id="c1"></div>

#### 概要

custom-waterfalls-flow是一个瀑布流插件，灵活配置、简单易用、兼容多端、同时兼容vue2和vue3。

最近在做项目的时候需要用到瀑布流，于是在插件市场找了一些，下载量最高的是用了定位来做的，我认为瀑布流可以不用定位去实现，于是我就自己写了该插件。经过反复的测试优化，最终搞定！

**设置列数：** 瀑布流的列数可以通过参数直接控制，实时监听，随改随生效。列数最小为2，最大默认为5，可以通过maxColumn参数去控制最大列数，理论上可以设置无限大，具体值自己拿捏。

**更新数据：** 瀑布流的每项数据，可以直接通过修改value，随改随生效，这样可以实现加载更多数据。已经渲染过的数据不会再次渲染，每次只会渲染新增的数据，这样避免了数据越多渲染越慢的情况。可以调用组件的```refresh()```方法进行数据刷新，注意vue2和vue3中调用子组件的方法有区别，也会在下面进行说明。

**展示方式：** 瀑布流可以是纯图片，可以使用插槽自定义文字描述，微信小程序与app、h5使用会有些区别，也会在下面具体说明。内容高度及排序都不用担心，会根据每项的内容高度自动计算。

**实现思路：** 通过配置列数，先渲染出每列，再计算每列的高度，最小的那列就加入一条数据进行渲染，然后再重复计算每列，高度小的加入数据...其实思路是很简单的。

uniapp插件市场地址：[https://ext.dcloud.net.cn/plugin?id=7594](https://ext.dcloud.net.cn/plugin?id=7594)

<div id="c2"></div>

#### 支持的平台

H5、app、微信小程序（这三个平台经过反复测试优化，兼容vue2和vue3）。

百度小程序：由于插槽不能循环渲染的限制，只支持纯图片瀑布流。

其他小程序：暂未测试，需要的可以自己测试和修改，思路肯定是没错的，主要是兼容插槽的问题。

nvue：暂不支持，后期可能会支持，目前需要的可以自己修改源码。

<div id="c3"></div>

#### 使用方式

**1、导入插件**

该组件符合uni_modules规范，使用Hbuilderx导入插件，导入到项目根目录中的uni_modules文件夹中。

**2、template中使用**

uni_modules规范在项目页面中直接使用，不需要单独引入注册组件。

***纯图片瀑布流使用***

```
<template>
	<custom-waterfalls-flow :value="data.list"></custom-waterfalls-flow>
</template>
```

***微信小程序自定义内容使用***

微信小程序没有动态模板，使用for循环的方式进行渲染。

```
<template>
	<custom-waterfalls-flow :value="data.list">
		<view class="item" v-for="(item,index) in data.list" :key="index" slot="slot{{index}}">
			<view class="title">{{item.title}}</view>
			<view class="desc">{{item.desc}}</view>
		</view>
	</custom-waterfalls-flow>
</template>
```

***h5、app端自定义内容使用***

使用作用域插槽实现

```
<template>
	<custom-waterfalls-flow :value="data.list">
		<template v-slot:default="item">
			<view class="item">
				<view class="title">{{item.title}}</view>
				<view class="desc">{{item.desc}}</view>
			</view>
		</template>
	</custom-waterfalls-flow>
</template>
```

***小程序、h5、app等多端自定义内容使用***

条件渲染-多端同时兼容

```
<template>
	<custom-waterfalls-flow :value="data.list">
		<!-- #ifdef MP-WEIXIN -->
		<view class="item" v-for="(item,index) in data.list" :key="index" slot="slot{{index}}">
			<view class="title">{{item.title}}</view>
			<view class="desc">{{item.desc}}</view>
		</view>
		<!-- #endif -->
		<!-- #ifndef MP-WEIXIN -->
		<template v-slot:default="item">
			<view class="item">
				<view class="title">{{item.title}}</view>
				<view class="desc">{{item.desc}}</view>
			</view>
		</template>
		<!-- #endif -->
	</custom-waterfalls-flow>
</template>
```

<div id="c4"></div>

#### 属性说明

参数|说明|类型|是否必填|可选值|默认值
-|-|-|-|-|-|
value|渲染的列表|Array|是|-|-
column|列数|Number|否|2-maxColumn|2
maxColumn|最大列数|Number|否|>2|5
columnSpace|列之间的间距（单位是百分比）|Number|否|-|2
imageKey|列表中的图片字段的键名|String|否|-|image
hideImageKey|隐藏图片字段的键名|String|否|-|hide
seat|自定义文字的位置,1-图片上方，2-图片下方|Number|否|1/2|2
listStyle|单个展示项的样式|Object|否|示例：```{'background':'red'}```|-

<div id="c5"></div>

#### 事件说明

事件名称|说明|回调参数
-|-|-|
@loaded|图片加载完成事件|-
@wapperClick|单项点击事件|单项对应参数
@imageClick|图片点击事件|单项对应参数

<div id="c6"></div>

#### 组件方法

事件名称|说明|参数|使用场景
-|-|-|-
refresh|刷新数据，数据初始化，vue2中使用：```this.$refs.waterfallsFlowRef.refresh();```；vue3中使用：```const waterfallsFlowRef = ref(null);waterfallsFlowRef.value.refresh();```|-|下拉刷新等

<div id="c7"></div>

#### refresh的使用示例

***vue2中使用***

```
<template>
    <view>
        <button class="btn" type="default" @click="reset()">刷新数据</button>
    	<custom-waterfalls-flow ref="waterfallsFlowRef" :value="data.list"></custom-waterfalls-flow>
    </view>
</template>
<script>
	export default {
	    data() {
			return {
				data:{
					list: [
						{ image: 'https://via.placeholder.com/200x500.png/ff0000', title: '我是标题1', desc: '描述描述描述描述描述描述描述描述1' }, 
						{ image: 'https://via.placeholder.com/200x200.png/2878ff', title: '我是标题2', desc: '描述描述描述描述描述描述描述描述2' }
					]
				}
			}
		},
		reset(){
			this.data.list = [{ image: 'https://via.placeholder.com/200x500.png/ff0000', title: '我是标题1', desc: '描述描述描述描述描述描述描述描述1' }]
			this.$refs.waterfallsFlowRef.refresh();
		}
	}
</script>
```

***vue3中使用***

```
<template>
    <view>
        <button class="btn" type="default" @click="reset()">刷新数据</button>
    	<custom-waterfalls-flow ref="waterfallsFlowRef" :value="data.list"></custom-waterfalls-flow>
    </view>
</template>
<script setup>
	import { reactive, ref } from 'vue';
	const data = reactive({
		list: [
			{ image: 'https://via.placeholder.com/200x500.png/ff0000', title: '我是标题1', desc: '描述描述描述描述描述描述描述描述1' }, 
			{ image: 'https://via.placeholder.com/200x200.png/2878ff', title: '我是标题2', desc: '描述描述描述描述描述描述描述描述2' }
		]
	});
	const waterfallsFlowRef = ref(null);
	function reset(){
		data.list = [{ image: 'https://via.placeholder.com/200x500.png/ff0000', title: '我是标题1', desc: '描述描述描述描述描述描述描述描述1' }]
		waterfallsFlowRef.value.refresh();
	}
</script>
```

<div id="c8"></div>

#### 隐藏单项图片示例

在数据列表中配置```hide:true```或者```hide:1```，就可以达到不显示图片的效果。支持使用参数hideImageKey自定义键名称，那就使用：```定义的键名称:true```或者```定义的键名称:1```。

```
<template>
	<custom-waterfalls-flow :value="data.list">
		<!-- #ifdef MP-WEIXIN -->
		<view class="item" v-for="(item,index) in data.list" :key="index" slot="slot{{index}}">
			<view class="title">{{item.title}}</view>
			<view class="desc">{{item.desc}}</view>
		</view>
		<!-- #endif -->
		<!-- #ifndef MP-WEIXIN -->
		<template v-slot:default="item">
			<view class="item">
				<view class="title">{{item.title}}</view>
				<view class="desc">{{item.desc}}</view>
			</view>
		</template>
		<!-- #endif -->
	</custom-waterfalls-flow>
</template>
<script setup>
	import { reactive, ref } from 'vue';
	const data = reactive({
		list: [
			{ image: 'https://via.placeholder.com/200x500.png/ff0000',
			hide:1,title: '我是标题1', desc: '描述描述描述描述描述描述描述描述1' }, 
			{ image: 'https://via.placeholder.com/200x200.png/2878ff', title: '我是标题2', desc: '描述描述描述描述描述描述描述描述2' }
		]
	});
</script>
```

<div id="c9"></div>

#### 完整示例

```
<template>
	<view style="padding: 0 10rpx;">
		<view class="handle">
			<button class="btn" type="default" @click="add()">增加数据</button>
			<button class="btn" type="default" @click="changeColumn(1)">+列数({{column}})</button>
			<button class="btn" type="default" @click="changeColumn(0)">-列数({{column}})</button>
			<button class="btn" type="default" @click="reset()">刷新数据</button>
		</view>
		<custom-waterfalls-flow ref="waterfallsFlowRef" :value="data.list" :column="column" :columnSpace="1.5" :seat="2" @wapperClick="wapperClick" @imageClick="imageClick" @loaded="loaded">
			<!-- #ifdef MP-WEIXIN -->
			<view class="item" v-for="(item,index) in data.list" :key="index" slot="slot{{index}}">
				<view class="title">{{item.title}}</view>
				<view class="desc">{{item.desc}}</view>
			</view>
			<!-- #endif -->
			<!-- #ifndef MP-WEIXIN -->
			<template v-slot:default="item">
				<view class="item">
					<view class="title">{{item.title}}</view>
					<view class="desc">{{item.desc}}</view>
				</view>
			</template>
			<!-- #endif -->
		</custom-waterfalls-flow>
	</view>
</template>
<script setup>
	// #ifdef VUE3
	import { reactive, ref, onMounted } from 'vue';
	const data = reactive({
		list: [{ image: 'https://via.placeholder.com/200x500.png/ff0000', title: '我是标题1', desc: '描述描述描述描述描述描述描述描述1' }, 
					{ image: 'https://via.placeholder.com/200x200.png/2878ff', title: '我是标题2', desc: '描述描述描述描述描述描述描述描述2' }, 
					{ image: 'https://via.placeholder.com/200x100.png/FFB6C1', title: '我是标题3', desc: '描述描述描述描述描述描述描述描述3' }, 
					{ image: 'https://via.placeholder.com/200x300.png/9400D3', title: '我是标题4', desc: '描述描述描述描述描述描述描述描述4' }, 
					{ image: 'https://via.placeholder.com/100x240.png/B0E0E6', title: '我是标题5', desc: '描述描述描述描述描述描述描述描述5' }, 
					{ image: 'https://via.placeholder.com/140x280.png/7FFFAA', title: '我是标题6', desc: '描述描述描述描述描述描述描述描述6' }, 
					{ image: 'https://via.placeholder.com/40x60.png/EEE8AA', title: '我是标题7', desc: '描述描述描述描述描述描述描述描述7' }]
	});
	const column = ref(3);

	function add() {
		const newArr = [{ image: 'https://via.placeholder.com/58x100.png/FF7F50', title: '我是标题8', desc: '描述描述描述描述描述描述描述描述8' }, 
				{ image: 'https://via.placeholder.com/59x100.png/C0C0C0', title: '我是标题9', desc: '描述描述描述描述描述描述描述描述9' }, 
				{ image: 'https://via.placeholder.com/60x100.png/FAEBD7', title: '我是标题10', desc: '描述描述描述描述描述描述描述描述10' }];
		data.list = data.list.concat(newArr);
	}

	function changeColumn(h) {
		column.value = !h ? column.value - 1 : column.value + 1;
	}

	function loaded() {
		console.log('加载完成')
	}

	function wapperClick(item) {
		console.log('单项点击事件', item)
	}

	function imageClick(item) {
		console.log('图片点击事件', item)
	}
	const waterfallsFlowRef = ref(null);

	function reset() {
		data.list = [{ image: 'https://via.placeholder.com/200x500.png/ff0000', title: '我是标题1', desc: '描述描述描述描述描述描述描述描述1' }]
		waterfallsFlowRef.value.refresh();
	}
	// #endif
</script>
<script>
	// #ifdef VUE2
	export default {
		data() {
			return {
				data: {
					list: [{ image: 'https://via.placeholder.com/200x500.png/ff0000', title: '我是标题1', desc: '描述描述描述描述描述描述描述描述1' }, 
					{ image: 'https://via.placeholder.com/200x200.png/2878ff', title: '我是标题2', desc: '描述描述描述描述描述描述描述描述2' }, 
					{ image: 'https://via.placeholder.com/200x100.png/FFB6C1', title: '我是标题3', desc: '描述描述描述描述描述描述描述描述3' }, 
					{ image: 'https://via.placeholder.com/200x300.png/9400D3', title: '我是标题4', desc: '描述描述描述描述描述描述描述描述4' }, 
					{ image: 'https://via.placeholder.com/100x240.png/B0E0E6', title: '我是标题5', desc: '描述描述描述描述描述描述描述描述5' }, 
					{ image: 'https://via.placeholder.com/140x280.png/7FFFAA', title: '我是标题6', desc: '描述描述描述描述描述描述描述描述6' }, 
					{ image: 'https://via.placeholder.com/40x60.png/EEE8AA', title: '我是标题7', desc: '描述描述描述描述描述描述描述描述7' }]
				},
				column: 3
			}
		},
		methods: {
			add() {
				const newArr = [{ image: 'https://via.placeholder.com/58x100.png/FF7F50', title: '我是标题8', desc: '描述描述描述描述描述描述描述描述8' }, 
				{ image: 'https://via.placeholder.com/59x100.png/C0C0C0', title: '我是标题9', desc: '描述描述描述描述描述描述描述描述9' }, 
				{ image: 'https://via.placeholder.com/60x100.png/FAEBD7', title: '我是标题10', desc: '描述描述描述描述描述描述描述描述10' }]
				this.data.list = this.data.list.concat(newArr);
			},
			changeColumn(h) {
				this.column = !h ? this.column - 1 : this.column + 1;
			},
			loaded() {
				console.log('加载完成')
			},
			wapperClick(item) {
				console.log('单项点击事件', item)
			},
			imageClick(item) {
				console.log('图片点击事件', item)
			},
			reset() {
				this.data.list = [{ image: 'https://via.placeholder.com/200x500.png/ff0000', title: '我是标题1', desc: '描述描述描述描述描述描述描述描述1' }]
				this.$refs.waterfallsFlowRef.refresh();
			}
		}
	}
	// #endif
</script>
<style>
	page {
		background-color: #f2f5f9;
	}
</style>
<style lang="scss" scoped>
	.handle {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		margin-bottom: 20rpx;
		padding: 10rpx;

		.btn {
			margin: 20rpx 10rpx;
			padding: 0 20rpx;
			background: #2878FF;
			font-size: 28rpx;
			color: #fff;

			&::after {
				border: 0;
			}
		}
	}

	.item {
		padding: 10rpx 10rpx 20rpx;

		.title {
			line-height: 48rpx;
			font-size: 28rpx;
			color: #222;
		}

		.desc {
			font-size: 24rpx;
			color: #666;
		}
	}
</style>
```

<div id="c10"></div>

#### 温馨提示

1、该插件反复测试过微信小程序、h5、app-vue三个端，vue2和vue3都兼容，其他端可能需要测试改进。

2、该插件的使用hbuilderx版本最好升级到较新版本，我开发的版本是hbuilderx3.3.11.20220209。

3、对此插件或相关问题有好的建议，可以直接在评论区进行讨论。

4、希望遇到问题不要喷，也不要骂人，其实这种心情我能理解，写该插件也不是一时半会就完成了的，所以希望互相理解。只要有问题，我会第一时间回复解决。

5、对此插件有任何问题的可以在下方留言，我会第一时间回复和解决问题。还可以加QQ群进行前端技术交流 568984539，加群备注‘地区-名字-技术类型’。

#### 最后我想说：认为该插件对你有帮助的，记得收藏、好评，这样可以帮助到更多人哟！

---

<div id="c11"></div>

#### 关注我，不迷路

如果任何疑问的可以在评论区留言，还可以加QQ群交流：568984539，加群备注‘地区-名字-技术类型’。

更多前端等相关知识可关注我个人博客：https://blog.csdn.net/qq_42961150?spm=1011.2124.3001.5343

<div id="c12"></div>

#### 个人作品展示

uniapp+vue3.2+unicloud开发微信小程序：**皮皮虎去水印**。

关注下方公众号：【**全网免费网盘资源**】、【**美团外卖饿了么天天领红包**】、【**去水印**】

![image](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-bb657efd-fece-483e-a715-5daea480fde8/6e029310-aec8-46e9-9883-1c88dc1925ad.jpg)