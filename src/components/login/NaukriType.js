import React from "react";
import { MdArrowBackIos } from "react-icons/md";

const NaukriType = ({ setHandleFormSubmit }) => {
  const naukriType = [
    {
      id: "Accountant",
      titleHindi: "अकाउंटेंट",
      titleEnglish: "Accountant",
    },
    {
      id: "ContentWriter",
      titleHindi: "कंटेंट लेखक",
      titleEnglish: "Content Writer",
    },
    {
      id: "GraphicWebDesigner",
      titleHindi: "ग्राफिक / वेब डिजाइनर",
      titleEnglish: "Graphic / Web Designer",
    },
    {
      id: "HRAdmin",
      titleHindi: "एचआर / एडमिन",
      titleEnglish: "HR / Admin",
    },
    {
      id: "ITHardwareNetworkEngineer",
      titleHindi: "आईटी / हार्डवेयर / नेटवर्क इंजीनियर",
      titleEnglish: "IT / Hardware / Network Engineer",
    },
    {
      id: "Driver",
      titleHindi: "चालक",
      titleEnglish: "Driver",
    },
  ];

  return (
    <section className="naukriType__main">
      <div className="heading__top">
        <h1>आप किस प्रकार की नौकरी ढूंढ रहे हैं?</h1>
        <h2>What type of a job do you want?</h2>
      </div>
      <div className="login__input">
        {naukriType?.map((item) => {
          return (
            <label key={item.id} htmlFor={item.id} className="naukriType__card">
              <p>
                <span>{item.titleHindi}</span>
                <span>{item.titleEnglish}</span>
              </p>
              <input type="checkbox" name="" id={item.id} />
            </label>
          );
        })}

        <div className="actionBtns">
          <button
            onClick={() => setHandleFormSubmit(1)}
            className="backButton"
          >
            <MdArrowBackIos /> Back
          </button>
          <button
            onClick={() => setHandleFormSubmit(3)}
            className="submitButton"
          >
            आगे बढ़ें / Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default NaukriType;
