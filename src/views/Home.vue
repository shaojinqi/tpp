<template>
   <section style="height: 100%">
          <cszj v-if='yincang' ></cszj>
          <header class="home-header border-bottom">
            
            <div class="city fl">
              <span class=" city-name f14" >{{dizhi.names}}</span>
              <router-link to="/chengshi"><span class="city-arrow-icon vm"></span></router-link>
            </div>
            <div class="sel-lists f14 fl pr" @click='Tab'>
              <div hot='sel' :class="{selnav:selnav}">正在热映</div>
              <div :class="{selnavs :selnavs}">即将上映</div>
              <span class="move pa" :style="{left:moveDistance}"></span>
            
            </div>
           
          </header>
          <section  v-show="selnav">
             <lunbotu></lunbotu>    
             <movlist></movlist>  
          </section>
           
           <section v-show="!selnav">
              <symovie></symovie>

           </section>
          
        </section>
</template>

<script>
import {mapState} from 'vuex'
  import cszj from '../components/cszj'
  import lunbotu from '../components/lunbotu'
  import movlist from '../components/movlist'
  import symovie from '../components/symovie'

export default {
  data () {
    return {
       selnav: true,
       selnavs:false,
       moveDistance: '6%',
       yincang:false,
    }
  },
  created () {
    if(this.$store.state.dizhi.names==''){
      this.$store.state.dizhi.names='请选择区域'
    }
  },
   computed: {
      //  ...mapState(['dizhi','cinemaxq']),
       ...mapState(['dizhi']),
    },
  methods: {
     Tab(event){
            console.log(event.target.innerHTML);
            if(event.target.innerHTML=='正在热映'){
               this.selnav = true
               this.selnavs = false
               this.moveDistance = '5%'
            }
            if(event.target.innerHTML=='即将上映'){
                this.selnavs = true
                this.selnav = false
                this.moveDistance = '55%'
            }

            event.target.getAttribute('hot')?this.hotTab():this.movieTab()
        },
      
        hotTab(){
          this.selnav = true
        },
        movieTab(){
          this.selnav = false
        }
  },
  mounted () {
    // this.$store.dispatch('getcinemaxq')
  },
   components: {
     cszj,
     lunbotu,
     movlist,
     symovie,
   }

}
</script>




<style>
 .vm{
    margin-bottom: 7px;
 }
.home-header {
  height: 40px;
  font-size: 0px;
  background-color: #fff;
}
.selnav {
  color: #ff4d64;
}
.city {
  width: 35%;
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
.content {
  margin-bottom: 58px;
}
.sel-lists {
  width: 65%;
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
.move {
  display: inline-block;
  bottom: 0px;
  width: 40%;
  border-bottom: 3px solid #ff4d64;
  -webkit-transition: left 0.7s ease-in-out;
  transition: left 0.7s ease-in-out;
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
