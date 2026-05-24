'use client';

import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function ConnectingLines() {
    const lineRef = useRef<THREE.LineSegments>(null);

    const positions = useMemo(() => {
        const count = 200;
        const pos = new Float32Array(count * 6); // 2 points per line, 3 coords each

        for (let i = 0; i < count; i++) {
            const i6 = i * 6;
            const theta1 = Math.random() * Math.PI * 2;
            const phi1 = Math.acos(2 * Math.random() - 1);
            const r1 = 2 + Math.random() * 5;

            const theta2 = theta1 + (Math.random() - 0.5) * 0.5;
            const phi2 = phi1 + (Math.random() - 0.5) * 0.5;
            const r2 = r1 + (Math.random() - 0.5) * 2;

            pos[i6] = r1 * Math.sin(phi1) * Math.cos(theta1);
            pos[i6 + 1] = r1 * Math.sin(phi1) * Math.sin(theta1);
            pos[i6 + 2] = r1 * Math.cos(phi1);

            pos[i6 + 3] = r2 * Math.sin(phi2) * Math.cos(theta2);
            pos[i6 + 4] = r2 * Math.sin(phi2) * Math.sin(theta2);
            pos[i6 + 5] = r2 * Math.cos(phi2);
        }

        return pos;
    }, []);

    useFrame((state) => {
        if (!lineRef.current) return;
        lineRef.current.rotation.y = state.clock.getElapsedTime() * 0.01;
        lineRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.05) * 0.02;
    });

    return (
        <lineSegments ref={lineRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <lineBasicMaterial color="#4f46e5" transparent opacity={0.08} />
        </lineSegments>
    );
}