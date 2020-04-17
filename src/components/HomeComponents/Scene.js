import React, { Suspense } from 'react';
import { useThree, Dom } from 'react-three-fiber';
import { a } from 'react-spring/three';

import Background from './Background';
import Stars from './Stars';
import Effects from './Effects';
import JumboText from './JumboText';

const Scene = ({ top, mouse, down }) => {
  const { size } = useThree();
  const scrollMax = size.height * 4.5;

  return (
    <>
      <a.spotLight
        intensity={1.2}
        color="#272727"
        position={mouse.interpolate((x, y) => [x / 100, -y / 100, 6.5])}
      />
      <Suspense
        fallback={<Dom center className="loading" children="Loading..." />}
      >
        <Effects down={down} />
        <Background
          color={top.interpolate(
            [0, scrollMax * 0.25, scrollMax * 0.8, scrollMax],
            ['#27282F', '#247BA0', '#70C1B3', '#f8f3f1']
          )}
        />
        <Stars color="peachpuff" />
        <JumboText />
      </Suspense>
    </>
  );
};

export default Scene;
