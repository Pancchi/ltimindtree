import React from "react";
import "./registration.css";
import { useEffect, useState } from "react";
import { registerService } from "../../redux/service/userServices";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Register(props) {
  const [registerData, setregisterData] = useState({ email: "", password: "", userName: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setErrorMessage("");
    setregisterData({ ...registerData, [e.target.id]: e.target.value });
  };
  const reset = () => {
    setregisterData({ email: "", password: "", userName: "" });
  };

  useEffect(() => {
    if (props.registrationResponse.id) {
      reset();
      setErrorMessage("");

      setSuccessMessage("Account Created Successfully");
    }
  }, [props.registrationResponse]);

  useEffect(() => {
    if (props.registrationError.message) {
      setSuccessMessage("");

      setErrorMessage(props.registrationError.message);
    }
  }, [props.registrationError]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (registerData.password.length < 8) {
      setErrorMessage("password should contain minimum 8 characters");
    } else if (!/[A-Z]/.test(registerData.password)) {
      setErrorMessage("password should contain atleast 1 uppercase letter");
    } else if (!/[^\w\s]/.test(registerData.password)) {
      setErrorMessage("password should contain atleast 1 special character");
    } else {
      props.register({ email: registerData.email, password: registerData.password, userName: registerData.userName });
    }
  };
  console.log(props);
  return (
    <>
      <div className="register">
        <div className="registerComponent">
          <form className="registerForm" onSubmit={handleSubmit}>
            <div className="heading">Register here</div>
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input
              className="registerInput"
              type="email"
              id="email"
              value={registerData.email}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <br />
            <label htmlFor="userName">User Name</label>
            <br />
            <input
              className="registerInput"
              type="text"
              id="userName"
              value={registerData.userName}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input
              className="registerInput"
              type="password"
              id="password"
              value={registerData.password}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <br />
            {errorMessage && (
              <>
                <span className="errorMessage">{errorMessage}</span>
                <br />
              </>
            )}

            {successMessage && (
              <span className="successMessage">
                {successMessage} <Link to="/">Click here to login </Link>
              </span>
            )}
            <br />
            <button className="button">Sign Up</button>
            <br />
          </form>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (state) => ({
  registrationResponse: state.userReducer.registrationResponse,
  registrationError: state.userReducer.registrationError,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      register: registerService,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Register);
