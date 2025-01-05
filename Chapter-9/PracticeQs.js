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

let a = loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
a.then((value) => {
    console.log(value)
    alert("Script loaded successfully")
})

.catch((error) => {
    console.log(error)
})
