// var obj={
//     name:'张三',
//     age:18,

// }
// function foo(o){
//     o.age=20
//     var person=o
//     person.age=30
//     console.log(obj)
//     console.log(person)

// }
// obj.age=19
// foo(obj)



var obj={
    name:'张三',
    age:18,

}
function foo(o){

    
    var person={}
    person.name=o.name
    person.age=o.age
    person.age=20
    console.log(obj)
    console.log(person)

}
obj.age=19
foo(obj)