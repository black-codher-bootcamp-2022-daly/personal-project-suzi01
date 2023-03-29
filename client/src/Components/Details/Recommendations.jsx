import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Slide from "../Home/Slide";


import { getRecommendations } from "../../services/profileService";

function Recommendations(props) {
  const [recommendations, setRecommendations] = useState();
  const {media_id, media_type} = props
    

    useEffect(() => {
        async function getMediaRecommendations() {
            // if (!mediaDetails) {
                const response = await getRecommendations(media_type, media_id);
                // console.log(response)
                setRecommendations(response);
            // }
        }

        getMediaRecommendations();
    }, [ media_id, media_type]);

  
    if (!recommendations) return <div>Loading...</div>;

    // console.log('here', mediaDetails)


  return ( 
          <Container>
            <Slide title={'Recommendations'} Images={recommendations}/>
          </Container>
  );
}
// const Container = styled.div`
//   /* position: absolute; */
//   top: 100px;
//   width: 100vw;
//   /* height: 100vh; */
//   padding: 0;
//   margin: 0;
//   background: black;
//   z-index: -1;
//   overflow: hidden;
//   display: flex;
//   /* flex-direction: column; */
//   /* align-items: center; */
//   /* justify-content: center; */
//   margin-left: 0;
// `;


// const BgImage = styled.div`
//   background-image: linear-gradient(
//       to bottom,
//       rgba(0, 0, 0, 0) 10%,
//       rgba(0, 0, 0, 1)
//     )
//     ,
//     ${'' /* url("https://image.tmdb.org/t/p/original/xo0fgAUoEeVQ7KsKeMWypyglvnf.jpg"); */}
//     url(${props => `https://image.tmdb.org/t/p/original${props.bg}`});
//   width: 100%;
//   height: 100%;
//   background-size: cover;
//   background-position: center;
//   ${'' /* position: relative; */}
//   background-repeat: no-repeat;
//   position: absolute;
//   filter: blur(4px) brightness(50%);
// `;


// const Contents = styled.div`
//   position: relative;
//   padding: 30px 25px;
//   display: flex;
//   flex-direction: row;
//   @media (max-width: 768px) {
//     flex-direction: column;
//     width: 80%;
//   }
// `;

// const PosterImg = styled.div`
//   padding: 20px 10px;
//   margin: auto;
//   img {
//     border: 1px solid white;
//     border-radius: 4px;
//     width: 100%;
//   }
//   @media (max-width: 768px) {
//     /* display:none; */
//     width: 100%;
//     margin: 0%;
//     img {
//       width: 100%;
//     }
//   }
// `;


// const Info = styled.div`
//   position: relative;
//   width: 55%;
//   /* height:100vh; */
//   /* background-color: red; */
//   margin: auto;
//   padding: 10px;
//   color: white;
//   h1 {
//     font-size: 45px;
//     text-transform: capitalize;
//     margin-top:20px;
//   }
//   p {
//     font-size: 20px;
//     text-align: left;
//     padding-left: 15px;
//     padding-top: 15px;
//     line-height: 25px;
//     letter-spacing: 1.1px;
//     width: 80%;
//   }
//   button{
//     display:flex;
//     align-content:left;
//     border:1px solid white;
//     padding:15px;
//     border-radius: 5px;
//     margin-left:10px;
//     margin-bottom:10px;
//     font-size:18px;
//     background-color:transparent;
//     color: white;
//     &:hover{
//       background-color:white;
//       color:black;
//     }
//     /* height:60px; */
//   }
//   @media (max-width: 768px) {
//     width: 100%;
//   }
// `;

// const TagButtons = styled.div`
//   padding: 10px;
//   font-size: 18px;
//   gap: 15px;
//   display: flex;
//   flex-wrap: wrap;
//   button{
//     /* margin-right: 20px; */
//     border: 2px solid white;
//     padding: 8px 12px;
//     border-radius: 20px;
//   }
// `;

// const CastCards = styled.div`
//   padding-top: 10px;
//   display: flex;
//   align-content: center;
//   @media (max-width: 768px) {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//   }
// `;

// const Ratings = styled.div`
//   padding-top: 0px;
//   display: flex;
//   /* justify-content: space-between; */
//   p {
//     font-size: 18px;
//     text-transform: capitalize;
//   }
//   span {
//     background-color: grey;
//     padding: 6px 6px 0px 6px;
//   }
//   @media (max-width: 768px) {
//     flex-direction: column;
//     /* justify-content:center; */
//     align-items: center;
//     span {
//       padding: 0;
//     }
//   }
// `;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color:black;
  padding: 0;
  h1 {
    font-size: 30px;
    text-align: left;
    padding-left: 5%;
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 1.7rem;
    }
  }
`;

export default Recommendations; 