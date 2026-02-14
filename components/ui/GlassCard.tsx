"use client"

import { cn } from "../../lib/utils"
import { motion, HTMLMotionProps } from "framer-motion"

interface GlassCardProps extends HTMLMotionProps<"div"> {
    className?: string
    children: React.ReactNode
    hoverEffect?: boolean
}

export function GlassCard({ className, children, hoverEffect = false, ...props }: GlassCardProps) {
    return (
        <motion.div
            className={cn(
                "relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl",
                hoverEffect && "hover:border-primary/50 hover:shadow-primary/20 transition-all duration-300",
                className
            )}
            {...props}
        >
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity" />

            {children}
        </motion.div>
    )
}
