import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Aqua | Brand Ambassador Portfolio",
  description:
    "Professional Brand Ambassador portfolio showcasing events, collaborations, and brand partnerships with an elegant aqua aesthetic.",
  keywords: ["brand ambassador", "portfolio", "events", "marketing", "promotions"],
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#0ea5e9",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased min-h-screen aqua-gradient`}>
        <div className="fixed inset-0 aqua-gradient-radial pointer-events-none" />
        <div className="relative z-10">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
