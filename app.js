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

let email = document.getElementById('email').value
let bibNum = document.getElementById('bib-no').value
let activityDate= document.getElementById('activity-date').value
let distanceUnits= document.getElementsByClassName('units-radio-button').value
let distance = document.getElementById('distance').value
let hours = document.getElementById('hours').value
let minutes = document.getElementById('minutes').value
let seconds = document.getElementById('seconds').value

