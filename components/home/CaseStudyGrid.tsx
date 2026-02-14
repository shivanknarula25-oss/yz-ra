'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Trophy, TrendingUp, Users } from 'lucide-react';
import Image from 'next/image';

const FEATURED_CASE = {
    id: 1,
    title: "Automating Heavy Assembly with Humanoid Cobots",
    company: "Tesla Inc.",
    industry: "Automotive",
    outcome: "+40% Production Efficiency",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000",
    summary: "Deployment of Optimus Gen 2 in Fremont factory final assembly lines reduced ergonomic injuries by 90% and increased throughput."
};

const RECENT_CASES = [
    { id: 2, title: "AI-Driven Warehouse Logistics", company: "JD Logistics", outcome: "99.9% Sortation Accuracy" },
    { id: 3, title: "Precision Surgical Robotics", company: "Medtronic", outcome: "Reduced Recovery Time by 3 Days" },
    { id: 4, title: "Agricultural Drone Swarms", company: "DJI Agriculture", outcome: "Covered 500 Acres/Hour" },
    { id: 5, title: "Underwater Pipeline Inspection", company: "DeepOcean", outcome: "Zero Human Risk" },
];

export const CaseStudyGrid = () => {
    return (
        <section className="py-16 bg-slate-950 border-b border-slate-800">
            <div className="container px-4">

                <div className="flex items-center gap-2 mb-8">
                    <Trophy className="w-5 h-5 text-amber-500" />
                    <h2 className="text-xl font-bold text-white uppercase tracking-tight">Success Stories</h2>
                    <div className="h-px bg-slate-800 flex-grow ml-4"></div>
                </div>

                <div className="grid md:grid-cols-12 gap-8">

                    {/* FEATURED CASE (Left - 7 cols) */}
                    <div className="md:col-span-7 group relative overflow-hidden border border-slate-800 bg-slate-900">
                        <div className="relative h-64 md:h-full min-h-[400px]">
                            {/* Image Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10 transition-opacity group-hover:opacity-90"></div>
                            <img
                                src={FEATURED_CASE.image}
                                alt={FEATURED_CASE.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40 grayscale group-hover:grayscale-0"
                            />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="px-2 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-mono uppercase">
                                        Featured Case
                                    </span>
                                    <span className="text-slate-400 text-xs font-mono uppercase">
                                // {FEATURED_CASE.industry}
                                    </span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-cyan-400 transition-colors">
                                    {FEATURED_CASE.title}
                                </h3>
                                <p className="text-slate-300 mb-6 max-w-xl line-clamp-2 md:line-clamp-none">
                                    {FEATURED_CASE.summary}
                                </p>

                                <div className="flex items-center gap-12 border-t border-slate-700 pt-6">
                                    <div>
                                        <div className="text-xs text-slate-500 font-mono uppercase mb-1">Company</div>
                                        <div className="text-white font-bold">{FEATURED_CASE.company}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-500 font-mono uppercase mb-1">Outcome</div>
                                        <div className="text-emerald-400 font-bold font-mono">{FEATURED_CASE.outcome}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RECENT LIST (Right - 5 cols) */}
                    <div className="md:col-span-5 flex flex-col gap-px bg-slate-800 border border-slate-800">
                        {RECENT_CASES.map((item) => (
                            <motion.div
                                key={item.id}
                                whileHover={{ x: 5 }}
                                className="flex-1 bg-slate-950 p-6 flex flex-col justify-center cursor-pointer hover:bg-slate-900 transition-colors group"
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-xs font-mono text-slate-500 uppercase">{item.company}</span>
                                    <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-500 transition-colors" />
                                </div>
                                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                    {item.title}
                                </h4>
                                <div className="flex items-center gap-2">
                                    <TrendingUp className="w-3 h-3 text-emerald-500" />
                                    <span className="text-xs font-mono text-emerald-500">{item.outcome}</span>
                                </div>
                            </motion.div>
                        ))}

                        <div className="p-6 bg-slate-900 text-center">
                            <button className="text-xs font-mono text-slate-400 hover:text-white uppercase tracking-widest flex items-center justify-center gap-2 w-full h-full">
                                View All Cases <ArrowRight className="w-3 h-3" />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
