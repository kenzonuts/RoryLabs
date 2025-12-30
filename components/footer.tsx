"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Droplets, Instagram, Twitter, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@aqua.com", label: "Email" },
]

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
]

export default function Footer() {
  return (
    <footer className="relative mt-20">
      {/* Wave decoration */}
      <div className="absolute top-0 left-0 right-0 h-24 overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute top-0 w-full h-full">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14+.29,1200,52.47V0Z"
            className="fill-background/30"
          />
        </svg>
      </div>

      <div className="glass-strong pt-16 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2">
                <Droplets className="w-8 h-8 text-cyan-400" />
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  AQUA
                </span>
              </Link>
              <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                Community Growth, Event Ambassador dan Event Organizer Professional di Jabodetabek . Dengan pengalaman saya membuat beberapa Web3 event di Indonesia. 
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-white/60 hover:text-cyan-300 transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative p-3 glass rounded-xl group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-white/70 group-hover:text-cyan-300 transition-colors" />
                    <div className="absolute inset-0 bg-cyan-400/20 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">© {new Date().getFullYear()} Aqua. All rights reserved.</p>
            <p className="text-white/40 text-sm">Crafted with passion & creativity</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
