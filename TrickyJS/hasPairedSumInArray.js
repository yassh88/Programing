let a = [1,1,2,4,5,9];

const hasPairedSumInArray = (a, sum)=>{
  let result = false;
  let sumSet = new Set();
  a.forEach(item=>{
    if(sumSet.has(item)){
      result = true;
    } else {
      sumSet.add(sum - item)
    }
  })
  return result;
}


console.log("output", hasPairedSumInArray(a,2));
