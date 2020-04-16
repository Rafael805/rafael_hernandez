import React from 'react'
import { Block, useBlock } from "./Blocks"
import { Dom } from 'react-three-fiber'
import { MainText, MultilineText } from "./Text"
import state from "./Store"
import Plane from './Plane'
import styled from 'styled-components';

const Name = styled.div`
  font-size: 3.9rem;
  font-weight: bold;
`

const Bio = styled.div`
  width: 70%;
  font-size: 1.3rem;
  font-weight: 200;
`

const Content = () => {
    // const images = useLoader(TextureLoader, state.paragraphs.map(({ image }) => image))
    // useMemo(() => images.forEach(texture => (texture.minFilter = LinearFilter)), [images])
    const { contentMaxWidth: w, canvasWidth, canvasHeight, mobile } = useBlock()

    return (
      <>
        <Block factor={1} offset={0}>
          <Block factor={1.0}>
            <MainText left size={w * 0.06} position={[-w * .4, 0.9, -1]} color="#d40749">
              Rafael Hernandez
            </MainText>
          </Block>
        </Block>

        <Block factor={1.25}>
          <Dom position={[w * 0.01, -15, -1]} style={{color: 'white', fontSize: '28px'}}>
            Hi
          </Dom>
        </Block>

        {/* <Block factor={1.2} offset={5.7}>
          <MultilineText top left size={w * 0.15} lineHeight={w / 5} position={[-w / 3.5, 0, -1]} color="#2fe8c3" Text={"four\nzero\nzero"} />
        </Block> */}

        {/* {state.paragraphs.map((props, index) => (
          <Paragraph key={index} index={index} {...props} image={images[index]} />
        ))} */}

        {state.stripes.map(({ offset, color, height }, index) => (
          <Block key={index} factor={-1.5} offset={offset}>
            <Plane args={[50, height, 32, 32]} shift={-4} color={color} rotation={[0, 0, Math.PI / 8]} position={[0, 0, -10]} />
          </Block>
        ))}

        <Block factor={1.25} offset={8}>
          <Dom className="bottom-left" position={[-canvasWidth / 2, -canvasHeight / 2, 0]}>
            Culture is not your friend.
          </Dom>
        </Block>
      </>
    )
}

export default Content;