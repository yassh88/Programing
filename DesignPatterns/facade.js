class Light{
	constructor(){
  	this.roomLight = false;
  	this.livingRoomLight = false;
  }
  onLights(){
  	this.roomLight = true;
  	this.livingRoomLight = true;
  }
}

class ACs{
	constructor(){
  	this.roomAc = false;
  	this.livingRoomAc = false;
  }
  onAc(){
  	this.roomAc = true;
  	this.livingRoomAc = true;
  }
}


class PrepareHome{
  readdyHome(){
    this.light = new Light();
    this.ac = new ACs();
    this.light.onLights();
    this.ac.onAc();
    console.log("all readdy")
  }
  getStatus(){
  	return {'roomLight':  this.light.roomLight, 'livingRoomAc' : this.ac.livingRoomAc}
  }
}

// hidning the complexity in facade
const obj = new PrepareHome();
obj.readdyHome();
console.log(obj.getStatus())

