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

# Screenshots from the app

Homepage:
![0F880155-FEDE-40E9-BFCA-3EE22D1719FE](https://user-images.githubusercontent.com/107416924/194544914-6c50074c-ea99-4278-beab-853d5ed21ffc.jpeg)

Burger Menu:
![7CCEABE3-94C8-4438-ABC6-B939A169CEFF](https://user-images.githubusercontent.com/107416924/194544934-073ce8bb-7b2d-44fa-b71c-a60281412e36.jpeg)

Organ Information:
![75C2CC59-4091-4353-81B6-686C4B673C14](https://user-images.githubusercontent.com/107416924/194544966-4ab5df97-d501-4da9-b3d7-3551a149bc83.jpeg)

Quiz:
![0452AA06-AD76-4409-BEB1-BA6B49A2291F](https://user-images.githubusercontent.com/107416924/194544991-c90ad5a7-a638-4433-b57e-45415580fce5.jpeg)

Comments:
![828EF647-0C6F-4D3F-8456-67B6C7D23856](https://user-images.githubusercontent.com/107416924/194545013-64056a47-400e-4277-8535-3d92e2ff0666.jpeg)

# Instructions to run the app
1. Install all npm dependencies:
    In terminal use command "npm i" in both the client and server folders
2. Seed the Database:
    In terminal, navigate to server folder and use command "npm run seeds"
3. Run the server:
    In terminal, navigate to server folder and use command "npm run server: dev"
4. Run the client:
    In terminal, navigate to client folder and use command "npm start" 

# Navigating the app
The client should open on the homepage. There is a burger menu in the top-left corner which displays the pages in the app. Inspirational quotes can be generated from an API using the "Inspire me" button.  

A new user should enter their name in the box on the homepage and then select it from the dropdown menu. Existing users can simply select their name from the dropdown. Once the user is selected, this will persist across the app unless the page is refreshed.  

The user can navigate to the "Organs" page using the burger menu and view the information by clicking on the button for each organ. At the bottom of this screen, the user can then navigate to the quiz page.  

On the Quizzes page, the user can select a quiz to take. Currently the app has a limitation that the answer given by the user must exactly match the answer stored in the database, however the answers are largely one word and the app can handle lower and upper case answers. A future development plans to convert the questions to multiple choice.  

On the Comments page, the user can leave a comment about the app and delete their comments. They can search comments to see if other users have asked similar questions.  

The About page provides some information on future developments.
