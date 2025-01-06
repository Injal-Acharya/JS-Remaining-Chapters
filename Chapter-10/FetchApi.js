let p = fetch("https://api.worldbank.org/v2/region?format=json")
p.then((response) => {
    console.log(response.status)
    console.log(response.ok)
    // return response.text()
    return response.json()
}).then((value) => {
    console.log(value)
})
