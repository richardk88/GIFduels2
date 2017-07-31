const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/GIFduels2');
// mongoose.connect(process.env.MONGODB_URI);

const Battle = require('../models/battle');
const User = require('../models/user');
const Gif = require('../models/gif')

// Use native promises
mongoose.Promise = global.Promise;

// First we clear the database of existing users, gifs, and battles.
Gif.remove({}, function(err){
  console.log(err);
});

User.remove({}, function(err){
  console.log(err);
});


Battle.remove({}, function(err){
  console.log(err);
});

// Create new Gifs
const gifOne = new Gif({
  title: 'Hard',
  imgUrl: 'https://media.giphy.com/media/BYhoMtJMQsYVy/giphy.gif',
  votes: 0
});

const gifTwo = new Gif ({
   title: 'Simon No',
   imgUrl: 'https://media.tenor.co/images/a2b15b73f6a3dfbb0814994301525a69/tenor.gif',
   votes: 0
});

const gifThree = new Gif ({
   title: 'JIF',
   imgUrl: 'https://media.tenor.co/images/7f80117eb94f61647fb6a197415c3f26/tenor.gif',
   votes: 0
});

const gifFour = new Gif ({
   title: 'Dancer',
   imgUrl: 'https://i.giphy.com/media/l0K4iuXy7gQjJ31M4/giphy.webp',
   votes: 0
});

const gifFive = new Gif ({
   title: 'Pizza',
   imgUrl: 'https://media.tenor.co/images/d7b3c40797c5683e75a8f6ce9c38fb2c/tenor.gif',
   votes: 0
});

const gifSix = new Gif ({
   title: 'Fart',
   imgUrl: 'https://media3.giphy.com/media/UvZfI40CPUfW8/giphy.gif',
   votes: 0
});

const gifSeven = new Gif ({
   title: 'Gump',
   imgUrl: 'https://media.tenor.co/images/eb025f63cbc7d456c2d6ce14cf1cb441/tenor.gif',
   votes: 0
});

const gifEight = new Gif ({
   title: 'Come on Son',
   imgUrl: 'https://media.giphy.com/media/89No6UHzuUam4/giphy.gif',
   votes: 0
});

const gifNine = new Gif ({
   title: 'Saitama',
   imgUrl: 'https://media.giphy.com/media/VXJWhaO7afRe/giphy.gif',
   votes: 0
});

const gifTen = new Gif ({
  title: 'Guy',
  imgUrl: 'https://media.tenor.co/images/2162f0e11ed924dec5a5095190f65908/tenor.gif',
  votes: 0
});

const gifTwelve = new Gif ({
  title: 'YES',
  imgUrl: 'https://media.giphy.com/media/uTuLngvL9p0Xe/giphy.gif',
  votes: 0
});

const gifThirteen = new Gif ({
  title: 'Drinks',
  imgUrl: 'https://media.giphy.com/media/uTuLngvL9p0Xe/giphy.gif',
  votes: 0
});

const gifFourteen = new Gif ({
  title: 'Never',
  imgUrl: 'https://media.giphy.com/media/LwdtMSGiQ0Ako/giphy.gif',
  votes: 0
});

const gifFifteen = new Gif ({
  title: 'Body Rolls',
  imgUrl: 'https://media.giphy.com/media/bv8GhPZnZUL1m/giphy.gif',
  votes: 0
});

const gifSixteen = new Gif ({
  title: 'Yoda',
  imgUrl: 'https://media.giphy.com/media/fItgT774J3nWw/giphy.gif',
  votes: 0
});

const gifSeventeen = new Gif ({
  title: 'Old',
  imgUrl: 'https://media.giphy.com/media/l4KibWpBGWchSqCRy/giphy.gif',
  votes: 0
});

const gifEighteen = new Gif ({
  title: 'Crash',
  imgUrl: 'https://media.giphy.com/media/3o7Zeo6CklS8NHmWKk/giphy.gif',
  votes: 0
});

const gifNineteen = new Gif ({
  title: 'Sunglasses',
  imgUrl: 'https://media.giphy.com/media/1jnyRP4DorCh2/giphy.gif',
  votes: 0
});

const gifTwenty = new Gif ({
  title: 'Plane',
  imgUrl: 'https://media.giphy.com/media/26tOVXZALFoZdJ42I/giphy.gif',
  votes: 0
});
// Create new users
const jace = new User({
  firstName: 'Jace',
  lastName: 'Garcia',
  userName: 'Weeeeee3',
  email: 'funtimes@example.com',
  gifs: [gifOne]
});

const david = new User({
  firstName: 'David',
  lastName: 'Kim',
  userName: 'DavidThaMan',
  email: "cool@example.com",
  gifs: [gifOne]
})


// create new battles
const battleOne = new Battle({
  users: [jace, david],
  // playerOne: users[1],
  // playerTwo: users[1],
  playerOneVotes: 0,
  playerTwoVotes: 0

});


// save the gif
gifOne.save(function(err) {
  if (err) console.log(err);
    console.log("gif created!");
});
// save the user
jace.save(function(err) {
  if (err) console.log(err);
    console.log("user jace created!");
});

david.save(function(err) {
  if (err) console.log(err);
    console.log("user david created!");
});

// save the battle
battleOne.save(function(err) {
  if (err) console.log(err);

  console.log('battleOne created!');
});

// console.log(jace);
console.log(battleOne);
mongoose.connection.close();
