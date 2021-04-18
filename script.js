// Assignment Code, creating variables for characters that will go into generated password
var generateBtn = document.querySelector("#generate");

var lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperLetters = lowerLetters.map(letter => letter.toUpperCase())
var numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var special = ['!', '@', '-', '_', '+', '$', '%']
var charArray = [lowerLetters, upperLetters, numeric, special]
console.log(upperLetters)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

//getting the input from user to generate requested password
function generatePassword() {
  var passLength = prompt('How long should the password be - Must be between 8 and 128')
  
  // validating user input for length of password 
  if (typeof(passLength === 'number') && passLength >= 8 && passLength <= 128 ) {
    
    //getting user to confirm whether or not they want these characters
    var lowercaseChars = confirm('Do you want lowercase characters?')
    var uppercaseChars = confirm('Do you want uppercase charactesr?')
    var numericChars = confirm('Do you want numeric characters?')
    var specialChars = confirm('Do you want special characters?')
    
    // invoke validate criteria once all of the confirms have run
    //check if at least one character type was choosen
    function validateCriteria() {
      var validate =  0
      var confirmedChars = [lowercaseChars, uppercaseChars, numericChars, specialChars]
      console.log(confirmedChars)
      for (var i = 0; i < confirmedChars.length; i++) {
        if (confirmedChars[i] === true) {
          console.log(confirmedChars[i])
          
        } 
        else {
          validate += 1
        }
        console.log(validate)
      }
      if (validate === 4) {
        alert('No types were choosen try again.')
        generatePassword()
      } else {
        getPassword()
      }
    }
    validateCriteria()

    //using the validated criteria, generating a password for the user 
    function getPassword() {
      var chars = 0
      var confirmedChars = [lowercaseChars, uppercaseChars, numericChars, specialChars]
      for (var i = 0; i < confirmedChars.length; i++) {
        if (confirmedChars[i] === true) {
          chars += 1
        } 
      }
      console.log(chars)
      if (chars === 4) {
        var randomLength1 = Math.floor(Math.random()*(passLength-3))
        var randomLength2 = Math.floor(Math.random()*(passLength-randomLength1-2))
        var randomLength3 = Math.floor(Math.random()*(passLength-randomLength1-randomLength2-1))
        var randomLength4 = Math.floor(Math.random()*(passLength-randomLength1-randomLength2-randomLength3))
        var randomLengthArray = [randomLength1, randomLength2, randomLength3, randomLength4]

      } else if (chars === 3) {
          var randomLength1 = Math.floor(Math.random()*(passLength-2))
          var randomLength2 = Math.floor(Math.random()*(passLength-randomLength1-1))
          var randomLength3 = Math.floor(Math.random()*(passLength-randomLength1-randomLength2))
          var randomLengthArray = [randomLength1, randomLength2, randomLength3]

      } else if (chars === 2) {
          var randomLength1 = Math.floor(Math.random()*(passLength-1))
          var randomLength2 = Math.floor(Math.random()*(passLength-randomLength1))
          var randomLengthArray = [randomLength1, randomLength2]

      } else if (chars === 1) {
          var randomLength1 = passLength
          var randomLengthArray = [randomLength1]
      }
      
      console.log(randomLengthArray)
      // going through each of the confirmed characters and if they are true
      // adding a random character to the password
      var newPassword =[]
      for (var i = 0; i < chars; i++) {
        for (var j = 0; j < randomLengthArray[i]; j++) {
          var randomCharIndex = Math.floor(Math.random()*charArray[i].length)
          newPassword.push(charArray[i][randomCharIndex])
        }console.log(newPassword)
      } 
    }    
  } 
  
  //User must start over or confirm exit if the input is not valid
  else {
    var confirmExit = confirm('Invalid input Enter a number between 8 and 128. Do you want to try again?')
    if (confirmExit === true) {
      generatePassword() 
    } 
    
    else {
      return
    }
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
