<template>
    <div class="swiper-container" id="swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in lunbotu" :key='index'>
                    <img class="img" :src="lunboimg + item.smallPicUrl" />
    
              </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    import 'swiper/css/swiper.min.css'
    import {mapActions,mapState} from 'vuex'
export default {
    props: {
    },
    data() {
        return {
        lunboimg:'https://gw.alicdn.com/tfs/'
        };
    },
    computed: {
        ...mapState(['lunbotu']),
    },
    mounted() {
 this.$store.dispatch('getLunbotu')
    },
    watch: {
        lunbotu(newVal,oldVal) {
      if(newVal) {   
        this.$nextTick(v=>{
    	var mySwiper = new Swiper ('.swiper-container', {
	     loop: true, 
      pagination: {
      el: '.swiper-pagination',
      },
           })
        })
      }
    }
    
    },
   
};
</script>

<style  >
img {
		width: 100%;
		height: auto;
	}
	#swiper .swiper-pagination-bullet {
		background: #e5e8e8;
		opacity: 1; 
	}
	#swiper .swiper-pagination-bullet-active {
		background: #ff5733;
	}
</style>
