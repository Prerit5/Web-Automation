var ssID = "ID"; //Worksheet ID
var formID = "ID"; //Form ID

var wsData = SpreadsheetApp.openById(ssID).getSheetByName("Employee"); //Open by Name of Spreadsheet
var form = FormApp.openById(formID); //Open by ID of form

var numRows = wsData.getLastRow(); //Get number of employees by checking last row of the spreadsheet

var cell=[];
var result=[]; 
var mnames=[];
var mnamew=[];
var email=[];

function main() {
  
  mlist();

  GetCellColorCode();
  
  //Checking the status of an employee by the background color of thier row in the spreadsheet
  for(i=0;i<numRows-1;i++){
     if(result[i]=="#00ff00"){  //Green color is used for qualified employees
       mnamew[i] = mnames[i];
       email[i] = wsData.getRange(i+2, 2).getValues();
     }    
   }
  
  mnamew = mnamew.filter(function(x) {
   return x !== null;
  });
  
  email = email.filter(function(x) {
   return x !== null;
  });
  
  mnamew.sort(); 
  //DEBUG
  //Logger.log(mnamew);
  //Logger.log(email);
  //var items = form.getItems();
  //Logger.log(items[2].getId().toString());
  //Logger.log(email);
  updateDD(mnamew);
}

function mlist(){
    mnames = wsData.getRange(2, 1, numRows-1).getValues(); //Defining range
}


function GetCellColorCode() //to get the background color of a particular cell in the spreadsheet 
{ 
  for(i=0;i<numRows-1;i++){
    cell[i] = wsData.getRange(i+2, 1, numRows);
    result[i] = cell[i].getBackground();
    //Logger.log(result[i]);
  }
}


function updateDD(values) {
  var item = form.getItemById(ID); //ID of the question in the form
  item.asListItem().setChoiceValues(values);
}
