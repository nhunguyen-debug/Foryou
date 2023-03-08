var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

var message ="I'm not flirting. I'm only being extra friendly to an attractive person. Will you be my girl-friend?"
var words = message.split(' ');

function countdown() {
  var timeLeft = 5;

  // Displays the initial time
  timerEl.textContent = 'Time left: ' + timeLeft;

  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // Decrease the time left by 1
    timeLeft--;

    // Displays the updated time
    timerEl.textContent = 'Time left: ' + timeLeft;

    // If the time is up
    if (timeLeft === 0) {
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);

      // Call the `displayMessage()` function to display the message
      displayMessage();
    }
  }, 1000);
}


// Displays the message one word at a time
function displayMessage() {
  var wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var msgInterval = setInterval(function () {
    // If there are no more words left in the message
    if (words[wordCount] === undefined) {
      // Use `clearInterval()` to stop the timer
      clearInterval(msgInterval);
    } else {
      // Display one word of the message
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 1000);
}

countdown();
