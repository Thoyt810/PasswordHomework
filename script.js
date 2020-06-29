
var generateBtn = document.querySelector("#generate");

var specialConfirm = confirm ("Would you like to use special characters in your password?");
var numbersConfirm = confirm ("would you like to use numbers in your password");
var bigConfirm = confirm ("Would you like to use upperecase letters in you password?"); 

var all = ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+")
var most = ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789");
var most1 = ("abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_");
var most2 = ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%^&*()_")
var some = ("abcdefghijklmnopqrstuvwxyz!@#$%^&*()_");
var some1 = ("abcdefghijklmnopqrstuvwxyz1234567890");
var some2 = ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890")
var lowercase = ("abcdefghijklmnopqrstuvwxyz")

var allArray = all.split("");
var mostArray = most.split ("");
var most1Array = most1.split ("");
var most2Array = most2.split ("");
var someArray = some.split ("");
var some1Array = some1.split ("");
var some2Array = some2.split ("");
var lowercaseArray = lowercase.split ("");


function writePassword() {
  var password = generatePassword();
  function generatePassword(){
    for (var i = 0; i < 75; i++) {
        if (specialConfirm == true && numbersConfirm == true && bigConfirm == true ) {
            password = allArray[Math.floor(Math.random() * allArray.length)];
        }
        else if (specialConfirm == true && numbersConfirm == true && bigConfirm == false ) {
            password = most1Array[Math.floor(Math.random() * most1Array.length)];
        }
        else if (specialConfirm == true && numbersConfirm == false && bigConfirm == true ) {
            password = most2Array[Math.floor(Math.random() * most2Array.length)];
        }
        else if ( specialConfirm == false && numbersConfirm == true && bigConfirm == true) {
            password = mostArray[Math.floor(Math.random() * mostArray.length)];
        }
        else if (specialConfirm == false && numbersConfirm == false && bigConfirm == true) {
            password = some2Array [Math.floor(Math.random() * some2Array.length)];
        }
        else if (specialConfirm == false && numbersConfirm == true && bigConfirm == false) {
            password = some1Array [Math.floor(Math.random() * some1Array.length)];
        }
        else if (specialConfirm == true && numbersConfirm == false && bigConfirm == false) {
            password = someArray [Math.floor(Math.random() * someArray.length)];
        }
        else (specialConfirm == false && numbersConfirm == false && bigConfirm == false) ;{
            password = lowercaseArray [Math.floor(Math.random() * lowercaseArray.length)];
        }}
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}}

generateBtn.addEventListener("click", writePassword);