const { Schema, model, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const ReactionSchema = new Schema(
  {
    reactionId: {
      
      type: Schema.Types.ObjectId,
      
      default: () => new Types.ObjectId(),
    },

    username: {
      type: String,
      required: true,
    },
  },

);


const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;