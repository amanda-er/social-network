const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      trim: true,
      required: "Username is Required",
    },

    email: {
      type: String,
      unique: true,
      required: "Username is Required",
      match: [/.+@.+\..+/],
    },
  }
);

UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("User", UserSchema);

module.exports = User;