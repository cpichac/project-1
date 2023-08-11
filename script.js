//Dylan's Sunset code
let riseDisplay = document.querySelector("#sunriseTime")
let setDisplay = document.querySelector("#sunsetTime")
let sunButton = document.querySelector("#sunButton")
let lat = document.querySelector("#Latitude")
let lng = document.querySelector("#Longitude")

dayjs.extend(window.dayjs_plugin_customParseFormat)

// Function to call on click
function displaySunData() {
    // Fetches and grabs sun data

    // console.log(`lat:${lat} lng:${lng}`)
    fetch(`https://api.sunrise-sunset.org/json?lat=${lat.value}&lng=${lng.value}`)
        .then(response => response.json())
        .then(function (sunData) {
            let sunriseData = sunData.results.sunrise;
            let sunsetData = sunData.results.sunset;
            riseDisplay.textContent = sunriseData;
            setDisplay.textContent = sunsetData;
        })
}
// Event listener to trigger function
sunButton.addEventListener("click", displaySunData)


//(Khalid) The art musuem code begins here

fetch("https://api.artic.edu/api/v1/artwork-types?limit=23")
    .then(response => response.json())
    .then(data => {
        // Populate the dropdown list
        const dropDown = document.getElementById("dropDown");

        for (let i = 0; i < data.data.length; i++) {
            let listItem = document.createElement("option");
            listItem.value = data.data[i].title;
            listItem.textContent = data.data[i].title;
            dropDown.appendChild(listItem);
        }
    });


window.addEventListener("load", function () {
    const storedValuesJSON = localStorage.getItem("saved-list");
    if (storedValuesJSON) {
        const storedValues = JSON.parse(storedValuesJSON);
        if (Array.isArray(storedValues)) {
            storedValues.forEach(function (value) {
                let selectedParagraph = document.createElement("p");
                selectedParagraph.textContent = value;
                stylesFound.appendChild(selectedParagraph);
            });
        }
    }
});

buttonDrop.addEventListener("click", function (event) {
    const selectedValue = dropDown.value;

    let selectedParagraph = document.createElement("p");
    selectedParagraph.textContent = selectedValue;

    // Load existing stored values
    const storedValuesJSON = localStorage.getItem("saved-list");
    const storedValues = storedValuesJSON ? JSON.parse(storedValuesJSON) : [];

    // Add the new value to the array
    storedValues.push(selectedValue);

    // Store the updated array in local storage
    localStorage.setItem("saved-list", JSON.stringify(storedValues));

    stylesFound.appendChild(selectedParagraph);
});
//(Khalid) The art musuem code ends here



//Carlos' Holiday Code

let holidayList = document.querySelector("option");
let selectHoliday = document.querySelector("#select-holiday")
let dateEl = document.querySelector("#Date")
// let holidaySubmit = document.querySelector("#holiday-submit")


holidays()

function holidays() {


    fetch("https://date.nager.at/api/v3/publicholidays/2023/AT")
        .then(response => response.json())
        .then(result => {

            console.log(result);


            for (let i = 0; i < result.length; i++) {
                let hName = result[i].name;


                let holidayEl = document.createElement("option");

                holidayEl.setAttribute("value", hName);
                holidayEl.setAttribute("class", "hList");
                holidayEl.setAttribute("id", i);
                holidayEl.textContent = (hName);

                // console.log(holidayEl);

                selectHoliday.append(holidayEl);

                // console.log(holidayEl.value)

            }
            // let hDate = result[i].date;
        })
}

// Retrieve the existing array from local storage or create a new one
let selectedOptionsArray = JSON.parse(localStorage.getItem('selectedOptions')) || [];
selectHoliday.addEventListener("change", function () {
    let selectedOption = selectHoliday.value;
    // Add the new selected option to the array
    selectedOptionsArray.push(selectedOption);
    // Store the updated array in local storage
    localStorage.setItem('selectedOptions', JSON.stringify(selectedOptionsArray));
});
function lastSelectedHoliday() {
}