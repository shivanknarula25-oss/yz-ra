"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial, OrbitControls } from "@react-three/drei"
import * as THREE from "three"

function Particles({ count = 3000 }) {
    const points = useMemo(() => {
        const p = new Float32Array(count * 3)
        for (let i = 0; i < count; i++) {
            // Create points on a sphere surface distribution
            const phi = Math.acos(-1 + (2 * i) / count)
            const theta = Math.sqrt(count * Math.PI) * phi
            const r = 3.5

            // Convert spherical to cartesian
            p[i * 3] = r * Math.cos(theta) * Math.sin(phi)
            p[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi)
            p[i * 3 + 2] = r * Math.cos(phi)
        }
        return p
    }, [count])

    const ref = useRef<THREE.Points>(null!)

    useFrame((state, delta) => {
        ref.current.rotation.y += delta * 0.1 // Rotate the particle cloud
    })

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#EF4444" // Electric Red dots
                    size={0.02}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.8}
                />
            </Points>
        </group>
    )
}

function CoreGlobe() {
    return (
        <group>
            {/* Inner Dark Globe */}
            <mesh>
                <sphereGeometry args={[3.2, 64, 64]} />
                <meshBasicMaterial color="#020617" />
            </mesh>
            {/* Outer Cyber Grid */}
            <mesh>
                <sphereGeometry args={[3.3, 32, 32]} />
                <meshBasicMaterial wireframe color="#06B6D4" transparent opacity={0.15} />
            </mesh>
        </group>
    )
}

export function RoboticGlobe() {
    return (
        <div className="w-full h-full min-h-[500px] absolute inset-0 -z-10">
            <Canvas camera={{ position: [0, 0, 9], fov: 40 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Particles />
                <CoreGlobe />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} enablePan={false} />
            </Canvas>

            {/* Gradient Fade for seamless integration */}
            <div className="absolute inset-0 bg-background/30 bg-gradient-to-t from-background via-transparent to-background/50 pointer-events-none" />
        </div>
    )
}
