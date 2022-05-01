import React from "react";
import linkedin from "../images/linkedin-icon.png";
import instagram from "../images/instagram-icon.png";
import facebook from "../images/facebook-icon.png";
import github from "../images/gitHub-icon.png";

function Footer() {
  return (
    <div className="footer">
      <a href="" target="_blank">
        <img src={linkedin} alt="linkedin" />
      </a>
      <a href="" target="_blank">
        <img src={instagram} alt="instagram" />
      </a>
      <a href="" target="_blank">
        <img src={facebook} alt="facebook" />
      </a>
      <a href="" target="_blank">
        <img src={github} alt="github" />
      </a>
    </div>
  );
}

export default Footer;
