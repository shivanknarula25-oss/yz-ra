'use client';

import { ShieldCheck, Download, ArrowUpRight, Scale } from 'lucide-react';

const STANDARDS = [
    { code: "GB/T 36530-2018", title: "Robot Safety Requirements for Collaborative Operation", type: "National", status: "Active", date: "2018-07" },
    { code: "ISO 10218-1", title: "Robots and Robotic Devices - Safety Requirements", type: "International", status: "Active", date: "2011-07" },
    { code: "T/CRIA 1205-2023", title: "General Technical Specifications for Humanoid Robots", type: "Industry", status: "Draft", date: "2023-11" },
    { code: "UL 3300", title: "Outline of Investigation for Service Robots", type: "Safety", status: "Active", date: "2020-05" },
];

export const StandardsList = () => {
    return (
        <section className="py-12 bg-slate-950 border-b border-slate-800">
            <div className="container px-4">

                {/* Header */}
                <div className="flex justify-between items-end mb-6">
                    <div>
                        <h2 className="text-xl font-bold text-white uppercase tracking-tight flex items-center gap-2">
                            <Scale className="w-5 h-5 text-emerald-500" />
                            Standards & Compliance
                        </h2>
                        <p className="text-slate-500 font-mono text-xs mt-1">
                            REGULATORY_DB // SYNC_STATUS: UPDATED
                        </p>
                    </div>
                    <button className="text-xs font-mono text-emerald-500 hover:text-white flex items-center gap-1 uppercase">
                        [ Access Library ] <ArrowUpRight className="w-3 h-3" />
                    </button>
                </div>

                {/* Data Table */}
                <div className="w-full overflow-x-auto border border-slate-800 bg-slate-900">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-950 text-xs font-mono text-slate-500 border-b border-slate-800 uppercase">
                                <th className="p-3 border-r border-slate-800 w-32">Code</th>
                                <th className="p-3 border-r border-slate-800 w-24">Type</th>
                                <th className="p-3 border-r border-slate-800 w-24">Status</th>
                                <th className="p-3 border-r border-slate-800">Title</th>
                                <th className="p-3 w-24">Effective</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm font-mono text-slate-300">
                            {STANDARDS.map((std, i) => (
                                <tr key={i} className="border-b border-slate-800 hover:bg-slate-800 transition-colors group">
                                    <td className="p-3 border-r border-slate-800 text-emerald-500 font-bold">{std.code}</td>
                                    <td className="p-3 border-r border-slate-800 text-slate-500">{std.type}</td>
                                    <td className="p-3 border-r border-slate-800">
                                        <span className={`text-xs px-2 py-0.5 rounded-sm uppercase ${std.status === 'Active' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'
                                            }`}>
                                            {std.status}
                                        </span>
                                    </td>
                                    <td className="p-3 border-r border-slate-800 font-sans text-white">{std.title}</td>
                                    <td className="p-3 text-slate-500 text-xs">
                                        {std.date}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </section>
    );
};
