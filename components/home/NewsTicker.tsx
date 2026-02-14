'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../../lib/supabase';
import { Terminal } from 'lucide-react';

interface NewsItem {
    id: string;
    headline: string;
    slug: string;
    source_name: string;
    published_date: string;
}

import { useTranslations } from 'next-intl';

export const NewsTicker = () => {
    const t = useTranslations('NewsTicker');
    const [news, setNews] = useState<NewsItem[]>([]);

    useEffect(() => {
        const fetchNews = async () => {
            const { data } = await supabase
                .from('robotics_news')
                .select('id, headline, slug, source_name, published_date')
                .order('published_date', { ascending: false })
                .limit(10);

            if (data && data.length > 0) {
                setNews(data);
            } else {
                setNews([
                    { id: '1', headline: "Global Robotics Market to Reach $200B by 2030", slug: "#", source_name: "MarketWatch", published_date: new Date().toISOString() },
                    { id: '2', headline: "New Humanoid Standards Released by ISO", slug: "#", source_name: "ISO", published_date: new Date().toISOString() },
                    { id: '3', headline: "Tesla Optimus Gen 3 Leaked", slug: "#", source_name: "TechCrunch", published_date: new Date().toISOString() },
                ]);
            }
        };

        fetchNews();
    }, []);

    return (
        <div className="w-full bg-slate-950 border-b border-slate-800 h-8 flex items-center overflow-hidden">
            <div className="bg-slate-900 text-slate-400 text-xs font-mono font-bold px-3 h-full flex items-center border-r border-slate-800 shrink-0">
                <Terminal className="w-3 h-3 mr-2" />
                {t('latest_wire')}
            </div>

            <div className="flex overflow-hidden whitespace-nowrap w-full">
                <motion.div
                    className="flex gap-8 items-center"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: news.length * 6 // Slightly slower for readability
                    }}
                >
                    {[...news, ...news].map((item, i) => (
                        <div key={`${item.id}-${i}`} className="flex items-center gap-4 text-xs font-mono text-slate-300">
                            <span className="text-slate-600">||</span>
                            <span className="text-cyan-600 uppercase">[{item.source_name}]</span>
                            <span className="uppercase">{item.headline}</span>
                            <span className="text-slate-600">{new Date(item.published_date).toLocaleTimeString()}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};
