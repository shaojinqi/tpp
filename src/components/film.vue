<template>
	<section class="pr v-slide-content">
		<ul class="v-slide-box pa" ref='vSlide' :class="{'slide-action': true}">
			<li v-for="item in lists" :key="item.id">
				<img style="height: 90px" :class="{'click-select': lists[0] === item}" :src="`https://gw.alicdn.com/${item.poster}`" :data-id="item.id">
			</li>
		</ul>
	</section>
</template>


<script>
export default {
    	props: {
		lists: {
			type: Array,
			default: () => []
        }
        },
data() {
return {

}
},
//生命周期 - 创建完成（访问当前this实例）
created() {

},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

}
}
</script>

<style>
.v-slide-content {
	width: 100%;
	height: 120px;
	overflow: hidden;
}
.v-slide-box {
	height: 90px;
	bottom: 0px;
	box-sizing: border-box;
}
.v-slide-box li:first-child {
	margin-left: 15px;
}
.v-slide-box li {
	float: left;
	margin-right: 10px;
	height: 100%;
}
.v-slide-box img {
	width: auto;
	height: 100%;
	transition: all .2s ease-out;
	-webkit-transition: all .2s ease-out;
}
.slide-action {
	transition: transform .7s ease-out;
	-webkit-transition: transform .7s ease-out;
}
.click-select {
	height: 100px!important;
	margin-top: -10px;
	border: 2px solid #fff;
}
</style>

