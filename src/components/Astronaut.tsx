import React, { useState, useRef, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useThree, useFrame, extend } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Box from "@mui/material/Box";
import { PerspectiveCamera, Text } from "@react-three/drei";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import styles from "../styles/experience.module.scss";

extend({ OrbitControls });

const AnimatedModel: React.FC<{ companies: any[] }> = ({ companies }) => {
  //add day and night, you will also have to add the [color] into bottom of useEffect
  const { scene, camera } = useThree();
  const mixerRef = useRef<THREE.AnimationMixer | null>(null);

  useEffect(() => {
    /**Model section */
    const loader = new GLTFLoader();
    loader.load("/astro/scene.gltf", (gltf) => {
      const model = gltf.scene;
      model.position.set(0, -50, 0); // always x, y z coordinate setup
      model.scale.set(55, 55, 55);
      scene.add(model);

      /** Adding the point light */
      const pointLight = new THREE.PointLight(0xffffff, 111110.5);
      pointLight.position.set(0, 7, 10); /** Adjust position  */
      scene.add(pointLight);

      if (gltf.animations && gltf.animations.length > 0) {
        const mixer = new THREE.AnimationMixer(model);
        gltf.animations.forEach((clip) => {
          mixer.clipAction(clip).play();
        });
        mixerRef.current = mixer;
      }
    });

    /**Background color set */
    scene.background = new THREE.Color(0x000000);

    /**Background for stars */
    const starsGeometry = new THREE.BufferGeometry();
    const starsVertices = [];
    for (let i = 0; i < 10000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      starsVertices.push(x, y, z);
    }
    starsGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starsVertices, 3)
    );
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 1,
    }); //star color dark mode:0xFFFFFF light mode: 0x000000
    const starField = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(starField);

    /**Font section */
    const cornerPositions = [
      { x: 70, y: 120 }, // top right
      { x: 70, y: -30 }, // bottom right
      { x: -250, y: -30 }, // bottom left
      { x: -250, y: 120 }, // top left
    ];

    const fontLoader = new FontLoader();
    fontLoader.load(
      "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
      (font: any) => {
        companies.forEach((company, index) => {
          const yOffset = 15; // text height

          // Name
          const nameGeometry = new TextGeometry(company.name, {
            font: font,
            size: 5,
            height: 1,
          });
          const nameMesh = new THREE.Mesh(
            nameGeometry,
            new THREE.MeshPhongMaterial({
              color: "#FF9B50",
            })
          );
          nameMesh.position.set(
            cornerPositions[index].x,
            cornerPositions[index].y,
            0
          );
          scene.add(nameMesh);

          // Role
          const roleGeometry = new TextGeometry(company.role, {
            font: font,
            size: 5,
            height: 1,
          });
          const roleMesh = new THREE.Mesh(
            roleGeometry,
            new THREE.MeshBasicMaterial({ color: "#20D9B7" })
          );
          roleMesh.position.set(
            cornerPositions[index].x,
            cornerPositions[index].y - yOffset,
            0
          );
          scene.add(roleMesh);

          // Dates
          const datesGeometry = new TextGeometry(company.dates.join(" - "), {
            font: font,
            size: 5,
            height: 1,
          });
          const datesMesh = new THREE.Mesh(
            datesGeometry,
            new THREE.MeshBasicMaterial({ color: "#E95B0C" })
          );
          datesMesh.position.set(
            cornerPositions[index].x,
            cornerPositions[index].y - 2 * yOffset,
            0
          );
          scene.add(datesMesh);

          // Accomplishments (assuming they can be comma-separated)
          const accomplishmentsGeometry = new TextGeometry(
            company.accomplishments.join(", "),
            {
              font: font,
              size: 5,
              height: 1,
            }
          );
          const accomplishmentsMesh = new THREE.Mesh(
            accomplishmentsGeometry,
            new THREE.MeshBasicMaterial({ color: "#20D9B7" })
          );
          accomplishmentsMesh.position.set(
            cornerPositions[index].x,
            cornerPositions[index].y - 3 * yOffset,
            0
          );
          scene.add(accomplishmentsMesh);
        });
      }
    );
  }, [scene, companies]);

  useFrame((state, delta) => {
    if (mixerRef.current) mixerRef.current.update(delta);
  });

  return null;
};

const SceneSetup: React.FC<{ companies: any[] }> = ({ companies }) => {
  const controlsRef = useRef<OrbitControls | null>(null);
  const { camera, gl } = useThree();

  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    controls.autoRotate = false;
    controls.autoRotateSpeed = 0.5;

    controlsRef.current = controls;

    return () => controls.dispose();
  }, [camera, gl]);

  useFrame(() => {
    if (controlsRef.current) {
      controlsRef.current.update();
    }
  });

  return (
    <>
      <AnimatedModel companies={companies} />
      <PerspectiveCamera makeDefault position={[0, 200, 400]} />
      <ambientLight intensity={0.7} />
      <directionalLight position={[10, 20, 30]} intensity={2.5} />
      <directionalLight position={[-10, 20, -30]} intensity={2.5} />
    </>
  );
};

const Astronaut: React.FC<{ companies: any[] }> = ({ companies }) => {
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
    <Box
      component={"div"}
      ref={boxRef}
      sx={{
        height: "100vh",
        width: "85%",
      }}
    >
      <Canvas
        className={styles.canvas}
        onCreated={({ gl }) => {
          (gl as any).outputColorSpace = THREE.SRGBColorSpace;
          setLoading(false);
        }}
      >
        <SceneSetup companies={companies} />
      </Canvas>
      {loading && <p>loading...</p>}
    </Box>
  );
};

export default Astronaut;
