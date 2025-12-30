"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, Phone, MapPin, Instagram, Twitter, Linkedin, CheckCircle } from "lucide-react"
import WaterBackground from "@/components/water-background"
import GlassCard from "@/components/glass-card"
import RippleButton from "@/components/ripple-button"

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@aqua-ambassador.com", href: "mailto:hello@aqua-ambassador.com" },
  { icon: Phone, label: "Phone", value: "+62 812 3456 7890", href: "tel:+6281234567890" },
  { icon: MapPin, label: "Location", value: "Jakarta, Indonesia", href: "#" },
]

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "#", handle: "@aqua.ambassador" },
  { icon: Twitter, label: "Twitter", href: "#", handle: "@aqua_ba" },
  { icon: Linkedin, label: "LinkedIn", href: "#", handle: "aqua-ambassador" },
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: "", email: "", company: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
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
              <span className="text-white">Let&apos;s </span>
              <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                Communicate
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Ready to create something amazing? Let&apos;s start a conversation about your next brand event
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="relative pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <GlassCard className="p-6 lg:p-8" glow>
                <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                    <p className="text-white/60">Thank you for reaching out. I&apos;ll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-white/80 text-sm mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 glass rounded-xl bg-white/5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-white/80 text-sm mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 glass rounded-xl bg-white/5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-white/80 text-sm mb-2">
                        Company / Brand
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 glass rounded-xl bg-white/5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-white/80 text-sm mb-2">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 glass rounded-xl bg-white/5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all resize-none"
                        placeholder="Tell me about your event or project..."
                      />
                    </div>

                    <RippleButton className="w-full" size="lg">
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Send Message
                          <Send className="w-4 h-4" />
                        </span>
                      )}
                    </RippleButton>
                  </form>
                )}
              </GlassCard>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <GlassCard key={info.label} delay={index * 0.1}>
                      <a href={info.href} className="flex items-center gap-4 p-4 group">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-colors">
                          <info.icon className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <div className="text-white/60 text-sm">{info.label}</div>
                          <div className="text-white font-medium group-hover:text-cyan-300 transition-colors">
                            {info.value}
                          </div>
                        </div>
                      </a>
                    </GlassCard>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Follow Me</h2>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <GlassCard key={social.label} delay={0.3 + index * 0.1}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-colors">
                          <social.icon className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <div className="text-white font-medium group-hover:text-cyan-300 transition-colors">
                            {social.label}
                          </div>
                          <div className="text-white/60 text-sm">{social.handle}</div>
                        </div>
                      </a>
                    </GlassCard>
                  ))}
                </div>
              </div>

              {/* Quick Response */}
              <GlassCard className="p-6" glow delay={0.6}>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse mt-1.5" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Quick Response</h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      I typically respond within 24 hours. For urgent inquiries, feel free to reach out via WhatsApp or
                      phone.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
