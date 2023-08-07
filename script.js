console.log("Carlos")
console.log("Khalid")
console.log("Dylan")

let holidayList = document.querySelector("option");
let selectHoliday = document.querySelector("#select-holiday")


fetch("https://date.nager.at/api/v3/publicholidays/2023/AT")
  .then(response => response.json())
  .then(result => {
    let holidayName = result[0].name;
    let holidayDate = result[0].date;

    console.log(holidayDate);
    console.log(holidayName);

        for (let i = 0; i < result.length; i++) {
            let hName = result[i].name;
            
            let holidayEl = document.createElement("option");

            holidayEl.setAttribute("value", hName);
            holidayEl.textContent = (hName);

            console.log(holidayEl);

            selectHoliday.append(holidayEl);
            
        }
  
  })

// holidayList.onclick(function (event) {
    
//     if (event)
// })
