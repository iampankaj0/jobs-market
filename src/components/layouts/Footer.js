import React from "react";
import { Link } from "react-router-dom";
import "../../styles/footer.scss";

const Footer = () => {
  return (
    <div className="footer_main">
      <p>
        मैं <a href="#!">Terms & Conditions</a> और{" "}
        <Link to="/privacy">Privacy Policy</Link> से सहमत हूं
      </p>
      <p>
        <a href="#!">Contact Us</a>
      </p>
    </div>
  );
};

export default Footer;
