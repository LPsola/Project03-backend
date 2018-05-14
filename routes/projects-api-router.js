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
            // console.log( req.body );
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



// GET SEARCH USER
// ---------------
projectRouter.get( "/search-user/:username", ( req, res, next ) => {
    User.findOne({ username: req.params.username })
        .then(( user ) => {
          res.json( user );
        })
        .catch(( err ) => {
            next( err );
        });
})



// POST ADD FOUND USER TO PROJECT
// ------------------------------
projectRouter.post( "/add-contributor", ( req, res, next ) => {

    const { projectId, userId } = req.body;

    User.findById({ _id: userId })
        .then(( user ) => {

            Project.findById( projectId )
                .then(( project ) => {

                    let stringedContributors = [];
                    let stringedUserId = user._id.toString();
                    
                    project.contributors.forEach(( contributor ) => {
                        stringedContributors.push( contributor.toString() );
                    });
                    
                    // console.log( "PROJECT CONTRIBUTORS CONSOLE LOG ------------------------" );
                    // console.log( typeof project.contributors[1] );
                    // console.log( typeof stringedContributors[1] );
                    // console.log( "USER._ID CONSOLE LOG ------------------------" );
                    // console.log( typeof user._id );
                    // console.log( typeof stringedUserId );
                    // console.log( "USER._ID IS IN CONTRIBUTORS LOG ------------------------" );
                    // console.log( project.contributors.includes( user._id ) );
                    // console.log( stringedContributors.includes( stringedUserId ) );

                    if( stringedContributors.includes( stringedUserId )) {
                        res.json( project );
                    }
                    else {
                        Project.findByIdAndUpdate(
                            { _id: projectId },
                            { $push: { contributors: { _id: userId }}}
                        )
                    .then(( project ) => {
                        
                        res.json( project );
                    })
                    }
                })
        })
        .catch(( err ) => {
            next( err );
        });
})



// PUT ONE PROJECT
// DELETE ONE PROJECT









// --------------------------------------------------

module.exports = projectRouter;