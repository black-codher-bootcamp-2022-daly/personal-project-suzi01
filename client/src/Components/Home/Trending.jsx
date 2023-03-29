import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Slide from './Slide'
// import Slider from "react-slick";

import { getTrending} from '../../services/profileService'

function Trending() {
    const [Images, setImages] = useState(null);

    useEffect(() => {
        async function getAllTrending() {
            if (!Images) {
                const response = await getTrending();
                // console.log(response)
                // const {poster_path} = response 
                // console.log(poster_path)
                setImages(response);
            }
        }

        getAllTrending();
    }, [Images]);

    return(<Slide title={"Trending"} Images={Images} />)
  }

//     const renderCard = (card) => {
//             return (
//             <Wrap key={card.title}>
//                 <img src={`https://image.tmdb.org/t/p/w500${card.poster}`} alt={`${card.title}`} />
//             </Wrap>
//             );
//           };


//     let settings = {
//         // className: "center",
//         // centerMode: true,
//         // dots: true,
//         infinite: true,
//         speed: 500,
//         // centerPadding: "40px",
//         slidesToShow: 6,
//         slidesToScroll: 1,
//         responsive: [
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     // dots: true
//                 }
//             }
//         ]

//     };
//     return (
//         <InnerContainer>
//             <h3> {props.title}</h3>
//             <Content>
//                 <Carousel {...settings}>
//                     {Images && Images.length > 0 ? (Images.map((image) => renderCard(image))) :
//                     (<p>No profiles found</p>)}
//                 </Carousel>
//             </Content>
//         </InnerContainer>
//     );
// }

// const InnerContainer = styled.div`
//   padding: 0 20px;
//   /* margin-top:2px; */
//   h3 {
//     padding-top:10px;
//     color: white;
//     letter-spacing: 1.2px;
//     font-size: 20px;
//   }
// `;

// const Content = styled.div`
//   /* background-color:green;
//   display:flex;
//   overflow-y: hidden;
//   overflow-x: scroll;
//   padding:20px; */
//   padding: 20px;

//   img {
//     /* border: 3px solid white; */
//     border-radius: 4px;
//     width: 85%;
//     height: auto;
//     margin: 20px;
//     transition: all transform 450ms;

//     &:hover {
//       transform: scale(1.09);
//       border: none;
//     }
//   }
// `;

// const Wrap = styled.div`
//   margin-right:10px;

//   img {
//     /* width: 100%; */
//     /* height:100%; */
//     max-width:200px;
//     /* padding-right:100%; */
//     /* object-fit:contain; */
//     border: 3px solid white;


//     &:hover{
//     /* transform: scale(1.10); */
//       }
//     }
//   &::-webkit-scrollbar{
//       /* display:none; */
//     }
// `;

// const Carousel = styled(Slider)`
//   /* margin-bottom:10px; */
//   & slick-dots{
//     width:5px;
//     background-color:white;
//   }

//   & > button {
//     /* opacity: 0; */
//     /* height: 100%; */
//     /* width: 5vw; */
//     z-index: 1;
//     &:hover {
//       opacity: 1;
//       transition: opacity 0.2s ease 0s;
//     }
//   }

//   /* ul li button {
//     &:before {
//       font-size: 15px;
//       padding:0;
//       color: rgb(150, 158, 171);
//     }
//   } */

//  .slick-prev::before, .slick-next::before {
//   font-family: "Font Awesome 5 Free";
// }
// .slick-prev::before {
//   /* fa-arrow-circle-left */
//   /* content: "\f0a8"; */
//   content: "<";
  
//   font-weight: 900;
//   width:10px;
//   /* background-color:red; */
// }
// .slick-next::before {
//   /* fa-arrow-circle-right */
//   /* content: "\f0a9"; */
//   content: ">";
//   font-weight:bolder;
// }
// `

export default Trending;