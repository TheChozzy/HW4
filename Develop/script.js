// Assignment Code

// Global Variables//

var uppercasecharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercasecharacters ="abcdefghijklmnopqrstuvwxyz";
var specialcharacters = "~!@#$%^&*()";
var generateBtn = document.querySelector("#generate");

//Functions//

// Function to Write Password to User
function writePassword() {

  var loopcontrol = true;

  //Number of Characters entered for password length with error handling//
  while(loopcontrol == true){
    var userlength = prompt("Please enter a numeric value indicating how many characters should make up the password. Passwords may only consist of 8 to 128 characters.").trim();
  if(typeof userlength ==!'number' || (userlength<8 || userlength > 128)){
    alert("Please enter a numeric value between 8 and 128.");
  }
  else{
    var validlength = userlength;
    loopcontrol = false;
  }
  }

// Variables for given charactristics for the password 
 var lowercase = confirm("Please indicate if the password should have lowercase characters.");
 var uppercase  = confirm("Please indicate if the password should have uppercase characters.");
 var numeric = confirm("Please indicate if the password should have numeric characters.");
 var specialcharacter =  confirm("Please indicate if the password should have special characters.");
 var validpassword = '';
var charinsertcount = 0 ;


//Generate Password//
while(charinsertcount < validlength){
    if(uppercase === true && charinsertcount<validlength){
      generateduppercase = uppercasecharacters.charAt(Math.floor((Math.random()*uppercasecharacters.length)+1));
      validpassword += generateduppercase;
      charinsertcount++;
    }
    if(lowercase === true && charinsertcount<validlength){
      generatedlowercase = lowercasecharacters.charAt(Math.floor((Math.random()*lowercasecharacters.length)+1));
      validpassword += generatedlowercase;
      charinsertcount++;
    }
    if(numeric === true  && charinsertcount<validlength){
      generatednumeric = String(Math.floor((Math.random() * 9) + 1));
      validpassword += generatednumeric;
      charinsertcount++;
    }
    if(specialcharacter === true  && charinsertcount<validlength){
      generatedspecial = String(specialcharacters.charAt(Math.floor((Math.random()*specialcharacters.length)+1)));
      validpassword += generatedspecial;
      charinsertcount++;
    }
    console.log(validlength);
    console.log(validpassword);
    console.log(charinsertcount);
}
//Alerting to the user for the written out random password//
 alert("Your new password is: \n"+ validpassword);
}

// Click event to execute building and writing out the password to the user//
generateBtn.addEventListener("click", writePassword);
