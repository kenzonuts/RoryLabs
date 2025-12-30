"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import WaterBackground from "@/components/water-background"
import GlassCard from "@/components/glass-card"
import { testimonials } from "@/lib/data"

export default function TestimonialsPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(nextSlide, 6000)
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isAutoPlaying])

  const handleManualNav = (direction: "next" | "prev") => {
    setIsAutoPlaying(false)
    if (direction === "next") nextSlide()
    else prevSlide()

    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

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
              <span className="text-white">Client </span>
              <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                Testimonials
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Hear what brands and clients have to say about our collaborations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="relative pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <GlassCard className="p-8 lg:p-12 relative overflow-hidden" glow>
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-20">
                <Quote className="w-24 h-24 text-cyan-400" />
              </div>

              <div className="relative">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  {/* Avatar */}
                  <div className="relative w-24 h-24 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl opacity-50" />
                    <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-cyan-400/50">
                      <Image
                        src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                        alt={testimonials[currentIndex].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-6">
                    {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-cyan-400 text-cyan-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8 max-w-2xl mx-auto">
                    &ldquo;{testimonials[currentIndex].content}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div>
                    <div className="text-white font-semibold text-lg">{testimonials[currentIndex].name}</div>
                    <div className="text-cyan-400">{testimonials[currentIndex].role}</div>
                    <div className="text-white/60 text-sm">{testimonials[currentIndex].company}</div>
                  </div>
                </motion.div>

                {/* Navigation */}
                <div className="flex items-center justify-center gap-4 mt-8">
                  <button
                    onClick={() => handleManualNav("prev")}
                    className="p-3 glass rounded-full hover:bg-white/10 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </button>

                  {/* Dots */}
                  <div className="flex gap-2">
                    {testimonials.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setCurrentIndex(idx)
                          setIsAutoPlaying(false)
                          setTimeout(() => setIsAutoPlaying(true), 10000)
                        }}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          idx === currentIndex ? "bg-cyan-400 w-8" : "bg-white/30 hover:bg-white/50"
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => handleManualNav("next")}
                    className="p-3 glass rounded-full hover:bg-white/10 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="relative pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white text-center mb-12"
          >
            More <span className="text-cyan-300">Reviews</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <GlassCard key={testimonial.id} delay={index * 0.1} glow>
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-white/60 text-sm">{testimonial.role}</div>
                      <div className="text-cyan-400 text-sm">{testimonial.company}</div>
                    </div>
                  </div>

                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-cyan-400 text-cyan-400" />
                    ))}
                  </div>

                  <p className="text-white/70 text-sm leading-relaxed line-clamp-4">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
