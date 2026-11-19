function bar(){
    console.log(myname)
}

function foo(){
    var myname = '张三';
    bar()
}
var myname = '刘少爷';
foo();
