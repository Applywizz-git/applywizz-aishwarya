import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Torus, Sphere } from '@react-three/drei';
import * as THREE from 'three';

interface MLOpsSystemProps {
  opacity?: number;
}

export const MLOpsSystem: React.FC<MLOpsSystemProps> = ({ opacity = 0.25 }) => {
  const outerRingRef = useRef<THREE.Mesh>(null);
  const innerRingRef = useRef<THREE.Mesh>(null);
  const centerRingRef = useRef<THREE.Mesh>(null);
  const podRefs = useRef<THREE.Mesh[]>([]);

  // Create deployment pods in orbits
  const deploymentPods = useMemo(() => [
    { radius: 1.5, count: 4, speed: 1, label: 'Docker' },
    { radius: 2.5, count: 6, speed: 0.7, label: 'K8s' },
    { radius: 3.5, count: 3, speed: 0.5, label: 'MLflow' }
  ], []);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    // Rotate orbit rings
    if (outerRingRef.current) {
      outerRingRef.current.rotation.x = time * 0.3;
      outerRingRef.current.rotation.z = time * 0.2;
    }
    
    if (innerRingRef.current) {
      innerRingRef.current.rotation.y = time * 0.4;
      innerRingRef.current.rotation.x = -time * 0.1;
    }
    
    if (centerRingRef.current) {
      centerRingRef.current.rotation.z = time * 0.6;
      centerRingRef.current.rotation.y = time * 0.3;
    }
    
    // Animate deployment pods
    let podIndex = 0;
    deploymentPods.forEach((orbit) => {
      for (let i = 0; i < orbit.count; i++) {
        const pod = podRefs.current[podIndex];
        if (pod) {
          const angle = (time * orbit.speed + (i / orbit.count) * Math.PI * 2) % (Math.PI * 2);
          pod.position.x = Math.cos(angle) * orbit.radius;
          pod.position.z = Math.sin(angle) * orbit.radius;
          pod.position.y = Math.sin(time + i) * 0.2;
          
          // Blinking effect for build/deploy status
          const blink = Math.sin(time * 3 + i) > 0.7 ? 1.5 : 0.8;
          (pod.material as THREE.MeshBasicMaterial).opacity = opacity * blink;
        }
        podIndex++;
      }
    });
  });

  const totalPods = deploymentPods.reduce((sum, orbit) => sum + orbit.count, 0);

  return (
    <group position={[-3, 0, -6]}>
      {/* Infinity symbol orbit rings */}
      <Torus 
        ref={outerRingRef}
        args={[3, 0.1, 8, 32]}
        material-color="#14B8A6"
        material-opacity={opacity}
        material-transparent
      />
      <Torus 
        ref={innerRingRef}
        args={[2, 0.08, 8, 32]}
        material-color="#7C3AED"
        material-opacity={opacity}
        material-transparent
      />
      <Torus 
        ref={centerRingRef}
        args={[1, 0.06, 8, 32]}
        material-color="#F59E0B"
        material-opacity={opacity}
        material-transparent
      />
      
      {/* Deployment pods */}
      {Array.from({ length: totalPods }, (_, index) => (
        <Sphere
          key={index}
          ref={(el) => el && (podRefs.current[index] = el)}
          args={[0.08]}
        >
          <meshBasicMaterial
            color={index % 3 === 0 ? "#14B8A6" : index % 3 === 1 ? "#7C3AED" : "#F59E0B"}
            transparent
            opacity={opacity}
          />
        </Sphere>
      ))}
      
      {/* Central CI/CD hub */}
      <Sphere args={[0.3]} material-color="#22C55E" material-opacity={opacity * 1.2} material-transparent />
    </group>
  );
};