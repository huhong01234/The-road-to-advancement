var person={
    name:'张三',
    age:18,
    like:{
        sport:'篮球',
        music:'摇滚'
    }//子对象也是对象
        
    
}
var person2={
    name:'李四',
    age:person.age,
    like:person.like

}
person2.like.sport='足球'
console.log(person2)

