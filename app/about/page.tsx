"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, Briefcase, Award, Heart, CheckCircle } from "lucide-react"
import WaterBackground from "@/components/water-background"
import GlassCard from "@/components/glass-card"
import { stats } from "@/lib/data"

const iconMap = {
  calendar: Calendar,
  briefcase: Briefcase,
  award: Award,
  heart: Heart,
}

const skills = [
  "Grapic Design",
  "Communication",
  "Event Planning",
  "Event Management",
  "Event Organization",
]

const brands = [
 "Sui Networking",
 "Block Alpha Insider"
]

export default function AboutPage() {
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
              <span className="text-white">About </span>
              <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                Me
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Community Growth, Event Ambassador dan Event Organizer Professional di Jabodetabek .
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/5] max-w-lg mx-auto">
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-transparent rounded-3xl blur-3xl animate-glow-pulse" />

                <div className="relative glass-strong rounded-3xl overflow-hidden h-full">
                  <Image
                    src="/placeholder.svg?height=900&width=720"
                    alt="Brand Ambassador Portrait"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </div>

                {/* Floating card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute -bottom-6 -right-6 lg:-right-12"
                >
                  <GlassCard className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                        <Award className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">8+</div>
                        <div className="text-white/60 text-sm">Years of Excellence</div>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Hello, I&apos;m <span className="text-cyan-300">Rory</span>
                </h2>
                <div className="space-y-4 text-white/70 leading-relaxed">
                  <p>
                      As a professional Event Organizer with approximately 1 year of experience, 
                    I specialize in building meaningful connections at community events and Web3 workshops. 
                    My career journey has taken me across various industries, ranging from leading-edge technology.
                  </p>
                  <p>
                      I believe that every brand has a unique story that needs to be told, 
                    and my role is to bring that story to life through authentic engagement, 
                    engaging presentations, and memorable experiences. Whether it's a product launch, 
                    exhibition or exclusive VIP event, I bring energy, professionalism and genuine enthusiasm.
                  </p>
                  <p>
                      My approach combines deep product knowledge with natural communication skills, 
                    ensuring every interaction leaves a lasting positive impression.
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Core Skills</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ x: 4, scale: 1.02 }}
                      className="flex items-center gap-3 text-white/80 glass-subtle px-4 py-3 rounded-xl group cursor-default"
                    >
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-sm group-hover:text-white transition-colors">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Brands Worked With */}
      <section className="relative py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Brands I&apos;ve <span className="text-cyan-300">Worked With</span>
            </h2>
            <p className="text-white/60">Trusted by leading brands across diverse industries</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {brands.map((brand, index) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.08, y: -4 }}
                className="px-8 py-4 glass rounded-full text-white/80 hover:text-cyan-300 transition-all duration-300 cursor-default group"
              >
                <span className="relative z-10 font-medium">{brand}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
