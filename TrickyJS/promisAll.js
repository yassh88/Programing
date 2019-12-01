var p1  = new Promise((resolve, rejected)=>{
  resolve("message 1")
});
var p2  = new Promise((resolve, rejected)=>{
  resolve("message 2")
});
var p3  = new Promise((resolve, rejected)=>{
  resolve("message 2")
});


Promise.all([p1,p2,p3]).then((messages)=>{
  console.log(messages)
})
