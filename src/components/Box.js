import * as THREE from 'three'
import React, { useMemo, useRef, useEffect, useState } from 'react'
import { useLoader, useUpdate, useFrame } from 'react-three-fiber'
import img1 from "../assets/img.jpg"
import img2 from "../assets/img2.jpg"
import FadeShader from '../shaders/FadeShader';
import disp from "../assets/displacement/disp.jpeg"

const Box = () => {
    const mesh = useRef()
    const t = useLoader(THREE.TextureLoader, [img1, img2, disp])
    const [texture1, texture2, dispTexture] = useMemo(() => t.map(t => ((t.minFilter = THREE.LinearFilter), t)), [t])
    const [hovered, setHovered] = useState(false)
    
    useEffect(() => {
        mesh.current.position.z += 1
        return () => {console.log("clean up")}
    }, [])
    
    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => {
        mesh.current.rotation.x = hovered ? mesh.current.rotation.y += 0.04 : mesh.current.rotation.y += 0.01;
    })
        
    return (
        <mesh 
            ref={mesh}
            scale={hovered ? [1.5, 1.5, 1.5] : [1, 1, 1]}
            onPointerMove={e => setHovered(true)}
            onPointerOut={e => setHovered(false)}>
        >
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
            <meshNormalMaterial attach="material"/>

        </mesh>
    )
}

export default Box;
