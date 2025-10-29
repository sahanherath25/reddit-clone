"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function Header() {
    const [signedIn, setSignedIn] = useState(false)

    return (
        <motion.header
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg fixed top-0 left-0 z-50"
        >
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
                {/* Logo */}
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-white text-2xl font-bold tracking-wide cursor-pointer"
                >
                    My<span className="text-yellow-300">Blog</span>
                </motion.div>

                {/* Search */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    className="flex-1 max-w-md mx-6"
                >
                    <input
                        type="text"
                        placeholder="Search articles..."
                        className="w-full px-4 py-2 rounded-full outline-none text-gray-800 shadow-inner focus:ring-2 focus:ring-yellow-300"
                    />
                </motion.div>

                {/* Sign In/Out */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSignedIn(!signedIn)}
                    className="bg-yellow-300 text-gray-900 font-semibold px-5 py-2 rounded-full shadow-md hover:bg-yellow-400 transition"
                >
                    {signedIn ? "Sign Out" : "Sign In"}
                </motion.button>
            </div>
        </motion.header>
    )
}
