let a = ['a', 't', 'c'];
let b = ['k', 'l', 'd'];

const isSecArrayValuesInFirstArray = (a, b)=>{
  let firstArrayObj = {};
  let result = false;
  a.forEach(item=>{
    firstArrayObj[item]=true;
  })
  b.forEach(item=>{
    if(firstArrayObj[item]){
      result = true;
    }
  })
  return result;
}


console.log("output", isSecArrayValuesInFirstArray(a,b));
