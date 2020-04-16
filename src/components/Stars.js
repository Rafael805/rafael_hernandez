import * as THREE from 'three'
import React, { useMemo, useRef } from 'react'
import { useFrame } from 'react-three-fiber'
import { a } from 'react-spring/three'

const Stars = ({ position, color }) => {
    console.log(color)
    let group = useRef();
    let theta = 0;

    useFrame(() => {
        const r = 5 * Math.sin(THREE.Math.degToRad((theta += 0.01)))
        const s = Math.cos(THREE.Math.degToRad(theta * 2))
        group.current.rotation.set(r, r, r)
        group.current.scale.set(s, s, s)
    })

    const [geo, mat, coords] = useMemo(() => {
        const geo = new THREE.SphereBufferGeometry(1.2, 10, 10)
        const mat = new THREE.MeshNormalMaterial()
        const coords = new Array(1000).fill().map(i => [Math.random() * 800 - 400, Math.random() * 800 - 400, Math.random() * 800 - 400])
        return [geo, mat, coords]
    }, [])

    return (
        <a.group ref={group} position={position}>
            {coords.map(([p1, p2, p3], i) => (
                <mesh key={i} geometry={geo} material={mat} position={[p1, p2, p3]} />
            ))}
        </a.group>
    )
}

export default Stars;