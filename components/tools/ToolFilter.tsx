'use client';

import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';

interface ToolFilterProps {
    categories: string[];
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
    searchQuery: string;
    onSearchChange: (query: string) => void;
}

export const ToolFilter = ({
    categories,
    selectedCategory,
    onSelectCategory,
    searchQuery,
    onSearchChange
}: ToolFilterProps) => {
    return (
        <div className="w-full space-y-6 mb-12">
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="w-5 h-5 text-slate-500" />
                </div>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder="Search AI tools by name, description, or tag..."
                    className="w-full pl-12 pr-4 py-4 bg-slate-900/50 border border-slate-800 rounded-full text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all font-mono text-sm shadow-xl backdrop-blur-md"
                />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap justify-center gap-2">
                <button
                    onClick={() => onSelectCategory('All')}
                    className={`px-4 py-2 rounded-full text-xs font-mono border transition-all duration-300 ${selectedCategory === 'All'
                            ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                            : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-600 hover:text-slate-200'
                        }`}
                >
                    ALL TOOLS
                </button>
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => onSelectCategory(cat)}
                        className={`px-4 py-2 rounded-full text-xs font-mono border transition-all duration-300 ${selectedCategory === cat
                                ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                                : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-600 hover:text-slate-200'
                            }`}
                    >
                        {cat.toUpperCase()}
                    </button>
                ))}
            </div>
        </div>
    );
};
