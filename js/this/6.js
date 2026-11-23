// function foo(){
//     function bar(){
//         this.a=2
//     }
//     bar()
// }
// let obj={
//     a:1,
//     baz:foo
// }
// obj.baz()
// console.log(obj)



function foo(){
    let bar=()=>{//箭头函数不存在this指针
        this.a=2
    }
    bar()
}
let obj={
    a:1,
    baz:foo
}
obj.baz()
console.log(obj)