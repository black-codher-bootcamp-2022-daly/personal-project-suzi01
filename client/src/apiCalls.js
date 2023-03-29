import { loginUser } from "./services/profileService";

export const loginCall = async (details, dispatch) => {
    dispatch({type:"LOGIN_START"})
    try{
        const res = await loginUser(details)
        // console.log(res)
        // if(res === 'Details not found, please try again' || res === 'password does not match' ){
        //     dispatch({type:"LOGIN_FAILURE", payload: res})
        //     // console.log(res)
        // }
        dispatch({type: "LOGIN_SUCCESS", payload: res})
    } catch(err){
        dispatch({type:"LOGIN_FAILURE", payload: true})
    }
}

export const logoutCall = async (dispatch) => {
    dispatch({type:"LOG_OUT"})
    localStorage.clear()
}