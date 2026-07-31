import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";

function SpaceScene() {
  const groupRef = useRef();

  useFrame((state) => {
    if (!groupRef.current) return;

    const { x, y } = state.pointer;

    groupRef.current.rotation.x +=
      (y * 0.04 - groupRef.current.rotation.x) * 0.02;

    groupRef.current.rotation.y +=
      (x * 0.04 - groupRef.current.rotation.y) * 0.02;
  });

  return (
    <group ref={groupRef}>
      <Stars
        radius={100}
        depth={80}
        count={8000}
        factor={4}
        saturation={0}
        fade={false}
        speed={1}
      />

      <Stars
        radius={50}
        depth={40}
        count={3000}
        factor={7}
        saturation={0}
        fade={false}
        speed={1.5}
      />
    </group>
  );
}

function Background() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#050816] pointer-events-none">
      <div className="absolute inset-0">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 60,
            near: 0.1,
            far: 200,
          }}
          dpr={[1, 2]}
          gl={{
            antialias: true,
            alpha: true,
          }}
        >
          <SpaceScene />
        </Canvas>
      </div>

      <div
        className="
          absolute
          -top-40
          -left-40
          h-[520px]
          w-[520px]
          rounded-full
          bg-violet-600/20
          blur-[150px]
        "
      />

      <div
        className="
          absolute
          top-[30%]
          right-[-220px]
          h-[520px]
          w-[520px]
          rounded-full
          bg-cyan-500/10
          blur-[160px]
        "
      />

      <div
        className="
          absolute
          bottom-[-250px]
          left-[30%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-fuchsia-600/10
          blur-[160px]
        "
      />
    </div>
  );
}

export default Background;