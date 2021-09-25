import React, { useRef, useState } from "react";
import "../styles/footer.css"

const Footer = (props) => {
  return (
    <div id="footer">
      <div style={{backgroundColor: props.color}} className="colorBox" />
      <div style={{backgroundImage: "url(Textures/"+props.texture+")"}} className="colorBox" />
    </div>
  );
};

export default Footer;
