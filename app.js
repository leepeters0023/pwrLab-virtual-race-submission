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
let activityDate = document.getElementById('activity-date')
let distanceUnits = document.getElementsByName('distance-units')
let distance = document.getElementById('distance-input')
let hours = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')
let submitButton = document.getElementById('submit-button')
let completeForm = {}

submitButton.addEventListener('click', () => {
  // document.addEventListener('submit', e => {
  // Store reference to form to make later code easier to read
  // const form = e.target;
  // Prevent the default form submit
  // e.preventDefault();
  // set up the fetch, busy state, error state
  // });
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
  completeForm.hours = parseFloat(hours.value.trim())
  completeForm.minutes = parseFloat(minutes.value.trim())
  completeForm.seconds = parseFloat(seconds.value.trim())
  alert(JSON.stringify(completeForm))
})

// convert to meters
function getMeters(distanceUnits, distance) {
  distance = distance.value.trim()
  distance = parseFloat(distance)
  if (distanceUnits === 'kilometers') {
    return distance * 1000
  } else {
    return distance * 1609.34
  }
}

/*  - - - to do - - -
let modal = document.getElementById("myModal");
// Get the button that opens the modal
let btn = document.getElementById("submit-button");
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  alert()
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
/*
function get_action(form) {
  let v = grecaptcha.getResponse();
  if (v.length == 0) {
    document.getElementById('captcha').innerHTML = "You can't leave Captcha Code empty";
    return false;
  }
  else {
    document.getElementById('captcha').innerHTML = "Captcha completed";
    return true; 
    // find way other than innerHTML to set? 
  }
}
function getActivtyTime(hours, minuts, seconds) {

} */ 