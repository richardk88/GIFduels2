const express = require('express');
const router = express.Router({
  mergeParams: true
});

const Gif = require('../models/gif');
const User = require('../models/user');
const Battle = require('../models/battle')


//NEW GIF FORM
router.get('/new', (req, res) => {
  const battleId = req.params.battleId;
  const userId = req.params.userId;
  res.render('gifs/new', {
    battleId,
    userId
  });
});
//POST NEW GIF
router.post('/', (req, res) => {
  const battleId = req.params.battleId;
  const userId = req.params.userId;
  const gifInfo = req.body;
  Battle.findById(battleId).then((battle) => {
    const newGif = new Gif(gifInfo);
    const foundUser = battle.users.find((user) => {
      return user.id === userId;
    });
    foundUser.gifs.push(newGif);
    battle.save();
    console.log('SUCCESS');
    res.render('users/show', {
      battleId,
      userId,
      userName: foundUser.userName,
      gifs: foundUser.gifs,
      title: newGif.title,
      imgUrl: newGif.imgUrl
    })
  }).catch((error) => {
    console.log(error);
  })
})
//Show route
router.get('/:gifId', (req, res) => {
  const battleId = req.params.battleId;
  const userId = req.params.userId;
  const gifId = req.params.gifId;
  Battle.findById(battleId).then((battle) => {
    const foundUser = battle.users.find((user) => {
      return user.id === userId
    });
    const foundGif = foundUser.gifs.find((gif) => {
      return gif.id === gifId;
    });
    res.render('gifs/show', {
      battleId,
      userId,
      gifId,
      userName: foundUser.userName,
      title: foundGif.title,
      imgUrl: foundGif.imgUrl,
      wins: foundGif.wins,
      losses: foundGif.losses

    })
  })
})

//NEW GIF FORM
router.get('/new', (req, res) => {
  const battleId = req.params.battleId;
  const userId = req.params.userId;
  res.render('gifs/new', {
    battleId,
    userId
  });
});
//POST NEW GIF
router.post('/', (req, res) => {
  const battleId = req.params.battleId;
  const userId = req.params.userId;
  const gifInfo = req.body;
  Battle.findById(battleId).then((battle) => {
    const newGif = new Gif(gifInfo);
    const foundUser = battle.users.find((user) => {
      return user.id === userId;
    });
    foundUser.gifs.push(newGif);
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
      losses: foundUser.losses,
      gifs: foundUser.gifs,
      title: newGif.title,
      imgUrl: newGif.imgUrl
    })
  }).catch((error) => {
    console.log(error);
  })
})

//DELETE GIF
router.get('/:gifId/delete', (req,res) =>{
  const battleId = req.params.battleId;
  const userId = req.params.userId;
  const gifId = req.params.gifId;
  Battle.findById(battleId).then((battle)=>{
    const foundUser = battle.users.find((user) => {
      return user.id === userId
    });
    const foundGif = foundUser.gifs.find((gif) => {
      return gif.id === gifId;
    });
    foundUser.gifs.remove(foundGif);
    battle.save();
    res.redirect(`/${battleId}/users/${userId}`);
  }).catch((error)=>{
    console.log(error);
  })
});


module.exports = router;
