
var aStr = 'hello'
var bStr = 'elloh'
var tmpAObj = {};
var tmpBObj = {};
function isStringsAnagrams(aStr, bStr){
let result = false
if(aStr.length === bStr.length){
 result = true
 for(let i = 0; i<aStr.length;i++){
   if(!tmpAObj[aStr[i]]){
     tmpAObj[aStr[i]] = 1;
   } else{
     tmpAObj[aStr[i]] = tmpAObj[aStr[i]]+1;
   }
   if(!tmpBObj[bStr[i]]){
     tmpBObj[bStr[i]] = 1;
   } else{
     tmpBObj[bStr[i]] = tmpBObj[bStr[i]]+1;
   }
 }
 for(let i = 0; i<bStr.length;i++){
   if(tmpBObj[bStr[i]] !== tmpAObj[bStr[i]] ){
     result = false;
   } ;
 }
}
return result;
}
const result = isStringsAnagrams(aStr, bStr);
console.log(result ? 'Strings are anagrams.' : 'Strings are not anagrams.')

