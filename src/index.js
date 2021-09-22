import ReactDOM from "react-dom";
import React, { useRef, useState } from "react";
import "./styles/style.css";
import Modal from "./components/modal";
import Footer from "./components/footer";
import CanvasContainer from "./components/canvasContainer";

import "./styles/style.css";
import Reticle from "./components/reticle";

const App = (props) => {

  const [color, setColor] = useState("#121212")

  const changeColor = (color) => {
    setColor(color)
  }
  
  return (
    <div id="content">
      <Reticle />
      <Modal colorChanger={changeColor} />
      <CanvasContainer color={color} />
      <Footer color={color} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
