
import * as THREE from "three";
import React, { useRef, useState, useEffect } from "react";
import Tile from "./tile";

const Tiles = (clickable, props) => {
  let tileLocation = new THREE.Vector3(46.155, 0.4, 46.155);
  let content = [];
  for (let i = 0; i < 169; i++) {
    let positionX = tileLocation.x;
    let positionY = tileLocation.y;
    let positionZ = tileLocation.z;
    content.push(
      <Tile
        texture={props.texture}
        clickable={clickable}
        color={props.color}
        key={i}
        position={[positionX, positionY, positionZ]}
      />
    );
    tileLocation.x -= 7.69;
    if (tileLocation.x < -46.125) {
      tileLocation.x = 46.155;
      tileLocation.z -= 7.69;
    }
  }
  return content;
};

export default Tiles;
