let mainInputBox = document.getElementById("mainInputBox");

mainInputBox.addEventListener("input", function() {
    localStorage.setItem("DailyText", mainInputBox.value);
});

let savedText = localStorage.getItem("DailyText");

mainInputBox.value = savedText;
