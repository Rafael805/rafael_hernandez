import React, { useEffect, useRef } from 'react'
import { extend as applyThree, useFrame, useThree } from 'react-three-fiber'
import { apply as applySpring, a } from 'react-spring/three'
import { EffectComposer } from '../postprocessing/EffectComposer'
import { RenderPass } from '../postprocessing/RenderPass'
import { GlitchPass } from '../postprocessing/GlitchPass'

applySpring({ EffectComposer, RenderPass, GlitchPass })
applyThree({ EffectComposer, RenderPass, GlitchPass })

/**
 * This component creates a glitch effect
 */
const Effects = ({ down }) => {
    console.log(down)
    const { gl, scene, camera, size } = useThree()
    const composer = useRef()

    useEffect(() => void composer.current.setSize(size.width, size.height), [size])

    // This takes over as the main render-loop (when 2nd arg is set to true)
    useFrame(() => composer.current.render(), 1)

    return (
      <effectComposer ref={composer} args={[gl]}>
        <renderPass attachArray="passes" scene={scene} camera={camera} />
        <glitchPass attachArray="passes" renderToScreen factor={down ? 1 : 0} />
      </effectComposer>
    )
}

export default Effects;