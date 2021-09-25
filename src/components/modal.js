import React, { useRef, useState } from "react";
import "../styles/modal.css";
import { SketchPicker } from "react-color";

const Modal = (props) => {
  const [modalDisplay, setModalDisplay] = useState(true);
  const [color, setColor] = useState("#FFFFFF");
  const [texture, setTexture] = useState(null);

  const openCloseModal = () => {
    setModalDisplay(!modalDisplay);
  };

  document.addEventListener("keydown", (e) => {
    if (e.code == "Enter") {
      openCloseModal();
    }
  });

  const generateTextures = () => {
    let textureSquares = [];
    let textures = [
      "wood_texture_01.jpg",
      "wood_texture_02.jpg",
      "wood_texture_03.jpg",
      "wood_texture_04.jpg",
      "wood_texture_05.jpg",
    ];
    for (let i = 0; i < 5; i++) {
      let border = "2px solid white";
      if (texture == textures[i]) border = "2px solid black";
      textureSquares.push(
        <div
          onClick={() => handleTextureChange(textures[i])}
          className="textureSquare"
          key={"ts" + i}
          style={{
            backgroundImage: "url(Textures/" + textures[i] + ")",
            border
          }}
        />
      );
    }
    return textureSquares;
  };

  const handleColorChange = (newColor) => {
    props.colorChanger(newColor.hex);
    setColor(newColor.hex);
  };

  const handleTextureChange = (newTexture) => {
    props.textureChanger(newTexture);
    setTexture(newTexture);
  };
  return (
    <div style={{ display: modalDisplay ? "block" : "none" }} id="modal">
      <div onClick={openCloseModal} id="modalClose">
        <i className="far fa-window-close"></i>
      </div>
      <div id="modalText">Press enter to open/close the texture picker modal</div>
      <div id="colorPicker">
        <SketchPicker
          disableAlpha={true}
          color={color}
          onChangeComplete={handleColorChange}
        />
      </div>
      {generateTextures()}
    </div>
  );
};

export default Modal;
