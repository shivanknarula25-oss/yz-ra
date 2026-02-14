"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Check, ArrowRight, Zap, Shield, Globe, Users } from "lucide-react"
import { NeonButton } from "@/components/ui/NeonButton"
import { GlassCard } from "@/components/ui/GlassCard"

export default function JoinPage() {
    const benefits = [
        {
            title: "Neural Intelligence Access",
            desc: "Unlock the full strategic analysis of our daily India-China robotics news stream.",
            icon: <Zap className="w-6 h-6 text-primary" />
        },
        {
            title: "Verified Company Profile",
            desc: "Claim your directory listing, update your capabilities, and get discovered by global partners.",
            icon: <Shield className="w-6 h-6 text-secondary" />
        },
        {
            title: "Cross-Border Estimator",
            desc: "Generate detailed PDF reports for manufacturing costs in Shenzhen vs Tamil Nadu.",
            icon: <Globe className="w-6 h-6 text-green-400" />
        },
        {
            title: "Alliance Network",
            desc: "Connect directly with vetted integrators and component suppliers.",
            icon: <Users className="w-6 h-6 text-orange-400" />
        }
    ]

    return (
        <div className="min-h-screen pt-24 pb-12 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-bold tracking-wider mb-6"
                    >
                        INITIAL MISSION_PHASE: RECRUITMENT
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6 font-display leading-tight"
                    >
                        Join the <span className="text-secondary">Intelligence Alliance</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        Gain an unfair advantage in the India-China robotics corridor. Connect, analyze, and build faster.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
                    {/* Free Tier */}
                    <GlassCard className="p-8 border-white/10 hover:border-white/20 relative" hoverEffect>
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-gray-700" />
                        <h3 className="text-2xl font-bold text-white mb-2">Observer</h3>
                        <div className="flex items-baseline gap-1 mb-6">
                            <span className="text-4xl font-bold text-white">$0</span>
                            <span className="text-gray-500">/ forever</span>
                        </div>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-gray-500" /> Public News Headlines
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-gray-500" /> Browse Member Directory
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-gray-500" /> Basic Tool Access
                            </li>
                        </ul>
                        <NeonButton variant="outline" className="w-full justify-center border-gray-600 text-gray-400 hover:bg-gray-800">
                            Continue as Guest
                        </NeonButton>
                    </GlassCard>

                    {/* Pro Tier (Actually Free for now) */}
                    <GlassCard className="p-8 border-primary/50 bg-primary/5 relative transform scale-105 shadow-2xl shadow-primary/20" hoverEffect>
                        <div className="absolute top-0 right-0 bg-primary text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
                            RECOMMENDED
                        </div>
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />

                        <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                            Operative <Zap className="w-5 h-5 text-yellow-400 fill-current" />
                        </h3>
                        <div className="flex items-baseline gap-1 mb-6">
                            <span className="text-4xl font-bold text-white">FREE</span>
                            <span className="text-primary text-sm font-bold bg-primary/20 px-2 py-0.5 rounded ml-2">EARLY ACCESS</span>
                        </div>

                        <ul className="space-y-4 mb-8">
                            {benefits.map((b, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-200">
                                    <div className="mt-1 bg-primary/20 p-1 rounded-full">
                                        <Check className="w-3 h-3 text-primary" />
                                    </div>
                                    <div>
                                        <span className="font-bold text-white">{b.title}</span>
                                        <p className="text-xs text-gray-400 mt-0.5">{b.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <Link href="/register">
                            <NeonButton variant="primary" className="w-full justify-center py-6 text-lg group">
                                Initialize Access <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </NeonButton>
                        </Link>
                        <p className="text-center text-xs text-gray-500 mt-4">
                            No credit card required. Instant activation.
                        </p>
                    </GlassCard>
                </div>
            </div>
        </div>
    )
}
