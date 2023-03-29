const mongoose = require("mongoose");
const Message = mongoose.model('messages')
var bodyParser = require('body-parser');
// const Message = require("../models/Message");
// const Profile = mongoose.model("profiles");

const MessageRoutes = (app) => {
app.post("/messages", async (req, res) => {
    const newMessage = new Message(req.body);
  
    try {
      const savedMessage = await newMessage.save();
      res.status(200).send(savedMessage);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  
  
  app.get("/messages/:conversationId", async (req, res) => {
    try {
      const messages = await Message.find({
        conversationId: req.params.conversationId,
      });
      res.status(200).send(messages);
    } catch (err) {
      res.status(500).send(err);
    }
  });

};

module.exports = MessageRoutes;