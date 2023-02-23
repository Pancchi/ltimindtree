import { loginError, loginSuccess, createUserRegistrationError, createUserRegistrationSuccess } from "../action/userAction";
import axios from "axios";

export function loginService(request) {
  return (dispatch) => {
    axios
      .get(`http://localhost:8080/users?email=${request.email}`)
      .then((res) => res.data)
      .then((res) => {
        if (res.length === 0) {
          dispatch(loginError({ message: "invalid email" }));
        } else if (res[0].password !== request.password) {
          dispatch(loginError({ message: "invalid Password" }));
        } else {
          dispatch(loginSuccess(res[0]));
          return res;
        }
      })
      .catch((error) => {
        dispatch(loginError(error));
      });
  };
}
export function registerService(request) {
  return (dispatch) => {
    axios
      .get(`http://localhost:8080/users?email=${request.email}`)
      .then((res) => res.data)
      .then((res) => {
        if (res.length !== 0) {
          return Promise.reject({ message: "email id already exist" });
        } else {
          return axios.post("http://localhost:8080/users", request);
        }
      })
      .then((res) => res.data)
      .then((res) => {
        dispatch(createUserRegistrationSuccess(res));
      })
      .catch((error) => {
        dispatch(createUserRegistrationError(error));
      });
  };
}
