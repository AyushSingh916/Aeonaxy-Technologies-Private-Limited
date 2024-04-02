import React from "react";
import { useNavigate } from "react-router-dom";
import sideImage from "../assets/signup.png";
import "./SignupForm.css";

const SignUpForm = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/create-profile');
  }

  return (
    <div className="container">
      <div className="left-section">
        <img src={sideImage} alt="Sign up illustration" />
      </div>
      <div className="right-section">
        <p className="member">
          Already a member? <a href="#">Sign In</a>
        </p>
        <div className="sign-up-container">
          <h2 className="title">Sign up to Dribbble</h2>
          <span className="username-error">
            ▲ Username has already been taken
          </span>
          <div className="input-name">
            <div className="input-group">
              <label htmlFor="name" className="input-label">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="John"
                className="input-field"
              />
            </div>
            <div className="input-group">
              <label htmlFor="username" className="input-label username-label">
                Username
              </label>
              <div className="username-group">
                <input
                  id="username"
                  type="text"
                  placeholder="John"
                  className="input-field"
                />
              </div>
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="email" className="input-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="account@refero.design"
              className="input-field"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="input-label">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="6+ characters"
              className="input-field"
            />
          </div>
          <div className="terms-group">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms" className="terms">
              Creating an account means you're okay with our Terms of Service,
              Privacy Policy, and our default Notification Settings.
            </label>
          </div>
          <button type="submit" className="button" onClick={handleSubmit}>
            Create Account
          </button>
          <p className="recaptcha">
            This site is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
