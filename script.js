// Connects "Guess" button to "randomizer" function
document.getElementById('button').addEventListener('click', randomizer)
let randomNumber = 0
let userGuess = 0

function randomizer () {
  // User number entered gets converted into integer
  userGuess = document.getElementById('guess').value
  userGuess = parseInt(userGuess)

  // Generates random numbers between 1 and 6
  randomNumber = (Math.random() * 6) + 1
  randomNumber = parseInt(randomNumber)

  // Compare user's guess with random number
  if (userGuess === randomNumber) {
    document.getElementById('result').innerHTML = 'you guessed correctly!'
  }
}
