import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface DigitalCoreProps {
  mouseX?: number;
  mouseY?: number;
  reducedMotion?: boolean;
}

export function DigitalCore({ mouseX = 0, mouseY = 0, reducedMotion = false }: DigitalCoreProps) {
  const groupRef = useRef<THREE.Group>(null);
  const wireRef = useRef<THREE.Mesh>(null);
  const solidRef = useRef<THREE.Mesh>(null);
  const outerRingRef = useRef<THREE.Mesh>(null);

  // Icosahedron geometry shared
  const geo = useMemo(() => new THREE.IcosahedronGeometry(1.2, 1), []);
  const wireGeo = useMemo(() => new THREE.IcosahedronGeometry(1.35, 1), []);
  const ringGeo = useMemo(() => new THREE.TorusGeometry(2.1, 0.008, 4, 64), []);

  // Materials
  const solidMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color('#1a1a1f'),
    metalness: 0.9,
    roughness: 0.15,
    envMapIntensity: 1.2,
  }), []);

  const wireMat = useMemo(() => new THREE.MeshBasicMaterial({
    color: new THREE.Color('#6ee7b7'),
    wireframe: true,
    transparent: true,
    opacity: 0.18,
  }), []);

  const ringMat = useMemo(() => new THREE.MeshBasicMaterial({
    color: new THREE.Color('#6ee7b7'),
    transparent: true,
    opacity: 0.12,
  }), []);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();

    if (reducedMotion) {
      // Static, no animation
      return;
    }

    // Slow auto-rotation
    groupRef.current.rotation.y = t * 0.12;
    groupRef.current.rotation.x = Math.sin(t * 0.07) * 0.15;

    // Mouse influence — gentle parallax
    groupRef.current.rotation.y += mouseX * 0.3;
    groupRef.current.rotation.x += mouseY * 0.2;

    // Wireframe counter-rotation for depth
    if (wireRef.current) {
      wireRef.current.rotation.y = -t * 0.08;
      wireRef.current.rotation.z = t * 0.05;
    }

    // Outer ring
    if (outerRingRef.current) {
      outerRingRef.current.rotation.z = t * 0.06;
      outerRingRef.current.rotation.x = Math.sin(t * 0.04) * 0.4;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Solid core */}
      <mesh ref={solidRef} geometry={geo} material={solidMat} />

      {/* Wireframe overlay */}
      <mesh ref={wireRef} geometry={wireGeo} material={wireMat} />

      {/* Outer orbit ring */}
      <mesh ref={outerRingRef} geometry={ringGeo} material={ringMat} rotation={[Math.PI / 4, 0, 0]} />

      {/* Second ring, offset */}
      <mesh geometry={ringGeo} material={ringMat} rotation={[-Math.PI / 5, Math.PI / 3, 0]} />

      {/* Point light for metallic highlights */}
      <pointLight color="#6ee7b7" intensity={1.5} distance={8} position={[3, 3, 2]} />
      <pointLight color="#93c5fd" intensity={0.8} distance={6} position={[-3, -2, 3]} />
    </group>
  );
}
