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
        githubRepoUrl,
        trelloBoardId,
    } = req.body;
    Project.findOneAndRemove({ trelloBoardId : trelloBoardId})
    .then(()=>
    Project.create({
        githubRepoUrl,
        trelloBoardId,
    })
    .then(( newProject ) => {
        res.json( newProject );
    })
)
.catch(( err ) => {
    next( err );
});
});



// GET ONE PROJECT
// ---------------
projectRouter.get( "/project/:trelloboardId/", ( req, res, next ) => {
    // if( !mongoose.Types.ObjectId.isValid( req.params.projectId )) {
    //     next();
    //     return;
    // }
    
    Project.findOne( { trelloBoardId : req.params.trelloboardId} )    
    .then(( project ) => {
        if( !project ) {
            res.json( { exists: false} );
            return;
        }
        res.json( project );
    })
    .catch(( err ) => {
        console.log("found project err", project)
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
            
            // Couldn't compare the contributors and the IDs, so I had to string them
            let stringedContributors = [];
            let stringedUserId = user._id.toString();
            
            project.contributors.forEach(( contributor ) => {
                stringedContributors.push( contributor.toString() );
            });
            
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