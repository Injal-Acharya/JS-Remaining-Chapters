// Various types of errors and custom console.error

try {
    let age = prompt("Enter your age:")
    age = Number.parseInt(age)
    if(age > 150){
        // throw new Error("PROBABLY NOT TRUE")
        // throw new ReferenceError("PROBABLY NOT TRUE")
        throw new SyntaxError("Mistake in the syntax")
    }
    else
        console.log("That is an acceptable age")
}

catch(error) {
    // console.log(error)
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}
