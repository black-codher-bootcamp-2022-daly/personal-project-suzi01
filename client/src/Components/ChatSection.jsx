import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getUser } from '../services/profileService'
// timeago js

const ChatSection = ({ message, own, chat, user }) => {
  const [other, setOther] = useState(null)

  useEffect(() => {
    const otherId = chat.members.find(m => m !== user._id)

    const getOtherUser = async () => {
      try{
        const res = await getUser(otherId)
        setOther(res)
        // console.log(res.data)
      }catch(err){
        console.log(err)
      }
      
    }
    getOtherUser()
  }, [chat])

  if (!other) return <div>Loading...</div>;
  return (
    <>
      <MessageDetails own={own}>
        <SentMessages own={own}>
          <img src={own ? user.profile.thumbnail : other.profile.thumbnail} alt=""></img>
          <p>{message.text}</p>
        </SentMessages>
        <MessageTime>
          <p>{message.createdAt}</p>
        </MessageTime>
      </MessageDetails>
    </>



  )
}

{/* 

        <MessageDetails>
          <SentMessages>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR27sFJreSiqEOAMqqHo3lkHyi1SE4MzAKUKg&usqp=CAU" alt=""></img>
            <p>Hello my name is....</p>
          </SentMessages>
          <MessageTime>
            <p>2 hours ago</p>
          </MessageTime>
        </MessageDetails>


        <MessageDetails own={true}>
          <SentMessages own={true}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR27sFJreSiqEOAMqqHo3lkHyi1SE4MzAKUKg&usqp=CAU" alt=""></img>
            <p >Hello my name is....</p>
          </SentMessages>
          <MessageTime>
            <p>2 hours ago</p>
          </MessageTime>
        </MessageDetails>


        <MessageDetails>
          <SentMessages>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR27sFJreSiqEOAMqqHo3lkHyi1SE4MzAKUKg&usqp=CAU" alt=""></img>
            <p>Hello my name is....</p>
          </SentMessages>
          <MessageTime>
            <p>2 hours ago</p>
          </MessageTime>
        </MessageDetails>
        <MessageDetails>
          <SentMessages>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR27sFJreSiqEOAMqqHo3lkHyi1SE4MzAKUKg&usqp=CAU" alt=""></img>
            <p>Hello my name is....</p>
          </SentMessages>
          <MessageTime>
            <p>2 hours ago</p>
          </MessageTime>
        </MessageDetails>
        <MessageDetails own={true}>
          <SentMessages own={true}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR27sFJreSiqEOAMqqHo3lkHyi1SE4MzAKUKg&usqp=CAU" alt=""></img>
            <p >Hello my name is....</p>

          </SentMessages>
          <MessageTime>
            <p>2 hours ago</p>
          </MessageTime>
        </MessageDetails>
        <MessageDetails>


          <SentMessages>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR27sFJreSiqEOAMqqHo3lkHyi1SE4MzAKUKg&usqp=CAU" alt=""></img>
            <p>Hello my name is....</p>
          </SentMessages>
          <MessageTime>
            <p>2 hours ago</p>
          </MessageTime>
        </MessageDetails>
        <MessageDetails>
          <SentMessages>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR27sFJreSiqEOAMqqHo3lkHyi1SE4MzAKUKg&usqp=CAU" alt=""></img>
            <p>Hello my name is....</p>
          </SentMessages>
          <MessageTime>
            <p>2 hours ago</p>
          </MessageTime>
        </MessageDetails>


        <MessageDetails own={true}>
          <SentMessages own={true}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR27sFJreSiqEOAMqqHo3lkHyi1SE4MzAKUKg&usqp=CAU" alt=""></img>
            <p >Hello my name is....</p>
          </SentMessages>
          <MessageTime>
            <p>2 hours ago</p>
          </MessageTime>
        </MessageDetails> */}
{/* </Chat> */ }
// </ChatBoxMessages>


// const ChatBoxMessages = styled.div`
//   ${'' /* flex:3; */}
//   ${'' /* max-height: */}
//   background-color:orange;
//   width:70vw;
//   ${'' /* height:70vh; */}
//   ${'' /* margin-right:70px; */}
//   padding:15px 25px;
//   ${'' /* display:flex;
//   flex-direction:column;
//   height:100vh;
//   overflow-y: scroll; */}
// `

// const Chat = styled.div`
//   display:flex;
//   flex-direction:column;
//   ${'' /* height:75vh; */}
//   overflow-y: scroll;
//   ${'' /* scroll-padding-right: 100px; */}
// `

const MessageDetails = styled.div`
  display:flex;
  flex-direction:column;
  ${'' /* align-self:flex-end; */}
  align-self: ${props => props.own ? "flex-end" : "flex-start"};
  ${'' /* color: ${props => props.own ? "pink" : "red"}; */}
  ${'' /* width:20%; */}
`

const SentMessages = styled.div`
  display: flex;
  ${'' /* align: ${props => props.own ? "flex-end" : "flex-start"};
  color: ${props => props.own ? "pink" : "red"}; */}
  ${'' /* flex-direction:column; */}
  img{
    width:70px;
    height:70px;
    border-radius:50%;
    object-fit:cover;
    margin-right:10px;
  }
  p{
    padding:10px;
    border-radius:20px;
    ${'' /* background-color:#154360; */}
    ${'' /* color:white; */}
    max-width:300px;
    color:white;
    background-color: ${props => props.own ? "#0B5345" : "#154360"};
  }
`

const MessageTime = styled.div`
  font-size:15px;
  margin-top:5px;
`


export default ChatSection;