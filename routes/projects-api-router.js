const express       = require( "express" );
const mongoose      = require( "mongoose" );
const projectRouter = express.Router();
const Project       = require( "./../models/Project" );



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
        })
})



// PUT ONE PROJECT
// DELETE ONE PROJECT









// --------------------------------------------------

module.exports = projectRouter;