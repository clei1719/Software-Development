$(document).ready(function() {
    var apiKey = "" // Enter your API Key here
    console.log(`state_info is: ${state_info}`) // Notice the templating here, use that when you form your url
    // var state_dict = {};

    // TODO
    // Iterate over the state_info array and call the api for each state_name to get the current temperature
    Object.keys(state_info).map(function(key, index)
    {
      console.log("KEY", key)
      var states = state_info[key]
      console.log("states", states)

      var lat = states.lat
      var lng = states.lng
      var url =`https://api.darksky.net/forecast/35d83dabf3fca133786819f4edaa59d5/${lat},${lng}`;

      $.ajax({url:url, dataType:"jsonp"}).then(function(data) {

        console.log("data", data)

        // TODO
        // Fill in the RHS of the below line and uncomment it. Remember how we accessed the temperature in Lab 9.
        var temp = data.currently.temperature

        console.log("temperature", temp)

        //TODO
        // Default color gray
        var color = "#808080"

        if(temp <= 10)
        {
            color = "#6495ED"
        }
        else if (temp <=20 & temp > 10)
        {
            color = "#7FFFD4"
        }
        else if (temp <=30 & temp > 20)
        {
            color = "#0000FF"
        }
        else if (temp <=40 & temp > 30)
        {
            color = "#008B8B"
        }
        else if (temp <=50 & temp > 40)
        {
            color = "#00BFFF"
        }
        else if (temp <=60 & temp > 50)
        {
            color = "#F08080"
        }
        else if (temp <=70 & temp > 60)
        {
            color = "#CD5C5C"
        }
        else if (temp <=80 & temp > 70)
        {
            color = "#8B0000"
        }
        else if (temp <=90 & temp > 80)
        {
            color = "#B22222"
        }
        else if (temp > 90)
        {
            color = "#FF0000"
        }
        else
        {
            color = "#808080"
        }
        // Create a series of if else blocks to set the color for the state based on the temperature
        // Less than equal to 10 should be blue
        // Between 11 and 30 should be cyan
        // Between 31 and 50 should be green
        // Between 51 and 80 should be orange
        // Greater than 80 should be red

        $('#' + key).css('fill', color);   // Example on how to fill colors for your state.

      });
    });
});
