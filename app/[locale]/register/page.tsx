"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { GlassCard } from "@/components/ui/GlassCard"
import { NeonButton } from "@/components/ui/NeonButton"
import { supabase } from "@/lib/supabase"
import { Loader2, AlertCircle, CheckCircle } from "lucide-react"

export default function RegisterPage() {
    const router = useRouter()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState(false)

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        try {
            const { error: signUpError } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        full_name: name,
                    },
                },
            })

            if (signUpError) throw signUpError

            setSuccess(true)
            // Optional: Auto login logic could go here, or redirect to onboard
        } catch (err: any) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    if (success) {
        return (
            <div className="min-h-screen pt-24 pb-12 flex items-center justify-center relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 max-w-md">
                    <GlassCard className="p-8 border-green-500/30 bg-green-500/5 text-center">
                        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle className="w-8 h-8 text-green-500" />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-4">Access Granted</h2>
                        <p className="text-gray-300 mb-8">
                            Your operative account has been initialized. Please check your email to verify your clearance level.
                        </p>
                        <Link href="/login">
                            <NeonButton variant="primary" className="w-full justify-center">
                                Proceed to Login
                            </NeonButton>
                        </Link>
                    </GlassCard>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen pt-24 pb-12 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />

            <div className="container mx-auto px-4 relative z-10 max-w-md">
                <GlassCard className="p-8 border-white/10">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-white font-display mb-2">Initialize Profile</h1>
                        <p className="text-gray-400">Create your operative account to join the network.</p>
                    </div>

                    {error && (
                        <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-4 mb-6 flex items-start gap-3">
                            <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                            <p className="text-sm text-red-400">{error}</p>
                        </div>
                    )}

                    <form onSubmit={handleRegister} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Full Name</label>
                            <input
                                type="text"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                placeholder="John Doe"
                            />
                        </div>

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
                            <label className="text-sm font-medium text-gray-300">Password</label>
                            <input
                                type="password"
                                required
                                minLength={6}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                placeholder="Create a secure password"
                            />
                            <p className="text-xs text-gray-500">Must be at least 6 characters.</p>
                        </div>

                        <NeonButton
                            variant="primary"
                            className="w-full justify-center py-3 bg-secondary border-secondary text-black hover:bg-secondary/90"
                            disabled={loading}
                        >
                            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Request Clearance"}
                        </NeonButton>
                    </form>

                    <div className="mt-8 text-center pt-8 border-t border-white/5">
                        <p className="text-gray-400 text-sm">
                            Already have an account?{" "}
                            <Link href="/login" className="text-primary hover:text-white font-bold transition-colors">
                                Access System
                            </Link>
                        </p>
                    </div>
                </GlassCard>
            </div>
        </div>
    )
}
