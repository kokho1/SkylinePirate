import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Html } from "@react-three/drei";
import * as THREE from "three";

const Hull = ({ color = "brown", ...props }) => (
  <mesh rotation={[0, 0, Math.PI / 2]} {...props}>
    <cylinderGeometry args={[0.3, 0.7, 3, 32]} />
    <meshStandardMaterial color={color} roughness={0.6} metalness={0.1} />
  </mesh>
);

// SKYLINE VOYAGER EMBLEM: A golden ring with a white star inside
const SkylineEmblem = () => (
  <group scale={[1.8, 1.8, 1.8]}>
    <mesh>
      <torusGeometry args={[0.15, 0.03, 16, 100]} />
      <meshStandardMaterial color="gold" emissive="#776600" emissiveIntensity={1.0} />
    </mesh>
    <mesh>
      <icosahedronGeometry args={[0.08, 0]} />
      <meshStandardMaterial color="white" emissive="#ffffff" emissiveIntensity={1.2} />
    </mesh>
  </group>
);

// STORMBREAKER EMBLEM: A crimson shield with a bold lightning bolt
const StormbreakerEmblem = () => (
  <group scale={[1.8, 1.8, 1.8]}>
    <mesh>
      <octahedronGeometry args={[0.15, 0]} />
      <meshStandardMaterial color="#8b0000" emissive="#330000" emissiveIntensity={1.0} />
    </mesh>
    <mesh rotation={[0, 0, Math.PI / 4]} position={[0, 0, 0.001]}>
      <boxGeometry args={[0.03, 0.25, 0.03]} />
      <meshStandardMaterial color="yellow" emissive="#666600" emissiveIntensity={1.0} />
    </mesh>
  </group>
);

// SERENITY EMBLEM: A teal ring with an aqua gem inside
const SerenityEmblem = () => (
  <group scale={[1.8, 1.8, 1.8]}>
    <mesh>
      <torusGeometry args={[0.15, 0.03, 16, 100]} />
      <meshStandardMaterial color="#20b2aa" emissive="#007c76" emissiveIntensity={1.0} />
    </mesh>
    <mesh rotation={[0, 0, Math.PI / 4]}>
      <octahedronGeometry args={[0.1, 0]} />
      <meshStandardMaterial color="#7fffd4" emissive="#00ddd0" emissiveIntensity={1.2} />
    </mesh>
  </group>
);

const SkylineVoyager = ({ position, name }) => {
  const shipRef = useRef();
  useFrame(({ clock }) => {
    if (shipRef.current) {
      shipRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.05;
    }
  });

  return (
    <group ref={shipRef} position={position}>
      <Hull color="#8B4513" />

      {/* Deck layers remain the same */}
      <mesh position={[0, 0.3, 0]} scale={[1.5, 0.1, 0.5]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#a0522d" />
      </mesh>
      <mesh position={[0, 0.8, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 2.5, 16]} />
        <meshStandardMaterial color="darkgray" />
      </mesh>

      {/* Sail: slightly larger and using MeshDistortMaterial for a natural cloth effect */}
      <mesh position={[0, 1.8, 0]}>
        <planeGeometry args={[2, 2, 32, 32]} />
        <MeshDistortMaterial
          color="#f0f0f0"
          distort={0.2}
          speed={1}
          side={THREE.DoubleSide}
          emissive="#ffffff"
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Emblem */}
      <group position={[0, 1.8, 0.02]}>
        <SkylineEmblem />
      </group>

      <Html position={[0, -1.5, 0]} transform occlude>
        <div style={{
          background: 'rgba(255,255,255,0.8)',
          padding: '4px',
          borderRadius: '4px',
          fontSize: '12px',
          textAlign: 'center'
        }}>
          {name}
        </div>
      </Html>
    </group>
  );
};

const Stormbreaker = ({ position, name }) => {
  const shipRef = useRef();
  useFrame(({ clock }) => {
    if (shipRef.current) {
      shipRef.current.position.y = Math.sin(clock.getElapsedTime() * 1.2) * 0.05;
    }
  });

  return (
    <group ref={shipRef} position={position}>
      <Hull color="#4b2e2e" />
      <mesh position={[0, 0.4, 0]} scale={[1.4, 0.1, 0.6]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#5a3c3c" />
      </mesh>
      <mesh position={[0, 0.6, 0]} scale={[1.2, 0.1, 0.5]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#5a3c3c" />
      </mesh>
      <mesh position={[0, 1, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 2, 16]} />
        <meshStandardMaterial color="#444" />
      </mesh>

      {/* Sail: A more rugged color to match the Stormbreaker theme */}
      <mesh position={[0, 1.7, 0]} rotation={[0, 0, Math.PI / 12]}>
        <planeGeometry args={[1.8, 2.2, 32, 32]} />
        <MeshDistortMaterial
          color="#c2b280"
          distort={0.2}
          speed={1.2}
          side={THREE.DoubleSide}
          emissive="#a09060"
          emissiveIntensity={0.1}
        />
      </mesh>

      <group position={[0, 1.7, 0.02]}>
        <StormbreakerEmblem />
      </group>

      <Html position={[0, -1.5, 0]} transform occlude>
        <div style={{
          background: 'rgba(255,255,255,0.8)',
          padding: '4px',
          borderRadius: '4px',
          fontSize: '12px',
          textAlign: 'center'
        }}>
          {name}
        </div>
      </Html>
    </group>
  );
};

const Serenity = ({ position, name }) => {
  const shipRef = useRef();
  useFrame(({ clock }) => {
    if (shipRef.current) {
      shipRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.8) * 0.05;
    }
  });

  return (
    <group ref={shipRef} position={position}>
      <Hull color="#2e4b4b" />
      <mesh position={[0, 0.3, 0]} scale={[1.2, 0.1, 0.4]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#376666" />
      </mesh>
      <mesh position={[0, 1, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 2, 16]} />
        <meshStandardMaterial color="#555" />
      </mesh>

      {/* Sail: A calming, cool aqua tone */}
      <mesh position={[0, 1.7, 0]}>
        <planeGeometry args={[1.4, 1.8, 32, 32]} />
        <MeshDistortMaterial
          color="#b0e0e6"
          distort={0.2}
          speed={0.8}
          side={THREE.DoubleSide}
          emissive="#a0d0d6"
          emissiveIntensity={0.1}
        />
      </mesh>

      <group position={[0, 1.7, 0.02]}>
        <SerenityEmblem />
      </group>

      <Html position={[0, -1.5, 0]} transform occlude>
        <div style={{
          background: 'rgba(255,255,255,0.8)',
          padding: '4px',
          borderRadius: '4px',
          fontSize: '12px',
          textAlign: 'center'
        }}>
          {name}
        </div>
      </Html>
    </group>
  );
};

const ThreeShips = () => (
  <div style={{ width: "100%", height: "100vh", background: "#87CEEB" }}>
    <Canvas
      camera={{ position: [0, 5, 7.5], fov: 50 }}
      onCreated={({ camera }) => camera.lookAt(0, 0, 0)}
    >
      <ambientLight intensity={0.3} />
      <directionalLight intensity={0.8} position={[10, 10, 10]} />

      <SkylineVoyager position={[-6, 0, 0]} name="The Skyline Voyager" />
      <Stormbreaker position={[0, 0, 0]} name="The Stormbreaker" />
      <Serenity position={[6, 0, 0]} name="The Serenity" />
    </Canvas>
  </div>
);

export default ThreeShips;
