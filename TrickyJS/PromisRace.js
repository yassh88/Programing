var p1  = new Promise((resolve, rejected)=>{
  resolve("message 1")
});
var p2  = new Promise((resolve, rejected)=>{
  resolve("message 2")
});
var p3  = new Promise((resolve, rejected)=>{
  resolve("message 3")
});


Promise.race([p1,p2,p3]).then((messages)=>{
  console.log(messages)
}).catch(function(reasons) {
    console.log(`Didn't get any offers...`, reasons)
});
