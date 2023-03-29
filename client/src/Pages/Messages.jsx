import React, { useContext, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import ChatSection from '../Components/ChatSection'
import Conversation from '../Components/Conversation'
import { AuthContext } from '../Context/AuthContext'
import { getConversations, getMessages, postMessage } from '../services/profileService'


const Messages = ({ own }) => {

    const [conversations, setConversations] = useState([])
    const [currentChat, setCurrentChat] = useState(false)
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState("")
    const { user } = useContext(AuthContext)
    const scrollRef = useRef()

    // console.log(user._id)
    useEffect(() => {
        const getAllConversations = async () => {
            try {
                // console.log("Top",user._id)
                const res = await getConversations(user._id)
                // console.log(res.data)
                setConversations(res.data)
            } catch (err) {
                console.log('There was an error', err)
            }
        }
        getAllConversations()
    }, [user])

    console.log(currentChat)
    useEffect(() => {
        const getAllMessages = async () => {
            try {
                const res = await getMessages(currentChat._id)
                // console.log(currentChat._id)
                setMessages(res.data)
            } catch (err) {
                console.log(err)
            }

        }
        getAllMessages()
    }, [currentChat])

    useEffect(()=> {
        scrollRef.current?.scrollIntoView({behavior:"smooth"})
    },[messages])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const message = {
            sender: user._id,
            text: newMessage,
            conversationId: currentChat._id
        }

        try{
            const res = await postMessage(message)
            setMessages([...messages, res.data])
            setNewMessage("")
        }catch(err){
            console.log(err)
        }
    }

    // console.log(messages)

    return (
        <Container>
            <Content>
                <ConversationSection>
                    <h1>Your Conversations</h1>
                    {conversations.map((c) => (
                        <Convo onClick={() => setCurrentChat(c)}>
                            <Conversation conversation={c} currentUser={user} />
                        </Convo>
                    ))}




                </ConversationSection>
                <MessageSection>
                    <ChatBoxMessages>
                        <Chat>
                            {currentChat ? (
                                <>
                                    {messages.map((m) => (<ChatSection message={m} 
                                    own={m.sender === user._id} 
                                    user={user}
                                    chat={currentChat}
                                    />))}
                                </>) : <span>Open a conversation to start a chat</span>}
                        </Chat>
                    </ChatBoxMessages>
                    <ChatResponse>
                        <textarea placeholder='Write something'
                        onChange={(e) => setNewMessage(e.target.value)}
                        value={newMessage}
                        ></textarea>
                        <button onClick={handleSubmit}>Send</button>
                    </ChatResponse>
                </MessageSection>

            </Content>
        </Container>
    )
}

const Container = styled.div`
  background-color:black;
  position:absolute;
  width:100vw;
  min-height:100vh;
`
const Content = styled.div`
  margin-top:50px;
  display:flex;
  flex-direction:row;
  height:100%;
`
const ConversationSection = styled.div`
    display:flex;
    flex-direction: column;
    padding: 10px;
    min-height:90vh;
    overflow-y: scroll;
    h1{
    font-size:30px;
    padding: 0 10px;
    color:white;
  }
`

const Convo = styled.div`

`

const ChatResponse = styled.div`
  width:90%;
  ${'' /* margin-left:20px; */}
  margin-top:20px;
  display:flex;
  justify-content:space-between;
  textarea{
    width:90%;
    height:90px;
    ${'' /* height:10%;; */}
    padding:10px 10px;
    margin-bottom:20px;
    margin-right:5%;
  }
  button{
    width:80px;
    height:60px;
    border:2px solid white;
    border-radius:10px;
  }
`

const ChatBoxMessages = styled.div`
  ${'' /* flex:3; */}
  ${'' /* max-height: */}
  background-color:orange;
  width:75vw;
  ${'' /* height:70vh; */}
  ${'' /* margin-right:70px; */}
  padding:15px 25px;
  ${'' /* display:flex;
  flex-direction:column;
  height:100vh;
  overflow-y: scroll; */}
`

const Chat = styled.div`
  display:flex;
  flex-direction:column;
  height:75vh;
  overflow-y: scroll;
  ${'' /* scroll-padding-right: 100px; */}
`

const MessageSection = styled.div`
    display:flex;
    flex-direction:column;
    span{
        padding:10px;
        position:relative;
        height:70vh;
        color:white;
        font-size:50px;
        background-color:pink;
        width:70vw;
        text-align:center;
    }
`

export default Messages