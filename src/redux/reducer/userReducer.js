import { LOGIN_SUCCESS, LOGIN_ERROR,CREATE_USER_REGISTRATION_ERROR,CREATE_USER_REGISTRATION_SUCCESS } from "../action/userAction";

const initialState = {
    registrationResponse:{},
    isLoggedin:false,
    loggedInUser: {},
    loginerror: {},
    registrationError:{}
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {

        case LOGIN_SUCCESS: return {
            ...state, loggedInUser: action.loggedInUser, isLoggedin:true,loginerror:{}
        }
        case LOGIN_ERROR: return {
            ...state, loginerror: action.error,loggedInUser:{}
        }
        case CREATE_USER_REGISTRATION_SUCCESS: return {
             ...state, registrationResponse: action.registrationResponse ,registrationError:{}}
        case CREATE_USER_REGISTRATION_ERROR: return { 
                ...state, registrationError: action.error, registrationResponse:{}
             }
        default: return { ...state }
    }
}