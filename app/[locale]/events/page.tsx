'use client';

import { EventCard } from '@/components/events/EventCard';
import { supabase } from '@/lib/supabase';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { Layers } from 'lucide-react';

interface Event {
    id: string;
    name: string;
    description: string;
    start_date: string;
    end_date: string;
    location: string;
    url: string;
    category: string;
    logo_url?: string;
}

export default function EventsPage() {
    const t = useTranslations('Nav');
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchEvents() {
            setLoading(true);
            const { data, error } = await supabase
                .from('events')
                .select('*')
                .order('start_date', { ascending: true }); // Soonest first

            if (error) {
                console.error("Supabase Error:", error);
            } else if (data) {
                setEvents(data);
            }
            setLoading(false);
        }
        fetchEvents();
    }, []);

    const upcomingEvents = events.filter(e => new Date(e.end_date) >= new Date());
    const pastEvents = events.filter(e => new Date(e.end_date) < new Date());

    return (
        <main className="min-h-screen bg-slate-950 text-white pt-24 pb-20">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex justify-center mb-4"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 border border-cyan-500/30 flex items-center justify-center">
                            <Layers className="w-8 h-8 text-cyan-400" />
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400"
                    >
                        GLOBAL EVENTS 2025
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 max-w-2xl mx-auto text-lg"
                    >
                        The nexus of upcoming robotics conferences, expos, and summits.
                    </motion.p>
                </div>

                {/* Loading State */}
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20 space-y-4">
                        <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
                        <p className="text-cyan-500/50 font-mono text-sm tracking-widest animate-pulse">
                            SYNCING GLOBAL CALENDAR...
                        </p>
                    </div>
                ) : (
                    <>
                        {/* Upcoming Events */}
                        <div className="mb-20">
                            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                <span className="w-2 h-8 bg-cyan-500 rounded-full" />
                                UPCOMING
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {upcomingEvents.length > 0 ? (
                                    upcomingEvents.map((event) => (
                                        <EventCard key={event.id} event={event} />
                                    ))
                                ) : (
                                    <p className="text-slate-500 font-mono">No upcoming events scheduled.</p>
                                )}
                            </div>
                        </div>

                        {/* Past Events */}
                        {pastEvents.length > 0 && (
                            <div className="opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                                <h2 className="text-2xl font-bold text-slate-500 mb-8 flex items-center gap-3">
                                    <span className="w-2 h-8 bg-slate-700 rounded-full" />
                                    CONCLUDED
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                    {pastEvents.map((event) => (
                                        <EventCard key={event.id} event={event} />
                                    ))}
                                </div>
                            </div>
                        )}
                    </>
                )}

            </div>
        </main>
    );
}
