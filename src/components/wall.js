import * as THREE from "three"
import { useLoader } from "@react-three/fiber"
import { useBox } from "@react-three/cannon"

export const Wall = (props) => {
  const [ref, api] = useBox(() => ({ args:[100, 100, 0.1], mass:0, ...props }))
  
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color={"white"} />
    </mesh>
  )
}