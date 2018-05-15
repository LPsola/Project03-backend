const express = require("express");
const mongoose = require("mongoose");
const cardsRouter = express.Router();
const Card = require("./../models/Card");
const Project = require("./../models/Project");
const List = require("./../models/List");
const User = require("./../models/User");

// --------------------------------------------------
// ROUTES
// --------------------------------------------------

// GET list of Lists for one Project
cardsRouter.get("/project/:projectId/lists", (req, res, next) => {
  const listArray = [];
  if (!mongoose.Types.ObjectId.isValid(req.params.projectId)) {
    next();
    return;
  }

  Project.findById(req.params.projectId)
    .then(project => {
      if (!project) {
        next();
        return;
      } else {
        List.find().then(list => {
          list.forEach(oneList => {
            if (oneList.projectId.toString() === project._id.toString()) {
              listArray.push(oneList);
            }
          });
          res.json(listArray);
        });
      }
    })
    .catch(err => {
      next(err);
    });
});

// GET Cards LIST for one List of one Project
// -----------------
cardsRouter.get("/project/:projectId/:listId/cards", (req, res, next) => {
  const cardsArray = [];
  if (!mongoose.Types.ObjectId.isValid(req.params.projectId)) {
    next();
    return;
  }

  Project.findById(req.params.projectId)
    .then(project => {
      if (!project) {
        next();
        return;
      } else {
        if (!mongoose.Types.ObjectId.isValid(req.params.listId)) {
          next();
          return;
        } else {
          List.findById(req.params.listId).then(list => {
            if (!list) {
              next();
              return;
            } else if (list.projectId.toString() === project._id.toString()) {
              Card.find().then(card => {
                card.forEach(oneCard => {
                  if (oneCard.listId.toString() === list._id.toString()) {
                    cardsArray.push(oneCard);
                  }
                });
                res.json(cardsArray);
              });
            } else {
              next();
              return;
            }
          });
        }
      }
    })
    .catch(err => {
      next(err);
    });
});

// // POST NEW PROJECT
// // ----------------
// cardsRouter.post("/projects", (req, res, next) => {
//   const {
//     owner,
//     name,
//     imageUrl,
//     githubRepoUrl,
//     trelloBoardId,
//     slackWorkSpaceDirectory,
//     slackUserId,
//     contributors,
//     activityFeed
//   } = req.body;

//   Project.create({
//     owner,
//     name,
//     imageUrl,
//     githubRepoUrl,
//     trelloBoardId,
//     slackWorkSpaceDirectory,
//     slackUserId,
//     contributors,
//     activityFeed
//   })
//     .then(newProject => {
//       console.log(req.body);
//       res.json(newProject);
//     })
//     .catch(err => {
//       next(err);
//     });
// });

// // GET ONE PROJECT
// // ---------------
// cardsRouter.get("/project/:projectId", (req, res, next) => {
//   if (!mongoose.Types.ObjectId.isValid(req.params.projectId)) {
//     next();
//     return;
//   }

//   Project.findById(req.params.projectId)
//     .then(project => {
//       if (!project) {
//         next();
//         return;
//       }
//       res.json(project);
//     })
//     .catch(err => {
//       next(err);
//     });
// });

// // POST ADD USER TO PROJECT
// // ------------------------
// // 1. search users from the database, according to the info passed in the form
// // 2. if a user matches, res.json
// cardsRouter.get("/invite-contributor/:username", (req, res, next) => {
//   User.find({ username: req.params.username })
//     .then(user => {
//       res.json(user);
//     })
//     .catch(err => {
//       next(err);
//     });
// });

// // PUT ONE PROJECT
// // DELETE ONE PROJECT

// // --------------------------------------------------

module.exports = cardsRouter;
