import React from "react";
import myPic from "../images/profile-pic.jpg";
import emailButton from "../images/email-button.png";
import linkedinButton from "../images/linkedin-button.png";

function Header() {
  return (
    <div className="info">
      <a href="https://jeetpal-singh.web.app/">
        <img src={myPic} className="my-pic" />
      </a>

      <h2 className="name">Jeetpal Singh</h2>
      <h5 className="job-title">Software Developer</h5>
      <a href="https://jeetpal-singh.web.app/">jeetpal.website</a>
      <div className="buttons">
        <a href="mailto:singhjeetpal001@gmail.com" target="_blank">
          <img src={emailButton} alt="Email button" className="button" />
        </a>
        <a
          href="https://www.linkedin.com/in/jeetpal-singh-8630a61aa/"
          target="_blank"
        >
          <img src={linkedinButton} alt="Linkedin button" className="button" />
        </a>
      </div>
    </div>
  );
}

export default Header;
