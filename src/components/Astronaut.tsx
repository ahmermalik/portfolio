import React, { useState, useRef, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useThree, useFrame, extend } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Box from "@mui/material/Box";
import { PerspectiveCamera, Text } from "@react-three/drei";
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import styles from "../styles/experience.module.scss";

extend({ OrbitControls });

const AnimatedModel: React.FC<{ companies: any[] }> = ({ companies }) => {
    const { scene, camera } = useThree();
    const mixerRef = useRef<THREE.AnimationMixer | null>(null);

    useEffect(() => {
      /**Model section */
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

        /**Font section */
        const cornerPositions = [
          { x: 150, y: 150 }, // top right
          { x: 150, y: -10 }, // bottom right
          { x: -150, y: -45 }, // bottom left
          { x: -150, y: 150 } // top left
      ];

      

        const fontLoader = new FontLoader();
fontLoader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', (font: any) => { 
    companies.forEach((company, index) => {
        const yOffset = 10; // Adjust this value as needed
        
        // Name
        const nameGeometry = new TextGeometry(company.name, {
            font: font,
            size: 5,
            height: 1
        });
        const nameMesh = new THREE.Mesh(nameGeometry, new THREE.MeshBasicMaterial({ color: "red" }));
        nameMesh.position.set(cornerPositions[index].x, cornerPositions[index].y, 0);
        scene.add(nameMesh);

        // Role
        const roleGeometry = new TextGeometry(company.role, {
            font: font,
            size: 5,
            height: 1
        });
        const roleMesh = new THREE.Mesh(roleGeometry, new THREE.MeshBasicMaterial({ color: "red" }));
        roleMesh.position.set(cornerPositions[index].x, cornerPositions[index].y - yOffset, 0);
        scene.add(roleMesh);

        // Dates
        const datesGeometry = new TextGeometry(company.dates.join(' - '), {
            font: font,
            size: 5,
            height: 1
        });
        const datesMesh = new THREE.Mesh(datesGeometry, new THREE.MeshBasicMaterial({ color: "red" }));
        datesMesh.position.set(cornerPositions[index].x, cornerPositions[index].y - 2 * yOffset, 0);
        scene.add(datesMesh);

        // Accomplishments (assuming they can be comma-separated)
        const accomplishmentsGeometry = new TextGeometry(company.accomplishments.join(', '), {
            font: font,
            size: 5,
            height: 1
        });
        const accomplishmentsMesh = new THREE.Mesh(accomplishmentsGeometry, new THREE.MeshBasicMaterial({ color: "red" }));
        accomplishmentsMesh.position.set(cornerPositions[index].x, cornerPositions[index].y - 3 * yOffset, 0);
        scene.add(accomplishmentsMesh);
    });
});

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
            <PerspectiveCamera makeDefault position={[20, 250, 290]} />
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
        height: "1500px", 
        width: "vw",
        display: 'flex',
        flexDirection: 'column', // stack children vertically
        alignItems: 'center',    // center children horizontally
        justifyContent: 'center' // center children vertically
    }}>
    <Canvas className={styles.canvas} onCreated={({ gl }) => {
        (gl as any).outputColorSpace = THREE.SRGBColorSpace;
        setLoading(false);
    }}>
        <SceneSetup companies={companies} />
    </Canvas>
    {loading && <p>loading...</p>}
</Box>

    );
};

export default Astronaut;
