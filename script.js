// Assignment Code
var generateBtn = document.querySelector("#generate");

var generatePassword = function () {
  var generatedPassword = "";
  var characterBase = "";
  var upperCaseCharacters = "ASDFGHJKLQWERTYUIOPZXCVBNM";
  var passwordLength = prompt("How long do you want you password?")
  console.log(passwordLength)
  var upperCase = confirm(" Do you want uppercase letter?")
  console.log(upperCase)
  if (upperCase === true) {
    characterBase = characterBase + upperCaseCharacters
  }
  var lowerCase = confirm(" Do you want to use lowercase letters?")
  console.log(lowerCase)
  var specialCharacters = confirm("Do you want to use any special characters?")
  console.log(specialCharacters)

  for (let i = 0; i < passwordLength; i++) {
    generatedPassword = generatedPassword + characterBase[0]

  }
  return generatedPassword
  console.log(characterBase)
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
