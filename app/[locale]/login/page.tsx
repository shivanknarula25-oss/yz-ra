"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { GlassCard } from "@/components/ui/GlassCard"
import { NeonButton } from "@/components/ui/NeonButton"
import { supabase } from "@/lib/supabase"
import { Loader2, AlertCircle } from "lucide-react"

export default function LoginPage() {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            })

            if (error) throw error

            router.push("/")
            router.refresh()
        } catch (err: any) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen pt-24 pb-12 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />

            <div className="container mx-auto px-4 relative z-10 max-w-md">
                <GlassCard className="p-8 border-white/10">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-white font-display mb-2">Welcome Back</h1>
                        <p className="text-gray-400">Enter your credentials to access the alliance network.</p>
                    </div>

                    {error && (
                        <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-4 mb-6 flex items-start gap-3">
                            <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                            <p className="text-sm text-red-400">{error}</p>
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Email Address</label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                placeholder="operative@company.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label className="text-sm font-medium text-gray-300">Password</label>
                                <Link href="#" className="text-xs text-primary hover:text-primary/80">Forgot?</Link>
                            </div>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                placeholder="••••••••"
                            />
                        </div>

                        <NeonButton
                            variant="primary"
                            className="w-full justify-center py-3"
                            disabled={loading}
                        >
                            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Access System"}
                        </NeonButton>
                    </form>

                    <div className="mt-8 text-center pt-8 border-t border-white/5">
                        <p className="text-gray-400 text-sm">
                            New to the alliance?{" "}
                            <Link href="/join" className="text-primary hover:text-white font-bold transition-colors">
                                Initialize Access
                            </Link>
                        </p>
                    </div>
                </GlassCard>
            </div>
        </div>
    )
}
