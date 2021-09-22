import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useBox } from "@react-three/cannon";

const Box = (props) => {
    // This reference will give us direct access to the mesh
    const ref = useRef()
    const boxRef = useBox(() => ({mass: 0, position: [0, 0, 0], ...props}))
    return (
      <mesh
        {...props}
        ref={ref}>
        <boxGeometry args={props.args} />
        <meshStandardMaterial color={'black'} />
      </mesh>
    )
  }

  export default Box