import { GlassCard } from "../ui/GlassCard"
import { Cpu, Users, Globe, Zap, ArrowUpRight } from "lucide-react"

const features = [
    {
        icon: <Cpu className="w-8 h-8 text-primary" />,
        title: "Shenzhen Supply Chain",
        desc: "Direct access to 500+ verified factories for PCB/PCBA and CNC machining at volume rates."
    },
    {
        icon: <Users className="w-8 h-8 text-secondary" />,
        title: "Bengaluru AI Talent",
        desc: "Connect with 12,000+ computer vision and SLAM engineers ready for remote collaboration."
    },
    {
        icon: <Globe className="w-8 h-8 text-green-400" />,
        title: "Cross-Border Logistics",
        desc: "Simplified customs clearance and optimized shipping routes for robotics hardware."
    },
    {
        icon: <Zap className="w-8 h-8 text-orange-400" />,
        title: "Rapid Prototyping",
        desc: "From CAD to physical prototype in under 7 days with our express partner network."
    },
]

export function WhyJoin() {
    return (
        <section className="py-24 relative bg-black/40">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        The <span className="text-primary">Unfair Advantage</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Why leading robotics companies choose YZ-RA as their growth engine.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((f, i) => (
                        <GlassCard key={i} className="p-6 transition-all hover:-translate-y-2 group cursor-pointer" hoverEffect>
                            <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
                                {f.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                {f.title} <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-white/50" />
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    )
}
