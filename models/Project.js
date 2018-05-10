const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const projectSchema = new Schema({
    githubRepoUrl: { type: String, required: true },
    trelloBoardId: { type: String, required: true },
    slackWorkSpaceDirectory: { type: String, required: true },
    slackUserId: { type: String, required: true },
    contributors: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    activityFeed: [{type: String}],
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
