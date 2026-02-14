import { ShieldCheck } from "lucide-react"

export function TrustBadge() {
    return (
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-xs font-bold uppercase tracking-wide">
            <ShieldCheck className="w-4 h-4" />
            <span>YZ-RA Verified</span>
        </div>
    )
}
