//Assigning new email-ids to users in an organization using a google form to store email-ids of members in one spreadsheet.
//Comparing the email-id with a list of emails in a 2nd spreedsheet of the same worksheet.
//If a match is found, the credentials of the new email must be sent to the email mentioned in the form.

var ssID = "ID"; //ID of your Google Worksheet
var userData = SpreadsheetApp.openById(ssID).getSheetByName("Sheet_2"); //Name of the Spreadsheet with new emails of and passwords  
var formData = SpreadsheetApp.openById(ssID).getSheetByName("Form Responses 1"); //form response spreadsheet

function EmailCreds(e){
 numRows= formData.getLastRow(); 
 //e.range = formData.getRange('A3:D3'); //Debug: Mention the range
 //e.values = e.range.getValues()[0]; //Debug: Store values
  
 var range = e.range;
 //Logger.log("DEBUG: the range is "+range.getA1Notation());//DEBUG

 // get the data for the range
 var response = range.getValues();

 // get the email_id from the form submission
 var email = response[0][1]; 
 //Logger.log("DEBUG: Email-id = "+email);// DEBUG
  
 var idpass = userData.getDataRange().getValues(); //Get Values of the second Spreadsheet
 var lridpass = userData.getLastRow(); //Get number of rows in the second Spreadsheet
  
 var subject = "Subject" //Subject of the email
 
 //Looping through the 2nd Spreadsheet
 for(var i=1; i<lridpass; i++){
    
    //Looking for a match in emails 
    if(email == idpass[i][7]){
    
      //If a match is found, new Email-ID and Password should be sent to the original email-ID
      var message = "Hi " + idpass[i][0] + " " + idpass[i][1] +",\n" + "\n\nThe credentials for your new email-id:\n" + "Email: " + idpass[i][2] + "\nPassword: " + idpass[i][3]; 
      MailApp.sendEmail(email,subject, message);
    }      
  }
}

