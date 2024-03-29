const FadeShader = {
    uniforms: {
      effectFactor: { type: "f", value: 1.2 },
      dispFactor: { type: "f", value: 0 },
      texture: { type: "t", value: undefined },
      texture2: { type: "t", value: undefined },
      disp: { type: "t", value: undefined }
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
      }
    `,
    fragmentShader: `
      varying vec2 vUv;
      uniform sampler2D texture;
      uniform sampler2D texture2;
      uniform sampler2D disp;
      uniform float _rot;
      uniform float dispFactor;
      uniform float effectFactor;
  
      void main() {
        vec2 uv = vUv;
        vec4 disp = texture2D(disp, uv);
        vec2 distortedPosition = vec2(uv.x, uv.y + dispFactor * (disp.r*effectFactor));
        vec2 distortedPosition2 = vec2(uv.x, uv.y - (1.0 - dispFactor) * (disp.r*effectFactor));
        vec4 _texture = texture2D(texture, distortedPosition);
        vec4 _texture2 = texture2D(texture2, distortedPosition2);
        vec4 finalTexture = mix(_texture, _texture2, dispFactor);
        gl_FragColor = finalTexture;
      }
    `
  }
  
  export default { FadeShader }
  