const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      unique: true
    },
    tasks: [{
        type: Schema.Types.ObjectId,
        ref: "Task"
      }],
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

const User = mongoose.model("User", userSchema);
module.exports = User;