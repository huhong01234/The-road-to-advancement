// 用栈实现队列
const MyQueue = function() {
    this.stack1 = []
    this.stack2 = []
}
// 入队
MyQueue.prototype.push = function(x) {
    this.stack1.push(x)
}
// 出队
MyQueue.prototype.pop = function() {
    if(this.stack1.length){
        while(this.stack1.length){
            this.stack2.push(this.stack1.pop())
        }
        
    }
    return this.stack2.pop()
}















const queue = new MyQueue()//得到一个队列
queue.push(1)
queue.push(2)
queue.push(3)
console.log(queue.pop())
console.log(queue.pop())
console.log(queue.pop())




