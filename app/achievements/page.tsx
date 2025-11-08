"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Briefcase, GraduationCap, Trophy } from "lucide-react"

export default function HallOfAchievements() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const achievements = [
    {
      id: "education-1",
      type: "education",
      year: "2025",
      title: "B.Tech Computer Engineering - Year 2",
      organization: "Veermata Jijabai Technological Institute (VJTI), Mumbai",
      description:
        "Maintaining exceptional academic performance with CGPA 9.77. Completed courses in Data Structures, Analysis of Algorithms, Operating Systems, Database Management, and AI fundamentals.",
      icon: GraduationCap,
    },
    {
      id: "award-1",
      type: "award",
      year: "2025",
      title: "JPMorgan Chase CodeForGood Hackathon - Finalist",
      organization: "JPMorgan Chase",
      description:
        "Reached final round among top 25 teams nationally. Built an MVP addressing real-world challenges faced by NGOs in technology adoption and sustainability.",
      icon: Trophy,
    },
    {
      id: "work-1",
      type: "work",
      year: "2025",
      title: "TPO Coordinator",
      organization: "Veermata Jijabai Technological Institute",
      description:
        "Orchestrating internship and placement drives, coordinating with 20+ companies. Ensuring seamless placement season by liaising between students and recruiters.",
      icon: Briefcase,
    },
    {
      id: "work-2",
      type: "work",
      year: "2025",
      title: "Networking and Strategy Head | Project X",
      organization: "Veermata Jijabai Technological Institute",
      description:
        "Leading networking initiatives with other colleges. Inviting speakers and conducting inter-college events. Mentoring 2 AI/ML projects for juniors and conducted Python & GitHub workshops for 200+ students.",
      icon: Briefcase,
    },
    {
      id: "work-3",
      type: "work",
      year: "2024",
      title: "Department Head | EnthusiaAug",
      organization: "Veermata Jijabai Technological Institute",
      description:
        "Managing and executing large-scale sports festivals. Orchestrating participation from 10+ colleges across Mumbai. Leading student teams in competitive sports events.",
      icon: Briefcase,
    },
    {
      id: "award-2",
      type: "award",
      year: "2024",
      title: "Highest Goal Scorer - EnLiga",
      organization: "VJTI Inter-Branch Football Tournament",
      description:
        "Recognized as highest goal scorer in inter-branch football tournament for 2 consecutive years (2023-2024). Demonstrated exceptional athletic performance and team leadership.",
      icon: Trophy,
    },
    {
      id: "award-3",
      type: "award",
      year: "2024",
      title: "Inter-College Girls' Football Tournament Champion",
      organization: "VIT Sports Festival",
      description:
        "Led college team to victory as captain, competing against 10+ teams. Demonstrated strategic leadership and athletic excellence under pressure.",
      icon: Trophy,
    },
    {
      id: "education-2",
      type: "education",
      year: "2023",
      title: "JEE & MHT-CET Success",
      organization: "National Level Entrance Exams",
      description:
        "JEE Mains AIR: 4411 | JEE Advanced AIR: 5245 | MHT-CET State Rank: 55 | HSC: 98%. Demonstrated exceptional aptitude in mathematics, physics, and problem-solving.",
      icon: GraduationCap,
    },
  ]

  const typeColors = {
    education: "from-primary/20 to-primary/5",
    work: "from-accent/20 to-accent/5",
    award: "from-secondary/20 to-secondary/5",
  }

  const typeLabels = {
    education: "Education",
    work: "Leadership",
    award: "Recognition",
  }

  return (
    <main className="min-h-screen bg-background pb-24">
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl ambient-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl ambient-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-border/30 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm">Back to Home</span>
            </Link>
            <h1 className="text-2xl font-bold text-foreground">Hall of Achievements</h1>
            <div className="w-20" />
          </div>
        </header>

        {/* Content */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-12">
            <p className="text-muted-foreground text-lg max-w-2xl">
              A timeline of academic excellence, leadership initiatives, and athletic achievements. Each milestone
              represents dedication, growth, and commitment to excellence.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-secondary opacity-30" />

            {/* Achievements */}
            <div className="space-y-8">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon
                const isExpanded = expandedId === achievement.id

                return (
                  <div
                    key={achievement.id}
                    className="relative pl-24 cursor-pointer group"
                    onClick={() => setExpandedId(isExpanded ? null : achievement.id)}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-2 w-16 h-16 flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                      <div className="relative w-12 h-12 rounded-full bg-card border-2 border-primary/50 flex items-center justify-center group-hover:border-primary transition-colors duration-300">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>

                    {/* Card */}
                    <div
                      className={`rounded-lg border border-border/30 bg-card/40 backdrop-blur-sm p-6 transition-all duration-300 ${
                        isExpanded ? "border-primary/50 bg-card/60" : "hover:border-primary/30 hover:bg-card/50"
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/20 text-primary">
                              {typeLabels[achievement.type as keyof typeof typeLabels]}
                            </span>
                            <span className="text-sm text-muted-foreground">{achievement.year}</span>
                          </div>
                          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            {achievement.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground mb-3">{achievement.organization}</p>

                      {isExpanded && (
                        <div className="mt-4 pt-4 border-t border-border/20 animate-in fade-in duration-300">
                          <p className="text-sm text-foreground/80">{achievement.description}</p>
                        </div>
                      )}

                      <div className="mt-3 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                        Click to {isExpanded ? "collapse" : "expand"}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-20 pt-12 border-t border-border/20 text-center">
            <p className="text-muted-foreground text-sm">
              Each achievement reflects my commitment to academic excellence, leadership, and personal growth.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
