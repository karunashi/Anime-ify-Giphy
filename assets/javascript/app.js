// List of premade buttons based on themes. 
var themes = ["KONOSUBA", "GUNDAM", "SWORD ART ONLINE", "BERSERK", "EVANGELION", "GURREN LAGANN", "BOKU NO HERO ACADEMIA", "RE: ZERO KARA HAJIMERU ISEKAI SEIKATSU", "BLACK LAGOON", "FATE/STAY NIGHT", "GINTAMA"];

// Using for-loop to go through the array, themes, to create a button for each item in the themes array.
for (var i = 0; i < themes.length; i++) {
    var button = $("<button>").text(themes[i]);
    button.attr("data-theme", themes[i]);
    button.addClass("theme-button btn");
    $("#buttons").append(button);
}

// On-click function for submit button... 
$("#submit-button").on("click", function(event) {
    // Cease any default action to occur
    event.preventDefault();
    // Have input area's value stored in newTheme, and have it all capitalize all letters in the string stored.
    var newTheme = $("#input-area").val().trim().toUpperCase();
    // Push this new value into the themes array
    themes.push(newTheme);
    // Create a button element with the text of the new theme entered.
    var button = $("<button>").text(newTheme);
    // Set the created button's attribute, data-theme, with the user input value
    button.attr("data-theme", newTheme);
    // Add class to the button with one created class, and one bootstrap class
    button.addClass("theme-button btn");
    // Append new button to the #buttons section
    $("#buttons").append(button);
    // Clean the user input area for new information.
    $("#input-area").val("");
});

$("#reset-button").on("click", function(event) {
    event.preventDefault();
    $("#input-area").val("");
    // Clear the #display div area with the jQuery empty() method.
    $("#display").empty();
});

$(document).on("click", ".theme-button", function() {
    var theme = $(this).attr("data-theme");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + theme + "&api_key=dc6zaTOxFJmzC&limit=30";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {
        var results = response.data;
        var display = $("#display")
        for (var i = 0; i < results.length; i++) {
            // Set variable to create <aside> element to act as container for floating purposes.
            var themeDiv = $("<aside>");
            // Get rating of each image taken from Giphy in each cycle of the loop.
            var rating = results[i].rating;
            // Declare variable p to create the <p> element, and to have the element show the rating.
            var p = $("<p>").text("Rated: " + rating);
            // Declare variable themePic to create <img> element with the class for the result in cycle.
            var themePic = $("<img class='result'>");
            // Have themePic get the new source based on Giphy API documentation for each cycle of the for-loop
            themePic.attr("src", results[i].images.fixed_height_still.url);
            // Have themePic set a new attribute, data-state, to still when it's processed.
            themePic.attr("data-state", "still");
            // Have themePic set a new attribute, data-still, to contain the still url (GIPHY)
            themePic.attr("data-still", results[i].images.fixed_height_still.url);
            // Have themePic set a new attribute, data-animate, to contain the animated url (GIPHY)
            themePic.attr("data-animate", results[i].images.fixed_height.url);
            // Have the themeDiv prepend the themePic (img element) and append the p (p element with rating)
            themeDiv.prepend(themePic).append(p);
            // Lastly, have that themeDiv (aside element) prepend itself to the display area (#display)
            (display).prepend(themeDiv);

        }
    });
});

// When any of the elements with the class, result, is clicked on the document...
$(document).on("click", ".result", function() {
    // Declare state as a variable for the clicked object's data-state attribute
    var state = $(this).attr("data-state");
    // If the attribute is set to still, set it to animate.
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    }
    // Otherwise, if the attribute is set to animate, set it to still.
    else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});

// // Testing Youtube Data API
// var tag = document.createElement('script');
// tag.src = "https://www.youtube.com/player_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// function onYouTubePlayerAPIReady() {
//     player = new YT.Player('player', {
//         videoId: 'Jg49JoQWtqs',
//         //disablekb: 1,
//         //loop: 1,
//     });
//     document.getElementById('resume').onclick = function() {
//         player.playVideo();
//     };
//     document.getElementById('pause').onclick = function() {
//         player.pauseVideo();
//     };
// }



//GET https://www.googleapis.com/youtube/v3/search?part=snippet
//                   &topicId=/m/05z1_
//                   &type=video
//                   &key={YOUR_API_KEY}
                     
//    $(document).on("click", ".theme-button", function() {
//    var theme = $(this).attr("data-theme");
// 	var queryURL1 = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + theme + "&type=video&key=AIzaSyDXmZYwQcSCe-TpNudmsuCHFxhZ5LmLE5Q&alt=json"
//     $.ajax({
//         url: queryURL1,
//         method: "GET"
//     }).done(function(response) {
//         var results = response.videoId;
//         console.log(results);*/
//         //var player = $("#player");
        

//     });
// });*/