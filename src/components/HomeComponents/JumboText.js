import React, { useRef } from 'react';
import HomeText from './HomeText';
import { useFrame } from 'react-three-fiber';
import useWindowDimensions from '../useWindowDimensions';

const JumboText = () => {
  const ref = useRef();
  const { width } = useWindowDimensions();

  useFrame(
    ({ clock }) =>
      (ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z =
        Math.sin(clock.getElapsedTime()) * 0.1)
  );

  return (
    <group ref={ref}>
      <HomeText
        hAlign="left"
        position={width < 900 ? [3.5, 1.4, 0] : [6, 2, 0]}
        size={1}
        children="HELLO"
      />
      <HomeText
        hAlign="left"
        position={width < 900 ? [3.5, 0, 0] : [6, -2, 0]}
        size={1}
        children="WORLD"
      />
    </group>
  );
};

export default JumboText;
