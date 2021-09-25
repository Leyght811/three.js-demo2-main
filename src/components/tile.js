import React, { useRef, Suspense } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";
import { useState } from "react/cjs/react.development";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";

export default function Tile(props) {
  const { nodes, materials } = useGLTF("/scene/Tiles/Tile2.gltf");
  const [ref, api] = useBox(() => ({
    mass: 0,
    args: [7.69, 0.6, 7.69],
    ...props,
  }));

  const [emissive, setEmissive] = useState("black");
  const [color, setColor] = useState("white");
  const [texture, setTexture] = useState("blank.jpg");

  

  return (
    <Suspense fallback={null}>
      <mesh
        ref={ref}
        castShadow
        receiveShadow
        onPointerEnter={() => {
          if (props.clickable) setEmissive("#61ff00");
        }}
        onPointerLeave={() => {
          setEmissive("black");
        }}
        onClick={() => {
          if (props.clickable) {
            setColor(props.color);
            setTexture(props.texture);
          }
        }}
        geometry={nodes.Tile.geometry}
      >
        <meshStandardMaterial
          map={useLoader(TextureLoader, "Textures/"+texture)}
          attach="material"
          emissive={emissive}
          color={color}
        />
      </mesh>
    </Suspense>
  );
}

useGLTF.preload("/scene/Tiles/Tile2.gltf");
