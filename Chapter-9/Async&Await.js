async function injal () {
    let SindhuliWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("20 Deg")
    }, 3000)
    })

    let KtmWeather = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve("7 Deg")
    }, 6000)
    })

    console.log("Fetching Sindhuli weather...")
    let Sweather = await SindhuliWeather
    console.log("Fetched Sindhuli weather : " + Sweather)
    console.log("Fetching Kathmandu weather...")
    let Kweather = await KtmWeather
    console.log("Fetched Kathmandu weather : " + Kweather)
}

injal()