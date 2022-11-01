let fiveRow = document.getElementById('5pm')
if(currentTime === five) {
    fiveRow.style.background = "red"
} else  if(currentTime < five ) {
    fiveRow.style.background = "grey"
} else  if(currentTime > five) {
    fiveRow.style.background = "green"

}