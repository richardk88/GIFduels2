const express = require('express');
const router = express.Router({
  mergeParams: true
});



const Gif = require('../models/gif');
const User = require('../models/user');
const Battle = require('../models/battle')



//Get Users Index
router.get('/', (req, res) => {
  const battleId = req.params.battleId;
  const userId = req.params.userId;
  Battle.findById(battleId).then((battle) => {
    console.log(battleId);



    res.render(
      'users/index', {
        users: battle.users,
        battleId

      }
    )
  }).catch((error)=> {
    console.log(error);
  });
});

// Create User Form
router.get('/new', (req, res) => {
  const battleId = req.params.battleId;
  const userId = req.params.userId;
  console.log(battleId);
  res.render('users/new', {
    battleId
  })
});

// Post New User to Index
router.post('/', (req, res) => {
  const battleId = req.params.battleId;

  const newUserInfo = req.body;
  let currentUser = [];

  Battle.findById(battleId).then((battle) => {
    const newUser = new User(newUserInfo);
    console.log(newUser);
    battle.users.push(newUser);
    currentUser.push(newUser);
    return battle.save();

  }).then((battle) => {
    console.log("SUCC");
    res.render("gifs/new", {
      battleId,
      userId: currentUser[0]._id,
      userName: currentUser[0].userName,
      firstName: currentUser[0].firstName,
      lastName: currentUser[0].lastName,
      email: currentUser[0].email,
      gifs: currentUser[0].gifs,
      losses: currentUser[0].losses,
      wins: currentUser[0].wins
    })
  }).catch((error) => {
    console.log(error);
  });
  console.log(currentUser);
});

// Show User route
router.get('/:userId', (req, res) => {
  const battleId = req.params.battleId;
  const userId = req.params.userId;
  Battle.findById(battleId).then((battle) => {
    console.log(battleId);
    const foundUser = battle.users.find((user) => {
      return user.id === userId;
    });
    // console.log(foundUser);
    res.render('users/show', {
      battleId,
      userId,
      userName: foundUser.userName,
      firstName: foundUser.firstName,
      lastName: foundUser.lastName,
      email: foundUser.email,
      wins: foundUser.wins,
      losses: foundUser.losses,
      gifs: foundUser.gifs
      
    })
    // res.send(battles[0].users);
  }).catch((error) => {
    console.log(error);
  })
});

//Edit Form For User
router.get('/:userId/edit', (req, res) => {
  const battleId = req.params.battleId;
  const userId = req.params.userId;
  console.log(battleId);
  Battle.findById(battleId).then((battle) => {
    const foundUser = battle.users.find((user) => {
      return user.id === userId;
    });
    res.render('users/edit', {
      battleId,
      userId,
      userName: foundUser.userName,
      firstName: foundUser.firstName,
      lastName: foundUser.lastName,
      email: foundUser.email
    });
  }).catch((error) => {
    console.log(error);
  });
});

//Update the User (PUT)
router.put('/:userId', (req, res) => {
  const battleId = req.params.battleId;
  const userId = req.params.userId;
  console.log(battleId);
  Battle.findById(battleId).then((battle) => {
    const foundUser = battle.users.find((user) => {
      return user.id === userId;
    });

    foundUser.userName = req.body.userName;
    foundUser.firstName = req.body.firstName;
    foundUser.lastName = req.body.lastName;
    foundUser.email = req.body.email;

    battle.save();

    console.log('SUCCESS');

    res.render('users/show', {
      battleId,
      userId,
      userName: foundUser.userName,
      firstName: foundUser.firstName,
      lastName: foundUser.lastName,
      email: foundUser.email,
      wins: foundUser.wins,
      losses: foundUser.losses
    });
  }).catch((error) => {
    console.log(error);
  });
});

//DELETE USER ROUTE
router.get('/:userId/delete', (req, res) => {
  const battleId = req.params.battleId;
  const userId = req.params.userId;

  Battle.findById(battleId).then((battle) => {
    battle.users.id(userId).remove();

    return battle.save();
  }).then(battle => {
    res.render('users/index', {
      battleId,
      userId,
      users: battle.users
    });
  }).catch((error) => {
    console.log(error);
  });


})
module.exports = router;
