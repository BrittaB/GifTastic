var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=RYD0xnN1DY9rH29nIj8R8FcMC53D6Pvb&tag=&rating=PG";


//preform ajax get function
      // Perfoming an AJAX GET request to our queryURL
      $.ajax({
        url: queryURL,
        method: "GET"
      })