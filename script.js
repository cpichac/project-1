console.log("Carlos")
console.log("Khalid")
console.log("Dylan")

let holidayList = document.querySelector("option").value;
let selectHoliday = document.querySelector("#select-holiday")
let dateEl = document.querySelector("p")









fetch("https://api.artic.edu/api/v1/artworks")
.then(response => response.json())

.then(function(response){
    
return response.json()     
})
.then(function (artList) {
    console.log(artList)
})



fetch("https://date.nager.at/api/v3/publicholidays/2023/AT")
  .then(response => response.json())
  .then(result => {
    let holidayName = result[0].name;
    let holidayDate = result[0].date;

    console.log(holidayDate);
    console.log(holidayName);

        for (let i = 0; i < result.length; i++) {
            let hName = result[i].name;
            let hDate = result[i].date;
            
            let holidayEl = document.createElement("option");

            holidayEl.setAttribute("value", hName);
            holidayEl.textContent = (hName);

            console.log(holidayEl);

            selectHoliday.append(holidayEl);

            localStorage.setItem("holiday", JSON.stringify(hName))
            localStorage.setItem("date", JSON.stringify(hDate))
            
        }
  
  })

  let holidayInfo = JSON.parse(localStorage.getItem("holiday", "date"));

  console.log(holidayInfo);
