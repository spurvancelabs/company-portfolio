'use client';

import { useEffect, useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export default function ParticleField() {
  const meshRef = useRef<THREE.Points>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  const [positions, velocities, originalPositions] = useMemo(() => {
    const count = 2500;
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    const orig = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 3 + Math.random() * 4;

      pos[i3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i3 + 2] = r * Math.cos(phi);

      orig[i3] = pos[i3];
      orig[i3 + 1] = pos[i3 + 1];
      orig[i3 + 2] = pos[i3 + 2];

      vel[i3] = (Math.random() - 0.5) * 0.002;
      vel[i3 + 1] = (Math.random() - 0.5) * 0.002;
      vel[i3 + 2] = (Math.random() - 0.5) * 0.002;
    }

    return [pos, vel, orig];
  }, []);

  const colors = useMemo(() => {
    const count = 2500;
    const col = new Float32Array(count * 3);
    const color1 = new THREE.Color('#4f46e5'); // Indigo
    const color2 = new THREE.Color('#06b6d4'); // Cyan
    const color3 = new THREE.Color('#8b5cf6'); // Violet

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const mixFactor = Math.random();
      const tempColor = new THREE.Color();

      if (mixFactor < 0.33) {
        tempColor.copy(color1).lerp(color2, mixFactor * 3);
      } else if (mixFactor < 0.66) {
        tempColor.copy(color2).lerp(color3, (mixFactor - 0.33) * 3);
      } else {
        tempColor.copy(color3).lerp(color1, (mixFactor - 0.66) * 3);
      }

      col[i3] = tempColor.r;
      col[i3 + 1] = tempColor.g;
      col[i3 + 2] = tempColor.b;
    }

    return col;
  }, []);

  const sizes = useMemo(() => {
    const count = 2500;
    const s = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      s[i] = Math.random() * 2 + 0.5;
    }
    return s;
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    const posArray = meshRef.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < 2500; i++) {
      const i3 = i * 3;

      // Gentle floating motion
      posArray[i3] += velocities[i3] + Math.sin(time * 0.3 + i * 0.1) * 0.0003;
      posArray[i3 + 1] += velocities[i3 + 1] + Math.cos(time * 0.2 + i * 0.1) * 0.0003;
      posArray[i3 + 2] += velocities[i3 + 2];

      // Mouse repulsion
      const dx = posArray[i3] - mouseRef.current.x * viewport.width * 0.5;
      const dy = posArray[i3 + 1] - mouseRef.current.y * viewport.height * 0.5;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 2) {
        const force = (2 - dist) * 0.01;
        posArray[i3] += (dx / dist) * force;
        posArray[i3 + 1] += (dy / dist) * force;
      }

      // Return to original position slowly
      posArray[i3] += (originalPositions[i3] - posArray[i3]) * 0.001;
      posArray[i3 + 1] += (originalPositions[i3 + 1] - posArray[i3 + 1]) * 0.001;
      posArray[i3 + 2] += (originalPositions[i3 + 2] - posArray[i3 + 2]) * 0.001;
    }

    meshRef.current.geometry.attributes.position.needsUpdate = true;
    meshRef.current.rotation.y = time * 0.02;
    meshRef.current.rotation.x = Math.sin(time * 0.1) * 0.05;
  });

  return (
    <points ref={meshRef}>
<bufferGeometry>
  <bufferAttribute
    attach="attributes-position"
    args={[positions, 3]}
  />
  <bufferAttribute
    attach="attributes-color"
    args={[colors, 3]}
  />
  <bufferAttribute
    attach="attributes-size"
    args={[sizes, 1]}
  />
</bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
