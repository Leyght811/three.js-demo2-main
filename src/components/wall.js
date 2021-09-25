import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { useBox } from "@react-three/cannon";
import React, { useState } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";

export const Wall = (props) => {
  const [ref, api] = useBox(() => ({
    args: [100, 100, 0.1],
    mass: 0,
    ...props,
  }));

  const [emissive, setEmissive] = useState("black");
  const [color, setColor] = useState("white");
  const [texture, setTexture] = useState("blank.jpg");

  return (
    <mesh
      ref={ref}
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
    >
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial
        map={useLoader(TextureLoader, "Textures/" + texture)}
        attach="material"
        emissive={emissive}
        color={color}
      />
    </mesh>
  );
};
