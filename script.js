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



//working
fetch("http://api.citybik.es/v2/networks")
.then(function(response){
    
return response.json()     
})
.then(function (anime) {
    console.log(anime)
})



// fetch("https://api.chess.com/pub/player/hikaru")
// .then(function(response){
    
// return response.json()     
// })
// .then(function (anime) {
//     console.log(anime)
// })

