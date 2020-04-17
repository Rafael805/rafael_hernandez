import * as THREE from 'three';
import React, { useMemo } from 'react';
import { useLoader, useUpdate } from 'react-three-fiber';
import fontUrl from '../../assets/bold.blob';
import useWindowDimensions from '../useWindowDimensions';

const HomeText = ({
  children,
  vAlign = 'center',
  hAlign = 'center',
  size = 1,
  color = '#000000',
  ...props
}) => {
  const font = useLoader(THREE.FontLoader, fontUrl);
  const { width } = useWindowDimensions();

  console.log(width);

  const config = useMemo(
    () => ({
      font,
      size: width < 900 ? 15 : 30,
      height: 30,
      curveSegments: 32,
      bevelEnabled: true,
      bevelThickness: 6,
      bevelSize: 2.5,
      bevelOffset: 0,
      bevelSegments: 8,
    }),
    [font, width]
  );

  const mesh = useUpdate(
    (self) => {
      const size = new THREE.Vector3();
      self.geometry.computeBoundingBox();
      self.geometry.boundingBox.getSize(size);
      self.position.x =
        hAlign === 'center' ? -size.x / 2 : hAlign === 'right' ? 0 : -size.x;
      self.position.y =
        vAlign === 'center' ? -size.y / 2 : vAlign === 'top' ? 0 : -size.y;
    },
    [children, width]
  );

  return (
    <group {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
      <mesh ref={mesh}>
        <textGeometry attach="geometry" args={[children, config]} />
        <meshNormalMaterial attach="material" />
      </mesh>
    </group>
  );
};

export default HomeText;
