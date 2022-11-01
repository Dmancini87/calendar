const now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(now);
let currentTime = moment().format("hh a")
let nine = moment().hour("9").format("hh a");
let ten = moment().hour("10").format("hh a");
let elev = moment().hour("11").format("hh a");
let telw = moment().hour("12").format("hh a");
let one = moment().hour("13").format("hh a");
let two = moment().hour("14").format("hh a");
let three = moment().hour("15").format("hh a");
let four = moment().hour("15").format("hh a");
let five = moment().hour("16").format("hh a");


console.log(currentTime)
console.log(nine)
console.log(ten)
let nineRow = document.getElementById('9am')
if(currentTime === nine) {
    nineRow.style.background = "red"
} else  if(currentTime < nine ) {
    nineRow.style.background = "grey"
} else if(currentTine > nine) {
    nineRow.style.background = "green"

}

let tenRow = document.getElementById('10am')
if(currentTime === ten) {
    tenRow.style.background = "red"
} else  if(currentTime < ten ) {
    tenRow.style.background = "grey"
} else  if(currentTime > ten) {
    tenRow.style.background = "green"

}

let elevRow = document.getElementById('11am')
if(currentTime === elev) {
    elevRow.style.background = "red"
} else  if(currentTime < elev ) {
    elevRow.style.background = "grey"
} else  if(currentTime > elev) {
    elevRow.style.background = "green"

}

let telwRow = document.getElementById('12am')
if(currentTime === telw) {
    telwRow.style.background = "red"
} else  if(currentTime < telw ) {
    telwRow.style.background = "grey"
} else  if(currentTime > telw) {
    telwRow.style.background = "green"

}

let oneRow = document.getElementById('1pm')
if(currentTime === one) {
    oneRow.style.background = "red"
} else  if(currentTime < one ) {
    oneRow.style.background = "grey"
} else  if(currentTime > one) {
    oneRow.style.background = "green"

}

let twoRow = document.getElementById('2pm')
if(currentTime === two) {
    twoRow.style.background = "red"
} else  if(currentTime < two ) {
    twoRow.style.background = "grey"
} else  if(currentTime > two) {
    twoRow.style.background = "green"

}

let threeRow = document.getElementById('3pm')
if(currentTime === three) {
    threeRow.style.background = "red"
} else  if(currentTime < three ) {
    threeRow.style.background = "grey"
} else  if(currentTime > three) {
    threeRow.style.background = "green"

}

let fourRow = document.getElementById('4pm')
if(currentTime === four) {
    fourRow.style.background = "red"
} else  if(currentTime < four ) {
    fourRow.style.background = "grey"
} else  if(currentTime > four) {
    fourRow.style.background = "green"

}

let fiveRow = document.getElementById('5pm')
if(currentTime === five) {
    fiveRow.style.background = "red"
} else  if(currentTime < five ) {
    fiveRow.style.background = "grey"
} else  if(currentTime > five) {
    fiveRow.style.background = "green"

}