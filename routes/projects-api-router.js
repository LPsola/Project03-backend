const express    = require( "express" );
const mongoose   = require( "mongoose" );
const Project    = require( "./../models/project-model.js" );

const router = express.Router();

// --------------------------------------------------
// ROUTES HERE
// --------------------------------------------------



// GET api/projects
// ----------------
router.get( "projects", ( req, res, next ) => {
    Project.find()
        .then(( projects ) => {
            res.json( projects );
        })
        .catch(( err ) => {
            next( err );
        });
});



// POST api/projects
// -----------------
router.post( "projects", ( req, res, next ) => {
    const { ownerId, gitHubUrl, trelloBoardId, slackId, slackUserId, usersArray, activityFeed } = req.body;

    Project.create({ ownerId, gitHubUrl, trelloBoardId, slackId, slackUserId, usersArray, activityFeed })
        .then(( newProject ) => {
            res.json( newProject );
        })
        .catch(( err ) => {
            next( err );
        });
});



// GET api/project/projectId
// -------------------------
router.get( "project/:projectId", ( req, res, next ) => {
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



// PUT api/project/projectId
// DELETE api/project/projectId









// -----------------------

module.exports = router;