import React from "react";
import {useState, Suspense} from "react";
import {Canvas} from '@react-three/fiber';
import { Environment, OrbitControls } from "@react-three/drei";
import Computer from "../../public/Computer"

import "../Styles/RenderPC.css"


export default function RenderPc() {
    return (
        <>
            <Canvas camera={{ fov: 75, position: [0, 3.5, 5]}}>
                <ambientLight intensity={2}/>
                <OrbitControls enableZoom={false}
                  minPolarAngle={Math.PI/2}
                  maxPolarAngle={Math.PI/2}/>
                <Suspense fallback={null}>
                    <Computer scale={6}/>
                </Suspense>
                <pointLight position={[0,0,1]} intensity={20} />  <Environment preset="studio"/>

            </Canvas>
        </>
    )
}
