import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import coreModelUrl from '../assets/golden-orbital-core.glb?url';

interface DigitalCoreProps {
  mouseX?: number;
  mouseY?: number;
  reducedMotion?: boolean;
}

export function DigitalCore({ mouseX = 0, mouseY = 0, reducedMotion = false }: DigitalCoreProps) {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(coreModelUrl);

  const model = useMemo(() => {
    const copy = scene.clone(true);
    copy.traverse((child) => {
      if ((child as THREE.Camera).isCamera || (child as THREE.Light).isLight) child.visible = false;
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
      }
    });
    return copy;
  }, [scene]);

  useFrame(({ clock }) => {
    if (!groupRef.current || reducedMotion) return;
    const t = clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.16 + mouseX * 0.25;
    groupRef.current.rotation.x = Math.sin(t * 0.35) * 0.07 + mouseY * 0.12;
    groupRef.current.position.y = Math.sin(t * 0.7) * 0.08;
  });

  return (
    <group ref={groupRef} scale={0.76} rotation={[0.08, -0.2, 0]}>
      <primitive object={model} />
      <pointLight color="#ffd878" intensity={18} distance={8} position={[3, 3, 2]} />
      <pointLight color="#d88100" intensity={14} distance={7} position={[-3, -2, 3]} />
    </group>
  );
}

useGLTF.preload(coreModelUrl);
