const express = require('express');
const router = express.Router({
  mergeParams: true
});

const Gif = require('../models/gif');
const User = require('../models/user');
const Battle = require('../models/battle')

//INDEX FOR USER'S GIFS
router.get('/', (req, res, next) => {
  const battleId = req.params.battleId;
  const userId = req.params.userId;
  Battle.findById(battleId).then((battle) => {
    const foundUser = battle.users.find((user) => {
      return user.id === userId
    });
    res.render('gifs/index', {
      battleId,
      userId,
      userName: foundUser.userName,
      gifs: foundUser.gifs,

    })
  }).catch((error) => {
    console.log(error);
  });
});

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
    res.render('gifs/show', {
      battleId,
      userId,
      userName: foundUser.userName,
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
    const foundGif = foundUser.gifs.find((gif)=>{
      return gif.id === gifId;
    });
    res.render('gifs/show', {
      battleId,
      userId,
      gifId,
      userName: foundUser.userName,
      title: foundGif.title,
      imgUrl: foundGif.imgUrl,
      votes: foundGif.votes,

    })
  })
})

// // Show route
// router.get('/:gifId', (req, res) => {
//   const userId = req.params.id;
//   const gifId = req.params.gifId;
//   User.findById(userId).then((user) => {

//     const foundGif = user.gifs.find((gif) => {
//         return gif.id === gifId;
//     });
//     // res.send(foundGif)
//     res.render(
//       'gifs/show',
//       {
//         userId,
//         gifId,
//         userName: user.userName,
//         title: foundGif.title,
//         imgUrl: foundGif.imgUrl,
//         votes: foundGif.votes
//       }
//     );

// }).catch((error) => {
//      console.log(`Failed to find gif with ID of ${gifId}`);
//     console.log(error);
// });
// });


// //Edit Form For Gif
// router.get('/:gifId/edit', (req, res) =>{
//   const userId = req.params.id;
//   const gifId = req.params.gifId;

//   User.findById(userId).then((user) => {
//     const foundGif = user.gifs.find((gif) => {
//       return gif.id === gifId;
//     });

//     res.render('gifs/edit', {
//       userId,
//       gifId,
//       userName: user.userName,
//       title: foundGif.title,
//       imgUrl: foundGif.imgUrl

//     });
//   });
// });

// //Update The Gif (PUT)
// router.put('/:gifId', (req, res) => {
//   const userId = req.params.id;
//   const gifId = req.params.gifId;

//   User.findById(userId).then((user) => {
//     const foundGif = user.gifs.find((gif) => {
//       return gif.id === gifId;
//     });

//     foundGif.title = req.body.title;
//     foundGif.imgUrl = req.body.imgUrl;

//     user.save();

//     console.log('SUCCESS');

//     return res.render(
//       'gifs/show',
//       {
//         userId,
//         gifId,
//         userName: user.userName,
//         title: foundGif.title,
//         imgUrl: foundGif.imgUrl
//       }
//     );

//   }).catch((error) => {
//     console.log(error);
//   });

// });

// //Delete GIF
// router.get('/:gifId/delete', (req, res) => {
//   const userId = req.params.id;
//   const gifId = req.params.gifId;

//   User.findById(userId).then((user) => {
//     user.gifs.id(gifId).remove();

//     return user.save();

//   }).then((user) => {
//     res.render(
//       'gifs/index',
//       {
//         userId,
//         userName: user.userName,
//         firstName: user.firstName,
//         lastName: user.lastName,
//         email: user.email,
//         gifs: user.gifs,
//         gifId: user.gifs._id
//       }
//     );
//   }).catch((error) => {
//     console.log(error);
//   });
// });

// //Update Route
// router.put('/:id', (req, res) => {

//   const gifIdToUpdate = req.params.id;
//   const updatedUserInfo = req.body;

//   User.findByIdAndUpdate(
//       gifIdToUpdate,
//       updatedUserInfo,
//       {new: true} 
//   ).then((user) => {
//     console.log(`User with ID of ${user._id} updated!`);

//     res.render(
//         'users/show',
//           {
//         gifId: user._id,
//         userName: user.userName,
//         firstName: user.firstName,
//         lastName: user.lastName,
//         email: user.email
//         // gif: user.gifs[0].imgUrl
//       }
//     );
//   }).catch((error) => {
//     console.log(`User with ID of ${user._id} failed to update!`);
//     console.log(error);
//   });

// });


module.exports = router;