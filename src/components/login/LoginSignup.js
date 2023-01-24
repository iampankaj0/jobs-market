import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import header_rojgar_bazaar from "../../images/header_rojgar_bazaar.jpg";
import {
  ContentWrapper,
  CustomContainer,
  TopImageBanner,
} from "../../styles/reusableStyle";
import { IoArrowBackOutline } from "react-icons/io5";
import "../../styles/loginSignup.scss";
import { MdArrowBackIos } from "react-icons/md";
import NaukriType from "./NaukriType";
import PersonalDetails from "./PersonalDetails";

const getFormSubmitType = () => {
  let formSubmitType = localStorage.getItem("formSubmitType");

  if (formSubmitType) {
    return (formSubmitType = JSON.parse(
      localStorage.getItem("formSubmitType")
    ));
  } else {
    return null;
  }
};

const LoginSignup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const loginType = location?.state?.loginType;

  const [handleFormSubmit, setHandleFormSubmit] = useState(getFormSubmitType());

  // set handleFormSubmit in localStorage
  useEffect(() => {
    localStorage.setItem("formSubmitType", JSON.stringify(handleFormSubmit));
  }, [handleFormSubmit]);

  const goBack = () => {
    navigate("/jobs-market");
  };

  const handleLogin = () => {
    if (loginType === "jobSeeker") {
      // alert("jobSeeker");
      setHandleFormSubmit(1);
    } else if (loginType === "recruiter") {
      // alert("recruiter");
      setHandleFormSubmit(1);
    }
  };

  const handleSubmit = () => {
    navigate("/jobs")
  };

  return (
    <div className="loginSignup__main">
      <CustomContainer>
        <TopImageBanner src={header_rojgar_bazaar} alt="headerimage" />

        <ContentWrapper>
          <button className="backBtn" onClick={goBack}>
            <IoArrowBackOutline />
          </button>

          {handleFormSubmit === 1 ? (
            <>
              <div className="heading__top">
                <h1>ओटीपी टाइप करें</h1>
                <h2>Enter OTP</h2>
              </div>
              <div className="login__input">
                <label>ओटीपी टाइप करें / Enter OTP</label>
                <input type="text" placeholder="Enter 6 digits OTP" />
                <p>
                  <a href="#!">Resend OTP</a>
                </p>
                <div className="actionBtns">
                  <button
                    onClick={() => setHandleFormSubmit(null)}
                    className="backButton"
                  >
                    <MdArrowBackIos /> Back
                  </button>
                  <button
                    onClick={() => setHandleFormSubmit(2)}
                    className="submitButton"
                  >
                    पुष्टि करें / Verify
                  </button>
                </div>
              </div>
            </>
          ) : handleFormSubmit === 2 ? (
            <NaukriType setHandleFormSubmit={setHandleFormSubmit} />
          ) : handleFormSubmit === 3 ? (
            <PersonalDetails setHandleFormSubmit={setHandleFormSubmit} handleSubmit={handleSubmit} />
          ) : (
            <>
              <div className="heading__top">
                <h1>अपना मोबाइल नंबर बताएं</h1>
                <h2>Enter your mobile number</h2>
              </div>
              <div className="login__input">
                <label>मोबाइल नंबर/ Mobile number</label>
                <input type="text" placeholder="Your 10 digit mobile number" />
                <p>
                  हम आपको इस नंबर पर OTP भेजेंगे / We will send you OTP on this
                  number
                </p>
                <button onClick={handleLogin} className="submitButton">
                  आगे बढ़ें / Next
                </button>
              </div>
            </>
          )}
        </ContentWrapper>
      </CustomContainer>
    </div>
  );
};

export default LoginSignup;
