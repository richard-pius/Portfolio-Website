'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ProjectThreeCanvasProps {
  projectId: string;
}

export default function ProjectThreeCanvas({ projectId }: ProjectThreeCanvasProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const speedRef = useRef(0.015);

  useEffect(() => {
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth || 240;
    const height = mountRef.current.clientHeight || 160;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10);
    camera.position.z = 3.5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    mountRef.current.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x6366f1, 1.2); // Indigo
    dirLight.position.set(2, 2, 2);
    scene.add(dirLight);

    const dirLight2 = new THREE.DirectionalLight(0x10b981, 0.8); // Emerald
    dirLight2.position.set(-2, -2, 2);
    scene.add(dirLight2);

    // Determine Geometry based on Project ID
    let geometry: THREE.BufferGeometry;

    switch (projectId) {
      case "01": // NicheSearch - Box/Server infrastructure
        geometry = new THREE.BoxGeometry(1.2, 1.2, 1.2);
        break;
      case "02": // TubeSift - Cylinder/Filter funnel
        geometry = new THREE.CylinderGeometry(0.6, 0.8, 1.2, 8);
        break;
      case "03": // ClearBreeze Forecast - Sphere/Globe
        geometry = new THREE.SphereGeometry(0.8, 12, 12);
        break;
      case "04": // Rithaji-1.5B Code Generator - Torus/Ring network
        geometry = new THREE.TorusGeometry(0.6, 0.25, 8, 24);
        break;
      case "05": // Semantic Book Recommender - Octahedron/Semantic node
        geometry = new THREE.OctahedronGeometry(0.9, 0);
        break;
      case "06": // 2D Platform Game - Cone/Player coin gem
        geometry = new THREE.ConeGeometry(0.7, 1.2, 4);
        break;
      default:
        geometry = new THREE.IcosahedronGeometry(0.8, 0);
    }

    // Material: Cel-shaded toon look
    const material = new THREE.MeshToonMaterial({
      color: 0x4f46e5, // Base Indigo
      roughness: 0.2,
      metalness: 0.1,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Wireframe overlay
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0x10b981, // Emerald green wireframe
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const wireframe = new THREE.Mesh(geometry, wireframeMat);
    mesh.add(wireframe);

    // Interaction listeners on parent element for hover speedups
    const parent = mountRef.current.parentElement;
    
    const handleMouseEnter = () => {
      speedRef.current = 0.05; // Spin faster
      material.color.setHex(0x10b981); // Turn Emerald
      wireframeMat.color.setHex(0x4f46e5); // Turn wireframe Indigo
    };

    const handleMouseLeave = () => {
      speedRef.current = 0.015; // Slow down
      material.color.setHex(0x4f46e5);
      wireframeMat.color.setHex(0x10b981);
    };

    if (parent) {
      parent.addEventListener('mouseenter', handleMouseEnter);
      parent.addEventListener('mouseleave', handleMouseLeave);
    }

    // Animation loop
    let animationId: number;
    let targetSpeed = 0.015;

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // Smooth transition to speed targets
      targetSpeed += (speedRef.current - targetSpeed) * 0.1;

      mesh.rotation.x += targetSpeed;
      mesh.rotation.y += targetSpeed * 0.8;

      renderer.render(scene, camera);
    };

    animate();

    // Resize observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const w = entry.contentRect.width || width;
        const h = entry.contentRect.height || height;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      }
    });

    resizeObserver.observe(mountRef.current);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      if (parent) {
        parent.removeEventListener('mouseenter', handleMouseEnter);
        parent.removeEventListener('mouseleave', handleMouseLeave);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      wireframeMat.dispose();
      renderer.dispose();
    };
  }, [projectId]);

  return (
    <div 
      ref={mountRef} 
      className="w-full h-full flex items-center justify-center pointer-events-none overflow-hidden" 
    />
  );
}
