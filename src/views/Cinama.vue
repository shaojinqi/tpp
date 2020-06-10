<!--  --> 
<template>
<section>
 <cszj v-if='yincang'></cszj>
 <csdq  @func="cds" v-if="yincangs"></csdq>
     <!-- 父组件接收 func为子组件里$emit的第一个参数 -->
 

  <header class="home-header border-bottom">
            <div class="city fl">
              <span class=" city-name f14" >{{$store.state.dizhi.names}}</span>
              <router-link to="/chengshi"><span class="city-arrow-icon vm"></span></router-link>
            </div>
            <div class="sel-lists f14 fl pr" >
              <div hot='sel'>{{this.na==""?"选择区域":this.na}}</div> 
              <!-- <div hot='sel'>{{this.na==''?"全部区域":this.na}}</div>  -->
      <span class="city-arrow-icon2" @click="xs"></span>
        <!-- <router-link to="/csdq"><span class="city-arrow-icon2 "></span></router-link> -->
            </div>
            <!-- 影院头部 --> 
          </header>
          <cinema :idr="ids"   :naa="na"></cinema>
</section>
</template>

<script>
import cszj from '../components/cszj'
import csdq from '../components/csdq'
import cinema from '../components/Cinema/cinema'
import {mapState} from 'vuex'

export default {
 
data() {
return {
     yincang:false,
     yincangs:false,
     ids:[],
     na:'',
}
},
computed: {
    ...mapState['cinemaxq']
},
//生命周期 - 创建完成（访问当前this实例）
created() {
    let cin = this.$store.state.cinemaxq
    for (let i = 0; i < cin.length; i++) {
      // console.log(cin[i].id);
      this.ids.push(cin[i].id)
      // 将数据项id全部push到ids数组中
    }
    
},

//生命周期 - 挂载完成（访问DOM元素）
mounted() {

},
components: {
    cszj,
    csdq,
    cinema
},
methods: {
  // 显示组将csdq
  xs(){
      this.yincangs = !this.yincangs

      // setTimeout(() => {
      //   this.regionOrder.forEach((item)=>{
			// 	this.regionCinemas[item].forEach((items)=>{

			// 	})
			// })
      // }, 100);
  },

  // 接受子组件传过来的值 参数data为给值 将值给到定义的na 渲染到页面上  
    cds(data){
        this.na =  data
      console.log(this.na);
    }
},
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.vm{
    margin-bottom: 7px;
 }
.home-header {
  height: 40px;
  font-size: 0px;
  background-color: #fff;
  border-bottom: 1px solid rgb(221, 216, 216);
  /* margin-bottom:20px ; */
}

.city {
  width: 50%;
  height: 100%;
  line-height: 40px;
  text-align: center;
  display: inline-block;
}
.city-arrow-icon {
  margin-left: 4px;
  width: 12px;
  height: 12px;
  display: inline-block;
}
.city-arrow-icon:after {
  content: "";
  display: block;
  width: 6px;
  height: 6px;
  margin-left: 0;
  border: 1px solid #50505a;
  border-top: 0 none;
  border-left: 0 none;
  margin-left: 2px;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
.city-arrow-icon2:after {
  content: "";
  display: block;
  width: 6px;
  height: 6px;
  margin-left: 0;
  border: 1px solid #50505a;
  border-top: 0 none;
  border-left: 0 none;
  margin-left: 2px;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  position: relative;
  left: -62px;
  top: 14px;
}
.content {
  margin-bottom: 58px;
}
.sel-lists {
  width: 50%;
  display:-moz-box; 
  display: -webkit-box;
  display: box;
}
.sel-lists div {
  -moz-box-flex: 1.0; 
  -webkit-box-flex: 1.0; 
  line-height: 40px;
  text-align: center;
}

.click-load-more {
  height: 42px;
  line-height: 42px;
  text-align: center;
  color: #333;
  font-size: 15px;
  background-color: #fff;
  margin: 5px 0 8px;
}
.loading-icon span {
  vertical-align: middle;
}
</style>