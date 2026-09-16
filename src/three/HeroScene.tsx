import { Canvas } from '@react-three/fiber';
import { Environment, AdaptiveDpr } from '@react-three/drei';
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
      camera={{ position: [0, 0, 6], fov: 50 }}
      dpr={[1, isLowEnd ? 1 : 2]}
      gl={{ antialias: !isLowEnd, alpha: true, powerPreference: 'high-performance' }}
      style={{ background: 'transparent' }}
      aria-hidden="true"
    >
      <AdaptiveDpr pixelated />
      
      {/* Ambient light */}
      <ambientLight color="#0a0a10" intensity={0.4} />
      <directionalLight color="#ffffff" intensity={0.3} position={[5, 5, 5]} />

      {/* Environment for metallic reflections */}
      <Environment preset="city" />

      <DigitalCore mouseX={mouseX} mouseY={mouseY} reducedMotion={reducedMotion} />
      <ParticleField count={particleCount} reducedMotion={reducedMotion} />
    </Canvas>
  );
}
