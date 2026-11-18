function foo(str) {
    eval(str);
    console.log(a,b);
}
let a=1;

foo("var b=2;");
