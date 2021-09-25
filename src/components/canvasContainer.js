import { Canvas, useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { PointerLockControls, Box, PerspectiveCamera } from "@react-three/drei";
import React, { useRef, useState, useEffect } from "react";
import { Physics, Debug } from "@react-three/cannon";
import { Wall } from "./wall";
import Sink from "./sink";
import Tile from "./tile";
import { Player } from "./player";
import Reticle from "./reticle";
import Tiles from "./tiles";
import Walls from "./walls";
import "../styles/canvasContainer.css";

const CanvasContainer = (props) => {

  const [reticleDisplay, setReticleDisplay] = useState("none");

  const controlsRef = useRef();
  const isLocked = useRef(false);

  return (
    <div onClick={() => setReticleDisplay("block")} id="canvas-container">
      <Reticle display={reticleDisplay} />
      <Canvas
        camera={{ position: [0, 50, 100] }}
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
        <pointLight intensity={1} color="white" position={[0, 100, 0]} />
        <Physics gravity={[0, -30, 0]}>
          {Walls(props, reticleDisplay)}
          <Sink
            scale={2.5}
            position={[42.5, 23.5, 10]}
            rotation={[0, Math.PI / -2, 0]}
          />
          <Box args={[100, 0.4, 100]} />
          {Tiles(reticleDisplay == "none" ? false : true, props)}
          <Player />
        </Physics>
        <PointerLockControls
          onUpdate={() => {
            console.log(controlsRef.current);
            if (controlsRef.current) {
              controlsRef.current.addEventListener("lock", () => {
                isLocked.current = true;
              });
              controlsRef.current.addEventListener("unlock", () => {
                setReticleDisplay("none");
                isLocked.current = false;
              });
              document.addEventListener("keydown", (e) => {
                if (e.code == "Enter" && controlsRef.current.isLocked) {
                  controlsRef.current.unlock();
                }
              });
            }
          }}
          ref={controlsRef}
          selector={"#canvas-container"}
        />
      </Canvas>
    </div>
  );
};

export default CanvasContainer;
