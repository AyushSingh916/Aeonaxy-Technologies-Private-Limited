import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import EmailVerification from './components/EmailVerification';
import ProfileCreation from './components/ProfileCreation';
import SignupForm from './components/SignupForm';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<SignupForm />} />
          <Route path="/create-profile" element={<ProfileCreation />} />
          <Route path="/verify-email" element={<EmailVerification />} />
          <Route path="/landing-page" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;