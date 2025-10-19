'use client'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-gray-200 py-10 overflow-hidden">
            {/* Animated background glow */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2, scale: [1, 1.2, 1] }}
                transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
                className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.15),transparent_70%)]"
            />

            <div className="relative container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 z-10">

                {/* Left side — Logo or text */}
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-xl font-semibold tracking-wide"
                >
                    Sahan<span className="text-amber-400">Blog</span>
                </motion.h2>

                {/* Center — Links */}
                <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="flex flex-wrap justify-center gap-6 text-sm font-medium"
                >
                    <li className="hover:text-amber-400 transition-colors cursor-pointer">Home</li>
                    <li className="hover:text-amber-400 transition-colors cursor-pointer">About</li>
                    <li className="hover:text-amber-400 transition-colors cursor-pointer">Contact</li>
                    <li className="hover:text-amber-400 transition-colors cursor-pointer">Privacy</li>
                </motion.ul>

                {/* Right side — Social icons */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex gap-5"
                >
                    <a href="https://github.com/" target="_blank" className="hover:text-amber-400 transition-colors">
                        <Github size={22} />
                    </a>
                    <a href="https://linkedin.com/" target="_blank" className="hover:text-amber-400 transition-colors">
                        <Linkedin size={22} />
                    </a>
                    <a href="mailto:hello@example.com" className="hover:text-amber-400 transition-colors">
                        <Mail size={22} />
                    </a>
                </motion.div>
            </div>

            {/* Bottom line */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-8 text-center text-xs text-gray-400"
            >
                © {new Date().getFullYear()} Sahan Herath — All Rights Reserved.
            </motion.div>
        </footer>
    )
}
