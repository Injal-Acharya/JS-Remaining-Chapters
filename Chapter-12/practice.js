// Problem-1: Write a JS program to print the following after 2 second delay
// Hello
// World

const promisee = async(word) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log(word));
        }, 1000);
    });
};

(
    async() => {
        // let a = await promisee("Hello");
        await promisee("Hello");
        // console.log(a);
        // let b = await promisee("World");
        await promisee("World");
        // console.log(b);
    }
) ();


// Problem-2: Write a JS program to find average of numbers in an array using spread syntax.

const array = [1, 2, 3, 4, 5];
const avg = ((a, b, c, d, e) => {
    return (a+b+c+d+e)/5;
});
console.log(avg(...array));

// Problem-3: Write a JS function which resolves a promise after n seconds. The function takes n as the parameter. Use an IIFE to execute the functions with different values of n.

const promise = async(word, n) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log(word));
        }, 1000*n);
    });
};

(
    async() => {
        // let a = await promise("Hello");
        await promise("Hello", 2);
        // console.log(a);
        // let b = await promise("World");
        await promise("World", 3);
        // console.log(b);
    }
) ();

// Problem-4: Write a simple interest calculator using JS.

const interest = ((p, t, r) => {
    return (p*t*r)/100;
});


let SI = interest(2000, 2, 7);
console.log(SI);
