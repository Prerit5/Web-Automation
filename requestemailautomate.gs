var ssID = "1CocVmvWbEOpcxNeL1SAp8QA9kxllFJIc5Icf3ZmzEYM";
var wsData = SpreadsheetApp.openById(ssID).getSheetByName("AutoMail");

function onEdit(e) {
  wsData.deleteColumns(3, 6);
  //wsData.sort(1);
}


function AutoConfirmation(e){
   //var e = {};
   //var afar = "1CocVmvWbEOpcxNeL1SAp8QA9kxllFJIc5Icf3ZmzEYM";
   //var Data = SpreadsheetApp.openById(afar).getSheetByName("Form responses 1");
   //numRows= Data.getLastRow();
   //e.range = Data.getRange('A71:E71');
   //e.values = e.range.getValues()[0];

//setup the spreadsheet
var ss = SpreadsheetApp.getActiveSpreadsheet();

//get the range from OnFormSubmit
var range = e.range;
//Logger.log("DEBUG: the range is "+range.getA1Notation());//DEBUG

// get the data for the range
var response = range.getValues();

// get the mentor name from the form submission
var mentor = response[0][3]; 
//Logger.log("DEBUG: Mentor name = "+mentor);// DEBUG

// get the emails list
var emailSheet =    SpreadsheetApp.getActiveSpreadsheet().getSheetByName("AutoMail");

// get ALL the data from this sheet
var emaildata = emailSheet.getDataRange().getValues();

// check how many rows of data
var emailLastRow = emailSheet.getLastRow();
  
  var theirName = e.values[1];
  var theirEmail = e.values[2];
  var theEnquiry = e.values[4];
  var selmentor =e.values[3];
  var subject = "New Mentee Request from Dweebs and Dogs!";
  var message = "Hi there! You've received a new mentee request from Dweebs and Dogs.\n1. Please respond to the request as soon as possible and within 2 days maximum. Please CC dweebsmenteerequests@gmail.com when you respond. \n2. If you do not have time for the request, please reply to us through this email as soon as possible and inform us, so we can send the request to someone else.\n\nMentee: " + theirName + "\nEmail: " + theirEmail + "\nRequested Mentor: " + selmentor + "\n\nRequest:\n" + theEnquiry + "\n\nThank you for your incredible work for Dweebs!"; 
  //Logger.log("DEBUG: Subject and Message = "+subject +message);// DEBUG


// start the loop through the emails data
for (var i=1; i<emailLastRow; i++){

// if the mentor is equal to Email
if (mentor == emaildata[i][0]){
  // there is a match
  
  //Next, get the email address
  var emailmentor = emaildata[i][1];
  //Logger.log("DEBUG: mentorname = "+emaildata[i][0]+", email address: "+emailmentor);// DEBUG
  
  // Finally, send the Email.
  MailApp.sendEmail(emailmentor, subject, message);
}
} 
  
//If no mentor is selected.
if(selmentor.length == 0.0){
  MailApp.sendEmail("email.jananim@gmail.com", subject, message);  //Janani
} 

//If the request is mental-heath related.  
if(e.values[5] == 'Please check this box if your query is related to Medical Advice/ Mental Health.' ){
  MailApp.sendEmail("isvaridweebs@gmail.com", subject, message); //Isvari
}
}

 