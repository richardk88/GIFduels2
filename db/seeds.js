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
  title: 'Ron',
  imgUrl: 'https://media.giphy.com/media/iOz3p2txHIo4U/giphy.gif',
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

const gifTwentyOne = new Gif ({
  title: 'Magic',
  imgUrl: 'https://media.giphy.com/media/12NUbkX6p4xOO4/giphy.gif',
  votes: 0
});

const gifTwentyTwo = new Gif ({
  title: 'IDK',
  imgUrl: 'https://media.giphy.com/media/y65VoOlimZaus/giphy.gif',
  votes: 0
});

const gifTwentyThree = new Gif ({
  title: 'Arrested Development',
  imgUrl: 'https://media.giphy.com/media/LycfkVG4L6x0Y/giphy.gif',
  votes: 0  
});

const gifTwentyFour = new Gif ({
  title: 'Fusion',
  imgUrl: 'https://media.giphy.com/media/CCPMwVCV9PJa8/giphy.gif',
  votes: 0
});

const gifTwentyFive = new Gif ({
  title: 'Money',
  imgUrl: 'https://media.tenor.co/images/3e6e34d6cb50d6a9555076d70d5b608c/tenor.gif',
  votes: 0
});

const gifTwentySix = new Gif ({
  title: 'Exercise',
  imgUrl: 'https://img.buzzfeed.com/buzzfeed-static/static/enhanced/terminal05/2012/4/17/12/anigif_enhanced-buzz-27448-1334678959-13.gif',
  votes: 0
});

//savannah
const gifTwentySeven = new Gif ({
  title: '',
  imgUrl: '',
  votes: 0
});

//clare
const gifTwentyEight = new Gif ({
  title: '',
  imgUrl: '',
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
  gifs: [gifTwo]
})

const john = new User({
  firstName: 'John',
  lastName: 'Carrington',
  userName: 'JohnnyBoy',
  email: 'thejohn@porto.com',
  gifs: [gifThree]
})

const aaron = new User({
  firstName: 'Aaron',
  lastName: 'Aaronson',
  userName: 'CoolKid',
  email: 'toomanyas@aaron.com',
  gifs: [gifFour]
})

const rick = new User({
  firstName: 'Rick',
  lastName: 'Sanchez',
  userName: 'WubbaLubbaDubDub',
  email: 'rickc137@universe.org',
  gifs: [gifFive]
})

const morty = new User({
  firstName: 'Morty',
  lastName: 'Smith',
  userName: 'WimpyKid22',
  email: 'uhh@morty.com',
  gifs: [gifSix]
})

const jerry = new User({
  firstName: 'Jerry',
  lastName: 'Smith',
  userName: 'TheTrueJerry',
  email: 'jerry@balloongame.com',
  gifs: [gifSeven]
})

const birdPerson = new User({
  firstName: 'Bird',
  lastName: 'Person',
  userName: 'IAmBirdPerson',
  email: 'birdperson@flywings.com',
  gifs: [gifEight]
})

const richard = new User({
  firstName: 'Richard',
  lastName: 'Hendricks',
  userName: 'SmarterThanYou314',
  email: 'rhendricks@hooli.com',
  gifs: [gifNine]
})

const jared = new User({
  firstName: 'Jared',
  lastName: 'Dunn',
  userName: 'BigDaddySlim',
  email: 'donald@hooli.com',
  gifs: [gifTen]
})

const dinesh = new User({
  firstName: 'Dinesh',
  lastName: 'Chugtai',
  userName: 'PakistaniDenzel',
  email: 'dinesh@piperchat.com',
  gifs: [gifEleven]
})

const gilfoyle = new User({
  firstName: 'Bertram',
  lastName: 'Gilfoyle',
  userName: 'HisEternalCoder6',
  email: 'gilfoyle@anton.com',
  gifs: [gifTwelve]
})

const bigHead = new User ({
  firstName: 'Nelson',
  lastName: 'Bighetti',
  userName: 'BigHead',
  email: 'bighead@hooli.com',
  gifs: [gifThirteen]
})

const erlich = new User({
  firstName: 'Erlich',
  lastName: 'Bachman',
  userName: 'Bachmanity',
  email: 'ebachman@bachmanity.com',
  gifs: [gifFourteen]
})

const ash = new User({
  firstName: 'Ash',
  lastName: 'Ketchum',
  userName: 'PokemonMaster95',
  email: 'ash@gamefreak.com',
  gifs: [gifFifteen]
})

const sly = new User({
  firstName: 'Sly',
  lastName: 'Cooper',
  userName: 'SlyCooper',
  email: 'sly@thieviousracoonus.com',
  gifs: [gifSixteen]
})

const carmen = new User({
  firstName: 'Carmen',
  lastName: 'San Diego',
  userName: 'CarmenSanDiego',
  email: 'carmem@nooneknows.com',
  gifs: [gifSeventeen]
})

const summer = new User({
  firstName: 'Summer',
  lastName: 'Smith',
  userName: 'ForeverSummer',
  email: 'summer@balloongame.com',
  gifs: [gifEighteen]
})

const laurie = new User ({
  firstName: 'Laurie',
  lastName: 'Hodges',
  userName: 'ShowMeTheMoney11',
  email: 'lhodges@breemhall.com',
  gifs: [gifNineteen]
})

const angelica = new User({
  firstName: 'Angelica',
  lastName: 'Pickles',
  userName: 'Angelica',
  email: 'sourandsweet@rugrats.com',
  gifs: [gifTwenty]
})

const patrick = new User({
  firstName: 'Patrick',
  lastName: 'Star',
  userName: 'PinheadLarry',
  email: 'patrick@bikinibottom.com',
  gifs: [gifTwentyOne]
})

const spongebob = new User({
  firstName: 'Spongebob',
  lastName: 'Squarepants',
  userName: 'Dirty Dan',
  email: 'spongebob@weeniehutjr.com',
  gifs: [gifTwentyTwo]
})

const squidward = new User({
  firstName: 'Squidward',
  lastName: 'Tentacles',
  userName: 'ClarinetMaster32',
  email: 'squidward@clarinetclub.com',
  gifs: [gifTwentyThree]
})

const sandy = new User({
  firstName: 'Sandy',
  lastName: 'Cheeks',
  userName: 'TexasSquirrel',
  email: 'sandy@bikinibottom.com',
  gifs: [gifTwentyFour]
})

const earl = new User({
  firstName: 'Earl',
  lastName: 'Hickey',
  userName: 'MyNameIsEarl',
  email: 'earl@trailerpark.com',
  gifs: [gifTwentyFive]
})

const nathan = new User({
  firstName: 'Nathan',
  lastName: 'Drake',
  userName: 'NateDrake',
  email: 'ndrake@uncharted.com',
  gifs: [gifTwentySix]
})

const sully = new User({
  firstName: 'Victor',
  lastName: 'Sullivan',
  userName: 'SullyTheTreasureHunter',
  email: 'sully@uncharted.com',
  gifs: [gifTwentySeven]
})

const masterChief = new User({
  firstName: 'John',
  lastName: 'Doe',
  userName: 'Master Chief',
  email: 'spartan117@usmc.com',
  gifs: [gifTwentyEight]
})
// END OF USERS

// create new battle
const battleOnes = new Battle({
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

gifTwo.save(function(err) {
  if (err) console.log(err);
    console.log("gif created!");
});

gifThree.save(function(err) {
  if (err) console.log(err);
    console.log("gif created!");
});

gifFour.save(function(err) {
  if (err) console.log(err);
    console.log("gif created!");
});

gifFive.save(function(err) {
  if (err) console.log(err);
    console.log("gif created!");
});

gifSix.save(function(err) {
  if (err) console.log(err);
    console.log("gif created!");
});

gifSeven.save(function(err) {
  if (err) console.log(err);
    console.log("gif created!");
});

gifEight.save(function(err) {
  if (err) console.log(err);
    console.log("gif created!");
});

gifNine.save(function(err) {
  if (err) console.log(err);
    console.log("gif created!");
});

gifTen.save(function(err) {
  if (err) console.log(err);
    console.log("gif created!");
});

gifEleven.save(function(err) {
  if (err) console.log(err);
    console.log("gif created!");
});

gifTwelve.save(function(err) {
  if (err) console.log(err);
    console.log("gif created!");
});

gifThirteen.save(function(err) {
  if (err) console.log(err);
    console.log("gif created!");
});

gifFourteen.save(function(err) {
  if (err) console.log(err);
    console.log("gif created!");
});

gifFifteen.save(function(err) {
  if (err) console.log(err);
    console.log("gif created!");
});

gifSixteen.save(function(err) {
  if (err) console.log(err);
    console.log("gif created!");
});

gifSeventeen.save(function(err) {
  if (err) console.log(err);
    console.log("gif created!");
});

gifEighteen.save(function(err) {
  if (err) console.log(err);
    console.log("gif created!");
});

gifNineteen.save(function(err) {
  if (err) console.log(err);
    console.log("gif created!");
});

gifTwenty.save(function(err) {
  if (err) console.log(err);
    console.log("gif created!");
});

gifTwentyOne.save(function(err) {
  if (err) console.log(err);
  console.log("gif created!");
});

gifTwentyTwo.save(function(err) {
  if (err) console.log(err);
  console.log("gif created!");
});

gifTwentyThree.save(function(err) {
  if (err) console.log(err);
  console.log("gif created!");
});

gifTwentyFour.save(function(err) {
  if (err) console.log(err);
  console.log("gif created!");
});

gifTwentyFive.save(function(err) {
  if (err) console.log(err);
  console.log("gif created!");
});

gifTwentySix.save(function(err) {
  if (err) console.log(err);
  console.log("gif created!");
});

gifTwentySeven.save(function(err) {
  if (err) console.log(err);
  console.log("gif created!");
});

gifTwentyEight.save(function(err) {
  if (err) console.log(err);
  console.log("gif created!");
});

// save the user
// USERS.SAVE
jace.save(function(err) {
  if (err) console.log(err);
    console.log("user jace created!");
});

david.save(function(err) {
  if (err) console.log(err);
    console.log("user david created!");
});

john.save(function(err) {
  if (err) console.log(err);
    console.log("user john created!");
});

aaron.save(function(err) {
  if (err) console.log(err);
    console.log("user aaron created!");
});

rick.save(function(err) {
  if (err) console.log(err);
    console.log("user rick created!");
});

morty.save(function(err) {
  if (err) console.log(err);
    console.log("user morty created!");
});

jerry.save(function(err) {
  if (err) console.log(err);
    console.log("user jerry created!");
});

birdPerson.save(function(err) {
  if (err) console.log(err);
    console.log("user birdPerson created!");
});

richard.save(function(err) {
  if (err) console.log(err);
    console.log("user richard created!");
});

jared.save(function(err) {
  if (err) console.log(err);
    console.log("user jared created!");
});

dinesh.save(function(err) {
  if (err) console.log(err);
    console.log("user dinesh created!");
});

gilfoyle.save(function(err) {
  if (err) console.log(err);
    console.log("user gilfoyle created!");
});

bigHead.save(function(err) {
  if (err) console.log(err);
    console.log("user bigHead created!");
});

erlich.save(function(err) {
  if (err) console.log(err);
    console.log("user erlich created!");
});

ash.save(function(err) {
  if (err) console.log(err);
    console.log("user ash created!");
});

sly.save(function(err) {
  if (err) console.log(err);
    console.log("user sly created!");
});

carmen.save(function(err) {
  if (err) console.log(err);
    console.log("user carmen created!");
});

summer.save(function(err) {
  if (err) console.log(err);
    console.log("user summer created!");
});

laurie.save(function(err) {
  if (err) console.log(err);
    console.log("user laurie created!");
});

angelica.save(function(err) {
  if (err) console.log(err);
    console.log("user angelica created!");
});

patrick.save(function(err) {
  if (err) console.log(err);
    console.log("user patrick created!");
});

spongebob.save(function(err) {
  if (err) console.log(err);
    console.log("user spongebob created!");
});

squidward.save(function(err) {
  if (err) console.log(err);
    console.log("user squidward created!");
});

sandy.save(function(err) {
  if (err) console.log(err);
    console.log("user sandy created!");
});

earl.save(function(err) {
  if (err) console.log(err);
    console.log("user earl created!");
});

nathan.save(function(err) {
  if (err) console.log(err);
    console.log("user nathan created!");
});

sully.save(function(err) {
  if (err) console.log(err);
    console.log("user sully created!");
});

masterChief.save(function(err) {
  if (err) console.log(err);
    console.log("user masterChief created!");
});
  
// END OF USERS.SAVES

// save the battle
battleOne.save(function(err) {
  if (err) console.log(err);

  console.log('battleOne created!');
});

// console.log(jace);
console.log(battleOne);
mongoose.connection.close();
