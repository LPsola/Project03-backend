const express       = require( "express" );
const mongoose      = require( "mongoose" );
const projectRouter = express.Router();
const Project       = require( "./../models/Project" );
const User          = require( "./../models/User" );



// --------------------------------------------------
// ROUTES
// --------------------------------------------------


// GET PROJECTS LIST
// -----------------
projectRouter.get( "/projects", ( req, res, next ) => {
    Project.find()
        .then(( projects ) => {
            res.json( projects );
        })
        .catch(( err ) => {
            next( err );
        });
});



// POST NEW PROJECT
// ----------------
projectRouter.post( "/projects", ( req, res, next ) => {
    const {
        owner,
        name,
        imageUrl,
        githubRepoUrl,
        trelloBoardId,
        slackWorkSpaceDirectory,
        slackUserId,
        contributors,
        activityFeed
    } = req.body;

    Project.create({
        owner,
        name,
        imageUrl,
        githubRepoUrl,
        trelloBoardId,
        slackWorkSpaceDirectory,
        slackUserId,
        contributors,
        activityFeed
    })
        .then(( newProject ) => {
            console.log( req.body );
            res.json( newProject );
        })
        .catch(( err ) => {
            next( err );
        });
});



// GET ONE PROJECT
// ---------------
projectRouter.get( "/project/:projectId", ( req, res, next ) => {
    if( !mongoose.Types.ObjectId.isValid( req.params.projectId )) {
        next();
        return;
    }

    Project.findById( req.params.projectId )
        .then(( project ) => {
            if( !project ) {
                next();
                return;
            }
            res.json( project );
        })
        .catch(( err ) => {
            next( err );
        });
})



// POST ADD USER TO PROJECT
// ------------------------
// 1. search users from the database, according to the info passed in the form
// 2. if a user matches, res.json
projectRouter.get( "/invite-contributor/:username", ( req, res, next ) => {
    User.find({ username: req.params.username })
        .then(( user ) => {
          res.json( user );
        })
        .catch(( err ) => {
            next( err );
        });
})



// PUT ONE PROJECT
// DELETE ONE PROJECT









// --------------------------------------------------

module.exports = projectRouter;