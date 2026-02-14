'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Globe, Shield, Activity, Radio, AlertTriangle, FileText, TrendingUp, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const INTEL_FEED = [
    { time: "14:02", type: "ALERT", message: "ISO-10218 Safety Standard Updated for Co-bots.", color: "text-amber-500" },
    { time: "13:45", type: "MARKET", message: "Lithium spot price surges 4% on supply concerns.", color: "text-emerald-500" },
    { time: "12:30", type: "PATENT", message: "Tesla files patent for new humanoid actuator design.", color: "text-cyan-500" },
    { time: "11:15", type: "RPT", message: "Q1 2026 Global Robotics Investment Report released.", color: "text-white" },
    { time: "10:00", type: "ALERT", message: "New export controls on AI chips announced.", color: "text-amber-500" },
    { time: "09:30", type: "MARKET", message: "UBTECH shares up 12% following new product launch.", color: "text-emerald-500" },
    { time: "08:45", type: "TECH", message: "Nvidia announces Isaac Sim 5.0 with real-time physics.", color: "text-cyan-500" },
];

const DEAL_FLOW = [
    {
        id: 1,
        type: "MERGER",
        title: "ABB acquires Sevensense",
        value: "$120M",
        desc: "AMR Navigation Tech",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
        color: "bg-blue-600"
    },
    {
        id: 2,
        type: "LAUNCH",
        title: "Unitree H1 Release",
        value: "GLOBAL",
        desc: "General Purpose Humanoid",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
        color: "bg-emerald-600"
    },
    {
        id: 3,
        type: "INVEST",
        title: "Figure AI Raises Capital",
        value: "$675M",
        desc: "Series B Funding",
        image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=800",
        color: "bg-purple-600"
    },
    {
        id: 4,
        type: "REGULATION",
        title: "EU AI Act Finalized",
        value: "COMPLIANCE",
        desc: "Impacts Autonomous Systems",
        image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=800",
        color: "bg-amber-600"
    }
];

export const HeroSection = () => {
    const t = useTranslations('Hero');

    return (
        <section className="relative w-full bg-slate-950 text-white border-b border-slate-800">
            <div className="container grid md:grid-cols-12 h-[600px]">

                {/* LEFT: Live Intel Stream */}
                <div className="md:col-span-5 flex flex-col border-r border-slate-800 bg-slate-900/30 relative overflow-hidden">

                    {/* Header */}
                    <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-900/80 backdrop-blur-sm z-10">
                        <div className="flex items-center gap-3">
                            <Radio className="w-5 h-5 text-red-500 animate-pulse" />
                            <h2 className="text-lg font-bold font-mono uppercase tracking-wider text-white">
                                LIVE INTEL <span className="text-slate-500">//</span> STREAM
                            </h2>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                            <span className="text-xs font-mono text-emerald-500">CONNECTED</span>
                        </div>
                    </div>

                    {/* Scrolling Feed */}
                    <div className="flex-1 overflow-hidden relative p-6">
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-slate-900/50 z-10 pointer-events-none"></div>

                        <motion.div
                            animate={{ y: [0, -INTEL_FEED.length * 80] }}
                            transition={{
                                repeat: Infinity,
                                ease: "linear",
                                duration: 20
                            }}
                            className="space-y-6"
                        >
                            {[...INTEL_FEED, ...INTEL_FEED, ...INTEL_FEED].map((item, i) => (
                                <div key={i} className="flex gap-4 items-start group cursor-pointer hover:bg-white/5 p-3 rounded-lg transition-colors border border-transparent hover:border-slate-700">
                                    <div className="text-xs font-mono text-slate-500 pt-1 shrink-0">{item.time}</div>
                                    <div>
                                        <div className={`text-xs font-bold font-mono mb-1 ${item.color}`}>
                                            [{item.type}]
                                        </div>
                                        <div className="text-sm font-light text-slate-300 group-hover:text-white leading-relaxed">
                                            {item.message}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Footer Actions */}
                    <div className="p-4 border-t border-slate-800 bg-slate-900/80 backdrop-blur-sm z-10 flex gap-2">
                        <Link href="/news" className="flex-1">
                            <button className="w-full py-2 bg-cyan-600/10 border border-cyan-600/30 hover:bg-cyan-600/20 text-cyan-400 font-mono text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2">
                                <FileText className="w-3 h-3" /> Full Reports
                            </button>
                        </Link>
                        <Link href="/members/join" className="flex-1">
                            <button className="w-full py-2 bg-emerald-600/10 border border-emerald-600/30 hover:bg-emerald-600/20 text-emerald-400 font-mono text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2">
                                <Activity className="w-3 h-3" /> Join Node
                            </button>
                        </Link>
                    </div>
                </div>

                {/* RIGHT: Classified News Grid (Deal Flow) */}
                <div className="md:col-span-7 bg-slate-950 p-0">
                    <div className="grid grid-cols-2 grid-rows-2 h-full">
                        {DEAL_FLOW.map((deal) => (
                            <div key={deal.id} className="relative group overflow-hidden border-r border-b border-slate-800">
                                {/* Background Image */}
                                <div className="absolute inset-0">
                                    <img
                                        src={deal.image}
                                        alt={deal.title}
                                        className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500 scale-100 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-slate-950/60 group-hover:bg-slate-950/40 transition-colors"></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                                </div>

                                {/* Content Overlay */}
                                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                    <div className="flex justify-between items-start mb-auto">
                                        <span className={`px-2 py-1 text-[10px] font-bold font-mono text-white ${deal.color}`}>
                                            {deal.type}
                                        </span>
                                        <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
                                    </div>

                                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="text-xl font-bold text-white mb-1 leading-tight group-hover:text-cyan-400 transition-colors">
                                            {deal.title}
                                        </h3>
                                        <div className="flex items-center gap-3">
                                            <span className="text-lg font-mono text-emerald-400 font-bold">{deal.value}</span>
                                            <span className="text-xs text-slate-400 font-mono uppercase">// {deal.desc}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
