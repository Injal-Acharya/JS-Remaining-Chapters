let a = {
    name: "Injal",
    Age: "Confidential",
    Marital_Status: "Not Married",
    run1: () => {
        alert("Hello World");
    }
}

let p = {
    key1: "This is a prototype object",
    run: () => {
        alert("This is run from prototype");
    }
}

p.__proto__ = {         //Now this object can also be accessed from the object 'a'. It can be nested to any level ig(HEHE)
    autorun: () => alert("Hello")
};

a.__proto__ = p;
a.run();
a.autorun();