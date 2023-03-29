import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "./Navbar";
import { getUser, removeFromList } from "../services/profileService"
import { AuthContext } from "../Context/AuthContext";

// get image from tmdb - https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg
function AddedLikes(props) {
  const [movies, setMovies] = useState()
  const { user } = useContext(AuthContext)
  // const {user} = props
  // console.log(movies)
  
  useEffect(() =>{
    // console.log(user)
    async function getLoggedUser() {
      const response = await getUser(user._id);
      // console.log(response.addedMovies)
      setMovies(response.addedMovies);
  }

  getLoggedUser();
  },[movies])


  const handleClick = async (e) => {
      const media_id = e.target.name
      const media_type = e.target.value
      try{
        const res = await removeFromList(user._id, media_id, media_type)
      }catch(err){
        console.log(err)
      }
    }

  const renderCard = (card) => {
    return(<FilmCard>
      <Row>
        <Col md={6} sm={4} xs={4}>
          <FilmCard.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/w500${card.poster_path}`}
          />
        </Col>
        <Col md={6} sm={8} xs={8}>
          <FilmCard.Body>
            <FilmCard.Title>{card.original_title}</FilmCard.Title>
            <FilmCard.Text>
            {card.overview.length > 200 ? `${card.overview.substring(0,200)}...`: card.overview}
            </FilmCard.Text>
            <CardButtons>
              <button>Add to Vote</button>
              <button name={card.id}
              value={card.media_type}onClick={(e)=>handleClick(e)}>Remove Like</button>
            </CardButtons>
          </FilmCard.Body>
        </Col>
      </Row>
    </FilmCard>)
  }

  // console.log(movies)
  return (
    <>
      <Container>
        <h1>Your Like List</h1>
        <Content>
          <Films>
          {movies && movies.map((item) => renderCard(item))}
          </Films>
        </Content>
      </Container>
    </>
  );
}
const Content = styled.div`
  /* background-color: red; */
  // padding-top:80px;
  display: flex;
  justify-content: center;
  margin:auto;
  padding-left:20px;
  /* align-items:center; */
  
  ${'' /* @media (max-width: 768px) {
    padding: 4px;
  } */}
`;


const Container = styled.div`
  ${'' /* position: absolute; */}
  // top: 80px;
  /* background-image: linear-gradient(
      -180deg,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url("https://images.hdqwalls.com/download/black-widow-in-captain-america-winter-solider-ha-3840x2160.jpg");
  width: 100vw; */
  background: linear-gradient(
    112.1deg,
    rgb(32, 38, 57) 11.4%,
    rgb(63, 76, 119) 70.2%
  );
  position:relative;
  min-height:100vh;
  height: 100%;
  background-size: cover;
  ${'' /* position:absolute; */}
  h1 {
    padding-top: 100px;
    text-align: left;
    padding-left: 4%;
    color: white;
  }

  @media(max-width: 768px){
    ${'' /* position:absolute; */}
  }
`;
const Films = styled.div`
  padding: 10px;
  /* margin-top:10%; */
  display: flex;
  flex-wrap: wrap;
  /* display: grid; */
  /* grid-template-columns: repeat(5, 1fr); */
  /* grid-template-rows: repeat(8, 5vw); */
  grid-gap: 15px;
  /* display: flex;
  flex-wrap:wrap;
  flex-direction:row; */
  ${'' /* @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  } */}
`;
const Film = styled.div`
  padding: 10% 10px 0;
  margin-bottom: 0;
  /* background-color:red; */
  /* margin-top: 10%; */
  /* flex-basis: auto; */
  position: relative;
  img {
    width: 100%;
    box-shadow: 11px 1px 13px 0px rgba(0, 0, 0, 0.75);
    margin-bottom: 0px;
    border-radius: 5px;
  }
  p {
    /* margin-top: 10px; */
    color: white;
    position: relative;
    margin: 5px 0;
    /* margin: -3rem 0 2rem 1rem; */
    /* padding: 1rem; */
    /* background: rgba(white, 0.8); */
  }
  
`;
const FilmCard = styled(Card)`
  width:  540px;
  background-color: #FBFAF5;
  height: 415px;
  padding:10px 10px 15px 10px;
  image {
    height:100%
    /* margin-bottom:10px; */
    width: 100%;
  }
  div{
    p{
    padding-top: 20px;
  }
  }
  ${'' /* @media (max-width: 756px) {
    width:300px; */}
  ${'' /* } */}
`;

const CardButtons = styled.div`
  padding-top: 10%;
  bottom:0px;
  display: flex;
  button {
    margin-right: 10px;
    height: 60px;
    width: 100px;
    border: 1px solid white;
    border-radius: 10px;
    color: white;
    background-color: black;
    transition: transform 0.5s ease-in;
    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
    }
  }
`;
export default AddedLikes;