"use client"

import { useState, type MouseEvent, type ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface RippleButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  variant?: "primary" | "secondary" | "ghost"
  size?: "sm" | "md" | "lg"
  href?: string
}

interface Ripple {
  id: number
  x: number
  y: number
}

export default function RippleButton({
  children,
  onClick,
  className,
  variant = "primary",
  size = "md",
  href,
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([])

  const handleClick = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const newRipple: Ripple = {
      id: Date.now(),
      x,
      y,
    }

    setRipples((prev) => [...prev, newRipple])

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id))
    }, 600)

    onClick?.()
  }

  const baseStyles = cn(
    "relative overflow-hidden rounded-full font-semibold transition-all duration-300",
    "focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:ring-offset-2 focus:ring-offset-transparent",
  )

  const variants = {
    primary: "bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/40 hover:shadow-xl transition-all duration-300",
    secondary: "glass text-white hover:bg-white/10 hover:shadow-md hover:shadow-cyan-500/20 transition-all duration-300",
    ghost: "text-white/70 hover:text-white hover:bg-white/5 transition-all duration-300",
  }

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  const Component = href ? motion.a : motion.button
  const props = href ? { href } : { type: "button" as const }

  return (
    <Component
      {...props}
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>

      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              position: "absolute",
              left: ripple.x,
              top: ripple.y,
              width: 20,
              height: 20,
              marginLeft: -10,
              marginTop: -10,
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.4)",
            }}
          />
        ))}
      </AnimatePresence>
    </Component>
  )
}
