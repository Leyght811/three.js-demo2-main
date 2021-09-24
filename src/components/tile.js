import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";
import { useState } from "react/cjs/react.development";

export default function Tile(props) {
  const { nodes, materials } = useGLTF("/scene/Tiles/Tile2.gltf");
  const [ref, api] = useBox(() => ({
    mass: 0,
    args: [7.69, 0.6, 7.69],
    ...props,
  }));

  const [emissive, setEmissive] = useState("black");
  const [color, setColor] = useState("white");

  return (
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
        if (props.clickable) setColor(props.color);
      }}
      geometry={nodes.Tile.geometry}
    >
      <meshStandardMaterial emissive={emissive} color={color} />
    </mesh>
  );
}

useGLTF.preload("/scene/Tiles/Tile2.gltf");
