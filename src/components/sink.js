import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";

export default function Sink(props) {
  const { nodes, materials } = useGLTF("/scene/Sink/sink.gltf");
  const [ref, api] = useBox(() => ({
    mass: 0,
    args: [7.86 * props.scale, 11.7 * props.scale, 5.17 * props.scale],
    ...props,
  }));

  const meshes = () => {
    const geoms = [
      nodes.sink001,
      nodes.sink002,
      nodes.sink003,
      nodes.sink004,
      nodes.sink005,
      nodes.sink006,
      nodes.sink007,
      nodes.sink008,
      nodes.sink009,
      nodes.sink010,
      nodes.sink011,
      nodes.sink012,
      nodes.sink013,
      nodes.sink014,
    ];
    const mats = [
      materials.mat1,
      materials.mat2,
      materials.mat3,
      materials.mat4,
      materials.mat5,
      materials.mat6,
      materials.mat7,
      materials.mat8,
      materials.mat9,
      materials.mat10,
      materials.mat11,
      materials.mat12,
      materials.mat13,
      materials.mat14,
    ];
    let objs = []
    for (let i = 0; i < 14; i++) {
        objs.push(<mesh key={"sinkPart" + i} castShadow receiveShadow geometry={geoms[i].geometry} material={mats[i]} />)
    }
    return(objs)
  };
  return <group ref={ref} scale={props.scale}>{meshes()}</group>;
}

useGLTF.preload("/scene/Sink/sink.gltf");
