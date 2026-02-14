'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface ToolCardProps {
    tool: {
        id?: string;
        name: string;
        description: string;
        url: string;
        category: string;
        pricing_model: string;
        tags: string[];
        image_url?: string;
    };
}

export const ToolCard = ({ tool }: ToolCardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    const getPricingColor = (pricing: string) => {
        const p = pricing.toLowerCase();
        if (p.includes('free') && !p.includes('paid')) return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
        if (p.includes('paid')) return 'text-amber-400 bg-amber-400/10 border-amber-400/20';
        if (p.includes('freemium')) return 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20';
        return 'text-slate-400 bg-slate-400/10 border-slate-400/20';
    };

    return (
        <motion.div
            className="group relative h-full bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 flex flex-col"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
        >
            {/* Glow Effect */}
            <div className={`absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

            <div className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                        {/* Fallback Icon / Logo Placeholder */}
                        <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-lg font-bold text-slate-500 font-mono">
                            {tool.image_url ? (
                                <img src={tool.image_url} alt={tool.name} className="w-full h-full object-cover rounded-lg" onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = 'none';
                                    (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                                }} />
                            ) : null}
                            <span className={tool.image_url ? 'hidden' : ''}>{tool.name.substring(0, 2).toUpperCase()}</span>
                        </div>
                        <div>
                            <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-1">
                                {tool.name}
                            </h3>
                            <span className="text-[10px] uppercase font-mono text-slate-500">
                                {tool.category}
                            </span>
                        </div>
                    </div>
                </div>

                <p className="text-sm text-slate-400 line-clamp-3 mb-4 leading-relaxed flex-1">
                    {tool.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    <span className={`text-[10px] px-2 py-1 rounded-full font-mono border ${getPricingColor(tool.pricing_model)}`}>
                        {tool.pricing_model}
                    </span>
                </div>
            </div>

            <div className="p-4 border-t border-slate-800/50 bg-slate-950/30 flex justify-between items-center">
                <div className="flex gap-1">
                    {/* Placeholder for future rating/stats */}
                    {/* <Star className="w-3 h-3 text-slate-600" /> */}
                </div>

                <Link href={tool.url} target="_blank" className="flex items-center gap-2 text-xs font-mono text-cyan-500 hover:text-cyan-300 transition-colors uppercase font-bold tracking-wider">
                    Visit Tool <ExternalLink className="w-3 h-3" />
                </Link>
            </div>
        </motion.div>
    );
};
