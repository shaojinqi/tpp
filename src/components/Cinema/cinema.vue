<!--  -->
<template> 
<section class="cinema-box" style="background: #fff">
		<ul class="cm-item">
			<!-- <li v-for="(item,key,index) in dianying.regionCinemas" :key="index"> -->
			<li v-for="(item,index) in allArea" :key="index">
				<router-link :to="`/cdetail/${idr[index]}`">
				<!-- <router-link :to="`/cdetail/${$store.state.dianying.regionCinemas[key][0].id}`"> -->
				<!-- <router-link :to="{name:'cdetail',params:{cc:item.mID}}"> -->
					<div class="cm-name">
						<span class="tddd vm">{{item.cinemaName}}</span>
						<span class="k-mode vm" v-show="item.showMark === '4K厅'">4K厅</span>
						<span class="k-mode vm" v-show="item.showMark === 'IMAX厅'">IMAX厅</span>
						<span class="k-mode vm" v-show="item.showMark === '巨幕厅'">巨幕厅</span>
					</div>
					<p class="cm-address tddd">{{item.address}}</p>
					<div class="cm-welfare">
						<span class="label-mod label-border-blue">座</span>
						<span class="label-mod label-orange">新人专享</span>
						<span class="label-mod">¥ 18.8元起</span>
						<span>{{$store.state.cinemaxq.id}}</span>
					</div>
				</router-link>	
			</li>
		</ul>
		<div style="height: 60px; background: #f5f5f5"></div>
	</section>
</template>

<script>
import {mapState} from 'vuex'
export default {
	 props:{
        idr:Array,
        naa:String        //父组件传过来的地址name值
    },
data() {
return {
	add:[],
	regionCinemas:{},
	regionOrder:[],
	allArea:[],
}
},
computed: {
   ...mapState(['dianying','cinemaxq'])
},
created() {
	
	setTimeout(() => {
		this.regionOrder = this.$store.state.dianying.regionOrder
				this.regionCinemas = this.$store.state.dianying.regionCinemas
			this.regionOrder.forEach((item)=>{
				// console.log(item);
				this.regionCinemas[item].forEach((items)=>{
					this.allArea.push(items)      
				})
			})
			// console.log(this.regionCinemas[this.naa]);
	}, 101);
},
watch: {
	naa(newVal,oldVal){
		  this.regionOrder.forEach((item)=>{
				// console.log(item);
				if(item==this.naa){
				this.allArea = this.regionCinemas[item]
				}
			}) 
	}
},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {
		this.$store.dispatch('getcinema')

},
methods: {

	// saixuans(array,index){
	// 	for (let i = 0; i < array.length; i++) {
	// 		if(array[i].mID==index){
	// 			return array[i]
	// 		}
	// 	}
	// 	return false
	// }
}
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.cm-item {
	padding-left: 15px;
	box-sizing: border-box;
}
.cm-item li {
	padding: 15px 15px 12px 0px;
	border-bottom: 1px solid #ebebeb;
}
.cm-item li:last-child {
	border-bottom: 0px;
}
.cm-name {
	font-weight: 400;
	color: #424242;
	font-size: 16px;
}
.cm-name span:first-child {
	max-width: 83%;
}
.cm-address {
	color: gray;
	font-size: 10px;
}
.cm-welfare {
	font-size: 10px;
	color: gray;
}
.cm-address, .cm-welfare {
	margin-top: 10px;
}
.label-mod.label-border-blue {
	border: 1px solid #00b8f0;
	color: #00b8f0;
}
.label-mod.label-orange {
	background: #ff8625;
    border-color: #ff8625;
    color: #fff;
}
.label-mod {
	display: inline-block;
	margin: 0 1px;
	padding: 0 1px;
	line-height: 14px;
	min-width: 12px;
	font-size: 12px;
	text-align: center;
	border-radius: 2px;
	font-weight: 400;
	border: 1px solid transparent;
}
.k-mode {
	display: inline-block;
	border: 1px solid #adb6ca;
	color: #adb6ca;
	overflow: hidden;
	border-radius: 2px;
	font-size: 12px;
}




</style>