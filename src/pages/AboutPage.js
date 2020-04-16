import React, { useCallback } from 'react';
import { Canvas } from 'react-three-fiber'
import { useSpring } from 'react-spring/three'
import AboutScene from '../components/AboutScene'

const AboutPage = () => {
    const [{ top, mouse }, set] = useSpring(() => ({ top: 0, mouse: [0, 0] }))
    const onMouseMove = useCallback(({ clientX: x, clientY: y }) => set({ mouse: [x - window.innerWidth / 2, y - window.innerHeight / 2] }), [])
    const onScroll = useCallback(e => set({ top: e.target.scrollTop }), [])

    console.log(top)


    return (
      <>
        <Canvas className="canvas">
          <AboutScene top={top} mouse={mouse} />
        </Canvas>

        <div className="scroll-container" onScroll={onScroll} onMouseMove={onMouseMove}>
          <div style={{ height: '900vh' }} />
        </div>
      </>
    )
}

export default AboutPage;