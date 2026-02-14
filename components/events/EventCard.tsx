import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, Globe } from 'lucide-react';
import { NeonButton } from '../ui/NeonButton';

interface EventProps {
    event: {
        id: string;
        name: string;
        description: string;
        start_date: string;
        end_date: string;
        location: string;
        url: string;
        category: string;
        logo_url?: string;
    };
}

export function EventCard({ event }: EventProps) {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="group relative bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300"
        >
            <div className="absolute top-4 right-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-900/30 text-cyan-400 border border-cyan-500/20">
                    {event.category || 'EVENT'}
                </span>
            </div>

            <div className="flex flex-col h-full">
                {/* Header */}
                <div className="mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                        {event.name}
                    </h3>

                    {/* Date & Location */}
                    <div className="flex flex-col gap-2 text-sm text-slate-400 font-mono">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-emerald-400" />
                            <span>{formatDate(event.start_date)} - {formatDate(event.end_date)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-red-400" />
                            <span>{event.location}</span>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm mb-6 flex-grow line-clamp-3">
                    {event.description}
                </p>

                {/* Action */}
                <div className="mt-auto pt-4 border-t border-white/10 text-center">
                    <a href={event.url} target="_blank" rel="noopener noreferrer" className="block w-full">
                        <NeonButton variant="primary" className="w-full flex items-center justify-center gap-2 text-xs">
                            <ExternalLink className="w-3 h-3" />
                            VISIT SITE
                        </NeonButton>
                    </a>
                </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 rounded-2xl group-hover:from-cyan-500/10 group-hover:via-emerald-500/10 group-hover:to-cyan-500/10 transition-all duration-500 z-[-1]" />
        </motion.div>
    );
}
