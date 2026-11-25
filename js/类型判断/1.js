function add(a, b){
    if(typeof a !== 'number' || typeof b !== 'number'){
        throw new Error('参数必须是数字');
    }
    return a + b;
}

console.log(add(1, '2'));
