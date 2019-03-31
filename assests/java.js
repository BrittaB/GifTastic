var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=RYD0xnN1DY9rH29nIj8R8FcMC53D6Pvb&tag=&rating=PG";


//submit button
$("#submit").on("click", function() {
//preform ajax get function
      // Perfoming an AJAX GET request to our queryURL
      $.ajax({
        url: queryURL,
        method: "GET"
      })
      // After the data from the AJAX request comes back
      .then(function(response) {

        // Saving the image_original_url property
          var imageUrl = response.data.image_original_url;

          // Creating and storing an image tag
          var gifImage = $("<img>");

          // Setting the catImage src attribute to imageUrl
          gifImage.attr("src", imageUrl);
          gifImage.attr("alt", "cat image");

          // Prepending the catImage to the images div
          $("#images").prepend(gifImage);
        });
    });