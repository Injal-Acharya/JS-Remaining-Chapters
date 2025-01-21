
// //Problem-1: Create a JS class to create a complex number. Create a constructor to set the real and the complex part.
// class complex {
//     constructor (real, imaginary) {
//         this.real = real;
//         this.imaginary = imaginary;
//     }

//     //Problem-2: Write a method to add two complex numbers in the above class.
//     addNum (N1, N2) {                   
//         this.real = N1.real + N2.real;
//         this.imaginary = N1.imaginary + N2.imaginary;
//         console.log("Two complex numbers added!");
//     }
//     print () {
//         console.log(`Complex Number is: ${this.real}+${this.imaginary}i`);
//     }
// }

// let numb1 = new complex(2, 4);
// numb1.print();
// let numb2 = new complex(5, 3);
// numb2.print();
// let totalNumb = new complex;
// totalNumb.addNum(numb1, numb2);
// totalNumb.print();

//Problem-3: Create a class student from a class Human. Override a method & see changes.
class Human {
    constructor (gender, age) {
        this.gender = gender;
        this.age = age;
    }
    changeGender (newGender) {
        this.gender = newGender;
        console.log("Gender of a human has been changed");
    }
}

class student extends Human {
    changeGender (newGender) {
        this.gender = newGender;
        console.log("Gender of a student has been changed");
    }
}

let person = new Human("female", 19);
person.changeGender("male");
let s1 = new student("male", 22);
s1.changeGender("Other");

//Problem-4: See if Student is an instance of Human using instanceof keyword.
console.log(s1 instanceof Human);