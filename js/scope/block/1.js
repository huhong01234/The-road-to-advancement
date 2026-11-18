for(var i=0;i<5;i++){   //i会泄露到全局作用域，污染全局作用域
    console.log(i);
}
console.log(i);