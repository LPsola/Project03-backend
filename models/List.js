const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const listSchema = new Schema({
    projectId: {
        type: Schema.Types.ObjectId,
        ref: 'Project'
    },
    name: { type: String },
    trelloBoardId: { type: String },
},

{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const List = mongoose.model('List', listSchema);
module.exports = List;
