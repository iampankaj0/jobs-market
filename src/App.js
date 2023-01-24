import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import PrivacyPage from "./components/privacypage/PrivacyPage";
import LoginSignup from "./components/login/LoginSignup";
import AllJobs from "./components/allJobs/AllJobs";
import YourApplication from "./components/yourApplication/YourApplication";
import Profile from "./components/profile/Profile";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/jobs" element={<AllJobs />} />
        <Route path="/application-history" element={<YourApplication />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
