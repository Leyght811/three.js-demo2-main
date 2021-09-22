import { Canvas, useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { PointerLockControls, Box, PerspectiveCamera } from "@react-three/drei";
import React, { useRef, useState, useEffect } from "react";
import { Physics, Debug } from "@react-three/cannon";
import { Wall } from "./wall";
import Sink from "./sink";
import Tile from "./tile";
import { Player } from "./player";
// import Reticle from "./Reticle";
import "../styles/canvasContainer.css";

const CanvasContainer = (props) => {
  const controlsRef = useRef();
  const isLocked = useRef(false);

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

  const changeLocked = () => {
    isLocked.current = !isLocked.current
  }


  return (
    <div onClick={changeLocked} id="canvas-container">
      <Canvas
        // camera={{ position: [0, 50, 100] }}
        raycaster={{
          computeOffsets: (_, { size: { width, height } }) => {
            if (isLocked.current) {
              return {
                offsetX: width / 2,
                offsetY: height / 2,
              };
            } else {
              return null;
            }
          },
        }}
      >
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
        {/* <Camera /> */}
        {/* <MouseReticle /> */}
        <PointerLockControls
          selector={"#canvas-container"}
        />
      </Canvas>
    </div>
  );
};

function Camera() {
  const mouseReticle = useRef();
  const { camera, mouse } = useThree();
  // initialize camera to look at origin.
  useEffect(() => {
    camera.lookAt(0, 0, 0);
  }, [camera]);

  return (
    <PerspectiveCamera makeDefault position={[0, 50, 100]}>
      {/* This reticle lives where the camera is pointing. 
          This would be used in a first person environment */}
      {/* <group position={[0, 0, -1]}>
        <Reticle />
      </group> */}
    </PerspectiveCamera>
  );
}

// Project a reticle of the mouse position onto the near plane.
// A little janky because the rotation is off, so it gets cut.
function MouseReticle() {
  const { camera, mouse } = useThree();
  const mouseReticle = useRef();

  useFrame(() => {
    if (mouseReticle.current) {
      const vector = new THREE.Vector3(mouse.x, mouse.y, -0.8).unproject(
        camera
      );
      mouseReticle.current.position.set(...vector.toArray());
    }
  });

  return (
    <mesh ref={mouseReticle}>
      <sphereBufferGeometry args={[0.001, 100, 100]} />
      <meshBasicMaterial color={"red"} />
    </mesh>
  );
}

export default CanvasContainer;
