
function add(){
    let count = 0;
    count=count+1;
    return function(){
        count++;
        return count;
    };
}
let bar = add();


