## Biology Education App

This Javascript project is a web application to be used by students revising for secondary school level biology. The technologies used are:

- Javascript
- React
- MungoDB
- HTML
- CSS

# Project Brief
An established online education provider are looking to improve their online offering of educational content by developing an interactive browser application to assist secondary school students with their revision. Your task is to make an a Minimum Viable Product or prototype to put forward to them for one subject, but which could be extended to other subjects.

MVP

A user should be able to:
- view some educational content on a particular topic
- be able to interact with the page to move through different sections of content e.g. information and quizzes
- use a database to store information

Extensions

- Use an API to bring in content
- Use a search bar which filters information as the user types

# Instructions to run the app
1. Install all npm dependencies:
    In terminal use command "npm i" in both the client and server folders
2. Run the server, ensuring that :
    In terminal use command "npm run server: dev"
3. Run the client:
    In terminal use command "npm start" 

# Navigating the app
The client should open on the homepage. There is a burger menu in the top-left corner which displays the pages in the app. Inspirational quotes can be generated from an API using the "Inspire me" button.  

A new user should enter their name in the box on the homepage and then select it from the dropdown menu. Existing users can simply select their name from the dropdown. Once the user is selected, this will persist across the app unless the page is refreshed.  

The user can navigate to the "Organs" page using the burger menu and view the information by clicking on the button for each organ. At the bottom of this screen, the user can then navigate to the quiz page.  

On the Quizzes page, the user can select a quiz to take. Currently the app has a limitation that the answer given by the user must exactly match the answer stored in the database, however the answers are largely one word and the app can handle lower and upper case answers. A future development plans to convert the questions to multiple choice.  

On the Comments page, the user can leave a comment about the app and delete their comments. They can search comments to see if other users have asked similar questions.  

The About page provides some information on future developments.
