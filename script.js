console.log("Carlos")
console.log("Khalid")
console.log("Dylan")










fetch("https://api.artic.edu/api/v1/artworks")
.then(response => response.json())

.then(function(response){
    
return response.json()     
})
.then(function (artList) {
    console.log(artList)
})
