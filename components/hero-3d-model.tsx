'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} scale={1.5}>
        <icosahedronGeometry args={[1, 0]} />
        <meshPhysicalMaterial 
          color="#0a0a0a" 
          metalness={0.9} 
          roughness={0.1} 
          clearcoat={1} 
          clearcoatRoughness={0.1}
          wireframe={true}
        />
        {/* Fill solid behind wireframe */}
        <mesh scale={0.98}>
          <icosahedronGeometry args={[1, 0]} />
           <MeshDistortMaterial
             color="#e40014"
             envMapIntensity={0.8}
             clearcoat={1}
             clearcoatRoughness={0.1}
             metalness={0.8}
             roughness={0.2}
             distort={0.2}
             speed={1.5}
           />
        </mesh>
      </mesh>
    </Float>
  );
}

export function Hero3DModel() {
  return (
    <div className="w-full h-[60vh] bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 relative cursor-grab active:cursor-grabbing">
       <div className="absolute top-4 left-4 z-10 bg-background px-2 py-1 border border-neutral-200 dark:border-neutral-800 pointer-events-none">
          <span className="text-[10px] font-mono text-foreground font-bold">INTERACTIVE_VIEWPORT // WEBGL</span>
       </div>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <spotLight position={[-10, -10, -5]} intensity={1} color="#fe6e00" />
        <AnimatedGeometry />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
