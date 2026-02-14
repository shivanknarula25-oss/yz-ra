'use client';

import { ToolCard } from '@/components/tools/ToolCard';
import { ToolFilter } from '@/components/tools/ToolFilter';
import { supabase } from '@/lib/supabase';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

// Define Tool Interface
interface Tool {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    pricing_model: string;
    tags: string[];
    image_url?: string;
}

export default function ToolsPage() {
    const t = useTranslations('Nav'); // Reusing Nav translations or create new 'Tools' scope
    const [tools, setTools] = useState<Tool[]>([]);
    const [filteredTools, setFilteredTools] = useState<Tool[]>([]);
    const [loading, setLoading] = useState(true);

    // Filter States
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Fetch Tools
    useEffect(() => {
        async function fetchTools() {
            setLoading(true);
            console.log("Fetching tools from Supabase...");

            // Debug Env Vars (Safe to log URL, keep Key hidden/partial if needed)
            console.log("Supabase URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);

            const { data, error } = await supabase
                .from('ai_tools')
                .select('*')
                .order('name', { ascending: true });

            if (error) {
                console.error("Supabase Error:", error);
            } else {
                console.log("Supabase Data:", data?.length, "rows found.");
                if (data) {
                    setTools(data);
                    setFilteredTools(data);
                }
            }
            setLoading(false);
        }
        fetchTools();
    }, []);

    // Filter Logic
    useEffect(() => {
        let result = tools;

        if (selectedCategory !== 'All') {
            result = result.filter(tool => tool.category === selectedCategory);
        }

        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            result = result.filter(tool =>
                tool.name.toLowerCase().includes(query) ||
                tool.description.toLowerCase().includes(query) ||
                tool.tags.some(tag => tag.toLowerCase().includes(query))
            );
        }

        setFilteredTools(result);
    }, [searchQuery, selectedCategory, tools]);

    // Extract Unique Categories
    const categories = Array.from(new Set(tools.map(t => t.category))).sort();

    return (
        <main className="min-h-screen bg-slate-950 text-white pt-24 pb-20">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400"
                    >
                        AI ARSENAL
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 max-w-2xl mx-auto text-lg"
                    >
                        Curated intelligence tools for maximum productivity.
                    </motion.p>
                </div>

                {/* Filters */}
                <ToolFilter
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onSelectCategory={setSelectedCategory}
                    searchQuery={searchQuery}
                    onSearchChange={setSearchQuery}
                />

                {/* Grid */}
                {loading ? (
                    <div className="text-center text-slate-500 font-mono animate-pulse">
                        INITIALIZING TOOL DATABASE...
                    </div>
                ) : (
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    >
                        <AnimatePresence>
                            {filteredTools.map((tool) => (
                                <ToolCard key={tool.id} tool={tool} />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                )}

                {!loading && filteredTools.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-slate-500 font-mono">NO TOOLS FOUND MATCHING CRITERIA</p>
                    </div>
                )}

            </div>
        </main>
    );
}
