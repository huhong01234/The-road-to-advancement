function xq(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('刘少相中了')
            resolve()
        },3000)    
    })
   
}

function marry(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('刘少结婚了')
            resolve()
        },2000)
    })
}


function baby(){
    setTimeout(()=>{
        console.log('刘少生了一个孩子')
    },1000)
}
xq()
.then(()=>{//then的源码也会返回一个Promise实例对象，它的状态是继承前面的Promise实例对象的状态。
    return marry()//如果人为返回一个promise实例对象，那么then就不会启用自己的返回，而是会采用新返回的promise实例对象的状态
    
})
.then(()=>{
        baby()
})



