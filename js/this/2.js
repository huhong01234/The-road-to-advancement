// var a = 1

// function foo() {
//   var a = 2
//   console.log(this.a);  // 1
// }

// foo()


// var a = 1
// function foo() {
//   var a = 2
//   bar()
// }
// function bar() {
//   var a = 3
//   console.log(this.a);
// }
// foo()



var a = 1
function foo() {
  var a = 2
  function bar() {
    var a = 3
    console.log(this.a);
  }
  bar()
}
foo()