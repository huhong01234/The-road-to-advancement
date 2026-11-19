function foo(){
    var age = 18;
    let height = 1.88;
    function bar(){
        console.log(age)
    }
    return bar;
}
var baz = foo();
baz();
