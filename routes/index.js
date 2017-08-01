const express = require('express');
const router = express.Router({
  mergeParams: true
});



const Gif = require('../models/gif');
const User = require('../models/user');
const Battle = require('../models/battle')
//users' index
var firstNumber;
var secondNumber;
//GIFs' index
var gifOneIndex;
var gifTwoIndex;

/* GET home page. */
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
//show route
router.get('/:battleId', (req, res) => {
  const battleId = req.params.battleId;


//random index for users
  function randomNumber(arrayOne) {
    do {
      firstNumber = Math.floor(Math.random() * arrayOne.length);
      secondNumber = Math.floor(Math.random() * arrayOne.length);
    //keep looping if both indices are the same
    } while (firstNumber === secondNumber);
  }
  
  //random index for gifs

  Battle.find({}).then((battles) => {
    // console.log(battles[0].playerOne.gifs[0].imgUrl);
    // res.send(battles[0].playerOne.gifs[0].imgUrl);
    // User.find({}).then()
    
    randomNumber(battles[0].users);
    const gifOne = battles[0].users[firstNumber].gifs
    const gifTwo = battles[0].users[secondNumber].gifs
   
    console.log("BATTLES", battles[0]);

    gifOneIndex = Math.floor(Math.random() * gifOne.length);
    gifTwoIndex = Math.floor(Math.random() * gifTwo.length);
  
    console.log(gifOne.length)
    res.render(
      'homepage/show', {
        battleId,
        playerOne: battles[0].users[firstNumber].userName,
        playerTwo: battles[0].users[secondNumber].userName,
        gifOne: battles[0].users[firstNumber].gifs[gifOneIndex].imgUrl,
        gifTwo: battles[0].users[secondNumber].gifs[gifTwoIndex].imgUrl,
        
      }

    )
  }).catch((error)=>{
    console.log(error);
  })
  
})

// Put route to increment votes for Player One GIF

// router.put('/:battleId/userone', (req, res) => {
//   const battleId = req.params.battleId;



//   Battle.findByIdAndUpdate(battleId).then((battle) => {
//     // console.log(battle);
//     const foundUserOne = battle.users[firstNumber];
//     const gifOne = foundUserOne.gifs[gifOneIndex];
    
//     console.log(foundUserOne.gifs)
  
//     gifOne.votes += 1;
//     battle.save();
//     console.log('SUCCESS');
//     res.redirect(`/${battleId}`);
//   }).catch((error)=>{
//      console.log(error);
//   })

// });
// //Get Users Index
// router.get('/users', (req, res) => {
//   res.send("Dan is the best")
// })

module.exports = router;