import ReactDOM from "react-dom";
import React, { useEffect, useRef, useState } from "react";
import "./styles/style.css";
import Modal from "./components/modal";
import Footer from "./components/footer";
import CanvasContainer from "./components/canvasContainer";

import "./styles/style.css";

const App = (props) => {
  const [color, setColor] = useState("#FFFFFF");
  const [texture, setTexture] = useState("blank.jpg");

  const ref = useRef();

  return (
    <div id="content">
      <Modal
        colorChanger={(color) => {
          setColor(color);
        }}
        textureChanger={(texture) => {
          setTexture(texture);
        }}
      />
      <CanvasContainer texture={texture} color={color} />
      <Footer texture={texture} color={color} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
