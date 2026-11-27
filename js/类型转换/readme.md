# 弱类型语言
在定义变量的时候不需要定义变量的类型，变量的类型是执行时由执行引擎（v8）来确定的。




# ==（双等） vs ===（三等号）
 == 会发生类型转换，而 === 不会发送类型转换。

# 类型转换
1. 显示类型转换
   1. Number():将其他类型转换为数字类型
   2. String():将其他类型转换为字符串类型
   3. Boolean():将其他类型转换为布尔类型
 
2. 隐式类型转换
当代码出现四则运算符（+、-、*、/、==、<、>、！、!=）时，符号的左右两边不是原始值，V8引擎会自动进行类型转换，将非原始值转换为原始值。



# valueOf()、toString

valueOf()
toString()

# 引用类型转原始类型
1. 引用类型转字符串
 - 值调用toString()方法
 - 值调用valueOf()方法
 - String({})==>ToObject({})==>toString()对象原型上的==>"[object Object]"

2. 引用类型转Number
 - Number({})==>ToNumber({})==>ToPrimitive({},Number)==>ToNumber(xx)
3. 引用类型转布尔
 - 所有引用类型转换为布尔类型都为true。



## ToPrimitive(x,type)
1. 判断x是否为原始类型，如果是原始类型，直接返回x。
2. 调用x的 value（）方法，如果得到原始值，直接返回该值。
3. 调用x的 toString（）方法，如果得到原始值，直接返回该值。
4. 报错
## toString()
1. {}.toString() 对象版本的toString()方法，返回"[object Object]"
2. [1,2,3].toString() 数组版本的toString()方法，//"1,2,3"
3. 其他.toString() 其它类型版本的toString()方法。//直接用引号括起来


# + 
 - 作为一元运算符 +x=Number(x)
 - 作为二元运算符
  * 如果 + 左右两边但凡有一边为字符串，就将另外一边转换为字符串，进行拼接，结果为字符串。


 

