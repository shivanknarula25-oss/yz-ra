"use client"

import { motion } from "framer-motion"
import { NeonButton } from "../ui/NeonButton"
import { RoboticGlobe } from "../three/RoboticGlobe"
import { Bot, ArrowRight, Network } from "lucide-react"
import { useTranslations } from "next-intl"

export function Hero() {
    const t = useTranslations('Hero');

    return (
        <section className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
            {/* Background 3D Element */}
            <RoboticGlobe />

            {/* Content Overlay */}
            <div className="container mx-auto px-4 z-10 grid md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-sm font-medium text-gray-300">{t('badge')}</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
                        {t('title_prefix')} <span className="text-secondary">{t('title_highlight')}</span> <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">{t('title_suffix')}</span>
                    </h1>

                    <p className="text-xl text-gray-400 max-w-xl">
                        {t('description')}
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <NeonButton className="flex items-center gap-2 px-8 py-4 text-lg">
                            {t('cta_join')} <ArrowRight className="w-5 h-5" />
                        </NeonButton>
                        <NeonButton variant="outline" className="flex items-center gap-2 px-8 py-4 text-lg">
                            <Network className="w-5 h-5" /> {t('cta_explore')}
                        </NeonButton>
                    </div>

                    <div className="flex items-center gap-8 pt-8 text-sm text-gray-500 font-mono">
                        <div>
                            <strong className="block text-white text-xl">2,340+</strong>
                            <span>{t('stats.members')}</span>
                        </div>
                        <div>
                            <strong className="block text-white text-xl">$120M+</strong>
                            <span>{t('stats.funding')}</span>
                        </div>
                        <div>
                            <strong className="block text-white text-xl">62</strong>
                            <span>{t('stats.labs')}</span>
                        </div>
                    </div>
                </motion.div>

                {/* Visual/Empty Column (Globe takes this space visually) */}
                <div className="hidden md:block"></div>
            </div>
        </section>
    )
}
