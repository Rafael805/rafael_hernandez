import React, { useMemo } from 'react';
import { Block, useBlock } from './Blocks';
import { Dom, useLoader } from 'react-three-fiber';
import { MainText, MultilineText } from './Text';
import { TextureLoader, LinearFilter } from 'three';
import state from './Store';
import Plane from './Plane';
import Paragraph from './Paragraph';
import * as THREE from 'three';

import img from '../../assets/nature.jpeg';
import img2 from '../../assets/music.jpg';
import img3 from '../../assets/ying.jpg';
import img4 from '../../assets/dog.jpg';
import img5 from '../../assets/pyramids.jpg';
import img6 from '../../assets/dream.jpg';

const Content = () => {
  const [one, two, three, four, five, six] = useLoader(THREE.TextureLoader, [
    img,
    img2,
    img3,
    img4,
    img5,
    img6,
  ]);

  const images = [one, two, three, four, five, six];
  console.log(images);

  useMemo(
    () => images.forEach((texture) => (texture.minFilter = LinearFilter)),
    [images]
  );

  const { contentMaxWidth: w, canvasWidth, canvasHeight, mobile } = useBlock();

  return (
    <>
      {state.paragraphs.map((props, index) => (
        <Paragraph key={index} index={index} {...props} image={images[index]} />
      ))}

      {state.stripes.map(({ offset, color, height }, index) => (
        <Block key={index} factor={-1.5} offset={offset}>
          <Plane
            args={[50, height, 32, 32]}
            shift={-4}
            color={color}
            rotation={[0, 0, Math.PI / 8]}
            position={[0, 0, -10]}
          />
        </Block>
      ))}

      <Block factor={1.25} offset={8}>
        <Dom
          className="bottom-left"
          position={[-canvasWidth / 2, -canvasHeight / 2, 0]}
        >
          There is only one thing that makes a dream impossible to achieve: the
          fear of failure.
        </Dom>
      </Block>
    </>
  );
};

export default Content;
