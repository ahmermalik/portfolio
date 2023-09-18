import React, { useState, useRef, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Box from "@mui/material/Box";
import * as THREE from "three";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";

const SceneSetup: React.FC = () => {
  const { camera, gl, scene } = useThree();

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load("/astro/scene.gltf", (gltf) => {
      const model = gltf.scene;
      if (model) {
        model.position.set(0, 0, 0);
        model.scale.set(55, 55, 55);
        scene.add(model);
      } else {
        console.error("Model not loaded or parsed correctly");
      }
    });
  }, [scene]);

  return (
    <>
      <OrbitControls autoRotate={false} autoRotateSpeed={0.5} />
      <PerspectiveCamera makeDefault position={[20, 250, 190]} />
      <ambientLight intensity={0.7} />
      <directionalLight position={[10, 50, 30]} intensity={1.5} />
      <directionalLight position={[-10, 50, -30]} intensity={1.5} />
    </>
  );
};

const Astronaut: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (boxRef.current) {
        // Set the dimensions based on the container size
        const width = boxRef.current.clientWidth;
        const height = boxRef.current.clientHeight;

        // You can perform any rescaling based on these dimensions if necessary.
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box ref={boxRef} sx={{ height: "900px", width: "1500px" }}>
      <Canvas onCreated={({ gl }) => {
        gl.outputEncoding = THREE.sRGBEncoding;
        setLoading(false);
      }}>
        <SceneSetup />
      </Canvas>
      {loading && <p>loading...</p>}
    </Box>
  );
};

export default Astronaut;