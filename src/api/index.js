import ajax from './ajax'
 

export const hqdizhi = () => ajax('/api/movie/city')

export const hqlunbotu=()=>ajax('/api/movie/swiper')

export const hqreying = (params) => ajax('/api/movie/hot/'+ params)
// export const hqreying = () => ajax('/api/movie/hot/?city=sh')

export const cinemalist = (par)=>ajax('/api/movie/cinema/'+ par)   

export const hqxq=()=>ajax('/xiangqing')    

export const hqcinemaxq = ()=>ajax('/api/movie/coming/?limit=20&offset=0')
//获取影院详情 