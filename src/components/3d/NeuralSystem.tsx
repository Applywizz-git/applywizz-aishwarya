import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

interface NeuralSystemProps {
  opacity?: number;
}

export const NeuralSystem: React.FC<NeuralSystemProps> = ({ opacity = 0.15 }) => {
  const sphereRef = useRef<THREE.Mesh>(null);
  const pulseNodes = useRef<THREE.Mesh[]>([]);

  // Create neural network nodes
  const neuralNodes = useMemo(() => {
    const nodes = [];
    for (let i = 0; i < 12; i++) {
      const phi = Math.acos(-1 + (2 * i) / 12);
      const theta = Math.sqrt(12 * Math.PI) * phi;
      
      nodes.push({
        position: [
          2 * Math.cos(theta) * Math.sin(phi),
          2 * Math.sin(theta) * Math.sin(phi),
          2 * Math.cos(phi)
        ] as [number, number, number],
        delay: i * 0.5
      });
    }
    return nodes;
  }, []);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    // Gentle rotation
    if (sphereRef.current) {
      sphereRef.current.rotation.y = time * 0.1;
      sphereRef.current.rotation.x = Math.sin(time * 0.05) * 0.2;
    }
    
    // Pulse nodes
    pulseNodes.current.forEach((node, index) => {
      if (node) {
        const pulseTime = (time + neuralNodes[index].delay) % 4;
        const pulse = pulseTime < 0.5 ? Math.sin(pulseTime * Math.PI * 4) : 0;
        node.scale.setScalar(1 + pulse * 0.5);
        (node.material as THREE.MeshBasicMaterial).opacity = opacity * (1 + pulse);
      }
    });
  });

  return (
    <group position={[4, 0, -8]}>
      {/* Main neural sphere with animated material */}
      <Sphere ref={sphereRef} args={[1.5, 32, 32]}>
        <meshBasicMaterial
          transparent
          opacity={opacity}
          color="#14B8A6"
          wireframe
        />
      </Sphere>
      
      {/* Neural nodes with inference pulses */}
      {neuralNodes.map((node, index) => (
        <Sphere
          key={index}
          ref={(el) => el && (pulseNodes.current[index] = el)}
          args={[0.1]}
          position={node.position}
        >
          <meshBasicMaterial
            color="#7C3AED"
            transparent
            opacity={opacity}
          />
        </Sphere>
      ))}
    </group>
  );
};