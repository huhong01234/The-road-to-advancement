# 类型
1. 原始类型：string、number、boolean、null、undefined、symbol、bigint
2. 引用类型：object、function、array、date

# typeof
1. typeof 可以准确判断除了null之外的所有类型。它的判断原理是，将变量值转换为二进制，通过判断前三位是否为0，来判断变量是不是原始类型，如果是原始类型，就返回原始类型的类型，如果是引用类型，就返回object。但是null被转换成二进制后，前三位为0，所以返回object。

2. typeof 判断引用类型时，返回object。但是function可以判断出是function类型。

# instanceof 
1. a instanceof b 用于判断a是否是隶属于b这种类型的（a是b的实例对象）。
2. instanceof 运算符的判断原理是，判断a的__proto__是否等于b.prototype,如果不等就会顺着原型链一直往上查找a的__proto__直到找到null。如果等于，就返回true，如果不等于，就返回false。如果a的__proto__等于null，就返回false。



# Object.prototype.toString.call(x).slice(8,-1)

# Array.isArray()
专门用于判断一个值是否为数组类型。