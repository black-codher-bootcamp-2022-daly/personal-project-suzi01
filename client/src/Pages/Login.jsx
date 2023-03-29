import React, { useContext, useState } from "react";
import {useNavigate} from "react-router-dom"
import styled from "styled-components";
import { BsTwitter, BsFacebook, BsGoogle } from "react-icons/bs";
import { loginUser } from "../services/profileService";
import { set } from "mongoose";
import Home from "./Home";
import { AuthContext } from "../Context/AuthContext";
import { loginCall } from "../apiCalls";
// import { Location } from "react-router-dom";

const Login = (props) => {
  const[errorMessage, setErrorMessage] = useState()
  // const [authenticated, setAuthenticated] = useState()
  // const [user, setUser] = useState()
  const [details, setDetails] = useState({
    email: "",
    password: ""
  });
  const {user, isFetching, dispatch, err} = useContext(AuthContext)
  // console.log(localStorage.getItem('user'))
  const navigate = useNavigate()

  // if(user){
    // return <div>{user.name.userName} is logged in</div>
  // }

 

  const handleChange = (e) => {
    setErrorMessage(false)
    const { value, name } = e.target;

    setDetails((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
    console.log(details);
  };

  const goToSignUpPage = () => navigate("/register")


  const handleSubmit = async (e) => {
    e.preventDefault()
    // if(user === null){
    //   setErrorMessage(true)
    //   setDetails({
    //         email: "",
    //         password: ""
    //       });
    // } else{
    // loginCall({email: details.email, password:details.password},dispatch)

    try{
      loginCall({email: details.email, password:details.password},dispatch)
      if(user === null){
      setErrorMessage(true)
      setDetails({
            email: "",
            password: ""
          });
    }


      // if(response === 'Details not found, please try again' || response === 'password does not match' ){
      //   setError(true)
      //   setDetails({
      //     email: "",
      //     password: ""
      //   });
      //   dispatch({type:"LOGIN_FAILURE", payload:error})
      // } else {
        

        // localStorage.setItem('id',response._id)
        // localStorage.setItem('user', response.name.userName)
        // localStorage.setItem('image', response.profile.thumbnail)
        // setUser(true)
        // window.location.reload()
      // }
    } catch(error){
      setErrorMessage(true)
      console.log(err)
    //   dispatch({type:"LOGIN_FAILURE", payload:error})
    }
  // }
  }

  console.log(user)
  console.log(err)

  return (
    <>

    <Container>
      <BgIm />
      <Content>
        <p>Sign in with</p>
        <Icons>
          <BsTwitter size={50} />
          <BsFacebook size={50} />
          <BsGoogle size={50} />
        </Icons>
        <p>or:</p>
        <EmailForm>
          <FormDetails>
            <Input
              required
              type="text"
              placeholder="Type email here..."
              name="email"
              onChange={handleChange}
              value={details.email}
            />
          </FormDetails>
          <FormDetails>
            <Input
              type="password"
              placeholder="Type password here..."
              name="password"
              onChange={handleChange}
              value={details.password}
            />
          </FormDetails>
          <button type="submit" onClick={handleSubmit}>{isFetching ? 'Loading...': "Submit"}</button>
          <BottomLink>
            Don't have an account?
            <span onClick={goToSignUpPage}>Sign Up</span>
          </BottomLink>
          {errorMessage && <medium>This username and password were not found. Please try again</medium>}
        </EmailForm>
      </Content>
    </Container>
    </>
  );
};

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BgIm = styled.div`
  background: url("https://compote.slate.com/images/721112a8-1fa9-4a48-8eeb-0c4f29e0d8f6.jpeg?crop=1554%2C1036%2Cx2%2Cy0");
  filter: brightness(75%);
  position: absolute;
  width: 100%;
  height: 100vh;
  background-size: cover;
`;

const Content = styled.div`
  width: 50%;
  display: flex;
  z-index: 1;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  p {
    font-size: 30px;
    padding: 5px 0;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    width: 70%;
    p {
      font-size: 15px;
    }
  }
`;


const Icons = styled.div`
  display: flex;
  height: 30%;
  width: 40%;
  justify-content: space-around;
  ${"" /* background-color:pink; */}
  padding: 5px 0;
  @media (max-width: 768px) {
    width: 70%;
  }
`;

const EmailForm = styled.form`
  padding: 0px 0 20px;
  button {
    padding: 5px;
    margin-top: 10px;
    border-radius: 5px;
    width: 30%;
    border: 3px solid black;
    background-color: #0c314b;
    color: white;
    font-size: 20px;
  }
  @media (max-width: 768px) {
    button{
      font-size:12px;
    }
  }
`;

const FormDetails = styled.div`
  padding: 10px 0;

  label {
    background-color: indigo;
    color: white;
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;
    ${"" /* margin-top:; */}
    font-size:25px;
  }
`;

const Input = styled.input`
  width: 400px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid black;
  padding-left: 10px;
  @media (max-width: 768px) {
    width: 95%;
    height: 15%;
    font-size: 15px;
    border-radius: 3px;
  }
`;

const BottomLink = styled.p`
  font-size: 15px;
  color:white;
  text-decoration:underline;
  text-underline-offset: 8px;
  span{
    &:hover{
      cursor:pointer;
      color:#3498DB;
    }
  }
`
export default Login;