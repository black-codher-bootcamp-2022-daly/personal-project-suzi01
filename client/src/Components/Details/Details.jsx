import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Slide from "../Home/Slide";
import { useParams } from 'react-router-dom'
import Credits from "./Credits";
import Recommendations from "./Recommendations";


import { addMovieToList, getMediaDetails, getUser, removeFromList } from "../../services/profileService";
import { AuthContext } from "../../Context/AuthContext";

function Details() {
  const [mediaDetails, setMediaDetails] = useState();
  const [addButton, setAddButton] = useState()
  const [ movieInList, setMovieInList] = useState();
  const { user } = useContext(AuthContext)
  console.log(user)

  let { media_type, media_id } = useParams();
  // console.log(media_id, media_type)

  // let movieList = user.addedMovies.find(mediaDetails.id)
  // console.log(mediaDetails)


  useEffect(() => {
    async function getDetails() {
      // if (!mediaDetails) {
      const response = await getMediaDetails(media_type, media_id);
      // console.log(response)
      setMediaDetails(response);
      // }
    }

    getDetails();
  }, [media_id, media_type]);

  useEffect(() => {
    async function checkLibrary() {
      const res = await getUser(user._id)
      console.log(res.addedMovies)
      // console.log("Here is the user ", res.addedMovies)
      // console.log(user.addedMovies)
      // console.log(media_id, media_type)
      const movieList = res.addedMovies.filter(e => { return (e.media_type === media_type && e.id == media_id)})
      setMovieInList(movieList)
      console.log("HERRRRREEEEE",movieList)
      if(movieList.length > 0){
        //so item can be added to list
        setAddButton(true)
      } else {
        setAddButton(false)
      }
    }
    checkLibrary()
  }, [media_id],[media_type])


  if (!mediaDetails) return <div>Loading...</div>;

  

  

  // console.log('here', mediaDetails.name)
  // {mediaDetails.genres.forEach((item) => console.log(item.name))}

  const handleClick = async () => {
    if(addButton === false){
      // console.log(mediaDetails)
      const add_details = {...mediaDetails, media_type}
      // console.log(add_details)
      try{
        const res = await addMovieToList(user._id, add_details)
      }catch(err){
        console.log(err)
      }
    }
    if (addButton === true) {
      try{
        const res = await removeFromList(user._id, media_id, media_type)
      }catch(err){
        console.log(err)
      }
    }
    
    setAddButton(!addButton)







  }


  return (
    // <p>hello</p>
    <>
      <Container>
        <BgImage bg={mediaDetails.poster_path} />
        {/* <img src={`https://image.tmdb.org/t/p/original/${mediaDetails.backdrop_path}`} alt='' /> */}
        {/* </BgImage> */}
        <Contents>
          <PosterImg>
            <img
              src={mediaDetails.poster_path !== null ? `https://image.tmdb.org/t/p/w500${mediaDetails.poster_path}` : "/images/image_not_available.png"}
              alt="poster"
            />
          </PosterImg>
          <Info>
            <h1>{mediaDetails.original_title || mediaDetails.name}</h1>
            <TagButtons>
              {mediaDetails.genres.map(item => (<button>{item.name}</button>))}
            </TagButtons>
            <p>
              {mediaDetails.overview !== null ? mediaDetails.overview : `No details available`}
              <br />
              <br />
              Runtime: {mediaDetails.runtime || mediaDetails.episode_run_time} mins
            </p>
            <Ratings>
              <p>
                vote average: <span>{mediaDetails.vote_average}</span>
              </p>
              <p>
                popularity: <span>{mediaDetails.popularity}</span>
              </p>
            </Ratings>
            <AdditonalButtons>
              <button>Reviews</button>
              <button onClick={handleClick}>{addButton ? "Remove from list": "Add to list"}</button>
              <button>Add to Vote</button>
            </AdditonalButtons>
            <Credits media_id={media_id} media_type={media_type} />

          </Info>
        </Contents>
        <br />
      </Container>
      <Recommendations media_id={media_id} media_type={media_type} />
    </>
  );
}
const Container = styled.div`
  /* position: absolute; */
  ${'' /* top: 0px; */}
  width: 100vw;
  /* height: 100vh; */
  padding: 0;
  margin: 0;
  background: black;
  z-index: -1;
  overflow: hidden;
  display: flex;
  /* flex-direction: column; */
  /* align-items: center; */
  /* justify-content: center; */
  margin-left: 0;
`;


const BgImage = styled.div`
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 10%,
      rgba(0, 0, 0, 1)
    )
    ,
    ${'' /* url("https://image.tmdb.org/t/p/original/xo0fgAUoEeVQ7KsKeMWypyglvnf.jpg"); */}
    url(${props => `https://image.tmdb.org/t/p/original${props.bg}`});
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  ${'' /* position: relative; */}
  background-repeat: no-repeat;
  position: absolute;
  filter: blur(4px) brightness(50%);
`;


const Contents = styled.div`
  top:40px;
  position: relative;
  padding: 30px 25px;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 80%;
  }
`;

const PosterImg = styled.div`
  padding: 20px 10px;
  margin: auto;
  img {
    border: 1px solid white;
    border-radius: 4px;
    width: 100%;
  }
  @media (max-width: 768px) {
    /* display:none; */
    width: 100%;
    margin: 0%;
    img {
      width: 100%;
    }
  }
`;


const Info = styled.div`
  position: relative;
  width: 55%;
  /* height:100vh; */
  /* background-color: red; */
  margin: auto;
  padding: 10px;
  color: white;
  h1 {
    font-size: 45px;
    text-transform: capitalize;
    margin-top:20px;
  }
  p {
    font-size: 20px;
    ${'' /* text-align: left; */}
    padding-left: 15px;
    padding-top: 15px;
    line-height: 25px;
    letter-spacing: 1.1px;
    width: 80%;
  }
  button{
    display:flex;
    align-content:left;
    border:1px solid white;
    padding:15px;
    border-radius: 5px;
    margin-left:10px;
    margin-bottom:10px;
    font-size:18px;
    background-color:transparent;
    color: white;
    &:hover{
      background-color:white;
      color:black;
    }
    /* height:60px; */
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TagButtons = styled.div`
  padding: 10px;
  font-size: 18px;
  gap: 15px;
  display: flex;
  flex-wrap: wrap;
  button{
    /* margin-right: 20px; */
    border: 2px solid white;
    padding: 8px 12px;
    border-radius: 20px;
  }
`;


const Ratings = styled.div`
  padding-top: 0px;
  display: flex;
  /* justify-content: space-between; */
  p {
    font-size: 18px;
    text-transform: capitalize;
  }
  span {
    background-color: grey;
    padding: 6px 6px 0px 6px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    /* justify-content:center; */
    align-items: center;
    span {
      padding: 0;
    }
  }
`;

const AdditonalButtons = styled.div`
  display:flex;
  flex-direction:row;
`

// const Recommendations = styled.div`
//   display: flex;
//   flex-direction: column;
//   /* background-color:pink; */
//   padding: 0;
//   h1 {
//     font-size: 30px;
//     text-align: left;
//     padding-left: 5%;
//   }
//   @media (max-width: 768px) {
//     h1 {
//       font-size: 1.7rem;
//     }
//   }
// `;

export default Details; 