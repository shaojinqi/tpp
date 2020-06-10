import Vue from 'vue'

import {
    HQDIZHI,
    HQREYING,
    HQDIANYING,
    HQLUNBOTU,
    HQXQ,
    HQCINEMAXQ,
}from './mutation-types.js'

export default {
    [HQDIZHI] (state,{ dizhi }){
      

        state.dizhi = dizhi
    },

    [HQLUNBOTU] (state,{lunbotu}){
        state.lunbotu = lunbotu
    },

    [HQREYING] (state,{reying}){
        state.reying=reying
        reying.forEach((item, index) => {
            item.mID = index
            
          })  

    },
    [HQDIANYING](state,{dianying}){
        state.dianying = dianying
        // dianyingid.forEach((item, index) => {
        //     item.mID = index
            
        //   }) 
    },
    [HQCINEMAXQ](state,{cinemaxq}){
        state.cinemaxq = cinemaxq
        cinemaxq.forEach((item, index) => {
            item.mID = index
            
          }) 
    }
}