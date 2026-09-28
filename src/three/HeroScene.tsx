import { Canvas } from '@react-three/fiber';
import { AdaptiveDpr } from '@react-three/drei';
import { DigitalCore } from './DigitalCore';
import { ParticleField } from './ParticleField';
import { useDeviceDetect } from '../hooks/useDeviceDetect';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface HeroSceneProps {
  mouseX?: number;
  mouseY?: number;
}

export function HeroScene({ mouseX = 0, mouseY = 0 }: HeroSceneProps) {
  const { isMobile, isLowEnd } = useDeviceDetect();
  const reducedMotion = useReducedMotion();

  const particleCount = isLowEnd ? 30 : isMobile ? 50 : 80;

  return (
    <Canvas
      camera={{ position: [0, 0, 6.5], fov: 48 }}
      dpr={[1, isLowEnd ? 1 : 2]}
      gl={{ antialias: !isLowEnd, alpha: true, powerPreference: 'high-performance' }}
      style={{ background: 'transparent' }}
      aria-hidden="true"
    >
      <AdaptiveDpr pixelated />
      
      {/* Ambient light */}
      <ambientLight color="#161125" intensity={0.8} />
      <directionalLight color="#ffffff" intensity={1.2} position={[5, 5, 5]} />

      <group position={[isMobile ? 0.75 : 1.85, isMobile ? 0.65 : 0, 0]} scale={isMobile ? 0.78 : 1}>
        <DigitalCore mouseX={mouseX} mouseY={mouseY} reducedMotion={reducedMotion} />
      </group>
      <ParticleField count={particleCount} reducedMotion={reducedMotion} />
    </Canvas>
  );
}
