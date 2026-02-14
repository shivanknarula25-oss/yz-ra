"use client"

import { Link } from "../../i18n/routing"
import { useState } from "react"
import { Menu, X, User, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useAuth } from "../providers/AuthProvider"
import { NeonButton } from "../ui/NeonButton"
import { LanguageSwitcher } from "../LanguageSwitcher"
import { useTranslations } from "next-intl"

export function Navbar() {
    const t = useTranslations('Navbar');
    const { user, signOut } = useAuth()
    const [isOpen, setIsOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

    const navLinks = [
        { name: t('links.home'), href: "/" },
        { name: t('links.news'), href: "/news" },
        {
            name: t('links.members'),
            href: "/members",
            dropdownItems: [
                { name: t('dropdown.integrators'), href: "/members/integrators" },
                { name: t('dropdown.india'), href: "/members/india" },
                { name: t('dropdown.china'), href: "/members/china" },
                { name: t('dropdown.others'), href: "/members/others" },
            ]
        },
        { name: t('links.tools'), href: "/tools" },
        { name: t('links.events'), href: "/events" },
    ]

    const handleDropdownEnter = (name: string) => {
        setActiveDropdown(name)
    }

    const handleDropdownLeave = () => {
        setActiveDropdown(null)
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
            <div className="max-w-7xl mx-auto backdrop-blur-md bg-background/70 border border-white/10 rounded-2xl flex items-center justify-between px-6 py-3 shadow-2xl">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <span className="font-bold text-white">Y</span>
                    </div>
                    <span className="text-xl font-bold tracking-widest text-white">{t('title')}</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <div
                            key={link.name}
                            className="relative"
                            onMouseEnter={() => link.dropdownItems && handleDropdownEnter(link.name)}
                            onMouseLeave={handleDropdownLeave}
                        >
                            <Link
                                href={link.href}
                                className="flex items-center gap-1 text-sm font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-wider py-2"
                            >
                                {link.name}
                                {link.dropdownItems && <ChevronDown className="w-3 h-3" />}
                            </Link>

                            {/* Dropdown Menu */}
                            <AnimatePresence>
                                {link.dropdownItems && activeDropdown === link.name && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-0 w-64 pt-2"
                                    >
                                        <div className="bg-background/95 backdrop-blur-xl border border-white/10 rounded-xl p-2 shadow-xl flex flex-col gap-1">
                                            {link.dropdownItems.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </nav>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <LanguageSwitcher />

                    {user ? (
                        <div className="flex items-center gap-3">
                            <div className="text-right hidden lg:block">
                                <span className="block text-xs text-secondary font-bold">OPERATIVE</span>
                                <span className="block text-[10px] text-gray-400">{user.email}</span>
                            </div>
                            <NeonButton
                                variant="outline"
                                onClick={() => signOut()}
                                className="flex items-center gap-2 text-xs border-red-500/50 hover:bg-red-500/20"
                            >
                                Logout
                            </NeonButton>
                        </div>
                    ) : (
                        <div className="flex items-center gap-6">
                            <Link href="/login" className="hidden lg:block">
                                <span className="text-xs font-bold text-gray-400 hover:text-white transition-colors uppercase tracking-wider">{t('links.login')}</span>
                            </Link>
                            <Link href="/join">
                                <NeonButton variant="primary" className="flex items-center gap-2 text-xs font-bold">
                                    <User className="w-4 h-4" />
                                    {t('links.join')}
                                </NeonButton>
                            </Link>
                        </div>
                    )}
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center gap-4">
                    <LanguageSwitcher />
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-20 left-6 right-6 bg-background/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col gap-4 md:hidden"
                    >
                        {navLinks.map((link) => (
                            <div key={link.name}>
                                <Link
                                    href={link.href}
                                    className="block text-lg font-medium text-white py-2 border-b border-white/5"
                                    onClick={() => !link.dropdownItems && setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                                {link.dropdownItems && (
                                    <div className="pl-4 mt-2 flex flex-col gap-2 border-l border-white/10">
                                        {link.dropdownItems.map(item => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className="block text-sm text-gray-400 py-1"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
