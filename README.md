# Web-Automation
Snippets of Google Apps Script code based on JavaScript used in automating various tasks on a website using Google Sheets and Google Forms

The scripts can be used by Opening a Google Sheet, clicking on "Tools" and clicking on "Script Editor". Some scripts require to authorise permissions before running.

# emailcompare.gs

A Google Apps Script based on JavaScript used to automate the process of sending Email-IDs and passwords to an organisation's employees.

A google form has been created which stores the responses in a spreadsheet in the same Worksheet as the .CSV containing new @organisation email-ids and passwords with the employees old email-ids.

An employee fills out the form using their old email-id, the email-id is recorded and then compared with the email-ids in the 2nd spreadsheet.

If a match is found, the script reads the row in which the match has been found and sends an email on the old email-id containing the new email id and its password.

# emailemployee.gs

An organisation has created a google form for users to file quries with the names of employees which a user can select from a drop-down menu. A Google WorkSheet is used to Store names and email-ids of the employees, another spreedsheet in the same worksheet is used to record user responses from the form.

The script is used to store user responses and send an automated email to the selected employee by reading the 1st spreadsheet and looping through the names in it.

If a match is found, complete details of the enquiry will be sent to the employee selected in the form.

If no employee is selected, the script will send an email to a specified email address to redirect the request manually.
