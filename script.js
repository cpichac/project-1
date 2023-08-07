console.log("Carlos")
console.log("Khalid")
console.log("Dylan")

fetch("https://date.nager.at/api/v3/publicholidays/2023/AT")
  .then(response => response.json())
  .then(result => console.log(result))