import axios from 'axios'


export default function ajax(url,data={},type='get'){

let myPromise
return new Promise(function(resolve,reject){
if(type=='get'){
let dataStr = ''
Object.keys(data).forEach(key=>{
dataStr += key + '=' + data[key] + '&'
})

if(dataStr !== ''){
var index = dataStr.lastIndexOf('&')
dataStr = dataStr.substring(0,index)
url = url+'?'+dataStr
myPromise = axios.get(url)
}else{
myPromise = axios.get(url)
}
}else {
myPromise = axios.post(url,data)
}


myPromise.then(res=>{
resolve(res.data.data)
}).catch(err=>{
reject(err)
})

})


}

