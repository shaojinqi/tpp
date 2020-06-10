<template>
	<section id="cm-detail">
		<header class="cm-d-header">
			<div>
				<p class="tddd fb f16">{{ arrs.showName }}</p>
				<p class="tddd f13 c6">{{arrs.address  }}</p>
			</div>
		</header>
		<section class="cm-welfare cm-d-welfare">
			<span class="label-mod label-orange">新人专享</span>
			<span class="label-mod">新人特惠，名额有限抢完即止</span>
		</section>
		<section class="film-info">
			<film :lists="filmLists"></film>
			<div class="sel-film">
				<p class="fb">{{selFilm.showName }}</p>
				<div class="full-star pr cm-star">
					<div class="score-start" :style="{width: `${selFilm.remark*10}%`}"></div>
					<span class="score pa">{{selFilm.remark}}</span>
				</div>
			</div>
			<div class="sel-date pr">
				<ul @click="selectDateTab">
					<li :data-num="item.num" v-for="item in palyDate" :key="item.id">
						<span :data-num="item.num">{{ item.date}}</span>
						<span :data-num="item.num" class="font-icon">惠</span>
					</li>
				</ul>
				<span class="move pa" :style="{left: `${105*selDateNum}px`}"></span>
			</div>
			<div class="tips">温馨提示:开场前15分钟关闭在线售票</div>
		</section>

		<playdate :dataNum="selDateNum"></playdate>
		
      <section class="dw">
            <p  @click="goBack" class="back" style="width: 100%"> &lt; </p>
        </section>
  
	</section>

</template>

<script>
import {mapState} from 'vuex'
import film from '../components/film'
import playdate from '../components/playdate'
export default {
data() {
return {
	arrs:[],
	filmLists: [],
	selFilm:{},
	palyDate: [
	{date: '今天 12-15', num: 0},
	{date: '明天 12-16', num: 1},
	{date: '后天 12-17', num: 2},
	{date: '周五 12-18', num: 3}
   ],
   selDateNum: 0,

}
},
computed: {
    ...mapState(['cinemaxq','dianying'])
},
// 生命周期 - 创建完成（访问当前this实例）
created() {
			this.axios.get(`/api/movie/cinema_detail`).then((response)=> {
			let data = response.data
			this.filmLists = data.data.data.returnValue.shows
			this.selFilm = this.filmLists[0]
		})

	// $store.state.cinemaxq.id
   let id  = this.$route.params.id
	let cinemasj = this.$store.state.cinemaxq
    /* for (let i = 0; i < cinemasj.length; i++) {
		//  this.arrs = this.$store.state.cinemaxq
		 //将数据给到自己定义的arrs[]
	} */
    if(cinemasj.length){
        this.arrs = this.saixuans(cinemasj,id)
    }else if(!cinemasj.length){
        //   this.$router.push('/')
    }
},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

	this.$store.dispatch('getcinemaxq')
		// console.log(this.$route.path);
},
methods: {
			selectDateTab (event) {
			let num = event.target.getAttribute('data-num') //item.num值给到了data-num 所以有num值
			this.selDateNum = num          //通过动态样式 乘num 从而移动left
		},

      saixuans(data, id) {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].id === id) {
                        return data[i]
                    }
                }
                return false
			},
			

			 goBack(){
            this.$router.go(-1)
        }
  },
  components: {
		  film,
		  playdate
  }
}
</script>

<style>
#cm-detail {
	background: #fff;
	height: 100%;
}
.cm-d-header {
	padding: 13px 0 0 15px;
	box-sizing: border-box;
}
.cm-d-header>div {
	padding: 0 15px 13px 0;
	border-bottom: 1px solid #ebebeb;
}
.cm-d-header p:last-child {
	margin-top: 6px;
	color: #666;
}
.cm-d-welfare {
	padding: 0 15px 15px;
	margin-top: 15px;
}
.cm-d-welfare::after {
	content: '>';
	float: right;
	font-size: 16px;
	color: #999;
	font-weight: 100;
	transform: scaleY(1.3);
	line-height: 15px;
}
.film-info {
	background-color: #4685a4;
}
.sel-film {
	text-align: center;
	background-color: #fff;
	padding: 5px 0;
	border-bottom: 1px solid #ebebeb;
}
.sel-film p {
	font-size: 16px;
}
.cm-star {
	display: inline-block;
	margin: 3px 0 0 -29px;
	height: 15px;
	width: 73px;
}
.cm-star .score {
	right: -24px;
	font-size: 13px;
	top: 1px;
}
.sel-date {
	width: 100%;
	overflow: hidden;
	overflow-x: scroll;
}
.sel-date ul {
	width: 480px;
}
.sel-date li {
	float: left;
	width: 100px;
	height: 40px;
	line-height: 40px;
	background-color: #fff;
	font-size: 13px;
	color: #555;
	padding-left: 5px;
}
.font-icon {
	color: #fff;
	height: 20px;
	border-radius: 3px;
	background-color: #ff9201;
	margin-left: 5px;
}
.sel-date .move {
	width: 105px;
	transition: left .3s ease-in-out;
}
.tips {
	padding: 5px 15px;
	font-size: 12px;
	color: #ffa101;
    text-align: left;
    background-color: #fbf9e4;
    border-top: 1px solid #fbeccd;
    border-bottom: 1px solid #fbeccd;
}
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
	height: 0;
	background-color: transparent;
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


