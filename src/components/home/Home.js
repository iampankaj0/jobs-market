import React from "react";
import { CustomContainer } from "../../styles/reusableStyle";
import "../../styles/home.scss";
import logo from "../../images/logo.png";
import cmpic from "../../images/icon.png";
import homeillustration from "../../images/home-illustration.png";
import Footer from "../layouts/Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = (type) => {
    if (type === "jobSeeker") {
      return navigate("/login", { state: { loginType: type } });
    } else if (type === "recruiter") {
      return navigate("/login", { state: { loginType: type } });
    }
  };

  return (
    <div className="home__main">
      <CustomContainer>
        {/* TOP NAV IMAGES START */}
        <div className="header">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div>
            <img src={cmpic} alt="cm logo" />
          </div>
        </div>
        {/* TOP NAV IMAGES ENDS */}

        {/* HEADING IMAGE START */}
        <div className="heading_image">
          <img src={homeillustration} alt="cm logo" />
        </div>
        {/* HEADING IMAGE ENDS */}

        <div className="text__head">
          <p>
            <span>नौकरी ढूंढने वाले,</span>
            <span> नौकरी देने वाले</span>
          </p>
          <p>दोनों मिलते हैं यहां</p>
        </div>

        {/* REGISTER INSTRUCTION VIDEO START */}
        <div className="register_in">
          <iframe
            width="853"
            height="480"
            src="https://www.youtube.com/embed/oukPQFXuhMo"
            title="कैसे रेजिस्टर करते है रोजगार बाज़ार पोर्टल पर  || Delhi Government Job Portal || CM Arvind Kejriwal"
          ></iframe>
        </div>
        {/* REGISTER INSTRUCTION VIDEO ENDS */}

        {/* LOGIN/SIGNUP START */}
        <div className="login_signup_btns">
          <button
            onClick={() => handleLoginRedirect("jobSeeker")}
            className="job_login"
          >
            मुझे नौकरी चाहिए / I want a job
          </button>
          <button
            onClick={() => handleLoginRedirect("recruiter")}
            className="hire_login"
          >
            मुझे स्टाफ चाहिए / I want to hire
          </button>
        </div>
        {/* LOGIN/SIGNUP ENDS */}

        <Footer />
      </CustomContainer>
    </div>
  );
};

export default Home;
