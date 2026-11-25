let s='hello';
let n=10;
let b=true;
let u=undefined;
let nu=null;
let sym=Symbol('sym');
let bg=100n;


let obj={};
let arr=[];
let fn=function(){};
let date=new Date();
// console.log(obj instanceof Object);
// console.log(arr instanceof Array);
// console.log(fn instanceof Function);
// console.log(date instanceof Date);

// console.log(obj instanceof Array);//true, arr__proto__ === Array.prototype;
// console.log(arr instanceof Object);//true, Array.prototype.____proto__ === Object.prototype;

console.log(Object.prototype.toString.call(arr));
//Object.prototype.toString 它会读对象值的内部属性[[Class]]，而这个[[Class]]属性就是对象的类型。

