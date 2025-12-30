"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import WaterBackground from "@/components/water-background"
import { galleryImages } from "@/lib/data"

const categories = [
  "All",
  "Tech",
  "Portrait",
  "Beauty",
  "Sports",
  "Fashion",
  "Automotive",
  "Corporate",
  "Lifestyle",
  "Events",
  "Activation",
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const filteredImages =
    activeCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

  const openLightbox = (index: number) => {
    setCurrentIndex(index % filteredImages.length)
    setLightboxOpen(true)
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredImages.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length)
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
              <span className="text-white">Visual </span>
              <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                Gallery
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              A collection of moments captured from various brand events and experiences
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category ? "text-white" : "text-white/60 hover:text-white glass-subtle hover:glass"
                }`}
              >
                {activeCategory === category && (
                  <motion.div
                    layoutId="gallery-category-bg"
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

      {/* Gallery Grid */}
      <section className="relative pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6 overflow-hidden">
            <div className="flex auto-scroll">
              {filteredImages.concat(filteredImages).map((image, index) => (
                <motion.div
                  key={`${image.id}-${index}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex-shrink-0 w-80"
                >
                  <div
                    onClick={() => openLightbox(index)}
                    className="relative group cursor-pointer overflow-hidden rounded-2xl"
                  >
                    <div className="glass-strong rounded-2xl overflow-hidden">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={`Gallery image ${image.id}`}
                        width={800}
                        height={index % 2 === 0 ? 600 : 800}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                      {/* Ripple effect */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full border-2 border-cyan-400/50 animate-ping opacity-0 group-hover:opacity-100" />
                      </div>

                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="px-3 py-1 glass text-xs text-cyan-300 rounded-full">{image.category}</span>
                      </div>
                    </div>

                    {/* Glow border on hover */}
                    <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-cyan-400/30 transition-colors duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {filteredImages.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
              <p className="text-white/60 text-lg">No images found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && filteredImages[currentIndex] && (
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
              className="relative max-w-6xl w-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={filteredImages[currentIndex].src || "/placeholder.svg"}
                  alt={`Gallery image ${filteredImages[currentIndex].id}`}
                  width={1200}
                  height={800}
                  className="max-w-full max-h-[85vh] object-contain rounded-2xl"
                />
              </div>

              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute top-4 right-4 p-3 glass rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {filteredImages.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      prevImage()
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 glass rounded-full hover:bg-white/10 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      nextImage()
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 glass rounded-full hover:bg-white/10 transition-colors"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>
                </>
              )}

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4">
                <span className="px-4 py-2 glass rounded-full text-white/80 text-sm">
                  {filteredImages[currentIndex].category}
                </span>
                <span className="text-white/60 text-sm">
                  {currentIndex + 1} / {filteredImages.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
