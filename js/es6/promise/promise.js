Promise.prototype.then=function(thenCB,catchCB){
    this.arr.push(thenCB)
    this.catchArr.push(catchCB)
}


Promise.prototype.catch=function(catchCB){
    this.catchArr.push(catchCB)
}



function Promise(fn){
    this.status='pending'//状态
    this.arr=[thenCB]
    this.catchArr=[catchCB]

    const resolve=()=>{
        this.status='fulfilled'//成功状态
        for(let i=0;i<this.arr.length;i++){
            this.arr[i]()
        }
    }
    const reject=()=>{
        this.status='rejected'//失败状态
        for(let i=0;i<this.catchArr.length;i++){
            this.catchArr[i]()
        }
        
    }



    fn(resolve,reject)
    
}
let p= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve()
    },3000)
})
p.then(()=>{    //then里面执行的代码想要执行，必须保证状态是成功状态
    foo()
})
.catch(()=>{
    bar()
})