let riseDisplay = document.querySelector("#sunriseTime")
let setDisplay = document.querySelector("#sunsetTime")
let sunButton = document.querySelector("#sunButton")
let lat = document.querySelector("#Latitude")
let lng = document.querySelector("#Longitude")

// Function to call on click
function displaySunData(){
// Fetches and grabs sun data

// console.log(`lat:${lat} lng:${lng}`)
fetch(`https://api.sunrise-sunset.org/json?lat=${lat.value}&lng=${lng.value}`)
.then(function(response){


// Sets text content of display span
})
.then(function (sunData) {
    let sunriseData = sunData.results.sunrise;
    let sunsetData =  sunData.results.sunset;
    riseDisplay.textContent = sunriseData;
    setDisplay.textContent = sunsetData;
})

// Event listener to trigger function
sunButton.addEventListener("click", displaySunData)


// .then(function (sunData) {
//     let sunriseData = sunData.results.sunrise;
//     let sunsetData =  sunData.results.sunset;
//     riseDisplay.textContent = sunriseData;
//     setDisplay.textContent = sunsetData;
// })





fetch("https://api.artic.edu/api/v1/artworks")








//(Khalid) The art musuem code begins here



fetch("https://api.artic.edu/api/v1/artwork-types?limit=23")
    .then(response => response.json())

    .then(stylesFound => {
        let styleFound = stylesFound[0];
        console.log(styleFound)


        // for (let i = 0; i < styleFound.length; i++) {

        //     styleTitle = styleFound[i].data.title

        // }

        return fetch("https://api.artic.edu/api/v1/artwork-types?limit=23")
    })
    .then(response => response.json())
    .then(data => {

        console.log(data)

        for (let i = 0; i < data.data.length; i++) {
            
            console.log(i)
            console.log(typeof data.data[i].title)
            
            let listItem = document.createElement("li")
            let anchorItem = document.createElement("a")
            anchorItem.classList.add("dropdown-item")
            anchorItem.innerHTML = data.data[i].title

            listItem.appendChild(anchorItem)
            document.getElementById("dropDown").appendChild(listItem)
        }


    })



//(Khalid) The art musuem code ends here

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

            // localStorage.setItem("holiday", JSON.stringify(hName))
            // localStorage.setItem("date", JSON.stringify(hDate))

        }

    })

    let holidayInfo = JSON.parse(localStorage.getItem("holiday", "date"));

}