class user {
    constructor(name = "Unknown", contact = "Unknown") {        //Note that constructor overloading is not allowed in JS
        alert("A user object has been created using argument constructor")
        this.name = name;
        this.contact = contact;
    };

    print = () => {
        console.log("Username: " + this.name);
        console.log("Contact: " + this.contact);
    }
};

let User1 = new user;
let User2 = new user("Injal", 9803000000);
User1.print();
User2.print();