import React from "react";
import linkedin from "../images/linkedin-icon.png";
import instagram from "../images/instagram-icon.png";
import facebook from "../images/facebook-icon.png";
import github from "../images/gitHub-icon.png";

function Footer() {
  return (
    <div className="footer">
      <a href="https://www.linkedin.com/in/jeetpal-singh-8630a61aa/" target="_blank">
        <img src={linkedin} alt="linkedin" />
      </a>
      <a href="https://www.instagram.com/jeet_pal01/?hl=en" target="_blank">
        <img src={instagram} alt="instagram" />
      </a>
      <a href="https://www.facebook.com/profile.php?id=100076170605893" target="_blank">
        <img src={facebook} alt="facebook" />
      </a>
      <a href="https://github.com/Jeetpal1" target="_blank">
        <img src={github} alt="github" />
      </a>
    </div>
  );
}

export default Footer;
