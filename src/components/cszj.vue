<template>
  <section ref="city" id="select-city" class="pf fadeInDown uls" v-if="yincang">
    <header class="city-header mint-1px-b pr">
      <span class="fb">选择城市</span>

      <span @click="guanbi" class="close-city pa">×</span>
    </header>
    <div ref='weizhi' @click="hqdf">
      <mt-index-list>
        <mt-index-section  :index="city.sort" v-for="city in cityList" :key="city.id">
			    <mt-cell :title="name.regionName" v-for="name in city.data" :key="name.id"></mt-cell>
        </mt-index-section>
      </mt-index-list>
    </div>
  </section>
</template>
 
<script>
import { IndexList, IndexSection } from "mint-ui";
import { mapState, mapMutations } from "vuex";
import BScroll from "better-scroll";
//   import dianying from '../../src/views/dianying/dianying'
export default {
  props: {},
  data() {
    return {
      yincang: true,
      cityList: [],
      cityObj:{},          //将vuex中地址数据放进去
    };
  },
  computed: {
    ...mapState(["dizhi"])
  },
  created() {
    this.cityObj = this.$store.state.dizhi; //将vuex中地址数据放进去
    this.cityList.push({             //自定义数据push到数组中，做为首项
      sort: "热门",
      data: [
        {
          regionName: "北京",
          id: 1,
          rN: "bj"
        },
        {
          regionName: "上海",
          id: 2,
          rN: "sh"
        },
        {
          regionName: "广州",
          id: 3,
          rN: "gz"
        }
      ]
    });
    Object.keys(this.cityObj).forEach((item)=>{
      this.cityList.push({
        sort:item,           /* 对象数据 key值给到sort */
        data:this.cityObj[item]     //key对应数据项给到data
      })
    })
  },
  mounted() {
    this.$store.dispatch("getDizhi");
  },
  watch: {},
  methods: {
    matchCityStr(str){   //根据参数str，返回地址参数
    let randomList = ['bj', 'sh', 'gz']
    			switch (str) {
				case '北京': return 'bj'
				case '上海': return 'sh'
				case '广州': return 'gz'
				default: 'bj'
			}
    },
     hqdf(event){
        //  console.log(event.target);
        let name=''
        let ele = event.target.children[0].innerText
        // console.log(ele);
        if(ele){
          name=ele    //点击此事件中，元素内的event.有我们所需的name
        }
        if(name){
       this.$store.state.rN = this.matchCityStr(name)  //通过matchCityStr方法返回的字符，给到state中rN，从而改变actions中请求中的参数
          this.$store.state.dizhi.names=name    //我们home用的是state中的names，可以在这里直接改变它的值
          this.$router.go(-1) 
        }
        
      },
      guanbi() {
      this.$router.go(-1);
      this.$store.state.dizhi.names=name
    },
  },
  components: {

  }
};
</script>

<style>
.mint-indicator-wrapper {
  z-index: 1000;
}

#select-city {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999999;
  background-color: #fff;
}

.city-header {
  height: 46px;
  line-height: 46px;
  text-align: center;
  color: #000;
  font-size: 16px;
  background-color: #fff;
}

.close-city {
  font-size: 28px;
  color: #666;
  display: inline-block;
  height: 46px;
  width: 50px;
  line-height: 38px;
  text-align: center;
  right: 0px;
}

@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0.7;
    -webkit-transform: translateY(-50px);
    transform: translateY(-50px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0.7;
    -webkit-transform: translateY(-50px);
    -ms-transform: translateY(-50px);
    transform: translateY(-50px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
}

.fadeInDown {
  -webkit-animation: fadeInDown 0.3s;
  animation: fadeInDown 0.3s;
}

@-webkit-keyframes fadeOutTop {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(-50px);
    transform: translateY(-50px);
  }
}

@keyframes fadeOutTop {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(-50px);
    -ms-transform: translateY(-50px);
    transform: translateY(-50px);
  }
}

.fadeOutTop {
  -webkit-animation: fadeOutTop 0.35s;
  animation: fadeOutTop 0.35s;
}
.gg {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid black;
  line-height: 50px;
}
.uls {
  overflow: auto;
}
.zm {
  width: 100%;
  height: 40px;
  line-height: 40px;
}
</style>