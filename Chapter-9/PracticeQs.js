const loadscript = async (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script')
        script.src = src
        script.onload = () => {
            resolve(src)
        }
        script.onerror = () => {
            reject("Script not loaded")
        }
        document.head.append(script)
    })
}

//Problem -1 Solution [Write a program to load a JS File in a browser using Promises. Use .then() to display an alert when the load is complete.]

// let a = loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
// a.then((value) => {
//     console.log(value)
//     alert("Script loaded successfully")
// })

// .catch((error) => {
//     console.log(error)
// })

//Problem -2 Solution [Write the same program from previous question and use async/await syntax]
// let b = async () => {
//     let c = await loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")   
//     alert("Script loaded successfully") 
// }

// b()

//Problem -3 Solution [Create a promise which rejects after 3 seconds. Use an async/await to get its value. Use a try catch to handle its error.]
// let a = async () => {
//     return new Promise((resolve, reject) => {
//         setTimeout (() => {
//             reject("This is not accepted")
//         }, 3000)
//     })
// }

// let b = async () => {
//     try {
//         let c = await a()
//         console.log(c)
//     }
//     catch(error) {
//         console.log("Error: " + error)
//     }
// }
// b()

//Problem -4 Solution [Write a program using Promise.all() inside an async/await to await 3 promises. Compare its results with the case where we await these promises one by one.]
let p1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10)
        }, 1000)
    })
}
let p2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(20)
        }, 2000)
    })
}
let p3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(30)
        }, 3000)
    })
}

let a = async () => {
    console.time("run: ")
    // let a1 = await p1()
    // let a2 = await p2()
    // let a3 = await p3()
    

    let a1 = p1()
    let a2 = p2()
    let a3 = p3()
    let a1a2a3 = await Promise.all([a1, a2, a3])
    console.log(a1a2a3)
    console.timeEnd("run: ")
}

a()
