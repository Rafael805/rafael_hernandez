import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas, Dom } from 'react-three-fiber';
import Content from '../components/AboutComponents/Content';
import Startup from '../components/AboutComponents/Startup';
import state from '../components/AboutComponents/Store';
import Diamond from '../components/AboutComponents/Diamond';

const AboutPage = () => {
  const scrollArea = useRef();
  const onScroll = (e) => (state.top.current = e.target.scrollTop);
  useEffect(() => void onScroll({ target: scrollArea.current }), []);

  return (
    <>
      <Canvas
        concurrent
        pixelRatio={1}
        orthographic
        camera={{ zoom: state.zoom, position: [0, 0, 500] }}
      >
        <Suspense
          fallback={<Dom center className="loading" children="Loading..." />}
        >
          <Content />
          <Diamond />
          <Startup />
        </Suspense>
      </Canvas>

      <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
        {new Array(state.sections).fill().map((_, index) => (
          <div
            key={index}
            id={'0' + index}
            style={{ height: `${(state.pages / state.sections) * 100}vh` }}
          />
        ))}
      </div>
    </>
  );
};

export default AboutPage;
