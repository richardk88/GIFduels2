
const express = require('express');
const router = express.Router({mergeParams: true});



const Gif = require('../models/gif');
const User = require('../models/user');
const Battle = require('../models/battle')



//Get Users Index
router.get('/', (req, res) => {
      Battle.find({}).then((battles) =>{
      console.log(battles[0].users);
      
      
      res.render(
        'users/index',
        {
         users: battles[0].users 

        }
      )
    })
});

// Create User Form
router.get('/new', (req, res) => {
  res.render('users/new')
});

// Post New User to Index
// router.post('/', (req, res) => {
//   const newUserInfo = req.body;
//   let currentUser = [];

//   Battle.find({}).then((battle) => {
//     const newUser = new User(newUserInfo);
//     console.log(newUser);
//     battle.users.push(newUser);
//     currentUser.push(newUser);
//     return user.save();
//   }).then((battle) => {
//     console.log("SUCC");
//     res.render("users/show")
//   })
// });

// Show User route
router.get('/:id', (req, res) => {
  // const battleId = req.params.id;
  const userId = req.params.userId;
  Battle.find({}).then((battle) =>{
    console.log(battle[0].users);
    const foundUser = battle.find((user) => {
      return user.id === userId;
    });
    console.log(foundUser);
    res.render('users/show', 
        {
          userId,
          userName: foundUser.userName,
          firstName: foundUser.firstName,
          lastName: foundUser.lastName,
          email: foundUser.email
        }
        )
    // res.send(battles[0].users);
  }).catch((error) => {
    console.log(error);
  })
});

module.exports = router;
