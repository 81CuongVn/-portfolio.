import React, { useRef, useState } from 'react';
import type * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import CameraController from '../components/CameraController';
import Content from '../components/Content';
import Meta from '../components/Meta';

import styles from './Skills.module.css';

interface SphereProps {
  position: [number, number, number];
}

const Sphere: React.FC<SphereProps> = (props) => {
  const ref = useRef<THREE.Object3D>(null!);

  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);

  useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh
      ref={ref}
      {...props}
      scale={active ? 1 : 0.5}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        wireframe
        color={hover || active ? '#00ffff' : 'white'}
      />
      <Html>
        {active ? <big>{props.children}</big> : <small>{props.children}</small>}
      </Html>
    </mesh>
  );
};

const a = 4;
const b = 8;
const c = 6;

const Universe: React.FC = () => {
  const ref = useRef<THREE.Object3D>(null!);

  useFrame(() => {
    ref.current.rotation.x += 0.005;
    ref.current.rotation.y += 0.005;
    ref.current.rotation.z += 0.005;
  });

  return (
    <group ref={ref}>
      <Sphere position={[a, a, a]}>HTML</Sphere>
      <Sphere position={[-a, -a, -a]}>CSS</Sphere>
      <Sphere position={[-a, a, -a]}>JavaScript</Sphere>
      <Sphere position={[-a, a, a]}>TypeScript</Sphere>
      <Sphere position={[a, a, -a]}>Java</Sphere>
      <Sphere position={[a, -a, a]}>C/C++</Sphere>
      <Sphere position={[-a, -a, a]}>VSCode</Sphere>
      <Sphere position={[a, -a, -a]}>Git</Sphere>
      <Sphere position={[b, 0, 0]}>Github</Sphere>
      <Sphere position={[0, b, 0]}>Node.js</Sphere>
      <Sphere position={[0, 0, b]}>Bash</Sphere>
      <Sphere position={[-b, 0, 0]}>Linux</Sphere>
      <Sphere position={[0, -b, 0]}>PostgreSQL</Sphere>
      <Sphere position={[0, 0, -b]}>TypeORM</Sphere>
      <Sphere position={[c, c, 0]}>Express</Sphere>
      <Sphere position={[0, c, c]}>Nest.js</Sphere>
      <Sphere position={[c, 0, c]}>React</Sphere>
      <Sphere position={[c, -c, 0]}>MUI</Sphere>
      <Sphere position={[0, c, -c]}>Bootstrap</Sphere>
      <Sphere position={[c, 0, -c]}>Tailwind</Sphere>
      <Sphere position={[-c, c, 0]}>WebSockets</Sphere>
      <Sphere position={[0, -c, c]}>MongoDB</Sphere>
      <Sphere position={[-c, 0, c]}>EJS</Sphere>
      <Sphere position={[-c, -c, 0]}>JQuery</Sphere>
      <Sphere position={[0, -c, -c]}>DevOps</Sphere>
      <Sphere position={[-c, 0, -c]}>Redis</Sphere>
    </group>
  );
};

const Skills: React.FC = () => {
  return (
    <Content>
      <Meta
        title="Skills"
        description="Programming Languages, Libraries, Tools, etc."
      />
      <div className={styles['container']}>
        <div className={styles['info']}>
          <h1 className={styles['title']}>
            My Skills <br />
          </h1>{' '}
          <br />
          <small className={styles['description']}>
            Programming Languages, Libraries, Tools, etc.
          </small>
        </div>
        <Canvas className={styles['canvas']}>
          <CameraController />
          <ambientLight intensity={0.1} />
          <Universe />
        </Canvas>
      </div>
    </Content>
  );
};

export default Skills;
