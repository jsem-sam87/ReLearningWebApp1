calendarDiv = document.getElementById("calendar");

let prevMonth = document.getElementById("prevMonth");
let nextMonth = document.getElementById("nextMonth");

let monthYear = document.getElementById("monthYear");

// save one text in local storage.
let mainInputBox = document.getElementById("mainInputBox");

mainInputBox.addEventListener("input", function() {
    localStorage.setItem("DailyText", mainInputBox.value);
});

let savedText = localStorage.getItem("DailyText");

mainInputBox.value = savedText;

//calendar

let today = new Date();

let displayedMonth = today.getMonth();
let displayedYear = today.getFullYear();


function renderCalendar() {

    // Clear the previous calendar
    calendarDiv.innerHTML = "";

    let monthName = new Date(displayedYear, displayedMonth).toLocaleString("en-US", {
    month: "long"
    });

    monthYear.textContent = `${monthName} ${displayedYear}`;

    // Calculate number of days
    let daysInMonth = new Date(displayedYear, displayedMonth + 1, 0).getDate();

    // Calculate first weekday
    let firstDay = new Date(displayedYear, displayedMonth, 1).getDay();

    // Generate empty spaces
    let numOfSpaces = firstDay;

    for (let i = 0; i < numOfSpaces; i++) {
        let newDay = document.createElement("div");
        calendarDiv.appendChild(newDay);
    }

    // Generate numbered days
    for (let i = 1; i <= daysInMonth; i++) {
        let newDay = document.createElement("div");
        newDay.textContent = i;

        if (i === today.getDate() &&
            displayedMonth === today.getMonth() &&
            displayedYear === today.getFullYear()) 
            {
                newDay.classList.add("today");
            }   

        calendarDiv.appendChild(newDay);
    }
}

renderCalendar();

prevMonth.addEventListener("click", function() {
    displayedMonth--;

    if (displayedMonth < 0) {
        displayedMonth = 11;
        displayedYear--;
    }

    renderCalendar();
});


nextMonth.addEventListener("click", function() {
    displayedMonth++;

    if (displayedMonth > 11) {
        displayedMonth = 0;
        displayedYear++;
    }

    renderCalendar();
});

// let currentDate = new Date();

// let currentMonth = currentDate.getMonth();
// let currentYear = currentDate.getFullYear();
// let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();


// // let firstDay = new Date(2026, 11, 1).getDay();
// let firstDay = new Date(currentYear, currentMonth, 1).getDay();
// console.log(firstDay);

// let numOfSpaces = firstDay;

// for (let i = 0; i < numOfSpaces; i++) {
//     let newDay = document.createElement("div");

//     calendarDiv.appendChild(newDay);
// }


// for (let i = 1; i <= daysInMonth; i++){
//     let newDay = document.createElement("div");
//     newDay.textContent = i;
//     calendarDiv.appendChild(newDay);
// }

// console.log(daysInMonth);

/*
calendar
saving any day

*/