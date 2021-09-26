import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useBox } from "@react-three/cannon";

export default function Toilet(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene/Toilet/Toilet.gltf')

  const [ref, api] = useBox(() => ({
    mass: 0,
    args: [10.4108 * props.scale, 10.5284 * props.scale, 6.60986 * props.scale],
    ...props,
  }));
  return (
    <group ref={group} dispose={null}>
      <group scale={props.scale} ref={ref}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Toilet_1.geometry}
          material={materials.m_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Toilet_2.geometry}
          material={materials.m_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Toilet_3.geometry}
          material={materials.m_3}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/scene/Toilet/Toilet.gltf')