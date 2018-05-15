const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema(
  {
    listId: {
      type: Schema.Types.ObjectId,
      ref: "List"
    },
    name: { type: String },
    description: { type: String },
    dueDate: { type: Date },
    labels: [{ type: String }],
    comments: [{ type: String }],
    contributors: [
      {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    ],
    taskDuration: {
      type: String,
      enum: ["1 hour", "2 hour", "3 hour", "half day", "full day"]
    }
  },

  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Card = mongoose.model("Card", cardSchema);
module.exports = Card;
