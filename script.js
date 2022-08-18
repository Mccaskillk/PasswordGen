// Assignment code here

// Characters Available for Password Generator
const LowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const UpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"]
const Symbols = ["@", "!", "$", "#", ">", "^", "&", "*", "(", ")", "~", "+", "<", "%", "?", "{", "}", "[", "]", "_"];
const Number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function passwordRange() {
  const passwordTXT = window.prompt("Please enter a number between 8 and 128");
  console.log(passwordTXT);

  if (userInput >= 8 && userInput <= 128) {
    return userInput;
  } else {
    alert("Please input between 8 and 128 characters.");
    return passwordRange();
  }
}
const generatePWD = function () {

  // password length input criteria
  const input = passwordRange();

  //
  const lowerYes = confirm("Would you like your password to container lowercase letters?");
  const upperYes = confirm("Would you like your password to contain uppercase letters?");
  const numYes = confirm("Would you like your password to contain numbers?");
  const symYes = confirm("Would you like your password to contain symbols?");


  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");

  // Write password to the #password input
  function writePassword() {
    var passwordLength = generatePWD();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }

}




