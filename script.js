console.log("Carlos")
console.log("Khalid")
console.log("Dylan")


// fetch("https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1")
// .then(function(response){
    
// return response.json()     
// })
// .then(function (dogFact) {
//     console.log(dogFact)
// })


//pending
// fetch("http://api.anidb.net:9001/httpapi?request=anime")
// .then(function(response){
    
// return response.json()     
// })
// .then(function (anime) {
//     console.log(anime)
// })



//working api for city bikes.. (Khalid)
//this is the 
fetch("http://api.citybik.es/v2/networks")
.then(response => response.json())
.then(citiesFound => {
    let cityFound = citiesFound[0];
    console.log(cityFound)
    // return fetch(`http://api.citybik.es/v2/networks`)

    for (let i = 0; i < citiesFound.length; i++) {
        let cityInput = document.querySelector("#cityInput")
        
    }






// return response.json()     
// })
// .then(function () {
//     console.log()
})



// fetch("https://api.chess.com/pub/player/hikaru")
// .then(function(response){
    
// return response.json()     
// })
// .then(function (anime) {
//     console.log(anime)
// })

