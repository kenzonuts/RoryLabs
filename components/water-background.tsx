"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface Bubble {
  id: number
  x: number
  size: number
  duration: number
  delay: number
}

export default function WaterBackground() {
  const bubblesRef = useRef<Bubble[]>([])

  useEffect(() => {
    bubblesRef.current = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 30 + 8,
      duration: Math.random() * 15 + 20,
      delay: Math.random() * 15,
    }))
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 -right-40 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 left-1/4 w-72 h-72 bg-sky-600/12 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 left-1/3 w-64 h-64 bg-cyan-500/8 rounded-full blur-3xl"
      />

      {/* Floating bubbles */}
      {bubblesRef.current.map((bubble) => (
        <motion.div
          key={bubble.id}
          initial={{ x: "-10vw", opacity: 0 }}
          animate={{
            x: "110vw",
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: bubble.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: bubble.delay,
            ease: "linear",
          }}
          style={{ top: `${bubble.x}%` }}
          className="absolute"
        >
          <motion.div
            style={{
              width: bubble.size,
              height: bubble.size,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: bubble.duration / 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="rounded-full bg-gradient-to-br from-white/20 to-cyan-400/15 border border-white/20 shadow-lg shadow-cyan-400/20"
          />
        </motion.div>
      ))}

      {/* Light rays */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-cyan-300/50 via-transparent to-transparent transform -skew-x-12"
        />
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-blue-300/40 via-transparent to-transparent transform skew-x-6"
        />
        <motion.div
          animate={{
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 4.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-sky-300/30 via-transparent to-transparent transform -skew-x-3"
        />
      </div>
    </div>
  )
}
