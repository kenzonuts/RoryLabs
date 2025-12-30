"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useRouter, useParams } from "next/navigation"
import { Calendar, MapPin, User, ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react"
import WaterBackground from "@/components/water-background"
import GlassCard from "@/components/glass-card"
import RippleButton from "@/components/ripple-button"
import { events } from "@/lib/data"

export default function EventDetailPage() {
  const params = useParams()
  const id = params.id as string
  const router = useRouter()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const eventIndex = events.findIndex((e) => e.id === id)
  const event = events[eventIndex]

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Event not found</h1>
          <RippleButton href="/events">Back to Events</RippleButton>
        </div>
      </div>
    )
  }

  const prevEvent = eventIndex > 0 ? events[eventIndex - 1] : null
  const nextEvent = eventIndex < events.length - 1 ? events[eventIndex + 1] : null

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % event.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + event.images.length) % event.images.length)
  }

  return (
    <>
      <WaterBackground />

      {/* Back Button */}
      <div className="fixed top-24 left-4 z-40 lg:left-8">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.push("/events")}
          className="flex items-center gap-2 px-4 py-2 glass rounded-full text-white/80 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">All Events</span>
        </motion.button>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Main Image */}
              <div
                className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group"
                onClick={() => setLightboxOpen(true)}
              >
                <div className="absolute inset-0 bg-cyan-500/20 rounded-2xl blur-2xl animate-glow-pulse" />
                <div className="relative h-full glass-strong rounded-2xl overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative h-full"
                    >
                      <Image
                        src={event.images[currentImageIndex] || "/placeholder.svg"}
                        alt={`${event.title} - Image ${currentImageIndex + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </motion.div>
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Navigation arrows */}
                {event.images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        prevImage()
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 glass rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ChevronLeft className="w-5 h-5 text-white" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        nextImage()
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 glass rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ChevronRight className="w-5 h-5 text-white" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              {event.images.length > 1 && (
                <div className="flex gap-3 mt-4 justify-center">
                  {event.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`relative w-16 h-16 rounded-xl overflow-hidden transition-all ${
                        idx === currentImageIndex ? "ring-2 ring-cyan-400 scale-105" : "opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image src={img || "/placeholder.svg"} alt="" fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Event Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <span className="inline-block px-4 py-1.5 glass text-cyan-300 rounded-full text-sm mb-4">
                  {event.category}
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">{event.title}</h1>
                <p className="text-xl text-cyan-400 font-medium">{event.brand}</p>
              </div>

              <GlassCard className="p-6" hover={false} animateOnView={false}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-white/60 text-xs">Date</div>
                      <div className="text-white font-medium">{event.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-white/60 text-xs">Location</div>
                      <div className="text-white font-medium">{event.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                      <User className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-white/60 text-xs">Role</div>
                      <div className="text-white font-medium">{event.role}</div>
                    </div>
                  </div>
                </div>
              </GlassCard>

              <div>
                <h2 className="text-xl font-semibold text-white mb-3">About This Event</h2>
                <p className="text-white/70 leading-relaxed">{event.description}</p>
              </div>


            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="relative pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {prevEvent ? (
        <Link href={`/events/${prevEvent.id}`} className="group">
          <GlassCard className="p-4 sm:p-6" glow animateOnView={false}>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full glass flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                      <ArrowLeft className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="hidden sm:block">
                      <div className="text-white/60 text-sm">Previous Event</div>
                      <div className="text-white font-medium">{prevEvent.title}</div>
                    </div>
                  </div>
                </GlassCard>
              </Link>
            ) : (
              <div />
            )}

            {nextEvent ? (
              <Link href={`/events/${nextEvent.id}`} className="group">
                <GlassCard className="p-4 sm:p-6" glow animateOnView={false}>
                  <div className="flex items-center gap-4">
                    <div className="hidden sm:block text-right">
                      <div className="text-white/60 text-sm">Next Event</div>
                      <div className="text-white font-medium">{nextEvent.title}</div>
                    </div>
                    <div className="w-10 h-10 rounded-full glass flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                      <ArrowRight className="w-5 h-5 text-cyan-400" />
                    </div>
                  </div>
                </GlassCard>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={event.images[currentImageIndex] || "/placeholder.svg"}
                alt={event.title}
                fill
                className="object-contain"
              />

              <button onClick={() => setLightboxOpen(false)} className="absolute top-4 right-4 p-2 glass rounded-full">
                <X className="w-6 h-6 text-white" />
              </button>

              {event.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 glass rounded-full"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 glass rounded-full"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>
                </>
              )}

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
                {currentImageIndex + 1} / {event.images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
