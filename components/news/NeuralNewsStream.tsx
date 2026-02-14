"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Radio, Newspaper, ArrowUpRight, Activity, Globe } from "lucide-react"
import { GlassCard } from "../ui/GlassCard"
import { RoboticsNews } from "../../types"

interface NeuralNewsStreamProps {
    initialNews?: RoboticsNews[];
}

export function NeuralNewsStream({ initialNews = [] }: NeuralNewsStreamProps) {
    const [news, setNews] = useState<RoboticsNews[]>(initialNews)

    return (
        <section className="relative overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Control Panel */}
                <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <div className="w-3 h-3 bg-green-500 rounded-full absolute inset-0" />
                            <div className="w-3 h-3 bg-green-500 rounded-full relative" />
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-white tracking-widest flex items-center gap-2 font-orbitron">
                            LIVE INTELLIGENCE
                        </h2>
                    </div>
                </div>

                {/* News Grid */}
                {news.length === 0 ? (
                    <div className="text-center py-20 border border-dashed border-white/10 rounded-xl">
                        <Activity className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                        <h3 className="text-xl text-gray-400 font-orbitron">NO INTELLIGENCE DATA</h3>
                        <p className="text-gray-500 mt-2">Activate the agent via terminal scanning.</p>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {news.map((item, index) => (
                            <GlassCard
                                key={item.id}
                                className="p-0 overflow-hidden hover:border-cyan-500/50 transition-all group flex flex-col h-full"
                                hoverEffect
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {/* Score Badge */}
                                <div className="absolute top-0 right-0 bg-black/60 backdrop-blur-md border-b border-l border-white/10 px-3 py-1 z-10">
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] text-gray-400 font-mono">SCORE</span>
                                        <span className={`text-lg font-bold font-orbitron ${item.total_score >= 14 ? 'text-red-500' : 'text-cyan-500'}`}>
                                            {item.total_score}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col h-full">
                                    <div className="flex items-start justify-between mb-4">
                                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded ${item.country_focus === 'India' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                                            item.country_focus === 'China' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                                                'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                            }`}>
                                            {item.country_focus}
                                        </span>
                                        <span className="text-[10px] text-gray-500 font-mono flex items-center gap-1 mt-1 mr-16">
                                            {new Date(item.published_date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-bold text-white leading-tight mb-3 group-hover:text-cyan-400 transition-colors">
                                        {item.headline}
                                    </h3>

                                    <p className="text-sm text-gray-400 mb-6 line-clamp-3 flex-grow">
                                        {item.summary}
                                    </p>

                                    <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                                        <div className="flex items-center gap-2">
                                            <Globe className="w-3 h-3 text-gray-600" />
                                            <span className="text-xs text-gray-500 truncate max-w-[120px]">{item.source_name}</span>
                                        </div>
                                        <a
                                            href={item.source_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-xs font-bold text-cyan-500 hover:text-cyan-300 transition-colors"
                                        >
                                            READ ANALYSIS <ArrowUpRight className="w-3 h-3" />
                                        </a>
                                    </div>
                                </div>

                                <div className="h-1 w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </GlassCard>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}
