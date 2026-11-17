calendarDiv = document.getElementById("calendar");

// save one text in local storage.
let mainInputBox = document.getElementById("mainInputBox");

mainInputBox.addEventListener("input", function() {
    localStorage.setItem("DailyText", mainInputBox.value);
});

let savedText = localStorage.getItem("DailyText");

mainInputBox.value = savedText;

//calendar
let currentDate = new Date();

let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();
let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();


// let firstDay = new Date(2026, 11, 1).getDay();
let firstDay = new Date(currentYear, currentMonth, 1).getDay();
console.log(firstDay);

let numOfSpaces = firstDay;

for (let i = 0; i < numOfSpaces; i++) {
    let newDay = document.createElement("div");

    calendarDiv.appendChild(newDay);
}


for (let i = 1; i <= daysInMonth; i++){
    let newDay = document.createElement("div");
    newDay.textContent = i;
    calendarDiv.appendChild(newDay);
}

// console.log(daysInMonth);

/*
calendar
saving any day

*/