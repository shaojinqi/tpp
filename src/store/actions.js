import {
    HQDIZHI,
    HQREYING,
    HQJIJIANSHANGYING,
    HQDIANYING,
    HQLUNBOTU,
    HQCINEMAXQ
}from './mutation-types.js'


import {
    hqdizhi,
    hqlunbotu,
    hqreying,
    cinemalist,
    hqcinemaxq
}from '../api/index.js';

export default {
    async getDizhi({commit}){
        let result = await hqdizhi()
        commit(HQDIZHI,{
            dizhi:result.data.returnValue
        })
    },

    async getLunbotu ({commit}){
        let result = await hqlunbotu()
            commit(HQLUNBOTU,{
                lunbotu:result.data.returnValue
            })
        
       
    },

    async  getreyin ({commit,state}){
        let {rN}=state
        let par ='?' +'city' + '=' + rN
        let result = await hqreying(par)
        // console.log(result.data);
        commit(HQREYING,{
            reying:result.data.returnValue
        })
    },

    async getcinema({commit,state}){
        let {rN}=state
        let par ='?' +'city' + '=' + rN
        let result = await cinemalist(par)
        // console.log(result.data.returnValue.regionCinemas.东城区[0]); 
        commit(HQDIANYING,{
            dianying:result.data.returnValue,
        })
    },
    
    async getcinemaxq({commit}){
        // let index
        let result = await hqcinemaxq()
        result.data.returnValue.forEach((item, index) => {
            // item.mID = index
            // console.log(result.data.returnValue[index].id);
          }) 
          commit(HQCINEMAXQ,{
            cinemaxq:result.data.returnValue,
            // cinemaid:result.data.returnValue[index].id
        })
            
    }
}