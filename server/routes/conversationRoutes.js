const mongoose = require("mongoose");
const Conversation = mongoose.model('conversation')
var bodyParser = require('body-parser');
// const Conversation = require("../models/Conversation");
// const Profile = mongoose.model("profiles");

const ConversationRoutes = (app) => {
app.post("/conversations", async(req, res) => {
    res.send('this works')
    const newConversation = await Conversation.create({
        members: [req.body.senderId, req.body.receiverId],
    })

    try{
        // console.log(newConversation)
        const savedConversation = await newConversation.save()
        res.status(200).send(newConversation)
    } catch(err){
        res.status(500).send(err)
    }
})

app.get('/conversations/:userId', async (req,res) => {
    try{
        // const conversation = 'Helooo!'
        const conversation = await Conversation.find({members:{$in: [req.params.userId]},})
        res.status(200).send(conversation)
    } catch(err){
        res.status(500).send(err)
    }
})

app.get('conversations/:userId/:secondUserId', async (req,res) => {
    const {userId, secondUserId} = req.params
    try{
        const conversation = await Conversation.findOne({members:{$all: [userId, secondUserId]},})
        res.status(200).send(conversation)
    } catch(err){
        res.status(500).send(err)
    }
})

};

module.exports = ConversationRoutes;
