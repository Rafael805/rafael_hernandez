import React, { useMemo, useCallback, useRef  } from 'react'
import { FontLoader, Vector3, TextBufferGeometry } from "three"
import { useLoader, useFrame, useThree } from "react-three-fiber"
import usePromise from "react-promise-suspense"
import lerp from "lerp"
import state from "./Store"
import fontUrl from '../assets/MOONGET_Heavy.blob'

const Text = ({ children, position, opacity, color = 'white', fontSize = 410 }) => {
    const {
        size: { width, height },
        viewport: { width: viewportWidth, height: viewportHeight }
    } = useThree()
    
    const scale = viewportWidth > viewportHeight ? viewportWidth : viewportHeight

    const canvas = useMemo(() => {
        const canvas = document.createElement('canvas')
        canvas.width = canvas.height = 2048
        const context = canvas.getContext('2d')
        context.font = `bold ${fontSize}px -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif`
        context.textAlign = 'center'
        context.textBaseline = 'middle'
        context.fillStyle = color
        context.fillText(children, 1024, 1024 - 410 / 2)
        return canvas
    }, [children, width, height])

    return (
    <sprite scale={[scale, scale, 1]} position={position}>
        <spriteMaterial attach="material" transparent opacity={opacity}>
        <canvasTexture attach="map" image={canvas} premultiplyAlpha onUpdate={s => (s.needsUpdate = true)} />
        </spriteMaterial>
    </sprite>
    )
}

const MultilineText = ({ text, size = 1, lineHeight = 1, position = [0, 0, 0], ...props }) =>
  text.split("\n").map((text, index) => <Text key={index} size={size} {...props} position={[position[0], position[1] - index * lineHeight, position[2]]} children={text} />)

const MainText = ({ children, size = 1, left, right, top, bottom, color = "white", opacity = 1, height = 0.01, layers = 0, ...props }) => {
    const data = useLoader(FontLoader, fontUrl)
    const geom = usePromise(() => new Promise(res => res(new TextBufferGeometry(children, { font: data, size: 1, height, curveSegments: 32 }))), [children])
    const onUpdate = useCallback(
      self => {
        const box = new Vector3()
        self.geometry.computeBoundingBox()
        self.geometry.boundingBox.getSize(box)
        self.position.x = left ? 0 : right ? -box.x : -box.x / 2
        self.position.y = top ? 0 : bottom ? -box.y : -box.y / 2
      },
      [left, right, top, bottom]
    )
  
    const ref = useRef()
    let last = state.top.current
    useFrame(() => {
      ref.current.shift = lerp(ref.current.shift, (state.top.current - last) / 100, 0.1)
      last = state.top.current
    })
  
    return (
      <group {...props} scale={[size, size, 0.1]}>
        <mesh geometry={geom} onUpdate={onUpdate} frustumCulled={false}>
          <customMaterial ref={ref} attach="material" color={color} transparent opacity={opacity} />
        </mesh>
      </group>
    )
}

export { Text, MultilineText, MainText }