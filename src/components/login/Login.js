import React from "react";
import "./login.css";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loginService } from "../../redux/service/userServices";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

function Login(props) {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.id]: e.target.value });
  };

  const reset = () => {
    setLoginData({ email: "", password: "" });
  };

  useEffect(() => {
    if (props.loginerror.message) {
      setErrorMessage(props.loginerror.message);
    }
  }, [props.loginerror]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginData.password.length < 8) {
      setErrorMessage("password should contain minimum 8 characters");
    } else if (!/[A-Z]/.test(loginData.password)) {
      setErrorMessage("password should contain atleast 1 uppercase letter");
    } else if (!/[^\w\s]/.test(loginData.password)) {
      setErrorMessage("password should contain atleast 1 special character");
    } else {
      props.login({ email: loginData.email, password: loginData.password });
      reset();
    }
  };

  return (
    <>
      <div className="login">
        <div className="loginComponent">
          <form className="loginForm" onSubmit={handleSubmit}>
            <div className="heading">User Login</div>
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input
              className="loginInput"
              type="email"
              id="email"
              value={loginData.email}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input
              className="loginInput"
              type="password"
              id="password"
              value={loginData.password}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <br />

            {errorMessage && <>
            <span className="errorMessage">{errorMessage}</span>
            </>
            }
            <br />
            <button className="button">Login</button>
            <br />
            <span >
              New User? <Link to="/register">Click here to register</Link>
            </span>
            <br />
          </form>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (state) => ({
  loggedInUser: state.userReducer.loggedInUser,
  loginerror: state.userReducer.loginerror,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      login: loginService,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Login);
