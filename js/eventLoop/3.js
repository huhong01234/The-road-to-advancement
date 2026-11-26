console.log(1);//1
setTimeout(() => {
  console.log(2);//3
  new Promise((resolve, reject) => {
    console.log(3);//4
    resolve()
  }).then(() => {
    console.log(4);//5
    setTimeout(() => {
      console.log(5);//7
    }, 0)
  }).then(() => {
    console.log(6);//6
  })
}, 0)
console.log(3);//2