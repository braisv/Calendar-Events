const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    title: {
      type: String,
      unique: true
    },
    description: String,
    date: Date,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
      },
  },
  {
    timestamps: true,
    toJSON: {
      transform: function(doc, ret) {
        delete ret.password;
        ret.id = doc._id;
        delete ret._id;
      }
    }
  }
);

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;