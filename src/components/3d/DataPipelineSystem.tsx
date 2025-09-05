import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Line } from '@react-three/drei';
import * as THREE from 'three';

interface DataPipelineSystemProps {
  opacity?: number;
}

export const DataPipelineSystem: React.FC<DataPipelineSystemProps> = ({ opacity = 0.2 }) => {
  const groupRef = useRef<THREE.Group>(null);
  const particleRefs = useRef<THREE.Mesh[]>([]);

  // Create nodes and connections
  const nodes = useMemo(() => [
    { position: [-4, 2, 0], label: 'Kafka' },
    { position: [0, 3, -2], label: 'Spark' },
    { position: [4, 1, 1], label: 'Delta Lake' },
    { position: [-2, -1, 2], label: 'Airflow' },
    { position: [2, -2, -1], label: 'SQL' }
  ], []);

  const connections = useMemo(() => [
    [0, 1], [1, 2], [3, 1], [1, 4], [0, 3]
  ], []);

  // Create bezier curves for data flow
  const curves = useMemo(() => {
    return connections.map(([start, end]) => {
      const startPos = new THREE.Vector3(...nodes[start].position);
      const endPos = new THREE.Vector3(...nodes[end].position);
      const midPoint = startPos.clone().lerp(endPos, 0.5);
      midPoint.y += 1;
      
      return new THREE.CatmullRomCurve3([startPos, midPoint, endPos]);
    });
  }, [nodes, connections]);

  // Animate flowing particles
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    particleRefs.current.forEach((particle, index) => {
      if (particle && curves[index % curves.length]) {
        const curve = curves[index % curves.length];
        const t = (time * 0.3 + index * 0.2) % 1;
        const position = curve.getPoint(t);
        particle.position.copy(position);
      }
    });

    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(time * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, -5]}>
      {/* Data nodes */}
      {nodes.map((node, index) => (
        <group key={index} position={node.position as [number, number, number]}>
          <Sphere args={[0.2]} material-color="#14B8A6" material-opacity={opacity} material-transparent />
        </group>
      ))}
      
      {/* Connection lines */}
      {curves.map((curve, index) => {
        const points = curve.getPoints(50);
        return (
          <Line
            key={index}
            points={points}
            color="#14B8A6"
            lineWidth={2}
            transparent
            opacity={opacity * 0.6}
          />
        );
      })}
      
      {/* Flowing particles */}
      {curves.map((_, index) => (
        <Sphere
          key={`particle-${index}`}
          ref={(el) => el && (particleRefs.current[index] = el)}
          args={[0.05]}
          material-color="#7C3AED"
          material-opacity={opacity * 1.5}
          material-transparent
        />
      ))}
    </group>
  );
};