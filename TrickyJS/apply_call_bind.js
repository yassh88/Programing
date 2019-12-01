var myObj = {a: 10};

function myFunction(b){
  return this.a + parseInt(b, 10);
}

var result = myFunction.call(myObj, 10);
console.log(result);

var result = myFunction.call(myObj, [20]);
console.log(result);

var result = myFunction.bind(myObj);
console.log(result(30));

---------
this.table = "Window table";

cleanTable= function(p1, p2){
  console.log(`cleaning table ${this.table}`)
  console.log(`p1 ${p1}`)
  console.log(`p2 ${p2}`)
};
cleanTable.call(this, 1, 3);
cleanTable.apply(this, [1, 3]);
var a  = cleanTable.bind(this);
a(1,2,3)
