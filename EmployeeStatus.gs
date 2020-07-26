var ssID = "";
var formID = "";

var wsData = SpreadsheetApp.openById(ssID).getSheetByName("Mentors");
var form = FormApp.openById(formID);

var numRows = wsData.getLastRow();

var cell=[];
var result=[]; 
var mnames=[];
var mnamew=[];
var email=[];

function main() {
  
  mlist();

  GetCellColorCode();
  
  for(i=0;i<numRows-1;i++){
     if(result[i]=="#00ff00"){
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
  //Logger.log(mnamew);
  //Logger.log(email);
  //var items = form.getItems();
  //Logger.log(items[2].getId().toString());
  //Logger.log(email);
  updateDD(mnamew);
}

function mlist(){
    mnames = wsData.getRange(2, 1, numRows-1).getValues();
}


function GetCellColorCode() 
{ 
  for(i=0;i<numRows-1;i++){
    cell[i] = wsData.getRange(i+2, 1, numRows);
    result[i] = cell[i].getBackground();
    //Logger.log(result[i]);
  }
}

function updateDD(values) {
  var item = form.getItemById(973817562);
  item.asListItem().setChoiceValues(values);
}
