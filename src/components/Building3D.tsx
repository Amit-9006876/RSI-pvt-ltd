import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

const BuildingModel = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={groupRef} position={[0, -1, 0]}>
        {/* Main Building */}
        <mesh position={[0, 1.5, 0]}>
          <boxGeometry args={[2, 3, 1.5]} />
          <meshStandardMaterial color="#1a365d" metalness={0.3} roughness={0.4} />
        </mesh>
        
        {/* Building Windows */}
        {[0, 1, 2].map((row) => (
          [-0.6, 0, 0.6].map((x, col) => (
            <mesh key={`window-${row}-${col}`} position={[x, 0.8 + row * 0.8, 0.76]}>
              <boxGeometry args={[0.35, 0.5, 0.05]} />
              <meshStandardMaterial color="#f6ad55" emissive="#f6ad55" emissiveIntensity={0.3} />
            </mesh>
          ))
        ))}

        {/* Building Top */}
        <mesh position={[0, 3.3, 0]}>
          <boxGeometry args={[2.2, 0.3, 1.7]} />
          <meshStandardMaterial color="#2d4a6f" metalness={0.4} roughness={0.3} />
        </mesh>

        {/* Side Building Left */}
        <mesh position={[-1.8, 1, 0]}>
          <boxGeometry args={[1.2, 2, 1.2]} />
          <meshStandardMaterial color="#2d4a6f" metalness={0.3} roughness={0.5} />
        </mesh>

        {/* Side Building Windows */}
        {[0, 1].map((row) => (
          <mesh key={`side-window-${row}`} position={[-1.8, 0.5 + row * 0.7, 0.61]}>
            <boxGeometry args={[0.4, 0.4, 0.05]} />
            <meshStandardMaterial color="#f6ad55" emissive="#f6ad55" emissiveIntensity={0.3} />
          </mesh>
        ))}

        {/* Side Building Right */}
        <mesh position={[1.6, 0.8, 0]}>
          <boxGeometry args={[0.8, 1.6, 1]} />
          <meshStandardMaterial color="#1e3a5f" metalness={0.3} roughness={0.5} />
        </mesh>

        {/* Crane */}
        <group position={[2.5, 0, -0.5]}>
          {/* Crane Tower */}
          <mesh position={[0, 1.5, 0]}>
            <boxGeometry args={[0.15, 3, 0.15]} />
            <meshStandardMaterial color="#f6ad55" metalness={0.5} roughness={0.3} />
          </mesh>
          {/* Crane Arm */}
          <mesh position={[0.8, 2.9, 0]}>
            <boxGeometry args={[1.8, 0.1, 0.1]} />
            <meshStandardMaterial color="#f6ad55" metalness={0.5} roughness={0.3} />
          </mesh>
          {/* Counter Weight */}
          <mesh position={[-0.3, 2.9, 0]}>
            <boxGeometry args={[0.4, 0.1, 0.1]} />
            <meshStandardMaterial color="#f6ad55" metalness={0.5} roughness={0.3} />
          </mesh>
        </group>

        {/* Ground/Foundation */}
        <mesh position={[0, -0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[8, 6]} />
          <meshStandardMaterial color="#2d3748" metalness={0.1} roughness={0.8} />
        </mesh>

        {/* Road */}
        <mesh position={[0, -0.05, 2]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[8, 1.5]} />
          <meshStandardMaterial color="#4a5568" metalness={0.1} roughness={0.9} />
        </mesh>

        {/* Road Lines */}
        <mesh position={[0, -0.04, 2]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[6, 0.08]} />
          <meshStandardMaterial color="#f6ad55" />
        </mesh>
      </group>
    </Float>
  );
};

const Building3D = () => {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas
        camera={{ position: [5, 3, 6], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <pointLight position={[-10, 10, -10]} intensity={0.5} color="#f6ad55" />
        <spotLight position={[0, 10, 0]} intensity={0.3} angle={0.5} />
        
        <BuildingModel />
        
        <Environment preset="city" />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate 
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  );
};

export default Building3D;
