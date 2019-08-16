// Try edit message
var data = 'The edit message'

function replaceAt(string, index, replace) {
  return string.substring(0, index) + replace + string.substring(index + 1);
}

function revers(data) {
  for(var i = data.length-1 ; i >=(data.length/2); i--){
    const tmp = data[i]; ;
    data = replaceAt(data, i, data[(data.length-1)-i]);
    data = replaceAt(data, (data.length-1)-i, tmp);
  }
  return data;
}
console.log(revers(data));
