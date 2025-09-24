import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { DataPipelineSystem } from './DataPipelineSystem';
import { NeuralSystem } from './NeuralSystem';
import { MLOpsSystem } from './MLOpsSystem';
import * as THREE from 'three';

interface Scene3DProps {
  enableControls?: boolean;
  enableMotion?: boolean;
  opacity?: number;
  className?: string;
}

const SceneContent: React.FC<Omit<Scene3DProps, 'className'>> = ({ 
  enableControls = false, 
  enableMotion = true,
  opacity = 0.2 
}) => {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  return (
    <>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 10]} fov={60} />
      
      {/* Lighting */}
      <ambientLight intensity={0.4} color="#14B8A6" />
      <directionalLight position={[10, 10, 5]} intensity={0.6} color="#F8F7F4" />
      
      {/* 3D Systems */}
      <DataPipelineSystem opacity={opacity} />
      <NeuralSystem opacity={opacity * 0.8} />
      <MLOpsSystem opacity={opacity * 1.2} />
      
      {/* Controls for debugging (disabled in production) */}
      {enableControls && (
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      )}
    </>
  );
};

export const Scene3D: React.FC<Scene3DProps> = ({ className, ...props }) => {
  return (
    <div className={className}>
      <Canvas
        style={{ background: 'transparent' }}
        gl={{ 
          alpha: true, 
          antialias: false,
          powerPreference: "low-power"
        }}
        dpr={[1, 1.5]}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          <SceneContent {...props} />
        </Suspense>
      </Canvas>
    </div>
  );
};