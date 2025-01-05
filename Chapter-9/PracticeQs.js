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

//Problem -1 Solution 

// let a = loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
// a.then((value) => {
//     console.log(value)
//     alert("Script loaded successfully")
// })

// .catch((error) => {
//     console.log(error)
// })

//Problem -2 Solution 
// let b = async () => {
//     let c = await loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")   
//     alert("Script loaded successfully") 
// }

// b()

//Problem -3 Solution
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

