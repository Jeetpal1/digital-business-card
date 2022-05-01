import React from "react";
import myPic from "../images/profile-pic.jpg";
function Header() {
  return (
    <div className="info">
      <img src={myPic} className="my-pic" />

      <h2 className="name">Jeetpal Singh</h2>
      <h5 className="job-title">Software Developer</h5>
      <a href="https://jeetpal-singh.web.app/">jeetpal.website</a>
    </div>
  );
}

export default Header;
