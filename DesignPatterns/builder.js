class MyBuilder{
	constructor(){
  this.a='';
  this.b='';
  }
	addA(v){
  	this.a =v;
  	return this;
  }
  addB(v){
  	this.b =v;
  	return this;
  }
}

obj= new MyBuilder()
console.log(obj.addA(1).addB(2))
