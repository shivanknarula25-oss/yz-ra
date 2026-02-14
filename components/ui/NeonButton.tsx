"use client"

import { cn } from "../../lib/utils"
import { motion, HTMLMotionProps } from "framer-motion"

interface NeonButtonProps extends HTMLMotionProps<"button"> {
    children: React.ReactNode
    variant?: "primary" | "secondary" | "outline"
}

export function NeonButton({ className, children, variant = "primary", ...props }: NeonButtonProps) {
    const variants = {
        primary: "bg-primary text-white border-primary shadow-[0_0_15px_rgba(239,68,68,0.5)] hover:shadow-[0_0_25px_rgba(239,68,68,0.8)]",
        secondary: "bg-secondary text-black border-secondary shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:shadow-[0_0_25px_rgba(6,182,212,0.8)]",
        outline: "bg-transparent text-white border-white/20 hover:border-white/50 hover:bg-white/5"
    }

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
                "relative rounded-full px-6 py-2.5 font-bold uppercase tracking-wider transition-all duration-300 border",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    )
}
