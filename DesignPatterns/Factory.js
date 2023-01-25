class IOS{
	constructor(){
 	this.name = "IOS"
  }
}

class Andrpid{
	constructor(){
 	this.name = "Android"
  }
}

class MobileFactory{
	constructor(){
  }
  
  createMobile(str){
  	if(str==="IOS"){
    	return new IOS();
    } else if(str==="Android"){
    	return new Andrpid();
    } 
  }
}



obj= new MobileFactory()
console.log(obj.createMobile("IOS"))
console.log(obj.createMobile("Android"))
