import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom"
import { getTopRated } from "../../services/profileService";



function Features(props) {
    const { features } = props

    // console.log(features)

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 5000
    };

    //   console.log('In features', features)
    const renderTopRated = (topItem) => {
        return (
            <Container key={topItem.title}>
                <Image poster={`https://image.tmdb.org/t/p/original${topItem.poster}`} />
                <Content>
                    <Title>
                        <h1>{topItem.title}</h1>
                    </Title>
                    <Info>
                        {topItem.description.length > 350 ? `${topItem.description.substring(0,350)}...`: topItem.description}
                    </Info>
                    <Wrap>
                        {/* <Link to={`/Details/${card.media_type}/${card.id}`}></Link> */}
                        <ButtonLink to={`/Details/${topItem.media_type}/${topItem.id}`}>
                            <button movie_id='527774' onClick={(e) => console.log(e.target)}>More Info</button>
                        </ButtonLink>
                        <button>Watch Trailer</button>
                    </Wrap>
                </Content>
            </Container>
        )

    }




    return (
        <Carousel {...settings} >
            {features ? (features.map((feature) => renderTopRated(feature))) :
                    (<h1>No images found</h1>)}
        </Carousel>

    );
}

const Carousel = styled(Slider)`
  position: relative;
  .slick-prev, .slick-next {

  }

  .slick-list{
    overflow:initial;
  }

  .slick-prev {
    left: 0;
    z-index: 1;
    height:100%;
    width:8%;
  }
  .slick-next {
    right: 0;

    height:100%;
    width:8%;

  }
  .slick-next::before,
  .slick-prev::before{
    content:'';
  }

`

const Container = styled.div`
  ${'' /* top:20px; */}
  height: 90vh;
  position: relative;
  border:solid 10px #212F3C;
  background-color:#212F3C;
  display:block;
  position:relative;
  overflow:auto;
  overflow-x: hidden;
  overflow-y: hidden;
  /* border-radius:10px; */
  ${'' /* background-color: black; */}
`;

const Image = styled.div`
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 20%,
      rgba(0, 0, 0, 1)
    ),
    ${'' /* url("https://image.tmdb.org/t/p/original/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg"); */}
    url(${props => props.poster});
    ${'' /* /d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg */}
    
  width: 100vw;
  height: 100%;
  min-height:100vh;
  background-position: center;
  background-size:cover;
  ${'' /* position:relative; */}
  ${'' /* object-fit:cover; */}
  background-repeat: no-repeat;

  /* border-radius:10px; */
  

 

  ${'' /* margin-top:10px;   */}
  
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
  }  
  `;

const Content = styled.div`
  width: 50%;
  position: absolute;
  top: 20%;
  left: 5%;
  display: flex;
  flex-direction: column;  
  padding:10px;
  background: 
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(7.1px);
    @media (max-width: 768px) {
        width: 90%;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter:none
  }
`;

const Title = styled.div`
  h1{
    font-size:50px;
    text-transform:uppercase;
    padding-bottom: 20px;
    font-weight:bold;
    color:white;
    text-shadow: #fc0 1px 0 10px;
}

@media (max-width: 768px) {
 
    h1{
      font-size:20px;
      padding-bottom:5px;
    }
  }
`
const Info = styled.p`
  color: white;
  font-size: 1.1rem;
  width: 40vw;
  max-height: 20%;  
  text-shadow: #fc0 1px 0 10px;
  @media (max-width: 768px) {
    font-size: 10px;
    width:100%;
    margin-left:3%
  }
`;

const Wrap = styled.div`
  margin-top:10%;
  width: 90%;
  height: 50px;
  display: flex;
  ${'' /* background-color:red; */}
  ${'' /* justify-content: space-between; */}
    button{
        width: 70%;
        height:90%;
        border: 1px solid white;
        border-radius: 5px;
        background-color: black;
        color: white;
        font-size: 15px;
        font-weight: bold;
        padding: 5px;    
        &:hover {
        background-color: white;
        color:black;
    }
  }  
  
  @media (max-width: 768px) {
    width: 50%;
    margin-left: 5%;
    button {
      font-size: 10px;
      width: 90%;
      height: 100%;
      margin-right: 5%;
    }
  }
`;

const ButtonLink = styled(Link)`
  width:100%;
  height:100%
`


export default Features;