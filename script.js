
var generateBtn = document.querySelector("#generate");

var specialConfirm = confirm ("Would you like to use special characters in your password?");
var numbersConfirm = confirm ("would you like to use numbers in your password");
var bigConfirm = confirm ("Would you like to use upperecase letters in you password?"); 

var all = ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+").split("");
var most = ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789").split("");
var most1 = ("abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_").split("");
var most2 = ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+").split("");
var some = ("abcdefghijklmnopqrstuvwxyz!@#$%^&*()_").split("");
var some1 = ("abcdefghijklmnopqrstuvwxyz1234567890").split("");
var some2 = ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ").split("");
var lowercase = ("abcdefghijklmnopqrstuvwxyz").split("");
var passwordArray = [];

function writePassword() {
  var password = generatePassword();
  function generatePassword() {
    for (let i = 0; i < 75; i++) {
        if (specialConfirm === true && numbersConfirm === true && bigConfirm === true ) {
            password = all[Math.floor(Math.random() * all.length)]
        }
        else if (specialConfirm === true && numbersConfirm === true && bigConfirm === false ) {
            password = most1[Math.floor(Math.random() * most1.length)]
        }
        else if (specialConfirm === true && numbersConfirm === false && bigConfirm === true ) {
            password = most2[Math.floor(Math.random() * most2.length)]
        }
        else if ( specialConfirm === false && numbersConfirm === true && bigConfirm === true) {
            password = most[Math.floor(Math.random() * most.length)]
        }
        else if (specialConfirm === false && numbersConfirm === false && bigConfirm === true) {
            password = some2[Math.floor(Math.random() * some2.length)]
        }
        else if (specialConfirm === false && numbersConfirm === true && bigConfirm === false) {
            password = some1[Math.floor(Math.random() * some1.length)]
        }
        else if (specialConfirm === true && numbersConfirm === false && bigConfirm === false) {
            password = some[Math.floor(Math.random() * some.length)]
        }
        else if (specialConfirm === false && numbersConfirm === false && bigConfirm === false) {
            password = lowercase[Math.floor(Math.random() * lowercase.length)]
        }
        passwordArray.push(password);
    }
  var passwordText = document.querySelector("#password");

  passwordText.value = passwordArray.join("");

    }}

generateBtn.addEventListener("click", writePassword);