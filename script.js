let riseDisplay = document.querySelector("#sunriseTime")
let setDisplay = document.querySelector("#sunsetTime")
// Fetches and grabs sun data
fetch("https://api.sunrise-sunset.org/json?lat="+lat+"&lng="+lng)
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

let holidayList = document.querySelector("option").value;
let selectHoliday = document.querySelector("#select-holiday")
let dateEl = document.querySelector("p")




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
