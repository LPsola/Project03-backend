const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const projectSchema = new Schema({
    // owner: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User'
    // },
    githubRepoUrl: { type: String },
    trelloBoardId: { type: String },
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
