# 对象
- js中万物皆对象



# 数据类型
1. 基本数据类型
 1. number   123
 2. string   'hello'
 3. boolean  true  false
 4. null
 5. undefined
 6. symbol
 7. bigint

2. 引用数据类型
 1. object   {}
 2. array    []
 3. function (){}
 4. date     new Date()
 5. regexp   /hello/
 6. error    new Error('hello')

# 构造函数
 - 被 new 调用的函数
 - 用于批量创建对象实例
 
1. js官方提供了 Object、Array、Date、RegExp、Error 等构造函数

## prototype  原型
 - 每一个函数都拥有的一个属性，且它还本身是一个对象


## __proto__ 对象原型（隐式对象）
- __proto__ 是对象天生拥有的一个属性，且它是一个对象

### 实例对象的隐式原型等于构造函数的显示原型
 V8引擎在访问对象的属性时，会先去查找对象本身显示拥有的属性，如果没有找到，就会去对象的隐式原型中查找。

# 包装类
 - 原始类型不能添加属性与方法

 1. 当用户创建一个字面量时，V8会默认执行 new Xxxx()，得到一个对象实例
 2. 因为原始类型不能添加属性与方法，所以V8在new出这个实例后，会立即做一个拆箱操作。
 3. 所以给原始类型添加属性和方法，最后访问得到的其实是实例对象上不存在的属性和方法，也就是undefined。