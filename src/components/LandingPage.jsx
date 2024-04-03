import React, { useState } from 'react';
import Card from '../UI/Card'; // Update the path to your Card component
import { useNavigate } from 'react-router-dom';
import designerShareWork from '../assets/designer-share-work.png';
import hireDesigner from '../assets/hire-designer.png';
import designInspiration from '../assets/design-inspiration.png';
import dribble from '../assets/dribble.png';
import backbtn from '../assets/back-arrow.svg';
import './LandingPage.css';

const LandingPage = () => {
  const [selectedReason, setSelectedReason] = useState('');
  const navigate = useNavigate();

  const handleReasonChange = (e) => {
    setSelectedReason(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary actions with the selected reason
    navigate('/verify-email');
  };

  const cardOptions = [
    {
      src: designerShareWork,
      text: "I'm a designer looking to share my work",
    },
    {
      src: hireDesigner,
      text: "I'm looking to hire a designer",
    },
    {
      src: designInspiration,
      text: "I'm looking for design inspiration",
    },
  ];

  const handleClick = () => {
    navigate('/create-profile');
  }; 

  function handleBack() {
    navigate('/');
  }

  return (
    <div className="landing-page">
      <div className='lp-header'>
      <img src={dribble} onClick={handleBack}/>
      <button onClick={handleClick}><img src={backbtn}/></button>
      </div>
      <h1>What brings you to Dribbble?</h1>
      <p>Select the options that best describe you. Don't worry, you can explore other options later.</p>
      <div onChange={handleReasonChange} className='card-container'>
        {cardOptions.map((option, index) => (
          <Card
            key={index}
            src={option.src}
            text={option.text}
            selected={selectedReason === option.text}
            handleReasonChange={handleReasonChange}
          />
        ))}
      </div>
      <p>Anything else? You can select multiple</p>
      <button onClick={handleSubmit}>Finish</button>
    </div>
  );
};

export default LandingPage;
