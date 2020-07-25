var ssID = "ID"; //ID of the worksheet
var wsData = SpreadsheetApp.openById(ssID).getSheetByName("Name"); //Name of the 1st spreadsheet

function AutoConfirmation(e){
   //DEBUG
   //var e = {};
   //var afar = "ID";
   //var Data = SpreadsheetApp.openById(afar).getSheetByName("Form responses 1");
   //numRows= Data.getLastRow();
   //e.range = Data.getRange('A71:E71');
   //e.values = e.range.getValues()[0];

//setup the spreadsheet
var ss = SpreadsheetApp.getActiveSpreadsheet(); //Getting the active spreadsheet

//get the range from OnFormSubmit
var range = e.range;
//Logger.log("DEBUG: the range is "+range.getA1Notation());//DEBUG

// get the data for the range
var response = range.getValues();

// get the employee's name from the form submission
var employee = response[0][3]; 
//Logger.log("DEBUG: Mentor name = "+mentor);// DEBUG

// get the emails list from a different spreadsheet
var emailSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("AutoMail");

// get ALL the data from this sheet
var emaildata = emailSheet.getDataRange().getValues();

// check how many rows of data
var emailLastRow = emailSheet.getLastRow();
  
  var theirName = e.values[1];
  var theirEmail = e.values[2];
  var theEnquiry = e.values[4];
  var selemployee =e.values[3];
  var subject = "New Employee Request!";
  var message = "\n\nRequest Issuer: " + theirName + "\nEmail: " + theirEmail + "\nRequested Employee: " + selemployee + "\n\nRequest:\n" + theEnquiry + "\n\nThank you!"; 
  //Logger.log("DEBUG: Subject and Message = "+subject +message);// DEBUG


// start the loop through the emails data
for (var i=1; i<emailLastRow; i++){

// if the mentor is equal to Email
if (employee == emaildata[i][0]){
  // there is a match
  
  //Next, get the email address
  var emailemployee = emaildata[i][1];
  //Logger.log("DEBUG: employeename = "+emaildata[i][0]+", email address: "+emailmentor);// DEBUG
  
  // Finally, send the Email.
  MailApp.sendEmail(emailemployee, subject, message);
}
} 
  
//If no employee is selected.
if(selmentor.length == 0.0){
  MailApp.sendEmail("email-id", subject, message);  //Email to the id which handles when no employee is selected
} 
}

 
