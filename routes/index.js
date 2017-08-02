const express = require('express');
const router = express.Router({
  mergeParams: true
});



const Gif = require('../models/gif');
const User = require('../models/user');
const Battle = require('../models/battle')


//Opening Page ROUTE USELESS
router.get('/', function (req, res) {
  var firstNumber;
  var secondNumber;

  function randomNumber(arrayOne) {
    do {
      firstNumber = Math.floor(Math.random() * arrayOne.length);
      secondNumber = Math.floor(Math.random() * arrayOne.length);
    } while (firstNumber === secondNumber);
  }
  Battle.find({}).then((battles) => {
    // console.log(battles[0].playerOne.gifs[0].imgUrl);
    // res.send(battles[0].playerOne.gifs[0].imgUrl);
    // User.find({}).then()
    randomNumber(battles[0].users);
    res.render(
      'homepage/index', {
        playerOne: battles[0].users[firstNumber].userName,
        playerTwo: battles[0].users[secondNumber].userName,
        gifOne: battles[0].users[firstNumber].gifs[0].imgUrl,
        gifTwo: battles[0].users[secondNumber].gifs[0].imgUrl,
        battleId: battles[0].id
      }

    )
  })



});
//DUEL PAGE (ACTUAL HOMEPAGE)
router.get('/:battleId', (req, res) => {
  const battleId = req.params.battleId;
  var firstNumber;
  var secondNumber;


//random index for users
  function randomNumber(arrayOne) {
    do {
      firstNumber = Math.floor(Math.random() * arrayOne.length);
      secondNumber = Math.floor(Math.random() * arrayOne.length);
    //keep looping if both indices are the same
    } while (firstNumber === secondNumber);
  }

  //random index for gifs

  Battle.findByIdAndUpdate(battleId).then((battle) => {
    // console.log(battles[0].playerOne.gifs[0].imgUrl);
    // res.send(battles[0].playerOne.gifs[0].imgUrl);
    // User.find({}).then()

    randomNumber(battle.users);
    const gifOne = battle.users[firstNumber].gifs
    const gifTwo = battle.users[secondNumber].gifs



    var gifOneIndex = Math.floor(Math.random() * gifOne.length);
    var gifTwoIndex = Math.floor(Math.random() * gifTwo.length);

    // gifOneIdNumber = battles[0].users[firstNumber].gifs[gifOneIndex].id;
    // gifTwoIdNumber = battles[0].users[secondNumber].gifs[gifTwoIndex].id;
    // userOneIdNumber = battles[0].users[firstNumber].id;
    // userTwoIdNumber = battles[0].users[secondNumber].id;
    battle.randomIndex.push(firstNumber);
    battle.randomIndex.push(secondNumber);
    battle.randomIndex.push(gifOneIndex);
    battle.randomIndex.push(gifTwoIndex);
    battle.save();


    res.render(
      'homepage/show', {
        battleId,
        playerOne: battle.users[firstNumber].userName,
        playerTwo: battle.users[secondNumber].userName,
        gifOne: battle.users[firstNumber].gifs[gifOneIndex].imgUrl,
        gifTwo: battle.users[secondNumber].gifs[gifTwoIndex].imgUrl,

      }

    )
  }).catch((error)=>{
    console.log(error);
  })

})

// Get route to increment votes for Player One GIF

router.get('/:battleId/onewin', (req, res) => {
  const battleId = req.params.battleId;


//Find battle
  Battle.findByIdAndUpdate(battleId).then((battle) => {
    //length of index values array pushed from duel page
    const indexLength = battle.randomIndex.length;
    console.log(indexLength);
    //playerOne index
    const usersIndex = battle.randomIndex[indexLength-4];
    //playerTwo index
    const usersTwoIndex = battle.randomIndex[indexLength-3];
    //gifOne index
    const gifsIndex = battle.randomIndex[indexLength-2];
    //gifTwo index
    const gifsTwoIndex = battle.randomIndex[indexLength-1];
    const foundUser = battle.users[usersIndex];
    const foundGif = foundUser.gifs[gifsIndex];
    const otherUser = battle.users[usersTwoIndex];
    const otherGif = otherUser.gifs[gifsTwoIndex];
    console.log(foundGif);
    /**PUSH USER AND GIF INDEX VALUES FOR LEADERBOARD ROUTE */
    //increase userONE wins by 1
    foundUser.wins += 1;
    //increase gifOne wins by 1
    foundGif.wins += 1;
    //increase userTWO Losses by 1
    otherUser.losses += 1;
    //increase gifTwo losses by 1
    otherGif.losses += 1;
    battle.save();

    console.log('SUCCESS');
    // res.redirect(`/${battleId}`);
  }).catch((error)=>{
     console.log(error);
  })

});

//GET route to increase GIF votes for player TWO
router.get('/:battleId/twowin', (req, res) => {
  const battleId = req.params.battleId;


//Find battle
  Battle.findByIdAndUpdate(battleId).then((battle) => {
    //length of index values array pushed from duel page
    const indexLength = battle.randomIndex.length;
    console.log(indexLength);
    //playerOne index
    const usersIndex = battle.randomIndex[indexLength-4];
    //playerTwo index
    const usersTwoIndex = battle.randomIndex[indexLength-3];
    //gifOne index
    const gifsIndex = battle.randomIndex[indexLength-2];
    //gifTwo index
    const gifsTwoIndex = battle.randomIndex[indexLength-1];
    const foundUser = battle.users[usersIndex];
    const foundGif = foundUser.gifs[gifsIndex];
    const otherUser = battle.users[usersTwoIndex];
    const otherGif = otherUser.gifs[gifsTwoIndex];
    console.log(foundGif);
    //increase userONE losses by 1
    foundUser.losses += 1;
    //increase gifOne losses by 1
    foundGif.losses += 1;
    //increase userTWO wins by 1
    otherUser.wins += 1;
    //increase gifTwo wins by 1
    otherGif.wins += 1;
    battle.save();

    console.log('SUCCESS');
    // res.redirect(`/${battleId}`);
  }).catch((error)=>{
     console.log(error);
  })

});

//Route to get user's/gif's leaderboard
router.get('/:battleId/rankings', (req, res) => {
  const battleId = req.params.battleId;

  Battle.findById(battleId).then((battle) => {
    const users = battle.users;

//Sort ALL users in ascending order (wins)
    const usersRanked = users.sort((a,b) => {
      return (b.wins - a.wins);
    });
    console.log(usersRanked);
    res.render('homepage/rankings', {
    battleId,
    users: usersRanked,
    })

  
  }).catch((error)=> {
    console.log(error);
  })
})
module.exports = router;
