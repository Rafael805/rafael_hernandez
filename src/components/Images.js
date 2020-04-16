import React from 'react'
import Image from './Image'
import img1 from '../assets/blue.jpeg'
import img2 from '../assets/red.jpeg'
import img3 from '../assets/purple.jpeg'
import { interpolate } from 'react-spring/three'

/** This component creates a bunch of parallaxed images */
const Images = ({ top, mouse, scrollMax }) => {
    const data = [
                  [img1, -0.5585486420134362, -3.9373147490685803, 5, 0, 0.65],
                  [img2, 1.9658082998471168, -11.546249109522778, 10, 0.25, 0.625],
                  [img3, -1.9467783978748945, -16.812371431221711, 15, 0.25, 0.6]
                ]

    return data.map(([url, x, y, factor, z, scale], index) => (
      <Image
        key={index}
        url={url}
        scale={scale}
        opacity={top.interpolate([0, 500], [0, 1])}
        position={interpolate([top, mouse], (top, mouse) => [
          (-mouse[0] * factor) / 50000 + x,
          (mouse[1] * factor) / 50000 + y * 1.15 + ((top * factor) / scrollMax) * 2,
          z + top / 2000
        ])}
      />
    ))
}

export default Images;  