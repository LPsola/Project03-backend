const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const projectSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    name: { type: String },
    imageUrl: { type: String },
    githubRepoUrl: { type: String },
    trelloBoardId: { type: String },
    slackWorkSpaceDirectory: { type: String },
    slackUserId: { type: String },
    contributors: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    activityFeed: [{type: String}],
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
