import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const ThreeDChart: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [FontLoader, setFontLoader] = useState<any>(null);

  useEffect(() => {
    // Dynamically import FontLoader
    import('three/examples/jsm/loaders/FontLoader').then(module => {
      setFontLoader(() => module.FontLoader);
    });
  }, []);

  useEffect(() => {
    if (!mountRef.current || !FontLoader) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xe0e0e0);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const barsData = [
      { label: 'Business', score: 5, color: '#E57373' },
      { label: 'Technology', score: 10, color: '#81C784' },
      { label: 'Mentoring', score: 5, color: '#64B5F6' },
      { label: 'Growth', score: 10, color: '#FFD54F' },
      { label: 'Learning', score: 20, color: '#BA68C8' }
    ];

    const distanceBetweenBars = 4;
    let currentPosition = -(barsData.length / 2) * distanceBetweenBars;

    // Using the FontLoader now that it's available
    const loader = new FontLoader();
    loader.load('/helvetiker_regular.typeface.json', (font) => {

      barsData.forEach(data => {
        // Create the bar
        const geometry = new THREE.BoxGeometry(2, data.score, 2);
        const material = new THREE.MeshBasicMaterial({ color: data.color });
        const bar = new THREE.Mesh(geometry, material);
        bar.position.x = currentPosition;
        bar.position.y = data.score / 2;
        scene.add(bar);

        // Create the label using the loaded font
        const textGeometry = new THREE.TextGeometry(data.label, {
          font: font,
          size: 0.8,
          height: 0.1
        });
        const textMaterial = new THREE.MeshBasicMaterial({ color: '#000' });
        const textMesh = new THREE.Mesh(textGeometry, textMaterial);
        textGeometry.center();  // Center the text
        textMesh.position.x = currentPosition;
        textMesh.position.y = -3;
        scene.add(textMesh);

        currentPosition += distanceBetweenBars;
      });

    });

    // Camera position
    camera.position.z = 30;
    camera.position.y = 10;

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };

  }, [FontLoader]);

  return <div ref={mountRef} />;
}

export default ThreeDChart;
