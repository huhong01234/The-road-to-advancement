let arr = []  // 1. new Array()   数组也是对象
arr.push(1)   // 2. arr 就是  Array创建的实例对象  // arr.__proto__  === Array.prototype
console.log(arr);













Car.prototype.push = function() {
  console.log('push 执行了');
}
function Car(color) {
  this.name = 'su7'
  this.color = color
}

let car1 = new Car('red')  // 构造函数中拥有的属性最终都会成为对象实例的属性
// car1.__proto__  === Car.prototype

car1.push()