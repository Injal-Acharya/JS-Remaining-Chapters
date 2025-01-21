class Bike {
    constructor (name) {
        this.naam = name;
    }
    run () {
        console.log("Bike is running");
    }

    get name() {
        return this.naam;
    }

    set name(newName) {
        this.naam = newName;
    }
}

class Yamaha extends Bike {
    speed () {
        console.log("Yamaha has high speed");
    }
}

let Bike1 = new Bike("SpeedRally");
let Yam1 = new Yamaha;
console.log(Bike1.name);
Yam1.name = "RayZR";
console.log(Yam1.name);

console.log(Bike1 instanceof Bike);
console.log(Yam1 instanceof Bike);
console.log(Bike1 instanceof Yamaha);