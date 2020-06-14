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

// assign vars from input fields
let email = document.getElementById('email')
let bibNum = document.getElementById('bib-no')
let activityDate= document.getElementById('activity-date')
let distanceUnits= document.getElementsByName('distance-units')
let distance = document.getElementById('distance-input')
let hours = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')
let submitButton = document.getElementById('submit-button')
let completeForm = {}

submitButton.addEventListener('click', () => {
  submitButton.disabled = true; 
  completeForm.email = email.value.trim();
  completeForm.bibNum = parseFloat(bibNum.value.trim());
  completeForm.activityDate = activityDate.value;
  for (let i = 0, length = distanceUnits.length; i < length; i++) {
    if (distanceUnits[i].checked) {
      distanceUnits = distanceUnits[i].value;
      break;
    }
  }
  completeForm.distance = getMeters(distanceUnits, distance);
})

function getMeters(distanceUnits, distance) {
    distance = distance.value.trim()
    distance = parseFloat(distance)
  if (distanceUnits === 'kilometers') {
    return distance * 1000
  } else {
    return distance * 1609.34
  }
}


function getActivtyTime (hours, minuts, seconds) {

}