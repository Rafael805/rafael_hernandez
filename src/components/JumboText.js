import React, { useRef } from 'react'
import HomeText from './HomeText'
import { useFrame } from 'react-three-fiber'

const JumboText = () => {
    const ref = useRef()
    useFrame(({ clock }) => (ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z = Math.sin(clock.getElapsedTime()) * 0.1))
    
    return (
      <group ref={ref}>
        <HomeText hAlign="left" position={[6, 2, 0]} children="HELLO" />
        <HomeText hAlign="left" position={[8, -2, 0]} children="WORLD" />
      </group>
    )
}

export default JumboText;