"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Sparkles, Calendar, Star, MapPin } from "lucide-react"
import WaterBackground from "@/components/water-background"
import GlassCard from "@/components/glass-card"
import RippleButton from "@/components/ripple-button"
import { events } from "@/lib/data"

export default function HomePage() {
  const previewEvents = events.slice(0, 3)

  return (
    <>
      <WaterBackground />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-white/80">Brand Ambassador</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 text-balance"
              >
                <span className="text-white">Creating</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                  Memorable
                </span>
                <br />
                <span className="text-white">Experiences</span>
              </motion.h1>



              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <RippleButton href="/events" size="lg">
                  View Events
                  <ArrowRight className="w-5 h-5" />
                </RippleButton>
                <RippleButton href="/contact" variant="secondary" size="lg">
                  Get in Touch
                </RippleButton>
              </motion.div>

              {/* Stats Preview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-8 mt-12 justify-center lg:justify-start"
              >
                {[
                  { value: "15+", label: "Events" },
                  { value: "45+", label: "Brands" },
                  { value: "8+", label: "Years" },
                ].map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
                      className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent"
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-white/60">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full aspect-[3/4] max-w-md mx-auto">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-transparent rounded-3xl blur-3xl animate-glow-pulse" />

                {/* Image container */}
                <div className="relative glass-strong rounded-3xl overflow-hidden h-full">
                  <Image
                    src="/placeholder.svg?height=800&width=600"
                    alt="Brand Ambassador"
                    fill
                    className="object-cover"
                    priority
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

                  {/* Floating badge */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="absolute bottom-6 left-6 right-6"
                  >
                    <div className="glass rounded-xl p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                          <Star className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-semibold">Top Rated</div>
                          <div className="text-white/60 text-sm">100% Satisfaction</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              className="w-1.5 h-3 rounded-full bg-cyan-400"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Events Section */}
      <section className="relative py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-white">Featured </span>
              <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                Events
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Recent brand experiences and memorable collaborations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {previewEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/events/${event.id}`} className="block group">
                  <GlassCard glow hover>
                    <div className="relative h-64 overflow-hidden rounded-t-2xl">
                      <Image
                        src={event.images[0] || "/placeholder.svg"}
                        alt={event.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                      
                      {/* Animated overlay on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-blue-500/20" />
                      </div>

                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 glass text-xs font-medium text-cyan-300 rounded-full backdrop-blur-md">
                          {event.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                          {event.title}
                        </h3>
                        <p className="text-cyan-400 text-sm font-medium">{event.brand}</p>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-cyan-400" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-cyan-400" />
                          <span className="truncate">{event.location}</span>
                        </div>
                      </div>

                      <p className="text-white/70 text-sm mb-4 line-clamp-2">{event.description}</p>

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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <RippleButton href="/events" size="lg">
              View All Events
              <ArrowRight className="w-5 h-5" />
            </RippleButton>
          </motion.div>
        </div>
      </section>

      {/* Services/What I Do Section */}
      <section className="relative py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-white">What I </span>
              <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                Do
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Professional services for your brand events and activations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Brand Ambassador",
                description: "Representing your brand with authenticity and professionalism at events, activations, and campaigns.",
              },
              {
                icon: Calendar,
                title: "Event Hosting",
                description: "Engaging event hosting that creates memorable experiences and drives audience engagement.",
              },
              {
                icon: Star,
                title: "Event Organization",
                description: "End-to-end event planning and management from concept to execution with attention to detail.",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="p-8 h-full" glow hover>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-6 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all">
                    <service.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-white/70 leading-relaxed">{service.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
