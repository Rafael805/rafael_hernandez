import React from "react";
import { useThree } from "react-three-fiber";
import { a } from "react-spring/three";

import Background from "../Background";
import Images from "./Images";
import Stars from "../Stars";

const AboutScene = ({ top, mouse }) => {
  const { size } = useThree();
  const scrollMax = size.height * 4.5;

  return (
    <>
      <a.spotLight
        intensity={1}
        color="white"
        position={mouse.interpolate((x, y) => [x / 100, -y / 100, 6.5])}
      />
      <Background
        color={top.interpolate(
          [0, scrollMax * 0.25, scrollMax * 0.8, scrollMax],
          ["#27282F", "#247BA0", "#70C1B3", "#27282F"]
        )}
      />
      <Stars
        position={top.interpolate((top) => [0, -1 + top / 20, 0])}
        color="peachpuff"
      />
      <Images top={top} mouse={mouse} scrollMax={scrollMax} />
    </>
  );
};

export default AboutScene;
