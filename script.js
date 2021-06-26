// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = "";
var characterCriteria = [];
var includeCriteria = [];
var newPassword = "";
var password_TextArea = document.querySelector("#password");



/* **************************************************************************
 * Action: Request length of password from user between 8-128 numeric characters
 * Function: getPasswordLength
 * Parameters:
 *    failedLastAttempt - Boolean value. True when called recursively, false
 *      when called for the first time. This determines what message is sent
 *      in the user prompt.
 * Returns:   No return values.
 * *************************************************************************/
function getPasswordLength(failedLastAttempt) {
  var input;
  if(!failedLastAttempt) {
    input = prompt("From 8-128 characters, how long will your password be?");
  } else {
    input = prompt("ERROR: please enter a number from 8-128 to define the length of your password");
  }
  passwordLength = parseInt(input);
  if(typeof(passwordLength) === 'number' && passwordLength != NaN
      &&  passwordLength >= 8 && passwordLength <= 128
      && input == passwordLength) {
    alert("Your password will be " + passwordLength + " characters long");
  }
  else
  {
    // Recursion
    getPasswordLength(true);
   }
    
}

  

/* **************************************************************************
 * Action: Request character criteria (lowercase, uppercase, numeric, and special) from user
 * Function: getCharacterCriteria
 * *************************************************************************/


function getCharacterCriteria() {
  var lowerCase = confirm("If you want to include LOWERCASE characters, click OK. If NOT, click CANCEL.");
    if (lowerCase == true) {
      characterCriteria.push("lowercase");
    }

  var upperCase = confirm("If you want to include UPPERCASE characters, click OK. If NOT, click CANCEL.");
    if (upperCase == true) {
      characterCriteria.push("uppercase");
    }
  

  var numeric = confirm("If you want to include NUMERIC characters, click OK. If NOT, click CANCEL.");
    if (numeric == true) {
      characterCriteria.push("numeric");
    }
    
  var special = confirm("If you want to include SPECIAL characters, click OK. If NOT, click CANCEL.");
    if (special == true) {
      characterCriteria.push("special");
    }
    


 alert("Your password will contain " + characterCriteria.join(', ') + " characters.");
}


/* **************************************************************************
 * Action: Function that chooses a random integer
 * Function: chooseRandomNumber
 * Parameter: limit
 * *************************************************************************/
function chooseRandomNumber(limit){
  return Math.floor(Math.random() * Math.floor(limit));
}

/* **************************************************************************
 * Action: Function that chooses a random character from the includeCriteria array
 * Function: chooseRandomCharacter
 * *************************************************************************/

function chooseRandomCharacter() {
  var index = chooseRandomNumber(includeCriteria.length);
  return includeCriteria[index];
}

/* **************************************************************************
 * Action: checks what criteria the user selected and pushes characters for the generator to choose from if true
 * Function: includeCriteriaIF
 * Parameter: limit
 * *************************************************************************/

function includeCriteriaIF() {

  // Check for lowercase
  if (characterCriteria.includes("lowercase")) {
    lowercase_indexes = 26;
    includeCriteria.push('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
  }

  // Check for uppercase
  if (characterCriteria.includes("uppercase")) {
    uppercase_indexes = 26;
    includeCriteria.push('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
  }

  // Check for numeric
  if (characterCriteria.includes("numeric")) {
    numeric_indexes = 10;
    includeCriteria.push('0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
  }

  // Check for special
  if (characterCriteria.includes("special")) {
    special_indexes = 26;
    includeCriteria.push('#', '$', '%', '^', '&', '*', '(', ')', '+', ',', '-', '_', ';', ':', '<', '=', '>', '?', '[', ']', '{', '}', '\\', '~', '/', '|');
  }
               
}

// Write password to the #password input
function writePassword() {
passwordLength = "";
characterCriteria = [];
includeCriteria = [];
newPassword = "";
  getPasswordLength(false);
  getCharacterCriteria();
  includeCriteriaIF();
  chooseRandomCharacter();

    for(i = 0; i < passwordLength; i++){
    newPassword += chooseRandomCharacter();
    }
    password_TextArea.textContent = newPassword;

}
    
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);