class Car {
    startEngine() {
        console.log("Engine started.");
    }

    drive() {
        console.log("Car is driving.");
    }

    stop() {
        console.log("Car stopped.");
    }
}

class CarProxy {
    constructor() {
        this.car = new Car();
    }

    startEngine() {
        if (this.checkDriverAge()) {
            this.car.startEngine();
        } else {
            console.log("Driver is too young to drive.");
        }
    }

    checkDriverAge() {
        // check the driver's age here
    }
}

const myCar = new CarProxy();
myCar.startEngine();
