const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: { type: String },
    password: { type: String },
    email: { type: String },
    githubID: { type: String },
    githubAvatar_url: {type: String},
    currentCards: [{
      type: Schema.Types.ObjectId,
      ref: 'Cards'}],
    archivedCards: [{ 
      type: Schema.Types.ObjectId,
      ref: 'Cards'}],
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
