import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { useBox } from "@react-three/cannon";
import React, {useState} from "react"

export const Wall = (props) => {
  const [ref, api] = useBox(() => ({
    args: [100, 100, 0.1],
    mass: 0,
    ...props,
  }));

  const [emissive, setEmissive] = useState("black");
  const [color, setColor] = useState("white");

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
        if (props.clickable) setColor(props.color);
      }}
    >
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial emissive={emissive} color={color} />
    </mesh>
  );
};
