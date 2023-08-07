console.log("Carlos")
console.log("Khalid")
console.log("Dylan")



let citySearch = document.querySelector("#inputCity")


//working api for city bikes.. (Khalid)
//this is the 
citySearch.addEventListener("click", function(event){

    fetch("http://api.citybik.es/v2/networks")
    .then(response => response.json())
    .then(data=> {

        console.log(data.networks[0])






    // return response.json()     
    // })
    // .then(function () {
    //     console.log()
    })
})


// fetch("https://api.chess.com/pub/player/hikaru")
// .then(function(response){
    
// return response.json()     
// })
// .then(function (anime) {
//     console.log(anime)
// })

