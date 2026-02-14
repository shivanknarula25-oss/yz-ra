"use client";

import { ChinaEcosystemCategory } from "../../lib/china_data";
import { Bot, Cpu, BrainCircuit, Network } from "lucide-react";
import { motion } from "framer-motion";

const iconMap = {
    Bot,
    Cpu,
    BrainCircuit,
    Network
};

interface EcosystemCategoryProps {
    category: ChinaEcosystemCategory;
    index: number;
}

export function EcosystemCategory({ category, index }: EcosystemCategoryProps) {
    const Icon = iconMap[category.icon as keyof typeof iconMap] || Network;

    const colors = [
        "border-red-500/50 shadow-[0_0_30px_-5px_rgba(239,68,68,0.3)]",
        "border-orange-500/50 shadow-[0_0_30px_-5px_rgba(249,115,22,0.3)]",
        "border-amber-500/50 shadow-[0_0_30px_-5px_rgba(245,158,11,0.3)]",
        "border-rose-500/50 shadow-[0_0_30px_-5px_rgba(244,63,94,0.3)]",
    ];

    const accents = [
        "text-red-400",
        "text-orange-400",
        "text-amber-400",
        "text-rose-400"
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative p-8 rounded-3xl border ${colors[index % 4]} bg-black/40 backdrop-blur-xl overflow-hidden group`}
        >
            {/* Header */}
            <div className="relative z-10 flex items-start gap-4 mb-8">
                <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${accents[index % 4]}`}>
                    <Icon className="w-8 h-8" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold font-orbitron text-white tracking-wide">
                        {category.title}
                    </h2>
                    <p className="text-gray-400 mt-1 max-w-xl">
                        {category.description}
                    </p>
                </div>
            </div>

            {/* Subcategories Grid */}
            <div className="relative z-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {category.subcategories.map((sub, idx) => (
                    <div key={idx} className="flex flex-col gap-3">
                        <h3 className={`text-sm font-bold uppercase tracking-wider ${accents[index % 4]}`}>
                            {sub.name}
                        </h3>
                        <div className="flex flex-col gap-2">
                            {sub.companies.map((company, i) => (
                                <div
                                    key={i}
                                    className="px-3 py-2 text-sm text-gray-300 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
                                >
                                    {company}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-600/10 to-transparent blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-orange-600/10 to-transparent blur-3xl rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />
        </motion.div>
    );
}
