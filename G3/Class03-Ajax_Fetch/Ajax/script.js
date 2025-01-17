// https://dog.ceo/api/breeds/image/random
function getData(apiUrl) {
  $.ajax({
    url: apiUrl,
    success: function (response) {
      // No need to parse the data in AJAX, it is already parsed in valid JS Object
      console.log(response);
      const dogImage = document.getElementById("dogImage");
      console.log(dogImage);
      const imageUrl = response.message;
      dogImage.src = imageUrl;
      dogImage.style.display = "block";
    },
    error: function (err) {
      console.log("The request failed");
    },
  });
}

// Add event listener to the button
const generateButton = document.getElementById("generateButton");
generateButton.addEventListener("click", function () {
  getData("https://dog.ceo/api/breeds/image/random");
});

// First way - not good
// Call the function initially to load the first image
// The getData function is called directly as part of the script execution.
// This means the image request starts as soon as the script tag is executed, even if the DOM is not fully loaded yet.
// If the img tag isn't fully rendered in the DOM, there's a risk of trying to modify an element that doesn't yet exist.
// This can potentially cause errors (e.g., document.getElementById("dogImage") returning null).
// getData("https://dog.ceo/api/breeds/image/random");

// getData("https://dog.ceo/api/breeds/image/random");

// Second way - better
// Load the first image when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  getData("https://dog.ceo/api/breeds/image/random");
});
