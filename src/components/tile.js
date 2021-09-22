import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";

export default function Tile(props) {
  const { nodes, materials } = useGLTF("/scene/Tiles/Tile2.gltf");
  const [ref, api] = useBox(() => ({
    mass: 0,
    args: [7.69, 0.6, 7.69],
    ...props,
  }));
  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow
      onPointerEnter={() => {console.log("enter")}}
      onPointerLeave={() => {console.log("Leave")}}
      onClick={() => {console.log("click")}}
      geometry={nodes.Tile.geometry}
    >
      <meshStandardMaterial color={"white"} />
    </mesh>
  );
}

useGLTF.preload("/scene/Tiles/Tile2.gltf");
