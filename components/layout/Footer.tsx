import Link from "next/link"
import { Bot, Mail, MapPin, Linkedin, Twitter, Github } from "lucide-react"

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black/40 backdrop-blur-sm pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                                <span className="font-bold text-white">Y</span>
                            </div>
                            <span className="text-xl font-bold tracking-widest text-white">YZ-RA</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            The Robotics Corridor between India and China. Connecting innovation to manufacturing at global scale.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Platform</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-primary transition-colors">Member Directory</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">BOM Cost Estimator</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Regulatory Bot</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Neural News Stream</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Association</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Membership Tiers</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Events & Summits</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Contact</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> support@yz-ra.asia</li>
                            <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Bengaluru / Shenzhen</li>
                        </ul>
                        <div className="flex gap-4 mt-6">
                            <Link href="#" className="text-gray-400 hover:text-white"><Linkedin className="w-5 h-5" /></Link>
                            <Link href="#" className="text-gray-400 hover:text-white"><Twitter className="w-5 h-5" /></Link>
                            <Link href="#" className="text-gray-400 hover:text-white"><Github className="w-5 h-5" /></Link>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 text-center text-xs text-gray-600">
                    © {new Date().getFullYear()} India China Robotic Alliance. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
