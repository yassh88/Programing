function mergeArrays(x, y){
    var resultArr = [];
    var testObj={};
    for(var i=0;i< x.length; i++){
        if(testObj[x[i].id] !== true ){
            testObj[x[i].id] = true;
        } 
    }
    for(var k=0;k< y.length; k++){
        if(testObj[y[k].id] !== true ){
            testObj[y[k].id] = true;
        }
    }
    for(obj  in  testObj){
      resultArr.push(parseInt(obj));
    }
    resultArr = resultArr.sort((a,b)=> a-b)
    var result = [];
    for(var k=0;k< resultArr.length; k++){
        result.push({'id': resultArr[k]})
    }
    return result;
}

console.log(mergeArrays([{id:1}, {id:18}, {id:2}, {id:11} ],
 [{id:1}, {id:18}, {id:2}, {id:4} ]));
