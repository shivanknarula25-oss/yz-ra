'use client';

import { motion } from 'framer-motion';
import { Network, Cpu, Box, Truck, ArrowRight } from 'lucide-react';

const ChainNode = ({ title, icon: Icon, items, index }: any) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="flex-1 bg-slate-900 border border-slate-700 p-6 relative group"
    >
        {/* Node Header */}
        <div className="flex justify-between items-start mb-4 border-b border-slate-800 pb-2">
            <h3 className="text-lg font-bold text-white font-mono uppercase flex items-center gap-2">
                <span className="text-cyan-500">0{index}</span> // {title}
            </h3>
            <Icon className="w-5 h-5 text-slate-500 group-hover:text-cyan-500 transition-colors" />
        </div>

        {/* Technical List */}
        <ul className="space-y-2">
            {items.map((item: string, i: number) => (
                <li key={i} className="text-slate-400 text-sm font-mono flex items-center gap-2">
                    <span className="text-slate-600">&gt;</span>
                    {item}
                </li>
            ))}
        </ul>

        {/* Connector (Desktop) */}
        {index < 3 && (
            <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                <ArrowRight className="w-8 h-8 text-slate-600" />
            </div>
        )}
    </motion.div>
);

export const IndustryChainMap = () => {
    return (
        <section className="py-16 bg-slate-950 border-b border-slate-800">
            <div className="container px-4">
                <div className="flex items-end justify-between mb-8 border-b border-slate-800 pb-4">
                    <div>
                        <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Supply Chain Topology</h2>
                        <p className="text-slate-500 font-mono text-xs mt-1">Full-stack visibility from silicon to deployment.</p>
                    </div>
                    <div className="flex gap-2">
                        <div className="w-3 h-3 bg-cyan-500"></div>
                        <div className="w-3 h-3 bg-slate-700"></div>
                        <div className="w-3 h-3 bg-slate-800"></div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8 relative mt-12">

                    {/* Connector Line Background */}
                    <div className="hidden md:block absolute top-[28px] left-0 w-full h-px bg-slate-800 -z-0"></div>

                    <ChainNode
                        index={1}
                        title="UPSTREAM"
                        icon={Cpu}
                        items={["Sensors (LiDAR/Vision)", "Servo Motors & Drives", "AI Chips (NPU/GPU)", "Precision Reducers"]}
                    />

                    <ChainNode
                        index={2}
                        title="MIDSTREAM"
                        icon={Network}
                        items={["Body Manufacturing", "System Integration", "Navigation Algorithms", "OS & Middleware"]}
                    />

                    <ChainNode
                        index={3}
                        title="DOWNSTREAM"
                        icon={Truck}
                        items={["Automotive Assembly", "Logistics & Warehousing", "Healthcare Robotics", "Service & Consumer"]}
                    />
                </div>
            </div>
        </section>
    );
};
