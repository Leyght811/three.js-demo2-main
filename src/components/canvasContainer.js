import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import {
  PointerLockControls,
  Box,
} from "@react-three/drei";
import React, { useRef, useState } from "react";
import { Physics, Debug } from "@react-three/cannon";
import { Wall } from "./wall";
import Sink from "./sink";
import Tile from "./tile";
import { Player } from "./player";
import "../styles/canvasContainer.css"

const CanvasContainer = (props) => {
  let tileLocation = new THREE.Vector3(46.155, 0.4, 46.155);
  const getTiles = () => {
    let content = [];
    for (let i = 0; i < 169; i++) {
      let positionX = tileLocation.x;
      let positionY = tileLocation.y;
      let positionZ = tileLocation.z;
      content.push(
        <Tile key={i} position={[positionX, positionY, positionZ]} />
      );
      tileLocation.x -= 7.69;
      if (tileLocation.x < -46.125) {
        tileLocation.x = 46.155;
        tileLocation.z -= 7.69;
      }
    }
    return content;
  };

  return (
    <div id="canvas-container">
      <Canvas camera={{ position: [0, 50, 100] }}>
        <ambientLight intensity={0.1} />
        <directionalLight intensity={6} color="white" position={[0, 100, 0]} />\
        {/* <OrbitControls /> */}
        <Physics gravity={[0, -30, 0]}>
          {/* <Debug color="black" scale={1}> */}
          <Wall
            rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
            position={[50, 50, 0]}
          />
          <Wall
            rotation={[-Math.PI / 2, -Math.PI / -2, 0]}
            position={[-50, 50, 0]}
          />
          <Wall rotation={[0, -Math.PI, 0]} position={[0, 50, 50]} />
          <Wall rotation={[0, -Math.PI * 2, 0]} position={[0, 50, -50]} />
          <Sink
            scale={2.5}
            position={[42.5, 17.5, 10]}
            rotation={[0, Math.PI / -2, 0]}
          />
          <Box args={[100, 0.4, 100]} />
          {getTiles()}

          {/* </Debug> */}
          <Player />
        </Physics>
        <PointerLockControls selector={"#canvas-container"} />
      </Canvas>
    </div>
  );
};

export default CanvasContainer;
