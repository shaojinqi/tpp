<template>
  <section class="mask video-mask" @click="transfer" v-show="yincang">
        <!-- 需要先隐藏，所有把点击事件给到父组件，让父组件调用方法显示 -->

  	<div class="video-box pa">
  		<div class="v-cover">
  			<video :src="items.preview[0].iphoneUrl" ref="video" class="v-content" :poster="items.preview[0].coverUrl"></video>
              <!-- 添加ref 可以在下面用$refs.video操作dom 播放 -->
  		</div>
  		<div class="v-icon pa" @click.stop="videoStar" v-if="yc">
              <!-- 这里要取消冒泡事件不然播放了也隐藏了 -->
  		</div>
  	</div>
  </section>

</template>
<script>
import {mapState } from 'vuex'
export default {
    props:{
        items:{
            type:Object
        }
    },
data() {
return {
    yincang:false,
    yc:true
}
},
computed: {
    ...mapState(['reying'])
},
//生命周期 - 创建完成（访问当前this实例）
created() {

},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {
   
},
methods: {
    // 传递给父组件的方法
       transfer(){
           this.yincang = !this.yincang
         let video = this.$refs.video            /* 点击隐藏并暂停播放 */
         video.pause()
       },

    // 播放
       videoStar(){
        let video = this.$refs.video
         this.yc = false
        video.play()
        
       }
          
},
}
</script>
<style>
.video-box {
	width: 100%;
	height: 200px;
	top: 20%;
	padding: 0 20px;
	box-sizing: border-box;
}
.v-cover {
	height: 100%;
	background-color: #000;
	background-repeat: no-repeat;
	background-size: auto 100%;
	background-position: center;
}
.v-icon {
	width: 90px;
	height: 90px;
	left: 50%;
	top: 50%;
	margin-left: -45px;
	margin-top: -45px;
	background: url('../assets/images/sprite.png') -2px -2px no-repeat;
}
.v-content {
	width: 100%;
	height: 100%;
}
</style>
