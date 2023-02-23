
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const CREATE_USER_REGISTRATION_SUCCESS = "CREATE_USER_REGISTRATION_SUCCESS";
export const CREATE_USER_REGISTRATION_ERROR = "CREATE_USER_REGISTRATION_ERROR";

export function loginSuccess(loggedInUser) {
    return { type: LOGIN_SUCCESS, loggedInUser: loggedInUser }
}
export function loginError(error) {
    return { type: LOGIN_ERROR, error: error }
}
export function createUserRegistrationSuccess(registrationResponse) {
    return {
        type: CREATE_USER_REGISTRATION_SUCCESS,
        registrationResponse: registrationResponse,
    };

} export function createUserRegistrationError(error) {
    return {
        type: CREATE_USER_REGISTRATION_ERROR,
        error: error,
    };
}