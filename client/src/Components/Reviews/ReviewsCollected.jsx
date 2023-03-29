import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { getReviewsFromAPI } from '../../services/profileService';

// for this to Worker, need to use multi search to get media type and id and then use the reviews route

const ReviewsCollected = (props) => {

  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  const {data} = props
  console.log("Here's the data", data)

  // useEffect(() => {
  //   const getAllReviews = async () =>{
  //     // const res = await getReviewsFromAPI(data.id, data.)
  //     // console.log(res)
  //   }
  // })

  // const text = "In a magical land known as Kumandra; Humans and Dragons co-exist in harmony. When a threat in the form of creatures known as Druun arrive and threaten to destroy everything; the Dragons combine their power to defeat them but in doing so all but one of the Dragons remains.\r\n\r\nIn the new Disney animated film “Raya and the Last Dragon”; audiences are introduced to the narrative of the story by Raya (Kelly Marie Tran), who tells that the world has become fractured and she is to blame. A sacred relic that the Dragons used to Defeat the Druun has given her kingdom prosperity but the surrounding kingdoms all named after various parts of a Dragon are envious of their position.\r\n\r\nWhen Raya’s father Chief Benja (Daniel Dae Kim); attempts to unite the other kingdoms, a tragic betrayal results in the relic becoming fractured with each kingdom taking a fragment. As if this situation was not bad enough; the fracturing of the relic ushers in the return of the Druun and they quickly resume turning everything not protected by a barrier of water to stone.\r\n\r\nThe story then jumps years into the future where Raya and her faithful companion Tuk Tuk (Alan TudyK) are searching the rivers of the kingdoms in an effort to find the location where the last Dragon Sisu (Awkwafina) is rumored to have been sleeping for 500 years.\r\n\r\nRaya is eventually able to locate Sisu who is a very playful and animated creature and the two set off to save the day by obtaining the missing fragments through any means necessary. Naturally, their journey will be filled with dangers, adventure, and humor, as the various kingdoms have their own unique visual style and characters; some of whom join with Raya on her quest to provide much-needed support, perspective, and at times; humor.\r\n\r\nThe movie is visually amazing as the artists clearly were inspired to create a world that combines elements of many Asian cultures yet has its own unique traits. I marveled at the details of the water and ripples and how the railings on a boat showed uneven discoloration and wear in just a casual scene where the characters talked. It is this attention to detail that really adds to the magic of the film as well as the immersion into fantasy.\r\n\r\nThe supporting cast was great and there are some characters I do not wish to spoil who practically steals every scene in which they are in.  My wife and I were captivated from the very start as Disney has created a film that embodies much of their classic themes and yet expands upon them to create a film the entire family will enjoy.\r\n\r\nThe movie will be released in cinemas and via a paid option for Disney+ subscribers. We attended a press screening at a cinema; our first in almost a year and found the setup to be very safe and it was amazing to see such visual splendor on a big screen.\r\n\r\nDisney has once again created a new classic and has given audiences the magic that they are known for at a time when it is most needed.\r\n\r\n4 stars out of 5."
  // const rainbow = "In a magical land known as Kumandra; Humans and Dragons co-exist in harmony. When a threat in the form of creatures known as Druun arrive and threaten to destroy everything; the Dragons combine their power to defeat them but in doing so all but one of the Dragons remains.\r\n\r\nIn the new Disney animated film “Raya and the Last Dragon”; audiences are introduced to the narrative of the story by Raya (Kelly Marie Tran), who tells that the world has become fractured and she is to blame. A sacred relic that the Dragons used to Defeat the Druun has given her kingdom prosperity but the surrounding kingdoms all named after various parts of a Dragon are envious of their position.\r\n\r\nWhen Raya’s father Chief Benja (Daniel Dae Kim); attempts to unite the other kingdoms, a tragic betrayal results in the relic becoming fractured with each kingdom taking a fragment. As if this situation was not bad enough; the fracturing of the relic ushers in the return of the Druun and they quickly resume turning everything not protected by a barrier of water to stone.\r\n\r\nThe story then jumps years into the future where Raya and her faithful companion Tuk Tuk (Alan TudyK) are searching the rivers of the kingdoms in an effort to find the location where the last Dragon Sisu (Awkwafina) is rumored to have been sleeping for 500 years.\r\n\r\nRaya is eventually able to locate Sisu who is a very playful and animated creature and the two set off to save the day by obtaining the missing fragments through any means necessary. Naturally, their journey will be filled with dangers, adventure, and humor, as the various kingdoms have their own unique visual style and characters; some of whom join with Raya on her quest to provide much-needed support, perspective, and at times; humor.\r\n\r\nThe movie is visually amazing as the artists clearly were inspired to create a world that combines elements of many Asian cultures yet has its own unique traits. I marveled at the details of the water and ripples and how the railings on a boat showed uneven discoloration and wear in just a casual scene where the characters talked. It is this attention to detail that really adds to the magic of the film as well as the immersion into fantasy.\r\n\r\nThe supporting cast was great and there are some characters I do not wish to spoil who practically steals every scene in which they are in.  My wife and I were captivated from the very start as Disney has created a film that embodies much of their classic themes and yet expands upon them to create a film the entire family will enjoy.\r\n\r\nThe movie will be released in cinemas and via a paid option for Disney+ subscribers. We attended a press screening at a cinema; our first in almost a year and found the setup to be very safe and it was amazing to see such visual splendor on a big screen.\r\n\r\nDisney has once again created a new classic and has given audiences the magic that they are known for at a time when it is most needed.\r\n\r\n4 stars out of 5."
 
  const renderReview = (rev) => {
    return(
      <ReviewItem>
          <UserDetails>
            <img src={rev.author_details.avatar_path} alt={rev.author} />
            <p>{rev.author}</p>
            <p>Rating: <span>{rev.author_details.rating}</span></p>
          </UserDetails>
          <CreatedDate>
            <p>{isReadMore ? `${rev.content.substring(0, 350)}` : rev.content}
              <span onClick={toggleReadMore}>
                {isReadMore ? "...read more" : " show less"}
              </span></p>
            <p>Created : {rev.created_at}</p>
          </CreatedDate>
        </ReviewItem>
    )
  }


  return (
    
      <ReviewItems>
        {data && data.map(review => renderReview(review))}
      </ReviewItems>
  )
}

const Container = styled.div`
  position:relative;
  width:100vw;
  min-height:100%;
  background-color:#212F3C;
  disply:flex;
  flex-direction:column;
  justify-content:center;
  text-align:center;
  color:white;
`

const Content = styled.div`
  padding:10px;
  position:relative;
  ${'' /* background-color:red; */}
  top:100px;
  margin-bottom:140px
 
`

const SearchBar = styled.div`
  padding:10px;
  input{
    width:70%;
    height:35px;
    border:2px solid orange;
    border-radius:15px;
    margin-right:5px;
    background-color:transparent;
    color:white;
    padding: 0 10px;
  }
  button{
    height:35px;
    border:2px solid orange;
    border-radius: 8px;
    padding:0 5px;
    background-color:transparent;
    color:orange;
  }
`

const ReviewsSection = styled.div`
  width:100%;
  ${'' /* background-color:pink; */}
  display:flex;
  flex-direction:row;
  margin-top:35px;
`

const ReviewsNav = styled.div`
  flex:1;
  ${'' /* background-color:red; */}
  display:flex;
  flex-direction: column;
  gap:10px;
  
  button{
    border:1px solid orange;
    background-color:transparent;
    border-radius:15px;
    color:white;

  }
`

const ShowSelection = styled.div`
  flex:5;
  ${'' /* background-color:green; */}
  display:flex;
  flex-direction:row;
  padding: 0 20px;
  position:relative;

`

const Img = styled.img`
  position:relative;
  width:30%;
  height:auto;
  padding:30px 0; 
`

const Details = styled.div`
  padding-left: 20px;
  margin-top:20px;
  h1{
    color:white;
  }
`

const Info = styled.div`
  text-align:left;
  color:white;
  h2{
    padding-top:20px;
  }
  span{
    background-color:#0E8975;
    border: 2px solid white;
    padding:20px;
    width:30px;
    ${'' /* margin-top:5px; */}
    border-radius:50%;
    margin-right: 20px;
  }
  p{
    font-size:18px;
  }
`

const Rating = styled.div`
  margin-top:45px;
  margin-bottom: 20px;
  p{
    font-size:20px;
  }
`

const ReviewItems = styled.div`
  margin-top:15px;
  ${'' /* flex-direction:column; */}
  color:black;
  ${'' /* background-color:red */}
  text-align:left;
  ${'' /* flex-wrap:wrap; */}
  ${'' /* gap:10px; */}
  display: flex;
  flex-direction:column;
  ${'' /* background-color:pink; */}
  padding: 20px 0;
`

const ReviewItem = styled.div`
width:80%;
  display: flex;
  ${'' /* flex-direction:row; */}
  padding:20px;
  color:white;
  font-weight:bold;
  font-size:15px;
  background: #566573 ;
  ${'' /* width:30%; */}
  margin:auto;
  border:5px solid orange;
  border-radius: 20px;
  margin-bottom:20px;
  ${'' /* max-height:400px; */}
  overflow-y: auto;
  
`

const CreatedDate = styled.div`
  display:flex;
  flex-direction:column;  
  ${'' /* background-color:purple; */}
  font-size: 18px;
  line-height: 30px;
  padding: 0 15px;
  width: 100%;
  span{
    color: #183EC6;
  }
`

const UserDetails = styled.div`
  display:flex;
  flex-direction:column; 
  padding-right: 20px;
  width: 25%;
  text-align:center;
  font-size: 20px;


  span{
    background-color:green;
    padding:5px 10px;
    border-radius:50%
  }
  img{
    border-radius:50%;
    width:100%;
    padding-bottom: 20px;
  } 

`
export default ReviewsCollected
