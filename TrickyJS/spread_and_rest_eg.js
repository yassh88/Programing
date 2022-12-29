var a = {b: 1, c:3};
var z = {...a, w:10, x:12}

console.log(z);

a = [1,2,3];
z= [4,5, ...a];
console.log(z);

const sum = (...arg) =>{
	console.log(arg.reduce((a,c)=>a+c))
};

sum(2,3,4);
sum(1,2,5,6,7,2,3,4);
