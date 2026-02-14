import { cn } from "@/lib/utils"

interface SectionWrapperProps {
    children: React.ReactNode
    className?: string
    id?: string
}

export function SectionWrapper({ children, className, id }: SectionWrapperProps) {
    return (
        <section id={id} className={cn("container mx-auto px-4 py-16 md:py-24", className)}>
            {children}
        </section>
    )
}
