"use client"

import { motion } from "framer-motion"

export default function LoadingSpinner() {
    return (
        <div className="flex items-center justify-center p-8">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full"
            />
        </div>
    )
}