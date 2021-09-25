import React, { useRef, useState, useEffect } from "react";
import { Wall } from "./wall";

const Walls = (props, reticleDisplay) => {
    let rotations = [
      [0, -Math.PI / 2, 0],
      [0, -Math.PI / -2, 0],
      [0, -Math.PI, 0],
      [0, -Math.PI * 2, 0],
    ];
    let positions = [
      [50, 50, 0],
      [-50, 50, 0],
      [0, 50, 50],
      [0, 50, -50],
    ];
    let walls = [];
    for (let i = 0; i < 4; i++) {
      walls.push(
        <Wall
          key={"wall" + i}
          clickable={reticleDisplay == "none" ? false : true}
          color={props.color}
          texture={props.texture}
          rotation={rotations[i]}
          position={positions[i]}
        />
      );
    }
    return walls;
  };

  export default Walls