// Try edit message

function getFirstNonRepeated(str) {
  var tmpObj = {};
  for(var i=0;i<data.length;i++){
    if(tmpObj[data[i]]){
      tmpObj[data[i]] = tmpObj[data[i]]+1;
    } else {
      tmpObj[data[i]]=1
    }
  }
  for(i=0;i<data.length;i++){
    if(tmpObj[data[i]]===1){
      return data[i];
    }
  }
  return 'No Repeated character exist'
}

const data = 'gitHub'
console.log(getFirstNonRepeated(data));
