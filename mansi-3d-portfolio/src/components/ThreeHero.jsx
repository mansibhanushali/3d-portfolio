import { Canvas } from '@react-three/fiber'
import { Float, OrbitControls, Environment, Html } from '@react-three/drei'
import React, { Suspense } from 'react'

function PastelTorus() {
  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh castShadow receiveShadow>
        <torusKnotGeometry args={[1.1, 0.32, 180, 32]} />
        <meshStandardMaterial color={'#E5D4EF'} roughness={0.6} metalness={0.05} />
      </mesh>
    </Float>
  )
}

function PastelSpheres() {
  return (
    <group>
      {[[-2, 0.5, -1], [2, -0.2, 1.2], [0.8, 1.2, -1.8]].map((pos, i) => (
        <Float key={i} speed={1 + i * 0.3} rotationIntensity={0.2} floatIntensity={0.6}>
          <mesh position={pos}>
            <sphereGeometry args={[0.45 + i*0.1, 32, 32]} />
            <meshStandardMaterial color={['#CDE7E2','#FFD9C9','#CFE8FF'][i]} roughness={0.7} />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

export default function ThreeHero() {
  return (
    <div className="w-full h-[320px] sm:h-[380px] md:h-[460px] lg:h-[520px]">
      <Canvas shadows camera={{ position: [0, 1.8, 4.2], fov: 55 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 10, 5]} intensity={0.9} castShadow />
        <Suspense fallback={<Html center>Loading 3D…</Html>}>
          <PastelTorus />
          <PastelSpheres />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/1.9} />
      </Canvas>
    </div>
  )
}
