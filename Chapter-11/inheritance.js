class Animal {
    constructor (name, color) {                //Use of constructor
        this.name = name;
        this.color = color;
    };
    run () {
        console.log(`${this.name} is running`);
    }
    shout () {
        console.log(`${this.name} is Shouting`);
    };

    static onlyname (name) {                //Use of static keyword
        return new Animal(name, "Unknown");
    }

    printoutput () {
        console.log(`Name: ${this.name} and Color: ${this.color}`);
    }
};

class Monkey extends Animal {
    constructor (name, color, behavior) {       //constructor is automatically called along with  
        super(name, color);                     //this line even if not created manually in the child class
        this.behavior = behavior;
        console.log(`Monkey's behavior is ${behavior}`);
    };
    jump () {
        console.log(`${this.name} is jumping`);
    };
    run () {
        console.log(`${this.name} can only jump and not run`);   
    }
    shout () {
        super.shout();
        console.log("Method from super class has been called using 'super ()' keyword");
    }
};

let Animal1 = new Animal(`Harry`, `Pale orange`);
Animal1.shout();
Animal1.run();
Animal1.printoutput();
let Monkey1 = new Monkey(`Kumar`, `Pale yellow`, `chakchakey`);
Monkey1.jump();
Monkey1.run();
Monkey1.shout();
Monkey1.printoutput();

let Animal2 = Animal.onlyname('Anwit');
Animal2.printoutput();