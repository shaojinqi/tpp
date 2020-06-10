<!--  -->
<template>
<section v-show="yc">
    <ul class="area-item " >
    <!-- <ul class="area-item " @click="selectAreaAction"> -->
			<li>{{this.name==''?"全部区域":name}}</li>
			<li  v-for="item in regionOrder" :key="item.id" @click="hqdf">
                <!-- {{ item }}{{regionCinemas[item].length}} -->
                {{item}}
			</li>
    </ul>
</section>
</template>

<script>
import {mapState} from 'vuex'
export default {
data() {
return {
        yc:{
            type:Boolean
        },
        regionOrder:[],
        name:'',
}
},
computed: {
    ...mapState(['dianying'])
},
//生命周期 - 创建完成（访问当前this实例）
created() {
       
        this.regionOrder = this.$store.state.dianying.regionOrder
},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

},
methods: {
    hqdf(event){
        this.yc = false
        let name=''
       let ele = event.target.innerText
       
       if(ele){
           name = ele
        //    console.log(name);
       }
       if(name){
           this.name=name
            //  console.log(this.name);
          this.$emit('func',this.name)
        //    this.$router.push('/cinama')
       }
       
    }
}
}
</script>


<style>
.area-item {
	background-color: #fff;
	font-size: 14px;
	color: #222;
	box-sizing: border-box;
	max-height: 70%;
	padding-left: 15px;
	overflow-y: scroll;
}
.area-item li {
	padding: 14px 0;
	border-bottom: 1px solid #ebebeb;
    
}

</style>