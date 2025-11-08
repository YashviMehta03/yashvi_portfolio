import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navigation } from "@/components/navigation"
import { AmbientParticles } from "@/components/ambient-particles"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Yashvi Mehta - Portfolio",
  description:
    "Explorer of Code, Creativity, and Connection. Full-stack developer, AI/ML enthusiast, and student leader at VJTI.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased bg-background text-foreground`}>
        <AmbientParticles />
        {children}
        <Navigation />
        <Analytics />
      </body>
    </html>
  )
}
