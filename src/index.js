import ReactDOM from "react-dom";
import React, { useEffect, useRef, useState } from "react";
import "./styles/style.css";
import Modal from "./components/modal";
import Footer from "./components/footer";
import CanvasContainer from "./components/canvasContainer";

import "./styles/style.css";

const App = (props) => {

  const [color, setColor] = useState("#121212")

  const changeColor = (color) => {
    setColor(color)
  }

  const ref = useRef()
  
  return (
    <div id="content">
      
      <Modal colorChanger={changeColor} />
      <CanvasContainer color={color} />
      {/* <Content /> */}
      <Footer color={color} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
