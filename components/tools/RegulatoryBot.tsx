"use client"

import { useState } from "react"
import { GlassCard } from "../ui/GlassCard"
import { NeonButton } from "../ui/NeonButton"
import { Send, Bot, FileText, CheckCircle2 } from "lucide-react"

export function RegulatoryBot() {
    const [messages, setMessages] = useState([
        { role: "bot", text: "Hello! I am the YZ-RA Compliance AI. I can help you navigate export regulations between India and China. Ask me about HS Codes, Tariffs, or Certification." }
    ])
    const [input, setInput] = useState("")

    const handleSend = () => {
        if (!input.trim()) return
        setMessages([...messages, { role: "user", text: input }])
        setInput("")

        // Simulate response
        setTimeout(() => {
            setMessages(prev => [...prev, { role: "bot", text: "Searching DGFT and China Customs database... Based on current regulations (2025), drone components under HS Code 8807 require DGCA Type Certification for import into India." }])
        }, 1500)
    }

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 z-10 relative">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Regulatory Intelligence</h2>
                    <p className="text-gray-400">Instant answers to complex cross-border trade questions.</p>
                </div>

                <GlassCard className="max-w-3xl mx-auto h-[500px] flex flex-col border-secondary/30 shadow-[0_0_30px_rgba(6,182,212,0.1)]">
                    {/* Header */}
                    <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/5">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center border border-secondary/50">
                                <Bot className="w-6 h-6 text-secondary" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-sm">Compliance Bot v2.0</h3>
                                <span className="text-[10px] text-green-400 flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Online
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Chat Area */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-4">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] rounded-2xl p-4 text-sm leading-relaxed ${msg.role === 'user'
                                    ? 'bg-primary text-white rounded-br-none'
                                    : 'bg-white/10 text-gray-200 rounded-bl-none border border-white/5'
                                    }`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Input Area */}
                    <div className="p-4 border-t border-white/10 bg-white/5">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Ask about tariffs, permits, or logistics..."
                                className="flex-1 bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-secondary/50 transition-colors"
                            />
                            <NeonButton onClick={handleSend} variant="secondary" className="px-4">
                                <Send className="w-5 h-5" />
                            </NeonButton>
                        </div>
                        <div className="flex justify-center gap-4 mt-3">
                            <span className="text-[10px] text-gray-500 flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
                                <FileText className="w-3 h-3" /> DGFT Guidelines
                            </span>
                            <span className="text-[10px] text-gray-500 flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
                                <CheckCircle2 className="w-3 h-3" /> Startups India Policy
                            </span>
                        </div>
                    </div>
                </GlassCard>
            </div>
        </section>
    )
}
