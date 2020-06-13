// sets date field max to today, inclusive
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1;
let yyyy = today.getFullYear();
if (dd < 10) {
  dd = "0" + dd;
}
if (mm < 10) {
  mm = "0" + mm;
}
today = yyyy + "-" + mm + "-" + dd;
document.getElementById("activity-date").setAttribute("max", today);

let email = document.getElementById('email')
let bibNum = document.getElementById('bib-no')
let activityDate= document.getElementById('activity-date')
let distanceUnits= document.getElementsByClassName('units-radio-button') // returns value of selected radio button
let distance = document.getElementById('distance').value
let hours = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')
let submitButton = document.getElementById('submit-button')
let completeForm = {}

submitButton.addEventListener('click', () => {
  completeForm.email = email.value.trim();
  completeForm.bibNum = bibNum.value.trim();
  completeForm.activityDate = activityDate.value;
  completeForm.distance = getMeters();
  console.log(completeForm)
})

function getMeters(distanceUnits, distance) {
  if (distanceUnits === 'km') {
    return distance * 1000;
  } else {
    return distance * 1609.34
  }
}
function getActivtyTime (hours, minuts, seconds) {

}