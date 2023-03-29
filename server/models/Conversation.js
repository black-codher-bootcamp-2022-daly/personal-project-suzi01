const mongoose = require("mongoose");
const { Schema } = mongoose;

const ConversationSchema = new mongoose.Schema(
  {
    members: {
      type: Array,
    },
  },
  { timestamps: true }
);

// module.exports = mongoose.model("Conversation", ConversationSchema);
var Conversation = mongoose.model("conversation", ConversationSchema);
module.exports = Conversation;
