'use client';

import { FileText, Download, ArrowUpRight } from 'lucide-react';

const REPORTS = [
    {
        id: "RPT-2026-042",
        title: "Global Robotics Market Outlook 2026",
        category: "Market Research",
        date: "2026-02-14",
        size: "2.4 MB"
    },
    {
        id: "RPT-2026-041",
        title: "Humanoid Robot Supply Chain Analysis",
        category: "Tech Deep Dive",
        date: "2026-01-30",
        size: "4.1 MB"
    },
    {
        id: "RPT-2025-118",
        title: "2025 China Robotics Industry Blue Book",
        category: "Annual Report",
        date: "2025-12-15",
        size: "12.8 MB"
    },
    {
        id: "RPT-2025-099",
        title: "India Automation Sector Investment Guide",
        category: "Policy Brief",
        date: "2025-11-20",
        size: "1.2 MB"
    }
];

export const ResearchHub = () => {
    return (
        <section className="py-12 bg-slate-950 border-b border-slate-800">
            <div className="container px-4">

                {/* Header */}
                <div className="flex justify-between items-end mb-6">
                    <div>
                        <h2 className="text-xl font-bold text-white uppercase tracking-tight flex items-center gap-2">
                            <FileText className="w-5 h-5 text-cyan-500" />
                            Intelligence Hub
                        </h2>
                        <p className="text-slate-500 font-mono text-xs mt-1">
                            ACCESS_LEVEL: MEMBER // ARCHIVE_STATUS: ONLINE
                        </p>
                    </div>
                    <button className="text-xs font-mono text-cyan-500 hover:text-white flex items-center gap-1 uppercase">
                        [ View Full Archive ] <ArrowUpRight className="w-3 h-3" />
                    </button>
                </div>

                {/* Data Table */}
                <div className="w-full overflow-x-auto border border-slate-800 bg-slate-900">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-950 text-xs font-mono text-slate-500 border-b border-slate-800 uppercase">
                                <th className="p-3 border-r border-slate-800 w-32">ID</th>
                                <th className="p-3 border-r border-slate-800 w-32">Date</th>
                                <th className="p-3 border-r border-slate-800 w-48">Category</th>
                                <th className="p-3 border-r border-slate-800">Report Title</th>
                                <th className="p-3 w-32">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm font-mono text-slate-300">
                            {REPORTS.map((report, i) => (
                                <tr key={i} className="border-b border-slate-800 hover:bg-slate-800 transition-colors group">
                                    <td className="p-3 border-r border-slate-800 text-slate-500">{report.id}</td>
                                    <td className="p-3 border-r border-slate-800">{report.date}</td>
                                    <td className="p-3 border-r border-slate-800 text-cyan-500">{report.category}</td>
                                    <td className="p-3 border-r border-slate-800 font-sans text-white group-hover:text-cyan-400">{report.title}</td>
                                    <td className="p-3">
                                        <button className="flex items-center gap-2 text-xs text-slate-400 hover:text-white uppercase">
                                            <Download className="w-3 h-3" /> {report.size}
                                        </button>
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
