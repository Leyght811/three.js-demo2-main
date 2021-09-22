import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

const Plane = (props) => {
    // This reference will give us direct access to the mesh
    const ref = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Rotate mesh every frame, this is outside of React without overhead
    // useFrame(() => {
    //   ref.current.rotation.x = ref.current.rotation.y += 0.01
    // })
    return (
      <mesh
        {...props}
        ref={ref}>
        <planeGeometry args={[1, 1]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      </mesh>
    )
  }

  export default Plane