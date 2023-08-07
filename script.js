console.log("Carlos")
console.log("Khalid")
console.log("Dylan")
let riseDisplay = document.querySelector("#sunriseTime")
let setDisplay = document.querySelector("#sunsetTime")
// Fetches and grabs sun data
fetch("https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400")
.then(function(response){

return response.json()     
})
// Sets text content of display span
.then(function (sunData) {
    let sunriseData = sunData.results.sunrise;
    let sunsetData =  sunData.results.sunset;
    riseDisplay.textContent = sunriseData;
    setDisplay.textContent = sunsetData;
})