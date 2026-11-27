// let obj = {
//     a:1,
// };
// function foo(){
//     console.log(this.a);
// }
// foo.call(obj);


Function.prototype.mycall=function(context){
    //谁调用我，我就把谁里面的this指向context
    //谁调用我，我就把谁添加到context这个对象里面，再让context调用它。
    context.fn=this;
    //调用context.fn
    context.fn();
    //删除context.fn
    delete context.fn;

}
let obj = {
    a:1,
};
function foo(){
    console.log(this.a);//1
}
foo.mycall(obj);
