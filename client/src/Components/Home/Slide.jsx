import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Missing_poster from "../Details/Missing_poster"

import { getTrending, apiConfig } from '../../services/profileService'

function Slide(props) {

    const handleClick = (e) => {
        let movie_id = e.target.name
        console.log(movie_id)


    }

    const renderCard = (card) => {
            return (
            <Wrap key={card.title}>
                <Link to={`/Details/${card.media_type}/${card.id}`} >
                {card.poster !== null ? (
                <img name={`${card.id}`} src={ `https://image.tmdb.org/t/p/w500${card.poster}`} alt={`${card.title}`} 
                onClick={handleClick}/>) : (
                  <Missing_poster title={`${card.title}`} onClick={handleClick}/>
                )}
                </Link>
            </Wrap>
            );
          };


    let settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        autoplay: true,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1412,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1170,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 948,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]

    };
    return (
        <InnerContainer>
            <h3> {props.title}</h3>
            <Content>
                <Carousel {...settings}>
                    {props.Images && props.Images.length > 0 ? (props.Images.map((image) => renderCard(image))) :
                    (<p>No images found</p>)}
                </Carousel>
            </Content>
        </InnerContainer>
    );
}

const InnerContainer = styled.div`
  padding: 0px 20px;
  margin-top:20px;
  h3 {
    ${'' /* margin-top:10px; */}
    color: white;
    letter-spacing: 1.2px;
    font-size: 30px;
    text-transform:uppercase;
    font-weight:bold;
  }
`;

const Content = styled.div`
  padding: 20px;

  img {
    border-radius: 4px;
    width: 100%;
    height: 100%;
    margin: 20px;
    transition: all transform 450ms;

    &:hover {
      transform: scale(1.08);
    }
  }

  @media (max-width: 768px) {
    img{
        width:85%
    }
  }
`;

const Wrap = styled.div`
  margin-right:10px;

  img {
    max-width:200px;
    border: 3px solid white;

    &:hover{

      }
    }
`;

const Carousel = styled(Slider)`
  & slick-dots{
    width:5px;
    background-color:white;
  }

  & > button {
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }


 .slick-prev::before, .slick-next::before {
  font-family: "Font Awesome 5 Free";
}
.slick-prev::before {
  /* fa-arrow-circle-left */
  /* content: "\f0a8"; */
  content: "<";
  font-weight: 900;
  width:10px;
}
.slick-next::before {
  /* fa-arrow-circle-right */
  /* content: "\f0a9"; */
  content: ">";
  font-weight:bolder;
}
`

export default Slide;