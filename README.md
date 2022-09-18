# 9-2-Front-end Portfolio Project: Soccer App

## Set up the Project
This application will consume an API which returns dates, times, and scores of professional soccer team matches. Cards with information on a specific soccer match will be displayed to the user. Users will be able to click on League competitions to filter the matches that falls into the competition and set a date range to filter matches within the selected range.


### Key Features
Your application will be completed once it has the following features:
- [ ] As a user, I can see that once the page loads there are matches of today's date so as soon as I enter the website I can see what is happening today. 
- [ ] As a user, I can select a date range so that I can see the matches within the given range from what ever league.
- [ ] As a user, I can see a list of leagues that I can click so I can see only soccer matches within that given league.
- [ ] As a user, I can see display cards so that I can view the teams playing and the time, date, and status of the game (i.e. "FINISHED").
- [ ] As a user, I can hover over the display card so I can see the score or get updated on when the match will occur.


## Instructions
Following the instructions below will get you started on creating the Soccer application. These instructions will not serve as a tutorial. You will need to fill in the gaps with your knowledge and research.

When first starting the project, focus on functionality over style. Your goal should be to get the key features of the application working as quickly as possible before you spend a lot of time improving the styling of the application.

### Set up the project 
Before doing anything, you should complete the following steps.

* Create a new GitHub repository. Create a local Git repository. Create a readme.md file within the local repository. Add and commit your changes, and then connect the local and remote repositories.

* Create the following files within your local repository:

    * about.html
    * index.html
    * main.js
    * style.css

 * Add the basic boilerplate HTML template to your index.html file. Add some text to the page and then open your index.html file to ensure that everything is working.

 * Connect the style.css file to your index.html page. Add a single CSS rule to your style.css file to ensure that everything is connected correctly.

 * Follow a similar process for your main.js file. Make sure that your JavaScript runs after the page has fully been loaded.

*  Make a new commit with all of your changes. Then, push up your code to GitHub.

 * Deploy your application. While it's not much, making sure that you can deploy now will save you time in the future.

### Header
Create a header at the top of your page. Your header should include the name of the application, link to your About HTML file, and two inputs to submit two dates. 

### API Familiarity
Use the shared API to access the soccer matches data. Before working with JavaScript, make sure you can access the API through your browser or through another means.

Try console logging information from the API to the console on the DOM to be sure that you can access it well. 

The end points you can choose to practice and use for this project is: 
* competitions
* teams
* matches

### Main Section Structure
Create the list of leagues below the input submit. Use the leagues that you have access to so that you can make API requests for match information later. The leagues should be lined up and adjust according to the window size. The rest of the page should be blank. At this time, you can choose to begin adding some color.

### Match Cards
Begin creating the match cards to display match information. Use this link as a reference to creating the cards: https://codepen.io/luanmanara/pen/poyLbWx. The information that we want to display to the DOM is the home and away team name, team crest, match date, match time, and match status. Depending on the status, you want to display certain information for when a user hovers over the card: 
* If match status is "FINISHED" or "IN_PLAY", then display the soccer of both teams
* If match status is "POSTPONED", then display "TBD"
* If match status is "SCHEDULED", then display the date of the match

Use grid to structure the information on the card by seperating them into columns.

Here you will be implementing the API to display the match data.

