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
// assign remaining vars from input fields
let email = document.getElementById('email')
let emailVarify = document.getElementById('email-varify')
let bibNum = document.getElementById('bib-no')
let activityDate = document.getElementById('activity-date')
let distanceUnits = document.getElementById('distance-units')
let distance = document.getElementById('distance-input')
let hours = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')
let confirmButton = document.getElementById('submit-button-final')
//let response = UrlFetchApp.fetch(url, options)
let url =
"https://pqd70u9ypa.execute-api.us-west-2.amazonaws.com/v2/distributed-events/f82a6b4c-a51b-11ea-b618-00184de9375b/activities"
let completeForm = {
  //timestamp: Date(time)
}
let options = {
  method: "post",
  contentType: "application/json",
  payload: JSON.stringify(completeForm),
  muteHttpExceptions: false,
}; 
// checks if activity time greater than 10 hrs 
hours.addEventListener('input', () => {
  if(hours.value > 10) {
    window.confirm(`Are you sure you meant to enter ${hours.value} hours for your run time?`)
  }
});
emailVarify.addEventListener('blur', () => {
  if(email.value.trim() !== emailVarify.value.trim()) {
    alert('Please make sure e-mail addresses match')
  }
});
// convert to meters
function getMeters(distanceUnits, distance) {
  distance = distance.value.trim()
  distance = parseFloat(distance)
  distanceUnits = distanceUnits.value
  if (distanceUnits === 'kilometers') {
    return distance * 1000
  } else {
    return distance * 1609.34
  }
};
// return total seconds 
function getTotalSeconds(hours, minutes, seconds) {
  let totalSeconds = 
    parseInt(hours.value.trim()) * 60 * 60 +
    parseInt(minutes.value.trim()) * 60 +
    parseInt(seconds.value.trim())
  return totalSeconds
}
// - - - - related to confirmation modal - - - - // 
let modal = document.getElementById("myModal");
// Get the button that opens the modal
let btn = document.getElementById("submit-button");
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
btn.onclick = () => {
  if (email.value && bibNum.value && activityDate.value && distance.value && distanceUnits.value && hours.value && minutes.value && seconds.value) {
  modal.style.display = "block";
  let modalText = document.getElementById('user-info-modal')
  modalText.innerHTML = 
    `<h4>E-mail: ${email.value}<br></br>Bib number: ${bibNum.value}<br></br>Activity Date: ${activityDate.value}<br></br>Distance: ${distance.value}<br></br>Units: ${distanceUnits.value}<br></br>Total activity time: ${hours.value} Hrs, ${minutes.value} Minutes, ${seconds.value} Seconds</h4>`
  } else {
    alert("Please complete all required fields")
  }
}
// When the user clicks on <span> (x), close the modal
span.onclick = () => {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// create JSON and send to S3
confirmButton.addEventListener('click', e => {
  completeForm.email = email.value.trim();
  completeForm.bibNum = parseFloat(bibNum.value.trim());
  completeForm.activityDate = activityDate.value;
  completeForm.distance = getMeters(distanceUnits, distance);
  completeForm.time = getTotalSeconds(hours, minutes, seconds)
  alert(JSON.stringify(completeForm))
  //sendData();
})
/*
function sendData(e) {
  if (!e) {
    throw new Error("Please go the Run menu and choose Initialize")
  }
  try {
    let response = UrlFetchApp.fetch(url, options)
    Logger.log(JSON.stringify(response));
  }
  catch (error) {
    Logger.log(error.toString());
  }
} 
*/