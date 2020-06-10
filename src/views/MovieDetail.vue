<template>
	<section id="movie-detail">
		<header class="mbg pr">
			<figure class="d-cover">
				<img :src="arr.poster ? `https://gw.alicdn.com/${arr.poster}` : 'https://gw.alicdn.com/tps/i1/TB147JCLFXXXXc1XVXXxGsw1VXX-112-168.png'" alt="">
			</figure>
			<article class="d-info">
				<p class="d-name tddd">{{arr.showName}}</p>
				<p class="tddd">{{ arr.showNameEn }}</p>
				<p>{{ arr.type }}</p>
				<p>{{ arr.country }}｜{{ arr.duration }}分钟</p>
				<p>{{ arr.openTime }}在中国上映</p>
				<div class="full-star pr">
					<div class="score-start" :style="{width: `${arr.remark * 10}%`}"></div>
					<span class="score pa">{{ arr.remark }}分</span>
				</div>
			</article>
		</header>
		<section v-if="">
			<section class="intro-block border-1px-bottom">
				<article class="d-intro">
					<p ref="dint" :class="{'hide-something': hideSomething}">
						{{ infoObj.description }}
					</p>
					<p class="d-control" @click="qiehuan">
						<span v-if="hideSomething">展开</span>
						<span v-else>收起</span>
					</p>
				</article>
			</section>
			<section class="ab-photo pr border-1px-bottom">
				<header class="ab-header pa">
					<span class="fb">演职人员</span>
				</header>
				<div class="swiper-container">
				    <div class="swiper-wrapper" v-if="infoObj.artistes">
				        <div class="swiper-slide" v-for="(item,index) in infoObj.artistes.actor" :key="index">
				        	<div class="am-img pr">
				        		<img :src="`https://gw.alicdn.com/${item.avatar}`" alt="">
				        		<div class="am-title pa">
				        			<p class="tddd">{{ item.artisteName  }}</p>
				        			<p>{{item.profession}}</p>
				        		</div>
				        	</div>
				        </div>
				    </div>
				</div>
			</section>
			<section class="ab-photo crew-ab-photo pr border-1px-bottom">
				<header class="ab-header pa">
					<span class="fb">剧照</span>
				</header>
				<div class="swiper-container crew-swiper-container">
				    <div class="swiper-wrapper" v-for="(item,index) in infoObj.trailer" :key="index">
				        <div class="swiper-slide">
				        	<div class="am-img crew-img">
				        		<img :src="`https://gw.alicdn.com/${item}`" alt="">
				        		<img>
				        	</div>
				        </div>
			        </div>
			    </div>
			</section>
			<!-- <hotEvaluation :lists="evalLists"></hotEvaluation> -->
            <pinglun :lists="xq"></pinglun>
		</section>
		<section class="no-data">
		<!-- <section v-else class="no-data"> -->
			<span>暂时没有更多数据～</span>
		</section>


      <section class="dw">
            <p  @click="goBack" class="back" style="width: 100%"> &lt; </p>
        </section>
  


	</section>
</template>



<script>
import {mapState} from 'vuex'
 import Swiper from 'swiper'
    import 'swiper/css/swiper.min.css'
    import pinglun from '../components/pinglun'
export default {
data() {
return {
    hideSomething: true,
    arr: {},
    infoObj:false,
    xq:[]
}
},
 computed: {
        ...mapState(['reying']),
    },
   
created() {
     let id = this.$route.params.id  //（动态路由name）
     let ry = this.$store.state.reying
            if (ry.length) {  //判断数组数据是非为空
                 this.arr = this.saixuan(ry, id)
                //arr为自己定义的对象  reying中的数据项给到arr
            }
            else if (!ry.length ) {
                this.$router.push('/')
 
            }

},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {
        let detailStr = this.arr.detailStr
            if (detailStr) {
                this.axios.get(`/api/movie/info/?name=${detailStr}`).then((response) => {
                    let data = response.data
                    console.log(data.data);
                    this.infoObj = data.data.data.returnValue
                      this.initSwiper()
                })
              this.axios.get(`/api/movie/evaluation/?name=${detailStr}`).then((response) => {
                    let data = response.data
                    this.xq = data.data.data.returnValue
                })
            }

     this.$store.dispatch('getreyin')
},
 methods: {
     qiehuan(){
         this.hideSomething = !this.hideSomething
     },


   saixuan(data, id) {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].mID === id) {
                    //   判断 id（动态路由name）与index是否相等，相等就返回，当前索引的项
                        return data[i]
                    }
                } 
                return false   
                // 跳出循环
            },


  // 演职人员轮播图js
    initSwiper () {
    	this.$nextTick(() => {
    		var swiper = new Swiper('.swiper-container', {
  		    pagination: '.swiper-pagination',
  		    slidesPerView: 'auto',
  		    centeredSlides: false,
  		    spaceBetween: 5
    		})
    	})
    },

     // 底部退出
        goBack(){
            this.$router.go(-1)
        }
       
    },
    components: {
        pinglun
    }
}
</script>
<style scoped>
.border-1px-bottom {
	border-bottom: 1px solid #d9d9d9;
}
.mbg {
	height: 10rem;
	height: 50vmin;
	background: url('../assets/images/mbg.png') no-repeat;
	background-size: 100% auto;
	padding-left: 15px;
	overflow: hidden;
	box-sizing: border-box;
}
.d-cover {
	position: absolute;
	bottom: 0;
	z-index: 1;
	background: #ccc;
	width: 33.10vmin;
	min-width: 6.25rem;
	min-width: 31.3vmin;
	height: 46.3vmin;
}
.d-cover img {
	width: 100%;
	height: 100%;
}
.d-info {
	display: inline-block;
	margin: 3.8vmin 0 0 37.5vmin;
	color: #fff;
	width: 55%;
}
.d-info p {
	opacity: .8;
	font-size: .75rem;
	line-height: .875rem;
	line-height: 4.4vmin;
	margin-bottom: .375rem;
	margin-bottom: 1.9vmin;
	width: auto;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.d-info p.d-name {
	position: relative;
	font-size: 1.125rem;
	line-height: 1.5rem;
	line-height: 7.5vmin;
	max-height: 3rem;
	max-height: 15vmin;
	overflow-y: hidden;
	margin-bottom: .375rem;
	margin-bottom: 1.9vmin;
	color: #fff;
	opacity: 1;
}
.mbg .full-star {
	margin-top: 6vmin;
}
.mbg .score {
	right: -32px;
	top: 1px;
	color: #fff;
	font-size: 12px;
}
.mbg .full-star {
	width: 70px;
	height: 14px;
}
.intro-block {
}
.d-intro {
	padding: 20px 15px;
	box-sizing: border-box;
	background-color: #fff;
}
.d-intro p {
	word-break: break-word;
	margin-bottom: .75rem;
	margin-bottom: 3.8vmin;
	font-size: .9375rem;
	line-height: 1.5rem;
	line-height: 7.5vmin;
	color: #333;
	overflow: hidden;
}
.d-intro p.d-control {
	text-align: center;
	font-size: 1.1rem;
}
.ab-photo {
	padding: 15px 15px 25px;
	box-sizing: border-box;
	background-color: #fff;
}
.crew-ab-photo {
	padding: 15px 15px 0px;
}
.ab-header {
	z-index: 1000;
}
.ab-header span {
	font-size: .9375rem;
	line-height: 2rem;
	line-height: 10vmin;
	color: #000;
}
.hide-something {
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	overflow: hidden;
}
.am-img {
	height: 124px;
}
.crew-img {
	height: 100px;
}
.am-img img{
	height: 100%;
	width: auto;
}
.am-title {
	width: 100%;
}
.am-title p {
	text-align: center;
}
.am-title p:first-child {
	color: #333;
	font-size: 13px;
}
.am-title p:last-child {
	color: #999;
	font-size: 11px;
}
#movie-detail .swiper-container {
	height: 202px;
  width: 100%;
  overflow: initial;
  overflow-x: hidden;
}
#movie-detail .crew-swiper-container {
	margin-top: 7px;
	height: 165px;
}
#movie-detail .swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  width: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
#movie-detail .swiper-slide:nth-child(2n),
#movie-detail .swiper-slide:nth-child(3n) {
    width: auto;
}
.no-data {
	padding: 60px;
	font-size: 16px;
	color: #666;
	text-align: center;
}


.dw{
    position: fixed;
   bottom: 0;
   width: 100%;
   z-index: 9999;
}

.go-back {
	background: #ff2c43;
}
.back {
	font-size: 30px;
	color: #fff;
	padding-left: 35px;
	margin-top: -4px;
	transform: scaleY(1.5);
    background-color: red;
    
}
.iconfont{
    font-size: 18px;
}
.red {
    color: red;
  
}
.nav-icon {
    font-size: 15px;
    
}
</style>