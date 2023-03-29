import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom"



function Starter() {
  const changeImg = () => {
    const imgArr = ['https://images.hdqwalls.com/download/black-widow-in-captain-america-winter-solider-ha-3840x2160.jpg',
      "https://images.hdqwalls.com/download/avengers-endgame-12k-6y-3840x2160.jpg",
      "https://images.hdqwalls.com/download/2022-top-gun-maverick-zz-3840x2160.jpg",
      "https://images.hdqwalls.com/download/daredevil-2022-r8-3840x2160.jpg",
      // "https://images.hdqwalls.com/download/stranger-things-2020-q9-3840x2160.jpg",
      "/images/stranger-things-2020-q9-3840x2160.jpg"]
    const bg = imgArr[Math.floor(Math.random() * imgArr.length)]
    console.log(bg)
    return bg
  }


  return (
    <Container>
    {/* <BgImage img="/images/stranger-things-2020-q9-3840x2160.jpg"/> */}
      <BgImage img={changeImg()} />
      {/* {setInterval(changeImg, 3000)} */}
      {/* <img src='https://images.hdqwalls.com/download/black-widow-in-captain-america-winter-solider-ha-3840x2160.jpg'/> */}
      {/* <img src='https://w0.peakpx.com/wallpaper/354/14/HD-wallpaper-captain-america-captain-america-the-winter-soldier-black-widow-scarlett-johansson.jpg' /> */}
      {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY4oWm8YIE-hKiz4Q6Ov9QiCVp6Pq3F8Zurw&usqp=CAU' /> 
    <img src = 'https://play-lh.googleusercontent.com/5TfdjYGdHkrmOa1MirO5ulceugZRwFR0w2pVx3Mk_uY-p8-c7AVmd--frG1O7VqouE8'/> */}
      <Content>
        <Description>
          Welcome to Entertainment Central
          <br /> Home to Movies and TV shows. <br />
          Sign up or Login now!
        </Description>
        <RegisterLink to="/login">
          <SignUp>START HERE!</SignUp>
        </RegisterLink>

        {/* <Companies>
            <img src="/images/company_logos.jpeg" alt='companies'/>
        </Companies> */}
      </Content>
      <Bottom>
        <Companies>
          <img src='/images/company_logos1.jpeg' />
          <img src='/images/company_logos2.jpeg' />
        </Companies>
      </Bottom>
    </Container>
  );
}
const Container = styled.section`
  position: absolute;
  ${'' /* top: 80px; */}
  background-color: black;
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0; 
  z-index: -1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 0;

  @media (max-width: 768px) {
    height:100%;
  }
`;

//   
// const fadeBackground  = keyframes`
//   from { background-image: linear-gradient(
//       -180deg,
//       rgba(255, 255, 255, 0.5) 0%,
//       rgba(0, 0, 0, 0.5) 100%
//     ), url("https://images.hdqwalls.com/download/black-widow-in-captain-america-winter-solider-ha-3840x2160.jpg") }
//   to { background-image: linear-gradient(
//       -180deg,
//       rgba(255, 255, 255, 0.5) 0%,
//       rgba(0, 0, 0, 0.5) 100%
//     ), url("https://images.hdqwalls.com/download/avengers-endgame-12k-6y-3840x2160.jpg") }
// `

const BgImage = styled.div`
  background-image: linear-gradient(
      -180deg,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    ${props => `url(${props.img})`};
    ${'' /* url("https://images.hdqwalls.com/download/black-widow-in-captain-america-winter-solider-ha-3840x2160.jpg"); */}
  width: 100%;
  height: 100vh;
  background-size: cover;
  position: absolute;
  margin-bottom: 60px;
  @media (max-width: 768px) {
    margin-bottom:0;
    height:90%
  }
`;


const Content = styled.div`
//   background: white;
  width: 70%;
  display: flex;
  z-index: 1;
  flex-direction: column;
  align-items: center;
`;
const Description = styled.p`
  padding: 0 10px;
  font-size: 35px;
  text-align:center;
  font-weight:bold;
  line-height: 40px;
  letter-spacing: 1.2px;
`;

const RegisterLink = styled(Link)`
  justify-content:center;
  display:flex;
  width:100%;
  margin:10px;
  text-decoration:none;

`

const SignUp = styled.button`
    width: 50%;
    height:45px;
    margin-bottom: 20px;
    border: 3px solid #e9ebeb; 
    border-radius: 5px;
    font-size: 20px;
    font-weight: bold;
    background-color: #68b8d9;
`

const Companies = styled.div`
    display:flex;
    flex-direction:row;
    img{
        width:50%;
        height:20%
        padding:0 20%
        margin-bottom: 20px;
    }

    @media (max-width: 768px) {
        
      }
`



const Bottom = styled.footer`
    width:100vw;
    height: 130px;
    background-color:black;
    color: white;
    bottom: -10px;
    position:absolute;
    @media (max-width: 768px) {
        height:40px;
        bottom: 2%;
      }
    

    
`
export default Starter;