import Link from 'next/link';
import { Company } from '../../types';
import { Button } from '../ui/button';

interface CompanyCardProps {
    company: Company;
}

export function CompanyCard({ company }: CompanyCardProps) {
    return (
        <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:border-cyan-500/50 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]">
            {/* Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 blur transition duration-500 group-hover:opacity-20" />

            <div className="relative flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                        {/* Logo Placeholder */}
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-black/40 text-xl font-bold text-cyan-500 border border-white/10">
                            {company.logo_url ? (
                                <img src={company.logo_url} alt={company.name} className="h-full w-full object-contain rounded-lg" />
                            ) : (
                                company.name.charAt(0)
                            )}
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                                {company.name}
                            </h3>
                            <span className="text-xs font-mono text-cyan-400 bg-cyan-950/30 px-2 py-0.5 rounded border border-cyan-500/20">
                                {company.company_type?.name || 'Member'}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <p className="text-sm text-gray-400 line-clamp-2 mb-6 flex-grow">
                    {company.description || "No description available."}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between mt-auto">
                    <div className="flex flex-col">
                        {company.city && (
                            <span className="text-xs text-gray-500 flex items-center gap-1">
                                📍 {company.city}
                            </span>
                        )}
                    </div>

                    <Link href={`/members/${company.id}`} className="block">
                        <Button variant="outline" size="sm" className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300">
                            View Profile
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
