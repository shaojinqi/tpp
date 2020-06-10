<template>
    <section id='hot'>
      
        <ul>
            <li  v-for='(item,index) in reying' :key="index">
                
                <figure class="m-img ml fl pr" @click='shipin(item)'>
                                <!-- 点击当前图，表示当前项item -->
                    <img :src="imgs + item.poster">  
                </figure>
              <div class="mr border-bottom">
                  <div class="m-buy fr">
                      <button class="buy-btn f12" v-if="item.openTime < '2016-12-09'">购买</button>
                      <button class="forward-buy-btn f12" v-else>预售</button>
                  </div>
                  <router-link :to="{ name: 'detail', params: { id: item.mID }}">
					  <!-- 跳转到name值为datail的路由下 也就是显示路由下的MovieDetail组件 -->
					  <!-- item.mID ：在mutations里面遍历了数据 遍历数据加上mID数据(因为没有id数据)根据动态路由name不同，所显示页面数据不同-->
                      <div class="m-info">
                          <div class="m-name">
                                                                 <!-- 电音名 -->
                              <h2 class="f16 tddd vm fl">{{item.showName}}</h2>
                              <div class="vm type-3dimax" v-if="item.showMark == 'IMAX3D'"></div>
                              <div class="vm type-imax" v-if="item.showMark == 'IMAX'"></div>
                              <div class="vm type-3d" v-if="item.showMark == '3D'"></div>
                          </div>
                          <div class="full-star pr">
                              <div class="score-start" :style="{width: `${item.remark * 10}%`}"></div>
                                                         <!-- 评分 -->
                              <span class="score pa">{{item.remark}}</span>
                          </div>
                               <!-- 简介 -->
                          <p>{{ item.highlight }}</p>
                          <p>{{ item.leadingRole}}</p>
                      </div>
                  </router-link>		
              </div>
              <div class="f13 m-act">
                  <span class="border-right">1212五折狂欢</span>
                  <span class="tddd">1212特惠抢票，名额有限抢完即止</span>
              </div>
            </li> 		
        </ul>
		 <playVideo :items="myitems" ref='item'></playVideo>
    </section>
</template>

<script>
  import playVideo from './playVideo'
     import {mapActions,mapState,mapMutations} from 'vuex'
export default {
    props: {

    },
    data() {
        return {
           imgs:'https://gw.alicdn.com/',
		  myitems:{},
        };
    },
    computed: {
        ...mapState(['reying']),
    },
    created() {
           
    },
    mounted() {
      this.$store.dispatch('getreyin')
    },
    watch: {

    },
    methods: {
		...mapMutations([
  		'hqreying'
	  ]),
	  
	//   点击显示视频
	
		shipin(item){
			this.myitems = item            /* 将点击的项给myitems，在传给子组件 */
			this.$refs.item.transfer()        /* 通过ref调用子组件的方法 */
         }
    },
    components: {
		  playVideo
    },
};
</script>

<style>
#hot {
	padding-left: 15px;
	box-sizing: border-box;
	margin-bottom: 10px;
	background: #fff;
}
#hot li {
	padding-top: 15px;
}
.m-img {
	width: 65px;
	height: 90px;
}
.m-img img {
	opacity: 0.7;
	transition: opacity .7s ease-in;
}
.m-img img,
.play-icon img {
	width: 100%;
	height: 100%;
}
.play-icon {
	width: 17px;
	height: 17px;
	left: 50%;
	top: 50%;
	margin-left: -8.5px;
	margin-top: -8.5px;
	display: none;
}
.m-act,
.mr {
	margin-left: 76px;
}
.m-act {
	margin-right: 15px;
}
.mr {
	padding: 0 15px 23px 0;
	box-sizing: border-box;
}
.m-buy {
	margin-top: 30px;
}
.buy-btn,
.forward-buy-btn {
	height: 24px;
	width: 45px;
	line-height: 20px;
	text-align: center;
	background-color: #fff;
	outline: none;
	border-radius: 3px;
	font-weight: bold;
}
.buy-btn {
	border: 1px solid #ff4d64;
	color: #ff4d64;
}
.forward-buy-btn  {
	border: 1px solid #37b7ff;
	color: #37b7ff;
}
.full-star {
	margin-top: 7px;
  width: 50px;
  height: 10px;
  background-size: auto 100%;
  background-image: url('../assets/images/nostart.svg');
}
.score-start {
	width: 100%;
	height: 100%;
	background-size: auto 100%;
	background-image: url('../assets/images/star.svg');
}
.score {
	right: -21px;
	top: -1px;
	font-size: 10px;
	color: #9c9c9c;
}
.m-info {
	margin-right: 50px;
}
.m-info h2 {
	margin-top: 3px;
	max-width: 68%;
	display: inline-block;
}
.m-info span {
	display: inline-block;
}
.m-info p:nth-of-type(1) {
	margin-top: 12px;
}
.m-info p:nth-of-type(2) {
	margin-top: 6px;
}
.m-info p {
	font-size: 13px;
	color: #9c9c9c;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
}
.m-act {
	display: -webkit-flex; 
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	margin-top: 8px;
	padding-bottom: 8px;
}
.m-act span:first-child {
	color: #fea54c;
}
.m-act span:last-child {
	color: #9c9c9c;
	text-indent: 8px;
}
.m-act span {
	box-sizing: border-box;
	width: 50%;
	display: inline-block;
}
.m-name {
	height: 20px;
	color: #333;
}
.type-3d {
	margin-top: 5px;
	width: 17px;
  height: 17px;
	background-image: url('../assets/images/3d.svg');
}
.type-imax {
	margin-top: 5px;
	width: 27px;
  height: 15px;
	background-image: url('../assets/images/imax.svg');
}
.type-3dimax {
	margin-top: 5px;
	width: 45px;
	height: 17px;
	background-image: url('../assets/images/3dimax.svg');
}
.type-3d,
.type-imax,
.type-3dimax {
	margin-left: 5px;
	background-size: 100%;
	background-repeat: no-repeat;
	float: left;
}
</style>
