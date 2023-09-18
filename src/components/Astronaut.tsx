import React, { useState, useRef, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Box from "@mui/material/Box";
import { PerspectiveCamera } from "@react-three/drei";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const AnimatedModel = () => {
  const { scene } = useThree();
  const mixerRef = useRef(null);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load('/astro/scene.gltf', (gltf) => {
      const model = gltf.scene;
      model.position.set(0, 0, 0);
      model.scale.set(55, 55, 55);
      scene.add(model);

      if (gltf.animations && gltf.animations.length > 0) {
        const mixer = new THREE.AnimationMixer(model);
        gltf.animations.forEach((clip) => {
          mixer.clipAction(clip).play();
        });
        mixerRef.current = mixer;
      }
    });
  }, [scene]);

  useFrame((state, delta) => {
    if (mixerRef.current) mixerRef.current.update(delta);
  });

  return null;
};

const SceneSetup: React.FC = () => {
  const { camera, gl } = useThree();
  const controlsRef = useRef(null);

  useEffect(() => {
    controlsRef.current = new OrbitControls(camera, gl.domElement);
    controlsRef.current.autoRotate = false;
    controlsRef.current.autoRotateSpeed = 0.5;
    return () => controlsRef.current.dispose();
  }, [camera, gl]);

  useFrame(() => {
    if (controlsRef.current) {
      controlsRef.current.update();
    }
  });

  return (
    <>
      <AnimatedModel />
      <PerspectiveCamera makeDefault position={[20, 250, 290]} />
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
        const width = boxRef.current.clientWidth;
        const height = boxRef.current.clientHeight;
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box component={"div"} ref={boxRef} sx={{ height: "900px", width: "1500px" }}>
      <Canvas onCreated={({ gl }) => {
        gl.outputColorSpace = THREE.outputColorSpace;
        setLoading(false);
      }}>
        <SceneSetup />
      </Canvas>
      {loading && <p>loading...</p>}
    </Box>
  );
};

export default Astronaut;
