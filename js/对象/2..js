let obj = { // 创建对象字面量
  name: '杨总',
  age: 18,
}

obj.girlfirend = '章若楠'
obj.age = 19

delete obj.girlfirend

let a = 'hello'
obj[a] = 'world'


console.log(obj);