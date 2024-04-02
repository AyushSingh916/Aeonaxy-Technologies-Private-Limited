import React from "react";
import { useNavigate } from "react-router-dom";
import avatarPlaceholder from "../assets/camera.svg";
import dribble from "../assets/dribble.png";
import "./ProfileCreation.css";

const ProfileCreation = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/landing-page");
  };
  return (
    <div>
      <img src={dribble} className="pc-logo"/>
      <div className="profile-creation">
        <h2>Welcome! Let's create your profile</h2>
        <p>Let others get to know you better! You can do these later</p>
        <div>
          <h3>Add an avatar</h3>
          <div className="image-input">
            <img src={avatarPlaceholder} alt="Avatar Placeholder" />
            <div className="image-input-right">
              <button>Choose image</button>
              <p>{'> Or choose one of our defaults'}</p>
            </div>
          </div>
        </div>
        <div>
          <h3>Add your location</h3>
          <input type="text" placeholder="Enter a location" />
        </div>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default ProfileCreation;
