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
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    camera.position.z = 75;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // Completely transparent canvas
    
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';

    container.replaceChildren(renderer.domElement);

    const isDark = resolvedTheme === 'dark';
    
    // Subtle, unobtrusive neutral monochromatic tones that blend gently into the background
    // In light theme: soft misty grey-slate (0x94a3b8 / 0xcbd5e1)
    // In dark theme: soft muted deep slate-silver (0x475569 / 0x64748b)
    const primaryHex = isDark ? 0x64748b : 0x94a3b8; // Soft slate
    const accentHex = isDark ? 0x94a3b8 : 0xb0bec5;  // Muted silver
    const goldHex = isDark ? 0x475569 : 0xcbd5e1;    // Pale neutral grey
    const lineHex = isDark ? 0x334155 : 0xd1d5db;    // Very faint hairline connector grey

    // 1. Relational Data Nodes (BI Dimensional Schema Network)
    const nodeGroup = new THREE.Group();
    scene.add(nodeGroup);

    const nodeCount = 40;
    const nodes: THREE.Mesh[] = [];
    const nodePositions: THREE.Vector3[] = [];

    // Removed octahedron as requested. Kept clean geometric shapes: Spheres, Cubes, and Tetrahedrons.
    const sphereGeom = new THREE.SphereGeometry(1.0, 16, 16);
    const boxGeom = new THREE.BoxGeometry(1.3, 1.3, 1.3);
    const tetraGeom = new THREE.TetrahedronGeometry(1.2);

    for (let i = 0; i < nodeCount; i++) {
      let geom: THREE.BufferGeometry = sphereGeom;
      if (i % 3 === 1) {
        geom = boxGeom;
      } else if (i % 3 === 2) {
        geom = tetraGeom;
      }

      const radius = 32 + Math.random() * 38;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      const posX = radius * Math.sin(phi) * Math.cos(theta);
      const posY = (radius * Math.sin(phi) * Math.sin(theta)) * 0.75;
      const posZ = (radius * Math.cos(phi)) * 0.65 - 8;

      // Optical depth-of-field simulation (lightweight & 60fps):
      // Objects positioned closer to camera (z > 5) are softened with lower opacity
      // to create a photography-like shallow depth of field without GPU lag.
      const isForeground = posZ > 6;
      const baseOpacity = isForeground 
        ? (isDark ? 0.12 : 0.10) 
        : (isDark ? 0.32 : 0.26);

      const mat = new THREE.MeshStandardMaterial({
        color: i % 2 === 0 ? primaryHex : accentHex,
        roughness: isForeground ? 1.0 : 0.7, // Flatter, diffused look in foreground
        metalness: 0.05,
        transparent: true,
        opacity: baseOpacity
      });

      const mesh = new THREE.Mesh(geom, mat);
      mesh.position.set(posX, posY, posZ);

      // Scale foreground elements slightly larger to simulate bokeh proximity
      if (isForeground) {
        mesh.scale.set(1.4, 1.4, 1.4);
      }

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
        if (dist < maxDistance && connections < 2) {
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
      opacity: isDark ? 0.22 : 0.25
    });
    const lines = new THREE.LineSegments(lineGeom, lineMat);
    nodeGroup.add(lines);

    // 3. Central 3D OLAP Cube (Multidimensional Data Mart representation)
    const cubeWireGeom = new THREE.BoxGeometry(10, 10, 10);
    const cubeWireMat = new THREE.MeshBasicMaterial({
      color: primaryHex,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.20 : 0.22
    });
    const centralCube = new THREE.Mesh(cubeWireGeom, cubeWireMat);
    centralCube.position.set(24, 6, -20);
    nodeGroup.add(centralCube);

    // Inner core inside central OLAP cube
    const innerCubeGeom = new THREE.BoxGeometry(4.5, 4.5, 4.5);
    const innerCubeMat = new THREE.MeshStandardMaterial({
      color: accentHex,
      wireframe: false,
      transparent: true,
      opacity: isDark ? 0.25 : 0.20
    });
    const innerCube = new THREE.Mesh(innerCubeGeom, innerCubeMat);
    centralCube.add(innerCube);

    // 4. Floating Data Stream Particles
    const particleCount = 80;
    const particleGeom = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let p = 0; p < particleCount * 3; p += 3) {
      particlePositions[p] = (Math.random() - 0.5) * 110;
      particlePositions[p + 1] = (Math.random() - 0.5) * 85;
      particlePositions[p + 2] = (Math.random() - 0.5) * 60;
    }

    particleGeom.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: isDark ? 0x64748b : 0x94a3b8,
      size: isDark ? 0.9 : 1.0,
      transparent: true,
      opacity: isDark ? 0.35 : 0.30
    });
    const particleSystem = new THREE.Points(particleGeom, particleMat);
    scene.add(particleSystem);

    // 5. Ambient & Directional Lighting for soft, even illumination
    const ambientLight = new THREE.AmbientLight(0xffffff, isDark ? 0.9 : 1.0);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, isDark ? 0.6 : 0.8);
    dirLight1.position.set(30, 40, 50);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xffffff, isDark ? 0.4 : 0.5);
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
      targetRotY = normX * 0.35;
      targetRotX = -normY * 0.25;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Scroll Reaction
    let scrollYOffset = 0;
    const handleScroll = () => {
      scrollYOffset = window.scrollY * 0.0006;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      // Smooth camera parallax interpolation with scroll influence
      currentRotX += (targetRotX - currentRotX) * 0.05;
      currentRotY += (targetRotY - currentRotY) * 0.05;

      nodeGroup.rotation.y = currentRotY + elapsed * 0.04;
      nodeGroup.rotation.x = currentRotX + scrollYOffset + Math.sin(elapsed * 0.02) * 0.06;

      // Rotate central OLAP data cube
      centralCube.rotation.x = elapsed * 0.2;
      centralCube.rotation.y = elapsed * 0.25;
      innerCube.rotation.x = -elapsed * 0.35;
      innerCube.rotation.z = elapsed * 0.3;

      // Gentle pulsating node rotations
      nodes.forEach((node, idx) => {
        node.rotation.x += 0.008 * ((idx % 3) + 1);
        node.rotation.y += 0.01 * ((idx % 2) + 1);
      });

      // Slowly drift background particles
      particleSystem.rotation.y = elapsed * 0.015;
      particleSystem.rotation.x = Math.sin(elapsed * 0.01) * 0.05;

      renderer.render(scene, camera);
      animFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);

      // Clean up Three.js memory
      lineGeom.dispose();
      lineMat.dispose();
      sphereGeom.dispose();
      boxGeom.dispose();
      tetraGeom.dispose();
      nodes.forEach((mesh) => {
        if (mesh.material instanceof THREE.Material) {
          mesh.material.dispose();
        }
      });
      cubeWireGeom.dispose();
      cubeWireMat.dispose();
      innerCubeGeom.dispose();
      innerCubeMat.dispose();
      particleGeom.dispose();
      particleMat.dispose();
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
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden transition-opacity duration-700"
        style={{ opacity: isEnabled ? (resolvedTheme === 'dark' ? 0.45 : 0.40) : 0 }}
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
