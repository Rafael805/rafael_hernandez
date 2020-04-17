import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import lerp from "lerp";
import Plane from "./Plane";

const Startup = () => {
  const ref = useRef();
  useFrame(
    () =>
      (ref.current.material.opacity = lerp(
        ref.current.material.opacity,
        0,
        0.025
      ))
  );

  return (
    <Plane
      ref={ref}
      color="#0e0e0f"
      position={[0, 0, 200]}
      scale={[100, 100, 1]}
    />
  );
};

export default Startup;
