import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Link, Navigate } from "react-router-dom";
// import {getUser} from "../services/profileService"
import { AuthContext } from "../Context/AuthContext"
import { logoutCall } from "../apiCalls";
import { AiFillHome } from "react-icons/ai";
import { MdRateReview, MdHowToVote, MdLocalMovies } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { RiMovieFill } from "react-icons/ri";
// MdRateReview
// AiFillHome

function Navbar(props) {

  const [userDetails, setUserDetails] = useState()
  // const { user } = props
  const { user, dispatch } = useContext(AuthContext)


  // useEffect(() =>{
  //   console.log(user)
  //   async function getLoggedUser() {
  //     const response = await getUser(user);
  //     console.log(response)
  //     // setUserDetails(response);
  // }

  // getLoggedUser();
  // },[user])


  // console.log(user)

  const handleClick = () => {
    logoutCall(dispatch)
  }

  return (
    <Nav>
      <Logo>
        <img src="https://png.pngtree.com/element_our/20190530/ourmid/pngtree-watch-movie-popcorn-illustration-image_1244707.jpg" alt='logo' />
      </Logo>
      <WebName>
        Entertainment <br /> Central
      </WebName>
      {user ? (
        <>
          <MenuItems>
            <LinkStyle to="/home" ><AiFillHome />  Home </LinkStyle>
            <LinkStyle to="/reviews" > <MdRateReview />  Reviews</LinkStyle>
            <LinkStyle to="/vote" > <MdHowToVote />  Vote </LinkStyle>
            <LinkStyle to="/messages" ><TiMessages />  Messages</LinkStyle>
            <LinkStyle to="/watchlist" > <MdLocalMovies />  Watchlist </LinkStyle>
            <LinkStyle to="/addedlikes" ><RiMovieFill />  Added Likes </LinkStyle>
          </MenuItems>
          {/* <Link to="/profile"> */}
          <Profile>
            <img src={user.profile.thumbnail} alt={user.name.userName} />
            <span>{user.name.userName}</span>
          </Profile>
          {/* </Link> */}
          <Link to="/login">
            <SignIn onClick={handleClick}>Log Out</SignIn>
          </Link>
        </>
      ) : (
        <Link to="/login">
          <SignIn>Login</SignIn>
        </Link>
      )}
    </Nav>
  );
}
const Nav = styled.nav`
  ${'' /* position: fixed; */}
  top: 0;
  left: 0;
  right: 0;
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 80px;
  padding: 0 18px;
  z-index: 1;
  ${'' /* background-color: rgba(255,255,255,0.5); */}
  
  background-color:black;
`;

const Logo = styled.div`
  width: 30px;
  /* height: 40px; */
  padding-left: 20px;
  padding-right: 35px;
  img {
    margin-top: 5px;
    width: 70px;
    border-radius: 50%;
    // background-color:black;
  }
  @media (max-width: 768px) {
    padding-left: 0px;
    padding-right: 0px;
    img {
      margin-top: 5px;
      width: 30px;
      border-radius: 50%;
    }
  }
`;
const WebName = styled.span`
  color: white;
  display: block;
  margin-left: 50px;
  line-height: 20px;
  letter-spacing: 1.3px;
  text-transform: uppercase;
  @media (max-width: 768px) {
    margin-left: 5px;
    font-size: 0.5rem;
    line-height: 0.6rem;
  }
`;
const MenuItems = styled.div`
  /* background-color: red; */
  display: flex;
  /* flex-direction:row; */
  align-items: center;
  height: 100%;
  max-width: 80%;
  margin-left: 30px;
  margin-right: auto;
  a {
    text-decoration: none;
    color: white;
    padding: 0 15px;
    font-size: 20px;
    display: inline-block;
    position: relative;
  }
  a::after {
    content: "";
    position: absolute;
    width: 80%;
    transform: scaleX(0);
    height: 4px;
    bottom: -5px;
    left: 10px;
    background-color: #d3d6d7;
    transform-origin: bottom right;
    transition: transform 0.5s ease-in-out;
  }
  a:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    margin-left: 10px;
    a {
      display: none;
    }
  }
`;

const LinkStyle = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 0 15px;
  font-size: 20px;
  display: inline-block;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 80%;
    transform: scaleX(0);
    height: 4px;
    bottom: -5px;
    left: 10px;
    background-color: #d3d6d7;
    transform-origin: bottom right;
    transition: transform 0.5s ease-in-out;
  }
  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`

const SignIn = styled.button`
  width: 90px;
  height: 50px;
  border: 2px solid white;
  border-radius: 5px;
  margin-right: 13px;
  background-color: black;
  color: white;
  font-size: 20px;
  &:hover {
    background-color: white;
    color: black;
  }
  @media (max-width: 768px) {
    width: 40px;
    height: 20px;
    font-size: 0.6rem;
    margin-right: 5px;
  }
`;


const Profile = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  margin-right:10px;
  padding:0 10px;
  color:white;

  img{
    border-radius:50%;
    height:75px;
    width:75px;
    padding:2px;
    margin-right:10px;
    object-fit:cover;
  }



`
export default Navbar