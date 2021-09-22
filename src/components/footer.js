import React, { useRef, useState } from "react";
import "../styles/footer.css"

const Footer = (props) => {
  return (
    <div id="footer">
      <div style={{backgroundColor: props.color}} id="colorBox" />
    </div>
  );
};

export default Footer;
