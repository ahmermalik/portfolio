import React, { useState, useRef, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { PerspectiveCamera } from "@react-three/drei";

import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";




const AnimatedModel = () => {
  const { scene } = useThree();
  const mixerRef = useRef<THREE.AnimationMixer | null>(null);
  const theme = useTheme();

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load('/astro/scene.gltf', (gltf) => {
      const model = gltf.scene;
      model.position.set(0, -50, 0);
      model.scale.set(55, 55, 55);
      scene.add(model);


      if (theme.palette.mode === "dark")  {
        const pointLight = new THREE.PointLight(0xffffff, 111110.5);
        pointLight.position.set(0, 10, 10);
        scene.add(pointLight);
      }
      
      if (gltf.animations && gltf.animations.length > 0) {
        const mixer = new THREE.AnimationMixer(model);
        gltf.animations.forEach((clip) => {
          mixer.clipAction(clip).play();
        });
        mixerRef.current = mixer;
      }
    });
  }, [scene, theme.palette.mode]);

  useFrame((state, delta) => {
    if (mixerRef.current) mixerRef.current.update(delta);
  });

  return null;
};

const SceneSetup: React.FC = () => {
  const { camera, gl } = useThree();
  const controlsRef = useRef<OrbitControls | null>(null);

  useEffect(() => {
    if (camera && gl.domElement) {
        const controls = new OrbitControls(camera, gl.domElement);
        controls.autoRotate = false;
        controls.autoRotateSpeed = 0.5;
        
        // Set the controls to the ref so it can be used elsewhere
        controlsRef.current = controls;

        // Clean up on unmount
        return () => controls.dispose();
    }
}, [camera, gl]);


  useFrame(() => {
    if (controlsRef.current) {
      controlsRef.current.update();
    }
  });

  return (
    <>
      <AnimatedModel />
      <PerspectiveCamera makeDefault position={[0, 100, 400]} fov={30}/>
      <ambientLight intensity={0.7} />
      <directionalLight position={[10, 20, 30]} intensity={2.5} />
      <directionalLight position={[-10, 20, -30]} intensity={2.5} />
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
    <Box component={"div"} ref={boxRef} sx={{ height: "500px", width: "350px", marginBottom:"5px" }}>
      <Canvas onCreated={({ gl }) => {
  (gl as any).outputColorSpace = THREE.SRGBColorSpace; 
        setLoading(false);
      }}>
        <SceneSetup />
      </Canvas>
    </Box>
  );
};

export default Astronaut;