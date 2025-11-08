"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import Image from "next/image"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeRoom, setActiveRoom] = useState<string | null>(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const rooms = [
    {
      id: "about",
      name: "About",
      description: "My story, background, and journey",
      icon: "👋",
      color: "from-primary/20 to-primary/5",
    },
    {
      id: "projects",
      name: "Projects",
      description: "Work, code, and technical explorations",
      icon: "💻",
      color: "from-accent/20 to-accent/5",
    },
    {
      id: "achievements",
      name: "Experience & Achievements",
      description: "Education, milestones, and growth",
      icon: "🏆",
      color: "from-secondary/20 to-secondary/5",
    },
    {
      id: "thoughts",
      name: "Thought Stream",
      description: "Ideas, reflections, and discussions",
      icon: "💭",
      color: "from-primary/20 to-accent/5",
    },
    {
      id: "blogs",
      name: "Blog",
      description: "Articles and in-depth writing",
      icon: "📝",
      color: "from-secondary/20 to-primary/5",
    },
    {
      id: "memories",
      name: "Moments & Memories",
      description: "Visual stories and life moments",
      icon: "📸",
      color: "from-accent/20 to-secondary/5",
    },
    {
      id: "contact",
      name: "Connect",
      description: "Get in touch and explore more",
      icon: "🔗",
      color: "from-secondary/20 to-primary/5",
    },
  ]

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      {/* Ambient background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl ambient-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl ambient-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-secondary/5 rounded-full blur-3xl ambient-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-border/30 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent portal-glow flex items-center justify-center">
                <span className="text-lg">✨</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Yashvi Mehta</h1>
                <p className="text-xs text-muted-foreground">Student</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Work
              </a>
              <a href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </header>

        {/* Hero Section with Photo and Rule of Thirds Layout */}
        <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
          <div className="grid md:grid-cols-3 gap-12 items-center mb-20">
            {/* Text content on left (2/3 of space) */}
            <div
              className={`md:col-span-2 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="space-y-6">
                <div>
                  <p className="text-primary font-semibold text-lg mb-2">Hi, I'm</p>
                  <h2 className="text-5xl md:text-6xl font-bold mb-4 text-balance">Yashvi Mehta</h2>
                  <p className="text-2xl md:text-3xl bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent font-semibold text-balance">
                    Explorer of Code, Creativity, and Connection
                  </p>
                </div>

                <p className="text-lg text-muted-foreground max-w-lg leading-relaxed text-balance">
                  Third year, B.Tech Computer Engineering student at VJTI with a passion for building intelligent systems. I explore
                  machine learning, full-stack development, and the intersection of technology and human experience.
                  Currently diving deep into AI/ML, Agentic AI, hackathons and leadership activites.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                  <Link
                    href="/about"
                    className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 inline-flex items-center gap-2"
                  >
                    Explore My Work
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                  <a
                    href="https://github.com/YashviMehta03"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border border-border/50 text-foreground rounded-lg font-semibold hover:bg-card/60 transition-all duration-300"
                  >
                    View GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Photo on right (1/3 of space, positioned for Rule of Thirds) */}
            <div
              className={`md:col-span-1 flex justify-center transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            >
              <div className="relative w-64 h-80">
                {/* Photo frame with glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/10 rounded-2xl blur-2xl opacity-60" />
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yashvi_photo-NHWZIO7p055wHY6tWT2BZ0o0Yv9N5l.jpg"
                  alt="Yashvi Mehta"
                  width={256}
                  height={320}
                  className="relative rounded-2xl border border-border/50 object-cover w-full h-full shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div
            className={`grid grid-cols-3 gap-4 mb-20 transition-all duration-1000 delay-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          >
            <div className="border border-border/30 backdrop-blur-sm rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
              <p className="text-3xl font-bold text-primary">9.77</p>
              <p className="text-sm text-muted-foreground mt-2">CGPA</p>
            </div>
            <div className="border border-border/30 backdrop-blur-sm rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
              <p className="text-3xl font-bold text-accent">3</p>
              <p className="text-sm text-muted-foreground mt-2">Major Projects</p>
            </div>
            <div className="border border-border/30 backdrop-blur-sm rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
              <p className="text-3xl font-bold text-secondary">4</p>
              <p className="text-sm text-muted-foreground mt-2">Leadership Roles</p>
            </div>
          </div>

          {/* Rooms Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {rooms.map((room, index) => (
              <Link
                key={room.id}
                href={`/${room.id}`}
                className={`group relative overflow-hidden rounded-xl border border-border/30 bg-card/40 backdrop-blur-sm p-8 hover:border-primary/50 transition-all duration-500 cursor-pointer ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: isLoaded ? `${index * 100}ms` : "0ms",
                }}
                onMouseEnter={() => setActiveRoom(room.id)}
                onMouseLeave={() => setActiveRoom(null)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${room.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div className="relative z-10">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {room.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {room.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{room.description}</p>
                  <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium">Enter</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 blur-xl" />
                </div>
              </Link>
            ))}
          </div>

          {/* Footer message */}
          <div className="text-center py-12 border-t border-border/20">
            <p className="text-muted-foreground text-sm">
              Explore my work, ideas, and moments. A reflection of my passion for technology and personal growth.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
