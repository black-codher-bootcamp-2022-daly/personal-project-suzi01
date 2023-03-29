import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsTwitter, BsFacebook, BsGoogle } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { createUser } from "../services/profileService";
import { Link } from "react-router-dom";

const Register = () => {
    const [details, setDetails] = useState();
    const [ account, setAccount] = useState(false)
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { value, name } = e.target;

        setDetails((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            };
        });
        // console.log(details);
    };

    const goToLoginPage = () => navigate("/login");

    // const validatePassword = (password1, password2) => {
    //   if (password)

    // }

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data) => {
        // e.preventDefault;
        console.log(data);
        let profile_pic = data.image[0].name
        console.log(data.image[0].name)
        let collected_data = ({
            name:{first:data.first,
                last: data.last,
                userName: data.userName},
            profile:{
                thumbnail: profile_pic
            },
            email:data.email,
            password:data.password,
        })
        JSON.stringify(collected_data)
        try{
        const response = await createUser(collected_data)
        console.log(response.error)
        if(response.error === false){
            setAccount(true);
        }

        // if(response === 'Details not found, please try again' || response === 'password does not match' ){
        //     setError(true)
        //     setDetails({
        //     email: "",
        //     password: ""
        //     });
        // } else {
        //     // setUser(response)
        //     // let arr = [response]
        //     localStorage.setItem('user',response._id)
        //     // navigate("/home");
        // }
        } catch(error){
        // setError(true)
        }


        
    };
    // console.log(details)

    return (
        <Container>
            <BgIm />
            <Content>
                <FormP>Register with</FormP>
                <Icons>
                    <Twitter size={50} />
                    <Facebook size={50} />
                    <Google size={50} />
                </Icons>
                <FormP>or:</FormP>
                <EmailForm onSubmit={handleSubmit(onSubmit)}>
                    <FormDetails>
                        <Input
                            placeholder="First name..."
                            name="first"
                            onChange={handleChange}
                            // value={details.first}
                            {...register("first", {
                                required: true
                            })}
                        />
                        {errors.first && errors.first.type === "required" && (
                            <ErrMessage>First name is required.</ErrMessage>
                        )}
                    </FormDetails>
                    <FormDetails>
                        <Input
                            placeholder="Last name..."
                            name="last"
                            onChange={handleChange}
                            // value={details.last}
                            {...register("last", {
                                required: true
                            })}
                        />
                        {errors.last && errors.last.type === "required" && (
                            <ErrMessage>Last name is required.</ErrMessage>
                        )}
                    </FormDetails>
                    <FormDetails>
                        <Input
                            placeholder="User name..."
                            name="userName"
                            onChange={handleChange}
                            // value={details.userName}
                            {...register("userName", {
                                required: true
                            })}
                        />
                        {errors.userName && errors.userName.type === "required" && (
                            <ErrMessage>Password is required.</ErrMessage>
                        )}
                    </FormDetails>
                    <FormDetails>
                        <Input
                            type="text"
                            placeholder="Type email here..."
                            name="email"
                            // value={details.email}
                            onChange={handleChange}
                            {...register("email", {
                                required: true,
                                pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
                            })}
                        />
                        {errors.email && errors.email.type === "required" && (
                            <ErrMessage>Email is required.</ErrMessage>
                        )}
                        {errors.email && errors.email.type === "pattern" && (
                            <ErrMessage>Email is not valid.</ErrMessage>
                        )}
                    </FormDetails>
                    <FormDetails>
                        <Input
                            type="password"
                            placeholder="Type password here..."
                            name="password"
                            onChange={handleChange}
                            // value={details.password}
                            {...register("password", {
                                required: true,
                                minLength: 6
                            })}
                        />
                        {errors.password && errors.password.type === "required" && (
                            <ErrMessage>Password is required.</ErrMessage>
                        )}
                        {errors.password && errors.password.type === "minLength" && (
                            <ErrMessage>Password should be at-least 6 characters.</ErrMessage>
                        )}
                    </FormDetails>
                    <FormDetails>
                        <Input
                            type="password"
                            placeholder="Confirm password..."
                            name="confirm_password"
                            onChange={handleChange}
                            // value={password2}
                            {...register("confirm_password", {
                                required: true,
                                validate: (val, string) => {
                                    if (watch("password") !== val) {
                                        return "Your passwords do no match";
                                    }
                                }
                            })}
                        />
                        {errors.confirm_password &&
                            errors.confirm_password.type === "validate" && (
                                <ErrMessage>{errors.confirm_password.message}</ErrMessage>
                            )}
                    </FormDetails>
                    <FormDetails>
                        {/* <label>
                            {" "}
                            Upload  */}
                            <UploadImg
                                type="file"
                                accept="image/*"
                                name="image"
                                onChange={handleChange}
                                // value={details.image}
                                {...register("image", {
                                    required: true,
                                    minLength: 6
                                })}
                            />
                            {errors.image && errors.image.type === "required" && (
                                <ErrMessage>Image is required.</ErrMessage>
                            )}
                         {/* </label> */}
                    </FormDetails>
                    <button>Register</button>
                    <BottomLink>
                        Already have an account? <span onClick={goToLoginPage}>Login</span>
                    </BottomLink>
                    {account && <medium>Your account has been made! You may now <Link to="/login">login</Link></medium>}
                </EmailForm>
            </Content>
        </Container>
    );
};


const Container = styled.div`
    position: absolute;
    width:100%;
    height:100%;
    ${'' /* background: url("https://compote.slate.com/images/721112a8-1fa9-4a48-8eeb-0c4f29e0d8f6.jpeg?crop=1554%2C1036%2Cx2%2Cy0"); */}
    ${'' /* color:white;
    filter:brightness(50%) */}
    z-index:-1;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
`

const BgIm = styled.div`
    background: url("https://compote.slate.com/images/721112a8-1fa9-4a48-8eeb-0c4f29e0d8f6.jpeg?crop=1554%2C1036%2Cx2%2Cy0");
    filter:brightness(75%);
    position:absolute;
    width: 100%;
    height: 100vh;
    background-size: cover;
`


const Content = styled.div`
    margin-top:80px;
    width: 50%;
    display: flex;
    z-index: 1;
    flex-direction: column;
    align-items: center;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);

    @media (max-width: 768px) {
        width:70%;

  }
`
const FormP = styled.p`
  font-size: 30px;
  padding: 5px 0;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Icons = styled.div`
    display:flex;
    height:30%;
    width:40%;
    justify-content:space-around;
    ${'' /* background-color:pink; */}
    padding: 5px 0;
    
`
const Twitter = styled(BsTwitter)`
    &:hover{
        color:#5DADE2;
    }
`
const Facebook = styled(BsFacebook)`
    width:80px;
    ${'' /* height:0px; */}
    &:hover{
        color:#2471A3;
    }
`
const Google = styled(BsGoogle)`
    &:hover{
        color:white;
    }
`


const EmailForm = styled.form`
    padding:0px 0 20px;
    button{
        padding:5px;
        margin-top:10px;
        border-radius:5px;
        width:30%;
        border: 3px solid black;
        background-color:#0c314b;
        color: white;
        font-size:20px;
    }
`

const FormDetails = styled.div`
    padding:10px 0;

    label{
        ${'' /* background-color: indigo;
        color: white;
        padding: 8px;
        border-radius: 8px; */}
        cursor: pointer;
        ${'' /* margin-top:; */}
        ${'' /* font-size:20px;
        text-align:center;
        height:40px; */}
    }
`

const Input = styled.input.attrs({
    type: 'text'
})`
    width:400px;
    height:40px;
        border-radius:8px;
        border: 1px solid black;
        padding-left:10px;
        @media (max-width: 768px) {

        width:95%;
        height:15%;
        font-size:15px;
        border-radius:3px;
        }
`

const ErrMessage = styled.p`
  text-transform: capitalize;
  font-size: 15px;
  margin-bottom: 0;
  margin-top: 10px;
  color: #1c70d5;
  font-weight:bold;
  margin-left:5px;
  ${'' /* text-align:center; */}
`;

const UploadImg = styled.input.attrs({
    type: 'file'
})`
    ${'' /* background-color:pink; */}
    height:40px;
    ${'' /* display:none; */}
`
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
export default Register;