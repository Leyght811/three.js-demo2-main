import React, { useRef, useState } from "react";
import "../styles/modal.css";
import { SketchPicker } from 'react-color';

const Modal = (props) => {
  const [modalDisplay, setModalDisplay] = useState(true);
  const [color, setColor] = useState("#121212")

  const openCloseModal = () => {
    setModalDisplay(!modalDisplay);
  };

  document.addEventListener("keydown", (e) => {
    if(e.code == "Enter"){
        openCloseModal()
    }
  })

  const handleColorChange = (color) => {
      props.colorChanger(color.hex)
      setColor(color.hex)
  }
  return (
    <div style={{ display: modalDisplay ? "block" : "none" }} id="modal">
      <div onClick={openCloseModal} id="modalClose">
        <i className="far fa-window-close"></i>
      </div>
      <div id="colorPicker">
        <SketchPicker disableAlpha={true} color={color} onChangeComplete={handleColorChange} />
      </div>
    </div>
  );
};

export default Modal;
