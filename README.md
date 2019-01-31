# Wemanity Kata

## Prerequisites
- NodeJS (if you want to run the server)
- Any web navigator

## Installing and Running

### Client
Navigate to `./client` then run `npm start` . You can now access the app on [localhost:3000/](https://wemanity-kata.herokuapp.com/contacts/)

### Server

#### Live
You can already access the API live on [Heroku](https://wemanity-kata.herokuapp.com/contacts/).

#### Local
If you want to run it on a local machine :
You will have to create a ` ./config/private_keys.js ` file which exports a mongoURI variable containing the database credentials (which I didn't include here for obvious security reasons).

Then just run `node server.js`


## API Endpoints

| Path            | Method | Description                                             |
|-----------------|--------|---------------------------------------------------------|
| /contacts       | GET    | Get all contacts                                        |
| /contacts       | POST   | Add a new contact                                       |
| /contacts       | PUT    |  Update a contact                                       |
| /contacts/:data | GET    | Get all contacts matching the name, last name or number |


## Missing
Since I did this Kata under time pressure, I tried to focus on the main functionnalities. There is great room for improvement, especially in UI / UX, responsiveneness (I didn't have time to test it for mobile) code cleaning and comments. 

I have to admit that creating a full app, which includes designing, writting an entire API (and deploying it) and creating a multi-pages web app under 4 hours challenged me a lot. 

Anyway, it was a pretty cool experience since I'm not used to work under pressure !

## Built With
* React
* Express (nodeJS)
* MongoDB
* [Visual Studio Code](https://code.visualstudio.com/) 

## Authors

* **Matthieu Brouillard** - [brrrouillard](https://twitter.com/brrrouillard)
