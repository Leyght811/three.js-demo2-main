import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useBox } from "@react-three/cannon";

export default function Shower(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene/Shower/Shower.gltf')

  const [ref, api] = useBox(() => ({
    mass: 0,
    args: [16.2 * props.scale, 27.9 * props.scale, 16.2 * props.scale],
    ...props,
  }));
  return (
    <group ref={group} dispose={null}>
      <group scale={props.scale} ref={ref}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials.Glass}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/scene/Shower/Shower.gltf')