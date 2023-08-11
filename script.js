
//Dylan's Sunset code
let riseDisplay = document.querySelector("#sunriseTime")
let setDisplay = document.querySelector("#sunsetTime")
let sunButton = document.querySelector("#sunButton")
let lat = document.querySelector("#Latitude")
let lng = document.querySelector("#Longitude")

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
// fetch("https://api.artic.edu/api/v1/artworks")
//     .then(response => response.json())
//     .then(function (artList) {
//         console.log(artList)
//     })

// fetch("https://api.artic.edu/api/v1/artworks")

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

            let listItem = document.createElement("option")
            
            
            listItem.value = data.data[i].title
            listItem.textContent = data.data[i].title

 
            document.getElementById("dropDown").appendChild(listItem)
        }


    })


//Carlos' Holiday Code

let holidayList = document.querySelector("option");
let selectHoliday = document.querySelector("#select-holiday")
let dateEl = document.querySelector("#Date")
let holidayDescription = document.querySelector("#holiday-description")


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
        })
}

// Retrieve the existing array from local storage or create a new one
let selectedOptionsArray = JSON.parse(localStorage.getItem('selectedOptions')) || [];

selectHoliday.addEventListener("change", function() {
    let selectedOption = selectHoliday.value;
    // Add the new selected option to the array

    if (selectedOption == "New Year's Day") {
        dateEl.textContent =("New year's Day is 01/01/2024")
        holidayDescription.textContent = ("New Year's Day is among the most celebrated public holidays in the world, often observed with fireworks at the stroke of midnight following New Year's Eve as the new year starts in each time zone. Other global New Year's Day traditions include making New Year's resolutions and calling one's friends and family.")
    }else if (selectedOption == "Epiphany" ) {
        dateEl.textContent =("Epiphany is 01/06/2024")
        holidayDescription.textContent = ("Epiphany also known as 'Theophany' in Eastern Christian tradition, is a Christian feast day commemorating the visit of the Magi, the baptism of Jesus, and the wedding at Cana.")
    }
    else if (selectedOption == "Easter Monday" ) {
        dateEl.textContent =("Easter Monday is 04/10/2024")
        holidayDescription.textContent = ("In the Eastern Orthodox Church and Byzantine Rite Catholic Churches, this day is called 'Bright Monday' or 'Renewal Monday'. The services, as in the rest of Bright Week, are quite different from during the rest of the year and are similar to the services on Pascha (Easter Sunday) and include an outdoor procession after the Divine Liturgy; while this is prescribed for all days of that week, often they are only celebrated on Monday and maybe a couple of other days in parish churches, especially in non-Orthodox countries")
    }
    else if (selectedOption == "National Holiday" ) {
        dateEl.textContent =("CSS Reboot Day is 05/01/2024")
        holidayDescription.textContent = ("CSS Reboot day, held on May 1, is spent going over web pages and applying fresh designs, as well as cleaning up artifacts that may have been left lying around the site. Webmasters all around the world will simultaneously debut their web flashy redesigns, ushering traffic, attention, and renown to their sites. There are no arbitrary rewards or winners; just the promise of exposure and the knowledge that we have all been a part of something amazing.")
    }
    else if (selectedOption == "Ascension Day" ) {
        dateEl.textContent =("Ascension Day is 05/9/2024")
        holidayDescription.textContent = ("Ascension Day is one of the great solemnities in the Christian liturgical calendar, and commemorates the bodily ascension of Jesus into heaven. Ascension Day is traditionally celebrated on a Thursday, the fortieth day of Easter (39 days after Easter Sunday).")
    }
    else if (selectedOption == "Whit Monday" ) {
        dateEl.textContent =("Whit Monday is 05/29/2024")
        holidayDescription.textContent = ("Whit Monday or Pentecost Monday, also known as Monday of the Holy Spirit, is the holiday celebrated the day after Pentecost, a moveable feast in the Christian liturgical calendar. It is moveable because it is determined by the date of Easter. In the Catholic Church, it is the Memorial of the Blessed Virgin Mary, Mother of the Church, marking the resumption of Ordinary Time.")
    }
    else if (selectedOption == "Corpus Christi" ) {
        dateEl.textContent =("Corpus Christi is 06/08/2024")
        holidayDescription.textContent = ("Corpus Christi is a Christian liturgical solemnity celebrating the Real Presence of the Body and Blood, Soul and Divinity of Jesus in the elements of the Eucharist.")
    }
    else if (selectedOption == "Assumption Day" ) {
        dateEl.textContent =("Assumption Day is 08/15/2023")
        holidayDescription.textContent = ("On August 15, the Feast of the Assumption (or simply, “The Assumption)” is widely celebrated all over Christendom. This holy day marks the occasion of the Virgin Mary’s bodily ascent to heaven at the end of her life.")
    }
    else if (selectedOption == "All Saints' Day" ) {
        dateEl.textContent =("All Saints' day is 11/01/2023")
        holidayDescription.textContent = ("All Saints' Day, also known as All Hallows' Day, the Feast of All Saints, the Feast of All Hallows,[6] the Solemnity of All Saints,[6] and Hallowmas,[6][7] is a Christian solemnity celebrated in honor of all the saints of the church, whether they are known or unknown.")
    }
    else if (selectedOption == "Immaculate Conception" ) {
        dateEl.textContent =("Immaculate Conception Day is 12/08/2023")
        holidayDescription.textContent = ("The Immaculate Conception is the belief that the Virgin Mary was free of original sin from the moment of her conception.")
    }
    else if (selectedOption == "Christmas Day" ) {
        dateEl.textContent =("Christmas Day is 12/25/2023")
        holidayDescription.textContent = ("Christmas is an annual festival commemorating the birth of Jesus Christ, observed primarily on December 25 as a religious and cultural celebration among billions of people around the world. In addition, several closely related and often interchangeable figures, known as Santa Claus, Father Christmas, Saint Nicholas, and Christkind, are associated with bringing gifts to children during the Christmas season and have their own body of traditions and lore.")
    }
    else if (selectedOption == "St. Stephen's Day" ) {
        dateEl.textContent =("St. Stephen's Day is 12/26/2023")
        holidayDescription.textContent = ("aint Stephen's Day, also called the Feast of Saint Stephen, is a Christian saint's day to commemorate Saint Stephen, the first Christian martyr or protomartyr, celebrated on 26 December in Western Christianity and 27 December in Eastern Christianity. It is an official public holiday in Alsace-Moselle, Austria, the Balearic Islands, Bosnia and Herzegovina, Catalonia, Croatia, the Czech Republic, Denmark, Estonia, Finland, Germany, Greece, Hungary, Ireland, Italy, Luxembourg, Montenegro, North Macedonia, Norway, Poland, Romania, Serbia, Slovakia, Slovenia, Sweden, Ukraine, Switzerland and Newfoundland. ")
    }
});
