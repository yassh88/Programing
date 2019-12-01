a=[1,34,55,11,67,34,66,6,8];
r=[];
r2=[]
console.log(a.sort())
console.log(a.sort(function(b, c){
  r.push(b-c)
  r2.push(b>c)
  return b-c
  }));
 console.log(r)
 console.log(r2)
