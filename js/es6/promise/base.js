// let a=1
// console.log(a)//不耗时  ,同步代码

// for(let i=0;i<10000;i++){
//     console.log(i)
// }//不耗时  ,同步代码




// setTimeout(()=>{   //回调函数
//     console.log('1秒后执行')//耗时  ,异步代码
// },1000)

// setInterval(()=>{           //回调函数
//     console.log('1秒后执行')//耗时  ,异步代码
// },1000)

fetch('https://mock.mengxuegu.com/mock/66585c4db462b81cb3916d3e/songer/songer')
    .then(res=>res.json())
    .then(data=>console.log(data))



