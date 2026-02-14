"use client"

import { useState } from "react"
import { GlassCard } from "../ui/GlassCard"
import { NeonButton } from "../ui/NeonButton"
import { Calculator, ArrowRight, TrendingDown } from "lucide-react"

export function BOMEstimator() {
    const [volume, setVolume] = useState(1000)
    const [complexity, setComplexity] = useState(50)

    // Mock calculation logic
    const domesticCost = (volume * 50) + (complexity * 100)
    const yzraCost = (volume * 35) + (complexity * 80) // Cheaper due to network efficiency
    const savings = domesticCost - yzraCost
    const percent = Math.round((savings / domesticCost) * 100)

    return (
        <section className="py-24 bg-gradient-to-b from-background to-black relative">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Pitch Content */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-wider">
                            <Calculator className="w-4 h-4" /> MEMBER UTILITY
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight font-display">
                            Cross-Border <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">
                                Manufacturing Estimator
                            </span>
                        </h2>

                        <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                            Calculate your potential savings by leveraging YZ-RA's vetted manufacturing partners in Shenzhen and Tamil Nadu.
                            Eliminate the guesswork in your supply chain.
                        </p>

                        <div className="pt-4">
                            <NeonButton className="flex items-center gap-2">
                                Access Full Engine <ArrowRight className="w-4 h-4" />
                            </NeonButton>
                            <p className="mt-4 text-xs text-gray-500 font-mono">
                                *Estimates based on real-time BOM data from 500+ partners.
                            </p>
                        </div>
                    </div>

                    {/* Right: The Tool UI */}
                    <GlassCard className="p-8 border-white/10 bg-white/5 backdrop-blur-xl relative group" hoverEffect>
                        {/* Decorative Elements */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl group-hover:bg-secondary/30 transition-all duration-700" />

                        <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2 relative z-10">
                            <TrendingDown className="text-green-500" /> Cost Analysis Preview
                        </h3>

                        <div className="space-y-8 relative z-10">
                            {/* Sliders Input Group */}
                            <div className="space-y-6">
                                <div className="space-y-3">
                                    <div className="flex justify-between text-sm font-medium text-gray-300">
                                        <span>Production Volume</span>
                                        <span className="font-mono text-secondary bg-secondary/10 px-2 py-0.5 rounded">{volume.toLocaleString()} units</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="100" max="10000" step="100"
                                        value={volume}
                                        onChange={(e) => setVolume(Number(e.target.value))}
                                        className="w-full h-1.5 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-secondary hover:accent-secondary/80 transition-all"
                                    />
                                </div>

                                <div className="space-y-3">
                                    <div className="flex justify-between text-sm font-medium text-gray-300">
                                        <span>PCB Complexity Index</span>
                                        <span className="font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">{complexity}%</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="10" max="100"
                                        value={complexity}
                                        onChange={(e) => setComplexity(Number(e.target.value))}
                                        className="w-full h-1.5 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary hover:accent-primary/80 transition-all"
                                    />
                                </div>
                            </div>

                            {/* Results Visualization */}
                            <div className="mt-8 space-y-5 pt-8 border-t border-white/10">
                                {/* Domestic Bar */}
                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs text-gray-400 uppercase tracking-widest">
                                        <span>Standard Sourcing</span>
                                        <span>${domesticCost.toLocaleString()}</span>
                                    </div>
                                    <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-gray-600 w-full" />
                                    </div>
                                </div>

                                {/* ICRA Bar */}
                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs text-white uppercase tracking-widest font-bold">
                                        <span className="text-secondary flex items-center gap-1">YZ-RA Network <ShieldCheckIcon className="w-3 h-3" /></span>
                                        <span>${yzraCost.toLocaleString()}</span>
                                    </div>
                                    <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden relative">
                                        <div
                                            className="h-full bg-secondary absolute top-0 left-0 transition-all duration-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                                            style={{ width: `${(yzraCost / domesticCost) * 100}%` }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 flex items-center justify-between mt-4">
                                <span className="text-green-400 font-bold text-sm uppercase tracking-wide">Estimated Savings</span>
                                <span className="text-3xl font-bold text-white tracking-tight">{percent}%</span>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </section>
    )
}

function ShieldCheckIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    )
}
