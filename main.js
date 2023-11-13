// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

document.addEventListener("DOMContentLoaded", function () {
  const heart = document.getElementById("heart");
  const errorModal = document.getElementById("errorModal");
  const errorMessageElement = document.getElementById("errorMessage");

  heart.addEventListener("click", function () {
    mimicServerCall()
      .then(() => {
        // Simulated successful response
        heart.classList.add("activated-heart");
        // Add logic to update the UI for a successful response
      })
      .catch((error) => {
        // Simulated error response
        errorMessageElement.textContent = error;
        errorModal.classList.remove("hidden");

        // Hide the modal after 3 seconds
        setTimeout.hidden(() => {
          errorModal.classList.add("hidden");
        }, 3000);
      });
  });
});




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
