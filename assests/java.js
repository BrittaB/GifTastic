
//var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=RYD0xnN1DY9rH29nIj8R8FcMC53D6Pvb&tag=&rating=PG";


//submit button
$("#submit").on("click", function () {
  //preform ajax get function
  var animal = $('#gifInput').val();
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=ULFOH5F6556uy1PEseD33ankMx15dEQn&tag=&rating=PG";
  // Perfoming an AJAX GET request to our queryURL
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    // After the data from the AJAX request comes back
    .then(function (response) {
      console.log(response);
      for (var i = 0; i < response.data.length; i++) {
        // Saving the image_original_url property
        var imageUrl = response.data[i].images.original.url;

        // Creating and storing an image tag
        var gifImage = $("<img>");

        // Setting src attribute to imageUrl
        gifImage.attr("src", imageUrl);
        gifImage.attr("alt", "giphy");

        // Prepending to the images div
        $("#images").prepend(gifImage);
      }
    });
});