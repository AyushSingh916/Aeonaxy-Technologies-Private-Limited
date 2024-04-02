import React from "react";
import Nav from "./Nav";
import "./EmailVerification.css";
import dribble from '../assets/dribble.png';
import emailIcon from "../assets/email-icon.png";
import '@fortawesome/fontawesome-free/css/all.min.css';

const EmailVerification = () => {
  return (
    <div className="veri-container">
      <Nav />
      <div className="email-verification">
        <h2>Please verify your email...</h2>
        <div className="email-content">
          <div className="email-icon-container">
            <img src={emailIcon} alt="Email Icon" />
          </div>
          <p>
            Please verify your email address. We've sent a confirmation email
            to:
          </p>
          <p className="email-address">account@refero.design</p>
          <p>
            Click the confirmation link in that email to begin using Dribbble.
          </p>
          <p>
            Didn't receive the email? Check your Spam folder, it may have been
            caught by a filter. If you still don't see it, you can{" "}
            <a href="#" className="link">
              resend the confirmation email
            </a>
            .
          </p>
          <p>
            Wrong email address?{" "}
            <a href="#" className="link">
              Change it
            </a>
            .
          </p>
        </div>
      </div>
      <footer>
        <div className="footer-content">
          <div className="dribbble-info">
            <img src={dribble}/>
            <p>
              Dribbble is the world's leading community for creatives to share,
              grow, and get hired.
            </p>
            <div className="social-icons">
              <i className="fab fa-twitter"></i>
              <i className="fab fa-facebook"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-pinterest"></i>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h3>For designers</h3>
              <ul>
                <li>Go Pro!</li>
                <li>Explore design work</li>
                <li>Design blog</li>
                <li>Overtime podcast!</li>
                <li>Playoffs</li>
                <li>Weekly Warm-Up</li>
                <li>Refer a Friend</li>
                <li>Code of conduct</li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Hire designers</h3>
              <ul>
                <li>Post a job opening</li>
                <li>Post a freelance project</li>
                <li>Search for designers</li>
                <li>Brands</li>
                <li>Advertise with us</li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Company</h3>
              <ul>
                <li>About</li>
                <li>Careers</li>
                <li>Support</li>
                <li>Media kit</li>
                <li>Testimonials</li>
                <li>API</li>
                <li>Terms of service</li>
                <li>Privacy policy</li>
                <li>Cookie policy</li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Directories</h3>
              <ul>
                <li>Design jobs</li>
                <li>Designers for hire</li>
                <li>Freelance designers for hire</li>
                <li>Tags</li>
                <li>Places</li>
                <li>Design assets</li>
                <li>Dribbble Marketplace</li>
                <li>Creative Market</li>
                <li>Fontspring</li>
                <li>Font Squirrel</li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Design Resources</h3>
              <ul>
                <li>Freelancing</li>
                <li>Design Hiring</li>
                <li>Design Portfolio</li>
                <li>Design Education</li>
                <li>Creative Process</li>
                <li>Design Industry Trends</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Dribbble. All rights reserved.</p>
          <p>20,501,853 shots dribbbbled</p>
        </div>
      </footer>
    </div>
  );
};

export default EmailVerification;
