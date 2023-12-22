let selects = document.querySelectorAll("select");
let card = document.querySelector(".container .card");
let btn = document.querySelector(".btn");
let btn1 = document.querySelector(".btn1");
let clock = document.querySelector(".container .clock");
let aud = document.querySelector("#aud");
let audd = document.querySelector("#audd");
let timeFound;
(function () {
    for (let i = 1; i <= 12; i++) {
        let hours = i < 10 ? "0" + i : i;
        let option = document.createElement("option");
        let texHours = document.createTextNode(hours);
        option.append(texHours);
        selects[0].append(option);
    }
})();
(function () {
    for (let i = 1; i <= 60; i++) {
        let minute = i < 10 ? "0" + i : i;
        let option = document.createElement("option");
        let texMinute = document.createTextNode(minute);
        option.append(texMinute);
        selects[1].append(option);
    }
})();
(function () {
    for (let i = 1; i <= 2; i++) {
        let apm = i == 1 ? "AM": "PM";
        let option = document.createElement("option");
        let texAPM = document.createTextNode(apm);
        option.append(texAPM);
        selects[2].append(option);
    }
})();

setInterval(() => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let apm="AM"
    if (hours >= 12) {
        hours -= 12;
        apm = "PM";
    }
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    clock.innerHTML = `${hours} : ${minutes} : ${seconds} ${apm}`;
    if (timeFound === `${hours} : ${minutes} : ${apm}`) {
        aud.play();
        btn1.addEventListener("click", () => {
            btn1.classList.add("hid");
            btn.classList.remove("hid");
            card.classList.remove("hidden");

        })
    }
})

function setAlarm() {
    let time = `${selects[0].value} : ${selects[1].value} : ${selects[2].value}`;
    if (selects[0].value == "Hour" || selects[1].value == "Minute" || selects[2].value == "AM / PM") {
        alert("Enter the date Correct")
    }
    else {
        timeFound = time;
        card.classList.add("hidden");
        btn.classList.add("hid");
        btn1.classList.remove("hid");
    }
}
btn.addEventListener("click", setAlarm);