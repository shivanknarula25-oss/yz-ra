'use client';

import { useEffect, useState } from 'react';
import { getMarketData } from '@/lib/market_data';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus, Activity } from 'lucide-react';

import { useTranslations } from 'next-intl';

interface MarketIndex {
    name: string;
    value: number;
    change: number;
    trend: 'up' | 'down' | 'neutral';
}

const INDEX_KEYS: Record<string, string> = {
    'ICRA Robotics Select': 'icra_select',
    'China Robot Index': 'china_index',
    'Global Automation ETF': 'global_etf',
    'AI & Robotics': 'ai_robotics'
};

export const MarketDashboard = () => {
    const t = useTranslations('Market');
    const [indices, setIndices] = useState<MarketIndex[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getMarketData();
            setIndices(data);
        };

        fetchData();
        const interval = setInterval(fetchData, 3000); // Live update simulation
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full bg-slate-950 border-b border-slate-800">
            <div className="container px-4 py-2">
                <div className="flex items-center gap-2 mb-2">
                    <Activity className="w-4 h-4 text-cyan-500" />
                    <span className="text-xs font-mono text-cyan-500 uppercase tracking-wider">{t('header')}</span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-800 border border-slate-800">
                    {indices.map((idx, i) => (
                        <div key={i} className="bg-slate-950 p-4 hover:bg-slate-900 transition-colors cursor-pointer group">
                            <div className="flex justify-between items-start mb-1">
                                <span className="text-xs text-slate-400 font-mono uppercase">
                                    {INDEX_KEYS[idx.name] ? t(`indices.${INDEX_KEYS[idx.name]}`) : idx.name}
                                </span>
                                {idx.trend === 'up' && <TrendingUp className="w-3 h-3 text-emerald-500" />}
                                {idx.trend === 'down' && <TrendingDown className="w-3 h-3 text-red-500" />}
                                {idx.trend === 'neutral' && <Minus className="w-3 h-3 text-slate-500" />}
                            </div>

                            <div className="flex items-end gap-2">
                                <span className="text-lg font-bold text-white font-mono tracking-tight">
                                    {idx.value.toFixed(2)}
                                </span>
                                <span className={`text-xs font-mono mb-1 ${idx.change > 0 ? 'text-emerald-500' :
                                    idx.change < 0 ? 'text-red-500' : 'text-slate-500'
                                    }`}>
                                    {idx.change > 0 ? '+' : ''}{idx.change}%
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
