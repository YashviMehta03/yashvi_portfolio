"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"

export default function About() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const education = [
    {
      degree: "B.Tech in Computer Engineering",
      institution: "Veermata Jijabai Technological Institute (VJTI), Mumbai",
      period: "Aug 2023 - Present",
      details: "Third Year | CGPA: 9.77",
      highlights: ["JEE Mains AIR: 4411", "JEE Advanced AIR: 5245", "MHT-CET State Rank: 55"],
    },
  ]

  const achievements = [
    {
      title: "JPMorgan Chase CodeForGood Hackathon",
      description: "Reached final round among top 25 teams, built MVP addressing real-world NGO challenges",
      date: "2025",
      badge: "Finalist",
    },
    {
      title: "Inter-College Girls' Football Tournament",
      description: "Led team to victory as captain at VIT, competed against 10+ teams",
      date: "2024",
      badge: "Champion",
    },
    {
      title: "EnLiga Football Tournament",
      description: "Highest goal scorer in inter-branch tournament for 2 consecutive years",
      date: "2023-2024",
      badge: "Top Scorer",
    },
  ]

  const leadership = [
    {
      role: "TPO Coordinator",
      duration: "Feb 2025 - Present",
      description:
        "Orchestrating internship and placement drives, coordinating with 20+ companies and seamless placement season",
    },
    {
      role: "Networking and Strategy Head | Project X",
      duration: "Jan 2025 - Present",
      description:
        "Connecting colleges, inviting speakers, conducting inter-college events. Mentoring 2 AI/ML projects and conducting Python & GitHub workshops for 200+ students",
    },
    {
      role: "Department Head | EnthusiaAug",
      duration: "Aug 2024 - Present",
      description: "Managing and executing large-scale sports fests with 10+ college participation across Mumbai",
    },
  ]

  return (
    <main className="min-h-screen bg-background pb-24">
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl ambient-pulse" />
        <div
          className="absolute bottom-40 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl ambient-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-10">
    
        <header className="border-b border-border/30 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <ArrowLeft className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Back to Home</span>
            </Link>
            <h1 className="text-2xl font-bold text-foreground">About Me</h1>
            <div className="w-20" />
          </div>
        </header>

        {/* Content */}
        <div className="max-w-5xl mx-auto px-6 py-20">
          {/* Introduction */}
          <section
            className={`mb-20 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-4xl font-bold mb-6 text-foreground">My Story</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate second-year Computer Engineering student at VJTI, driven by curiosity about how
                technology shapes human connection and experience. My journey spans from competitive entrance exams (JEE
                Mains AIR 4411) to building intelligent systems that solve real-world problems.
              </p>
              <p>
                What fascinates me most is the intersection of artificial intelligence, sustainable solutions, and
                human-centric design. I've explored machine learning through stock market prediction, built RAG
                pipelines for financial document querying, and created personalized travel planning systems. Beyond
                code, I lead teams, mentor juniors, and champion sustainable innovation.
              </p>
              <p>
                I believe in building not just for functionality, but for impact—whether it's through technology that
                educates, systems that inform, or communities that grow together.
              </p>
            </div>
          </section>

          {/* Education */}
          <section
            className={`mb-20 transition-all duration-1000 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl font-bold mb-8 text-foreground">Education</h2>
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="border border-border/30 backdrop-blur-sm rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:bg-card/40"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">{edu.degree}</h3>
                      <p className="text-primary font-medium">{edu.institution}</p>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">{edu.period}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{edu.details}</p>
                  <div className="flex gap-2 flex-wrap">
                    {edu.highlights.map((highlight, i) => (
                      <span key={i} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Achievements */}
          <section
            className={`mb-20 transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl font-bold mb-8 text-foreground">Achievements</h2>
            <div className="space-y-4">
              {achievements.map((achievement, idx) => (
                <div
                  key={idx}
                  className="border border-border/30 backdrop-blur-sm rounded-xl p-6 hover:border-accent/50 transition-all duration-300 hover:bg-card/40"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-foreground">{achievement.title}</h3>
                        <span className="px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full">
                          {achievement.badge}
                        </span>
                      </div>
                      <p className="text-muted-foreground">{achievement.description}</p>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">{achievement.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Leadership Roles */}
          <section
            className={`mb-20 transition-all duration-1000 delay-400 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl font-bold mb-8 text-foreground">Leadership & Roles</h2>
            <div className="space-y-6">
              {leadership.map((role, idx) => (
                <div
                  key={idx}
                  className="border-l-2 border-primary/50 pl-6 py-4 hover:border-primary transition-colors duration-300"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-foreground">{role.role}</h3>
                    <span className="text-sm text-primary font-medium">{role.duration}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{role.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          {/* <section
            className={`text-center py-12 border-t border-border/20 transition-all duration-1000 delay-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          >
            <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to explore more?</h3>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                href="/projects"
                className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 inline-flex items-center gap-2"
              >
                View My Work
                <ExternalLink className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 border border-border/50 text-foreground rounded-lg font-semibold hover:bg-card/60 transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </section> */}
        </div>
      </div>
    </main>
  )
}
