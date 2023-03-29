import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getUser } from '../services/profileService'

const Conversation = ({conversation, currentUser}) => {


  const [user, setUser] = useState(null)
  useEffect(() => {
    const otherId = conversation.members.find(m => m !== currentUser._id)

    const getOtherUser = async () => {
      try{
        const res = await getUser(otherId)
        setUser(res)
        // console.log(res.data)
      }catch(err){
        console.log(err)
      }
      
    }
    getOtherUser()
  }, [currentUser, conversation])
  // console.log(user.name.userName)
  if (!user) return <div>Loading...</div>;
  
  return (
        <Conversations>
          {/* <h1>Your Conversations</h1> */}
          <ConverationDetails>
            <img src={user.profile.thumbnail} alt={user.name.userName}></img>
            <span>{user.name.userName}</span>
          </ConverationDetails>
        </Conversations>
  )
}

const Container = styled.div`
  background-color:black;
  position:absolute;
  width:100vw;
  min-height:100vh;
  
`
const Content = styled.div`
  margin-top:100px;
  display:flex;
  flex-direction:row;
  height:100%;
`

const Conversations = styled.div`
  ${'' /* flex:1; */}
  color:white;
  ${'' /* background-color:grey; */}
  padding:20px 10px 10px 10px;
 
`

const ConverationDetails = styled.div`
  ${'' /* background-color:pink; */}
  margin-bottom: 8px;
  ${'' /* border-bottom: 1px solid; */}
  padding:5px;
  img{
    width:80px;
    height:80px;
    border-radius:50%;
    object-fit:cover;
    margin-right: 10px;
    margin-left:10px;
    
  }
  span{
    font-size:20px;
  }
`



export default Conversation