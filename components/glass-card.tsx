"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
  delay?: number
  animateOnView?: boolean
}

export default function GlassCard({ children, className, hover = true, glow = false, delay = 0, animateOnView = true }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={animateOnView ? undefined : { opacity: 1, y: 0 }}
      whileInView={animateOnView ? { opacity: 1, y: 0 } : undefined}
      viewport={animateOnView ? { once: true, margin: "-50px" } : undefined}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={hover ? { y: -5, scale: 1.01 } : undefined}
      className={cn("relative group overflow-hidden rounded-2xl", "glass", className)}
    >
      {/* Glow effect */}
      {glow && (
        <>
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400/10 via-blue-400/10 to-cyan-400/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-700" />
        </>
      )}

      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
      </div>

      {/* Subtle inner glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Border glow with animation */}
      <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-cyan-400/40 transition-all duration-300" />
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-cyan-400/20 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-500" />
    </motion.div>
  )
}
