'use client';

import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

const BRANDS = [
    "Siasun Robotics", "Estun Automation", "Step Electric", "Inovance",
    "Hikrobot", "Geek+", "Unitree", "Fourier Intelligence",
    "Addverb", "GreyOrange", "Ati Motors", "IdeaForge"
];

export const BrandSpotlight = () => {
    return (
        <section className="py-12 bg-slate-900 border-y border-slate-800 overflow-hidden">
            <div className="container px-4 md:px-6 mb-8 text-center">
                <h3 className="text-xl font-semibold text-slate-400">Trusted by Industry Leaders</h3>
            </div>

            <div className="flex relative mask-linear-fade">
                <motion.div
                    className="flex gap-16"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30
                    }}
                >
                    {[...BRANDS, ...BRANDS].map((brand, i) => (
                        <div key={i} className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity cursor-pointer group">
                            <div className="p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                                <Building2 className="w-8 h-8 text-cyan-500" />
                            </div>
                            <span className="text-xl font-bold text-white whitespace-nowrap">{brand}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
