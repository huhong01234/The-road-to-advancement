const n = 123   // new Number(123)
n.a = 2   // 正在往数字对象上添加一个属性 a  但是立马会被删除
// console.log(n); // [[PrimitiveValue]]  123
console.log(n.a); // undefined