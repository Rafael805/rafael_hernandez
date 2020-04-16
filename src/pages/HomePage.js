import React, { useState, useCallback } from "react";
import { Canvas } from "react-three-fiber";
import { useSpring } from "react-spring/three";

import Scene from "../components/Scene";

import * as THREE from "three";

const HomePage = () => {
    const [{ top, mouse }, set] = useSpring(() => ({ top: 0, mouse: [0, 0] }));
    const onMouseMove = useCallback(
        ({ clientX: x, clientY: y }) =>
            set({
                mouse: [x - window.innerWidth / 2, y - window.innerHeight / 2],
            }),
        []
    );
    const [down, setDown] = useState(false);
    return (
        <>
            <Canvas
                camera={{ position: [0, 0, 15] }}
                onMouseMove={onMouseMove}
                onMouseUp={() => setDown(false)}
                onMouseDown={() => setDown(true)}
                onCreated={({ gl }) => {
                    gl.toneMapping = THREE.Uncharted2ToneMapping;
                    gl.setClearColor(new THREE.Color("#272727"));
                }}
            >
                <Scene top={top} mouse={mouse} down={down} />
            </Canvas>
        </>
    );
};

export default HomePage;
