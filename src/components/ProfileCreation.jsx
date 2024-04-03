import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import avatarPlaceholder from "../assets/camera.svg";
import dribble from "../assets/dribble.png";
import "./ProfileCreation.css";

const ProfileCreation = () => {
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState(null); // State to store the selected avatar image

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatar(e.target.result); // Set the selected image as avatar
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleNext = () => {
    navigate("/landing-page");
  };

  function handleBack() {
    navigate('/');
  }

  return (
    <div>
      <img src={dribble} className="pc-logo" onClick={handleBack}/>
      <div className="profile-creation">
        <h2>Welcome! Let's create your profile</h2>
        <p>Let others get to know you better! You can do these later</p>
        <div>
          <h3>Add an avatar</h3>
          <div className="image-input">
            {/* Display the selected image if available, otherwise display the placeholder */}
            <img
              src={avatar || avatarPlaceholder}
              alt="Avatar"
              className="avatar"
            />
            <div className="image-input-right">
              {/* Input element for selecting an image */}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="file-input"
              />
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
