import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';
import { Eye, EyeOff } from 'lucide-react';

export const ThreeBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const [isEnabled, setIsEnabled] = useState<boolean>(true);
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    if (!isEnabled || !containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    camera.position.z = 85;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0); // Transparent canvas
    container.replaceChildren(renderer.domElement);

    const isDark = resolvedTheme === 'dark';
    const primaryHex = isDark ? 0x6eb7b0 : 0x558b85;
    const accentHex = isDark ? 0x6366f1 : 0x3b82f6;
    const goldHex = isDark ? 0xf59e0b : 0xd97706;
    const lineHex = isDark ? 0x2d3748 : 0xd1d5db;

    // 1. Relational Data Nodes (BI Dimensional Schema Network)
    const nodeGroup = new THREE.Group();
    scene.add(nodeGroup);

    const nodeCount = 45;
    const nodes: THREE.Mesh[] = [];
    const nodePositions: THREE.Vector3[] = [];

    const sphereGeom = new THREE.SphereGeometry(0.7, 16, 16);
    const boxGeom = new THREE.BoxGeometry(1.2, 1.2, 1.2);
    const octaGeom = new THREE.OctahedronGeometry(1.0);

    const matTeal = new THREE.MeshStandardMaterial({
      color: primaryHex,
      roughness: 0.3,
      metalness: 0.4,
      transparent: true,
      opacity: isDark ? 0.85 : 0.65
    });

    const matAccent = new THREE.MeshStandardMaterial({
      color: accentHex,
      roughness: 0.4,
      metalness: 0.3,
      transparent: true,
      opacity: isDark ? 0.75 : 0.55
    });

    const matGold = new THREE.MeshStandardMaterial({
      color: goldHex,
      roughness: 0.2,
      metalness: 0.5,
      transparent: true,
      opacity: isDark ? 0.9 : 0.7
    });

    for (let i = 0; i < nodeCount; i++) {
      let geom: THREE.BufferGeometry = sphereGeom;
      let mat = matTeal;
      if (i % 3 === 1) {
        geom = boxGeom;
        mat = matAccent;
      } else if (i % 5 === 0) {
        geom = octaGeom;
        mat = matGold;
      }

      const mesh = new THREE.Mesh(geom, mat);
      const radius = 35 + Math.random() * 30;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      mesh.position.x = radius * Math.sin(phi) * Math.cos(theta);
      mesh.position.y = (radius * Math.sin(phi) * Math.sin(theta)) * 0.7; // elliptical
      mesh.position.z = (radius * Math.cos(phi)) * 0.7 - 10;

      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;

      nodePositions.push(mesh.position.clone());
      nodes.push(mesh);
      nodeGroup.add(mesh);
    }

    // 2. Relational Edges / Data Pipelines connecting nearest nodes
    const edgeCoords: number[] = [];
    const maxDistance = 24;

    for (let i = 0; i < nodePositions.length; i++) {
      let connections = 0;
      for (let j = i + 1; j < nodePositions.length; j++) {
        const dist = nodePositions[i].distanceTo(nodePositions[j]);
        if (dist < maxDistance && connections < 3) {
          edgeCoords.push(
            nodePositions[i].x, nodePositions[i].y, nodePositions[i].z,
            nodePositions[j].x, nodePositions[j].y, nodePositions[j].z
          );
          connections++;
        }
      }
    }

    const lineGeom = new THREE.BufferGeometry();
    lineGeom.setAttribute('position', new THREE.Float32BufferAttribute(edgeCoords, 3));
    const lineMat = new THREE.LineBasicMaterial({
      color: lineHex,
      transparent: true,
      opacity: isDark ? 0.35 : 0.2
    });
    const lines = new THREE.LineSegments(lineGeom, lineMat);
    nodeGroup.add(lines);

    // 3. Central 3D OLAP Cube (Rotating multidimensional data mart)
    const cubeWireGeom = new THREE.BoxGeometry(10, 10, 10);
    const cubeWireMat = new THREE.MeshBasicMaterial({
      color: primaryHex,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.3 : 0.18
    });
    const centralCube = new THREE.Mesh(cubeWireGeom, cubeWireMat);
    centralCube.position.set(22, 5, -25);
    nodeGroup.add(centralCube);

    // Inner sub-cubes inside central OLAP cube
    const innerCubeGeom = new THREE.BoxGeometry(4, 4, 4);
    const innerCubeMat = new THREE.MeshStandardMaterial({
      color: goldHex,
      wireframe: false,
      transparent: true,
      opacity: isDark ? 0.45 : 0.25
    });
    const innerCube = new THREE.Mesh(innerCubeGeom, innerCubeMat);
    centralCube.add(innerCube);

    // 4. Subtle Ambient & Directional Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, isDark ? 1.2 : 0.9);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(primaryHex, isDark ? 1.8 : 1.2);
    dirLight1.position.set(30, 40, 50);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(goldHex, isDark ? 1.2 : 0.8);
    dirLight2.position.set(-30, -20, 20);
    scene.add(dirLight2);

    // Mouse Tracking Parallax
    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;
      targetRotY = normX * 0.25;
      targetRotX = -normY * 0.2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      // Smooth camera parallax interpolation
      currentRotX += (targetRotX - currentRotX) * 0.05;
      currentRotY += (targetRotY - currentRotY) * 0.05;

      nodeGroup.rotation.y = currentRotY + elapsed * 0.03;
      nodeGroup.rotation.x = currentRotX + Math.sin(elapsed * 0.02) * 0.05;

      // Rotate central OLAP data cube
      centralCube.rotation.x = elapsed * 0.15;
      centralCube.rotation.y = elapsed * 0.2;
      innerCube.rotation.x = -elapsed * 0.3;
      innerCube.rotation.z = elapsed * 0.25;

      // Gentle pulsating node rotations
      nodes.forEach((node, idx) => {
        node.rotation.x += 0.005 * ((idx % 3) + 1);
        node.rotation.y += 0.007 * ((idx % 2) + 1);
      });

      renderer.render(scene, camera);
      animFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      // Clean up Three.js memory
      lineGeom.dispose();
      lineMat.dispose();
      sphereGeom.dispose();
      boxGeom.dispose();
      octaGeom.dispose();
      cubeWireGeom.dispose();
      cubeWireMat.dispose();
      innerCubeGeom.dispose();
      innerCubeMat.dispose();
      matTeal.dispose();
      matAccent.dispose();
      matGold.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [isEnabled, resolvedTheme]);

  return (
    <>
      <div
        ref={containerRef}
        className="fixed inset-0 pointer-events-none -z-10 overflow-hidden transition-opacity duration-1000"
        style={{ opacity: isEnabled ? (resolvedTheme === 'dark' ? 0.75 : 0.55) : 0 }}
        aria-hidden="true"
      />

      {/* Subtle floating 3D Background Toggle Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsEnabled((prev) => !prev)}
          title={isEnabled ? 'Pause 3D BI Data Mesh' : 'Enable 3D BI Data Mesh'}
          className="flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-full border shadow-sm backdrop-blur-md transition-all duration-200
            bg-white/80 dark:bg-slate-900/80 
            text-slate-600 dark:text-slate-300 
            border-slate-200 dark:border-slate-700/60 
            hover:border-[#558b85] dark:hover:border-[#6eb7b0]
            hover:text-[#558b85] dark:hover:text-[#6eb7b0]"
        >
          {isEnabled ? (
            <>
              <Eye className="w-3.5 h-3.5 text-[#558b85]" />
              <span className="hidden sm:inline">3D Mesh Active</span>
            </>
          ) : (
            <>
              <EyeOff className="w-3.5 h-3.5 text-slate-400" />
              <span className="hidden sm:inline">3D Paused</span>
            </>
          )}
        </button>
      </div>
    </>
  );
};
