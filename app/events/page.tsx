"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Calendar, MapPin, ArrowRight } from "lucide-react"
import WaterBackground from "@/components/water-background"
import GlassCard from "@/components/glass-card"
import { events } from "@/lib/data"

const categories = ["All", "Tech", "Beauty", "Sports", "Automotive", "Fashion"]

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredEvents = activeCategory === "All" ? events : events.filter((event) => event.category === activeCategory)

  return (
    <>
      <WaterBackground />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">My </span>
              <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                Events
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Explore the memorable brand experiences and events I&apos;ve been part of
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category ? "text-white" : "text-white/60 hover:text-white glass-subtle hover:glass"
                }`}
              >
                {activeCategory === category && (
                  <motion.div
                    layoutId="category-bg"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="relative pb-24">        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6 overflow-hidden">
            <div className="flex auto-scroll gap-6">
            {filteredEvents.concat(filteredEvents).map((event, index) => (
              <motion.div
                key={`${event.id}-${index}`}
                className="flex-shrink-0 w-80"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                  <Link href={`/events/${event.id}`} className="block group">
                    <GlassCard glow hover>
                      <div className="relative h-48 overflow-hidden rounded-t-2xl">
                        <Image
                          src={event.images[0] || "/placeholder.svg"}
                          alt={event.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

                        {/* Ripple effect overlay */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute inset-0 bg-cyan-500/10" />
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 group-hover:w-[200%] group-hover:h-[200%] bg-cyan-400/10 rounded-full transition-all duration-700" />
                        </div>

                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1.5 glass text-xs font-medium text-cyan-300 rounded-full">
                            {event.category}
                          </span>
                        </div>
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1.5 glass text-xs font-medium text-white/80 rounded-full">
                            {event.role}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors line-clamp-2">
                          {event.title}
                        </h3>
                        <p className="text-cyan-400 font-medium mb-4">{event.brand}</p>

                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2 text-sm text-white/60">
                            <Calendar className="w-4 h-4" />
                            {event.date}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-white/60">
                            <MapPin className="w-4 h-4" />
                            {event.location}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium group-hover:gap-3 transition-all">
                          View Details
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </GlassCard>
                </Link>
              </motion.div>
            ))}
            </div>
          </div>

          {filteredEvents.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
              <p className="text-white/60 text-lg">No events found in this category.</p>
            </motion.div>
          )}
          </div>
      </section>
    </>
  )
}
