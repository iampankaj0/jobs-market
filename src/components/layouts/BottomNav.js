import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/bottomNav.scss";
import { FaToolbox } from "react-icons/fa";
import { RiPagesLine } from "react-icons/ri";
import { BsPersonSquare } from "react-icons/bs";

const BottomNav = () => {
  return (
    <div className="bottomNav__main">
      <NavLink to="/jobs">
        <div>
          <FaToolbox />
          <span>Jobs</span>
        </div>
      </NavLink>
      <NavLink to="/application-history">
        <div>
          <RiPagesLine />
          <span>Your Application</span>
        </div>
      </NavLink>
      <NavLink to="/profile">
        <div>
          <BsPersonSquare />
          <span>Profile</span>
        </div>
      </NavLink>
    </div>
  );
};

export default BottomNav;
