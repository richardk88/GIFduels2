const express = require('express');
const router = express.Router({mergeParams: true});



const Gif = require('../models/gif');
const User = require('../models/user');
const Battle = require('../models/battle')

/* GET home page. */
router.get('/', function(req, res) {
    var firstNumber;
    var secondNumber;
  function randomNumber (arrayOne) {
    do {
      firstNumber = Math.floor(Math.random() * arrayOne.length);
      secondNumber = Math.floor(Math.random() * arrayOne.length);
    } while (firstNumber === secondNumber);
  }
    Battle.find({}).then((battles) =>{
      // console.log(battles[0].playerOne.gifs[0].imgUrl);
      // res.send(battles[0].playerOne.gifs[0].imgUrl);
      // User.find({}).then()
      randomNumber(battles[0].users);
      res.render(
        'homepage/index',
        {
          playerOne: battles[0].users[firstNumber].userName,
          playerTwo: battles[0].users[secondNumber].userName,
          gifOne: battles[0].users[0].gifs[0].imgUrl,
          gifTwo: battles[0].users[1].gifs[0].imgUrl

        }
      )
    })
    
});

// //Get Users Index
// router.get('/users', (req, res) => {
//   res.send("Dan is the best")
// })

module.exports = router;