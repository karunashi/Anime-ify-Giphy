# Giphy_API

## Live Link
 - https://karunashi.github.io/Anime-ify-Giphy/

## Description on how to use the app
Click on the instructions button to learn how to use the app in detail. Briefly explained here: You press one of the buttons on the top to have images appear based on the button's theme. It will animate if you left-click on the image, and return to its still state if you click it while it's animated. Type into the text input area and click the submit button to add your own button!

## Requirements
- Have buttons work functionally in that they generate images from the GIPHY API interactively
- Images generated from GIPHY API should be able to pause/resume its animation upon user input (left-click).
- Allow user to add their own functional button.

## Technologies Used
- jQuery for DOM Manipulation
- AJAX for API get requests (GIPHY) [Attempted YouTube Data V3]
- YouTubePlayerAPI for widget player instead of iframe player.
- HTML5/CSS3 for creating structure, modal, and specific designs
- Bootstrap for responsive design and its classes for aesthetics.
- JavaScript for further implementation of modal, YouTubePlayerAPI, etc.

## Code Explaination
- Experimented with Google's YouTube Data API to have it search for the video based on the videoId using AJAX. Was attempting to work with it, but kept returning undefined values and promptly researched for another method. I've used the YouTubePlayerAPI with its built-in widget to provide a similar experience after finding a theme-video that fits the GIPHY page. 
- Experimented with Modals. StackOverflow, W3School, and multiple CDN such as Mozilla Developer Network, helped in creating solutions to experimenting successfully. 
-------------
