import React from "react";
import { MdArrowBackIos } from "react-icons/md";

const PersonalDetails = ({ handleSubmit, setHandleFormSubmit }) => {
  return (
    <div className="personalDetails__main">
      <div className="heading__top">
        <h1>अपने बारे में बताएं</h1>
        <h2>Fill your profile</h2>
      </div>
      <div className="login__input">
        <div>
          <label>पूरा नाम / Full name</label>
          <input type="text" placeholder="Your First and Last name" />
        </div>

        <div>
          <label>लिंग / Gender</label>
          <div>
            <input
              type="radio"
              className="profile__radio"
              name="gender"
              id="male"
            />
            <label className="label__checked_radio" htmlFor="male">
              Male
            </label>
            <input
              className="profile__radio"
              type="radio"
              name="gender"
              id="famale"
            />
            <label className="label__checked_radio" htmlFor="famale">
              Female
            </label>
            <input
              className="profile__radio"
              type="radio"
              name="gender"
              id="others"
            />
            <label className="label__checked_radio" htmlFor="others">
              Others
            </label>
          </div>
        </div>

        <div>
          <label>आपने कहां तक पढ़ाई की है? / Highest qualification</label>
          <div>
            <input
              type="radio"
              className="profile__radio"
              name="qualification"
              id="Below 10th"
            />
            <label className="label__checked_radio" htmlFor="Below 10th">
              Below 10th
            </label>

            <input
              className="profile__radio"
              type="radio"
              name="qualification"
              id="10th Pass"
            />
            <label className="label__checked_radio" htmlFor="10th Pass">
              10th Pass
            </label>

            <input
              className="profile__radio"
              type="radio"
              name="qualification"
              id="12th Pass"
            />
            <label className="label__checked_radio" htmlFor="12th Pass">
              12th Pass
            </label>

            <input
              className="profile__radio"
              type="radio"
              name="qualification"
              id="Diploma"
            />
            <label className="label__checked_radio" htmlFor="Diploma">
              Diploma
            </label>

            <input
              className="profile__radio"
              type="radio"
              name="qualification"
              id="Graduate"
            />
            <label className="label__checked_radio" htmlFor="Graduate">
              Graduate
            </label>

            <input
              className="profile__radio"
              type="radio"
              name="qualification"
              id="Post Graduate"
            />
            <label className="label__checked_radio" htmlFor="Post Graduate">
              Post Graduate
            </label>
          </div>
        </div>

        <div>
          <label>क्या आपने पहले काम किया है? / Work experience</label>
          <div>
            <input
              type="radio"
              className="profile__radio"
              name="experience"
              id="Yes"
            />
            <label className="label__checked_radio" htmlFor="Yes">
              Yes
            </label>

            <input
              className="profile__radio"
              type="radio"
              name="experience"
              id="No"
            />
            <label className="label__checked_radio" htmlFor="No">
              No
            </label>
          </div>
        </div>

        <div>
          <label>क्षेत्र / Region</label>
          <div>
            <input
              type="radio"
              className="profile__radio"
              name="regin"
              id="Delhi-NCR"
            />
            <label className="label__checked_radio" htmlFor="Delhi-NCR">
              Delhi-NCR
            </label>

            <input
              className="profile__radio"
              type="radio"
              name="regin"
              id="Outside"
            />
            <label className="label__checked_radio" htmlFor="Outside">
              Outside
            </label>
          </div>
        </div>

        <div>
          <label>निकटतम जिला / Nearest District</label>
          <div>
            <input
              type="radio"
              className="profile__radio"
              name="nearDistrict"
              id="East Delhi"
            />
            <label className="label__checked_radio" htmlFor="East Delhi">
              East Delhi
            </label>

            <input
              type="radio"
              className="profile__radio"
              name="nearDistrict"
              id="North Delhi"
            />
            <label className="label__checked_radio" htmlFor="North Delhi">
              North Delhi
            </label>

            <input
              type="radio"
              className="profile__radio"
              name="nearDistrict"
              id="North West Delhi"
            />
            <label className="label__checked_radio" htmlFor="North West Delhi">
              North West Delhi
            </label>

            <input
              type="radio"
              className="profile__radio"
              name="nearDistrict"
              id="West Delhi"
            />
            <label className="label__checked_radio" htmlFor="West Delhi">
              West Delhi
            </label>

            <input
              type="radio"
              className="profile__radio"
              name="nearDistrict"
              id="South West Delhi"
            />
            <label className="label__checked_radio" htmlFor="South West Delhi">
              South West Delhi
            </label>

            <input
              type="radio"
              className="profile__radio"
              name="nearDistrict"
              id="New Delhi"
            />
            <label className="label__checked_radio" htmlFor="New Delhi">
              New Delhi
            </label>

            <input
              type="radio"
              className="profile__radio"
              name="nearDistrict"
              id="Noida"
            />
            <label className="label__checked_radio" htmlFor="Noida">
              Noida
            </label>

            <input
              type="radio"
              className="profile__radio"
              name="nearDistrict"
              id="Ghaziabad"
            />
            <label className="label__checked_radio" htmlFor="Ghaziabad">
              Ghaziabad
            </label>

            <input
              type="radio"
              className="profile__radio"
              name="nearDistrict"
              id="Gurgaon"
            />
            <label className="label__checked_radio" htmlFor="Gurgaon">
              Gurgaon
            </label>

            <input
              type="radio"
              className="profile__radio"
              name="nearDistrict"
              id="Faridabad"
            />
            <label className="label__checked_radio" htmlFor="Faridabad">
              Faridabad
            </label>
          </div>
        </div>

        <div>
          <label>
            क्या आप अंग्रेजी में कुशल हैं? / Can you speak in English?
          </label>
          <div>
            <input
              type="radio"
              className="profile__radio"
              name="language"
              id="EnglishY"
            />
            <label className="label__checked_radio" htmlFor="EnglishY">
              Yes
            </label>

            <input
              className="profile__radio"
              type="radio"
              name="language"
              id="EnglishN"
            />
            <label className="label__checked_radio" htmlFor="EnglishN">
              No
            </label>
          </div>
        </div>

        <div className="actionBtns">
          <button onClick={() => setHandleFormSubmit(2)} className="backButton">
            <MdArrowBackIos /> Back
          </button>
          <button onClick={handleSubmit} className="submitButton">
            जमा करें / Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
