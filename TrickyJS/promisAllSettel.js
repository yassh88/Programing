var p1  = new Promise((resolve, rejected)=>{
  rejected("message 1")
});
var p2  = new Promise((resolve, rejected)=>{
  rejected("message 2")
});
var p3  = new Promise((resolve, rejected)=>{
  rejected("message 2")
});


Promise.allSettled([p2,p1,p3]).then((messages)=>{
  console.log(messages)
}).catch(function(reasons) {
    console.log(`Didn't get any offers...`, reasons)
});


output

(3) [
{
status:"rejected",
reason:"message 2"
},
{
status:"rejected",
reason:"message 1"
},
{
status:"rejected",
reason:"message 2"
}
]
