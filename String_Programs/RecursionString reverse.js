// Try edit message
var data = 'message'


var reversString = '';
function revers(data) {
    if(data.length ===  1){
      return  reversString+data[0]
    }
    else {
      reversString = reversString +data[data.length-1]
      return  revers(data.substring(0, data.length-1));
    }
}
console.log(revers(data));
