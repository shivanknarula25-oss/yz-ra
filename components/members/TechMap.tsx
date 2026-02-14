"use client";

import { motion } from "framer-motion";

interface TechMapProps {
    country: "India" | "China";
}

export function TechMap({ country }: TechMapProps) {
    // Simplified coordinate hints for a "tech" feel (longitude/latitude style)
    const coordinates = country === "India"
        ? "20.5937° N, 78.9629° E"
        : "35.8617° N, 104.1954° E";

    const color = country === "India" ? "text-orange-500" : "text-red-500";
    const bgGlow = country === "India" ? "bg-orange-500/20" : "bg-red-500/20";
    const border = country === "India" ? "border-orange-500/30" : "border-red-500/30";

    return (
        <div className={`relative w-full h-[400px] rounded-3xl overflow-hidden border ${border} bg-black/40 backdrop-blur-sm group`}>
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Radar Scan Effect */}
            <motion.div
                className={`absolute inset-0 bg-gradient-to-b from-transparent via-${country === "India" ? "orange" : "red"}-500/10 to-transparent`}
                initial={{ top: "-100%" }}
                animate={{ top: "200%" }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />

            {/* Central content */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                    {/* Pulsing Circles */}
                    <motion.div
                        className={`absolute inset-0 rounded-full ${bgGlow} blur-xl`}
                        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.1, 0.3] }}
                        transition={{ duration: 4, repeat: Infinity }}
                    />
                    <div className={`relative z-10 p-8 border ${border} bg-black/60 rounded-full backdrop-blur-md`}>
                        <h2 className={`text-4xl font-bold ${color} font-orbitron tracking-widest`}>
                            {country.toUpperCase()}
                        </h2>
                        <div className="mt-2 text-xs text-center text-gray-500 font-mono">
                            {coordinates}
                        </div>
                        <div className="mt-1 text-xs text-center text-gray-400 font-mono tracking-widest uppercase">
                            Active Region
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative corners */}
            <div className={`absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 ${border}`} />
            <div className={`absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 ${border}`} />
            <div className={`absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 ${border}`} />
            <div className={`absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 ${border}`} />

            {/* Data HUD elements */}
            <div className="absolute bottom-6 left-6 text-xs font-mono text-gray-500">
                <div>STATUS: ONLINE</div>
                <div>NODES: DETECTED</div>
            </div>
        </div>
    );
}
