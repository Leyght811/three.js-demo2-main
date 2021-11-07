/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { Suspense, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";
import * as THREE from "three";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import BathroomObj from "./bathroomObj";

export default function Bathroom(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/scene/Bathroom/Bathroom.gltf");
  return (
    <Suspense fallback={null}>
      <group ref={group} {...props} dispose={null}>
        <group position={[-2.51, 0.1, 0.6]} scale={props.scale}>
          <BathroomObj
            geometry={nodes.Mesh43.geometry}
            material={nodes.Mesh43.material}
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes["Mesh44-FrontColor"].geometry}
            material={nodes["Mesh44-FrontColor"].material}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes["Mesh44-M_65375LF_PC"].geometry}
            material={nodes["Mesh44-M_65375LF_PC"].material}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes["Mesh45-FrontColor"].geometry}
            material={nodes["Mesh45-FrontColor"].material}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes["Mesh45-M_65375LF_PC"].geometry}
            material={nodes["Mesh45-M_65375LF_PC"].material}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes["Mesh46-FrontColor"].geometry}
            material={nodes["Mesh46-FrontColor"].material}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes["Mesh46-M_65375LF_PC"].geometry}
            material={nodes["Mesh46-M_65375LF_PC"].material}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes.Mesh40.geometry}
            material={nodes.Mesh40.material}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes.Mesh39.geometry}
            material={nodes.Mesh39.material}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes.Mesh41.geometry}
            material={nodes.Mesh41.material}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes.Mesh42.geometry}
            material={nodes.Mesh42.material}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes["Mesh37-Color_B01"].geometry}
            material={materials.Color_B01}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes["Mesh37-FrontColor"].geometry}
            material={nodes["Mesh37-FrontColor"].material}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes.Mesh49.geometry}
            material={materials["Aluminum - Brushed - Radial Pattern 6"]}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes.Mesh50.geometry}
            material={materials["Aluminum - Brushed - Radial Pattern 7"]}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes.Mesh51.geometry}
            material={materials["Aluminum - Brushed - Radial Pattern 8"]}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes.Mesh52.geometry}
            material={materials["Aluminum - Brushed - Radial Pattern 9"]}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes.Mesh53.geometry}
            material={materials["Chrome 4"]}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes.Mesh54.geometry}
            material={materials["Aluminum - Brushed - Radial Pattern 10"]}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes.Mesh47.geometry}
            material={nodes.Mesh47.material}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes.Mesh48.geometry}
            material={nodes.Mesh48.material}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes.Mesh29.geometry}
            material={nodes.Mesh29.material}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes.Mesh30.geometry}
            material={nodes.Mesh30.material}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes.Mesh31.geometry}
            material={nodes.Mesh31.material}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes.Mesh32.geometry}
            material={nodes.Mesh32.material}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes.Mesh33.geometry}
            material={nodes.Mesh33.material}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes.Mesh34.geometry}
            material={nodes.Mesh34.material}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes["Mesh35-Color_M00"].geometry}
            material={nodes["Mesh35-Color_M00"].material}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes["Mesh35-FrontColor"].geometry}
            material={nodes["Mesh35-FrontColor"].material}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes["Mesh1-FrontColor"].geometry}
            material={nodes["Mesh1-FrontColor"].material}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes["Mesh1-RAL_7045___Telegrey_1"].geometry}
            material={materials.RAL_7045___Telegrey_1}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes.Mesh11.geometry}
            material={materials.RAL_6021___Pale_green}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes.Mesh12.geometry}
            material={materials.RAL_5023___Distant_blue}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes.Mesh13.geometry}
            material={nodes.Mesh13.material}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes.Mesh14.geometry}
            material={nodes.Mesh14.material}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes.Mesh15.geometry}
            material={nodes.Mesh15.material}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes["Mesh16-RAL_9011___Graphite_black"].geometry}
            material={nodes["Mesh16-RAL_9011___Graphite_black"].material}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes["Mesh16-Translucent_Glass_Blue"].geometry}
            material={nodes["Mesh16-Translucent_Glass_Blue"].material}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes.Mesh17.geometry}
            material={materials.RAL_9002___Grey_white}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes.Mesh18.geometry}
            material={materials.Mat}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes["Mesh19-RAL_9011___Graphite_black"].geometry}
            material={nodes["Mesh19-RAL_9011___Graphite_black"].material}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes["Mesh19-Translucent_Glass_Blue"].geometry}
            material={nodes["Mesh19-Translucent_Glass_Blue"].material}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes.Mesh2.geometry}
            material={nodes.Mesh2.material}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes.Mesh3.geometry}
            material={nodes.Mesh3.material}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes.Mesh4.geometry}
            material={materials["Aluminum - Brushed - Radial Pattern"]}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes.Mesh5.geometry}
            material={materials["Aluminum - Brushed - Radial Pattern 1"]}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes.Mesh9.geometry}
            material={materials["Aluminum - Brushed - Radial Pattern 2"]}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes.Mesh10.geometry}
            material={materials["Aluminum - Brushed - Radial Pattern 3"]}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes.Mesh6.geometry}
            material={nodes.Mesh6.material}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes.Mesh8.geometry}
            material={materials["Chrome 1"]}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes.Mesh7.geometry}
            material={materials.Chrome}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes.Mesh20.geometry}
            material={materials.RAL_1006___Maize_yellow}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes.Mesh21.geometry}
            material={nodes.Mesh21.material}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes.Mesh22.geometry}
            material={materials["Chrome 2"]}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes.Mesh23.geometry}
            material={nodes.Mesh23.material}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes.Mesh24.geometry}
            material={nodes.Mesh24.material}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes.Mesh25.geometry}
            material={nodes.Mesh25.material}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes.Mesh26.geometry}
            material={nodes.Mesh26.material}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes.Mesh27.geometry}
            material={nodes.Mesh27.material}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes.Mesh28.geometry}
            material={materials["Chrome 3"]}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes["Mesh55-FrontColor"].geometry}
            material={nodes["Mesh55-FrontColor"].material}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes["Mesh55-M_0132_LightGray"].geometry}
            material={materials.M_0132_LightGray}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes["Mesh55-M_0135_DarkGray"].geometry}
            material={materials.M_0135_DarkGray}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes["Mesh55-Metal_Silver"].geometry}
            material={materials.Metal_Silver}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes.Mesh36.geometry}
            material={materials["Aluminum - Brushed - Radial Pattern 4"]}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes.Mesh38.geometry}
            material={materials["Aluminum - Brushed - Radial Pattern 5"]}
          />
          <BathroomObj
            clickable={props.clickable}
            color={props.color}
            texture={props.texture}
            geometry={nodes.Mesh56.geometry}
            material={nodes.Mesh56.material}
          />
        </group>
      </group>
    </Suspense>
  );
}

useGLTF.preload("/scene/Bathroom/Bathroom.gltf");
