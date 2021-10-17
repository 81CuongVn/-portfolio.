import React, { useEffect, useRef, useState } from 'react';
import type * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Html } from '@react-three/drei';
import Content from '../components/Content';
import Meta from '../components/Meta';

import styles from './Skills.module.css';

const CameraController = () => {
  const { camera, gl } = useThree();

  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);

    controls.minDistance = 3;
    controls.maxDistance = 20;

    return () => controls.dispose();
  }, [camera, gl]);

  return null;
};

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
      position={props.position}
      scale={active ? 1 : 0.5}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        wireframe
        color={hover || active ? 'cyan' : 'white'}
      />
      <Html>
        {active ? <big>{props.children}</big> : <small>{props.children}</small>}
      </Html>
    </mesh>
  );
};

const Universe: React.FC<JSX.IntrinsicElements['mesh']> = (props) => {
  const ref = useRef<THREE.Object3D>(null!);

  useFrame(() => {
    ref.current.rotation.x += 0.005;
    ref.current.rotation.y += 0.005;
  });

  return (
    <group ref={ref}>
      <Sphere position={[5, 5, 5]}>HTML</Sphere>
      <Sphere position={[-5, -5, -5]}>CSS</Sphere>
      <Sphere position={[-5, 5, -5]}>JavaScript</Sphere>
      <Sphere position={[-5, 5, 5]}>TypeScript</Sphere>
      <Sphere position={[5, 5, -5]}>Java</Sphere>
      <Sphere position={[5, -5, 5]}>C/C++</Sphere>
      <Sphere position={[-5, -5, 5]}>VSCode</Sphere>
      <Sphere position={[5, -5, -5]}>Git</Sphere>
      <Sphere position={[6, 0, 0]}>Github</Sphere>
      <Sphere position={[0, 6, 0]}>Node.js</Sphere>
      <Sphere position={[0, 0, 6]}>Bash</Sphere>
      <Sphere position={[-6, 0, 0]}>Linux</Sphere>
      <Sphere position={[0, -6, 0]}>PostgreSQL</Sphere>
      <Sphere position={[0, 0, -6]}>TypeORM</Sphere>
      <Sphere position={[4, 4, 0]}>Express</Sphere>
      <Sphere position={[0, 4, 4]}>Nest.js</Sphere>
      <Sphere position={[4, 0, 4]}>React</Sphere>
      <Sphere position={[4, -4, 0]}>MUI</Sphere>
      <Sphere position={[0, 4, -4]}>Bootstrap</Sphere>
      <Sphere position={[4, 0, -4]}>Tailwind</Sphere>
      <Sphere position={[-4, 4, 0]}>WebSockets</Sphere>
      <Sphere position={[0, -4, 4]}>MongoDB</Sphere>
      <Sphere position={[-4, 0, 4]}>EJS</Sphere>
      <Sphere position={[-4, -4, 0]}>JQuery</Sphere>
      <Sphere position={[0, -4, -4]}>DevOps</Sphere>
      <Sphere position={[-4, 0, -4]}>Redis</Sphere>
    </group>
  );
};

const Skills: React.FC = () => {
  return (
    <Content>
      <Meta title="My Skills" description="Languages, Tools, etc." />
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
