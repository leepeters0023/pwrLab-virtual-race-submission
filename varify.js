function SubmitGoogleFormData(e) {
  if (!e) {
    throw new Error("Please go the Run menu and choose Initialize");
  }
  try {
 
//  this is where the API code goes

// Grab the columns
 
      let
        ss = SpreadsheetApp.getActiveSheet(),          // get the active sheet
        lr=ss.getLastRow(),                            // get the last row
        time = ss.getRange(lr, 1, 1, 1).getValue(),    // column 1 Timestamp
        email = ss.getRange(lr, 2, 1, 1).getValue(),   // column 2 Email Address
        date = ss.getRange(lr, 3, 1, 1).getValue(),    // column 3 Activity Date
        unit = ss.getRange(lr, 4, 1, 1).getValue(),    // column 4 Distance Unit
        dist = ss.getRange(lr, 5, 1, 1).getValue(),    // column 5 Distance
        dur = ss.getRange(lr, 6, 1, 1).getValue(),     // column 6 Duration (optional)
        bib = ss.getRange(lr, 7, 1, 1).getValue(),     // column 7 Bib Number
        timezone = SpreadsheetApp.getActive().getSpreadsheetTimeZone();

    if (unit == 'Kilometers') {
      dist = dist * 1000;
    } else {
      dist = dist * 1609.344
    }
   
    dur = (parseInt(Utilities.formatDate(dur, timezone, "HH")) * 60 * 60) +
          (parseInt(Utilities.formatDate(dur, timezone, "mm")) * 60) +
           parseInt(Utilities.formatDate(dur, timezone, "ss"));
    // let parts = Utilities.formatDate(dur, timezone, "HH:mm:ss").split(':')


Logger.log(Date(date))
Logger.log(String(date))
Logger.log(date)
   
   
// put columns into API payload
let payload = {
    "timestamp": Date(time),
    "email": String(email),
    "activity_time": String(date),
    //"unit": String(unit) ,
    "distance": dist,
    "duration": dur,
    "bib_number": String(bib)
  }

Logger.log(payload)

// set up authorisation
   //let headers = {
   //   "Authorization" : "Basic " + Utilities.base64Encode('99uEzPjdf3U6crJHr35p:X')
   // };

//build up options
let options = {
      'method': 'post',
      "contentType" : "application/json",
      //'headers': headers,
      'payload': JSON.stringify(payload),
      'muteHttpExceptions': false
    }

// set API method URL  - requestbin
    let url = "https://pqd70u9ypa.execute-api.us-west-2.amazonaws.com/v2/distributed-events/f82a6b4c-a51b-11ea-b618-00184de9375b/activities";

// make the call
    let response = UrlFetchApp.fetch(url, options);

// log the response (useful for debugging )
    Logger.log(JSON.stringify(response));
     
  } catch (error) {
    Logger.log(error.toString());
  }
}

// sets date field max to today, inclusive 
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth()+1;
let yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 
today = yyyy+'-'+mm+'-'+dd;
document.getElementById("activity-date").setAttribute("max", today);