"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Code2, Brain, Wrench, Users } from "lucide-react"

export default function Skills() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      color: "from-primary/20 to-primary/5",
      skills: [
        { name: "Python", level: 95 },
        { name: "C++", level: 85 },
        { name: "JavaScript/TypeScript", level: 88 },
        { name: "SQL", level: 80 },
      ],
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      color: "from-accent/20 to-accent/5",
      skills: [
        { name: "TensorFlow & Keras", level: 90 },
        { name: "Deep Learning (LSTM, Transformers)", level: 92 },
        { name: "NLP & LLMs", level: 85 },
        { name: "Data Engineering & Feature Engineering", level: 88 },
        { name: "RAG Pipelines", level: 87 },
      ],
    },
    {
      title: "Frameworks & Libraries",
      icon: Wrench,
      color: "from-secondary/20 to-secondary/5",
      skills: [
        { name: "React.js & Next.js", level: 90 },
        { name: "Node.js & Express.js", level: 88 },
        { name: "MongoDB & PostgreSQL", level: 85 },
        { name: "Flask & Python Web Frameworks", level: 82 },
        { name: "NumPy, Pandas, Matplotlib", level: 90 },
      ],
    },
    {
      title: "Soft Skills & Leadership",
      icon: Users,
      color: "from-primary/30 to-accent/20",
      skills: [
        { name: "Team Leadership", level: 92 },
        { name: "Project Management", level: 88 },
        { name: "Communication & Mentoring", level: 90 },
        { name: "Problem-Solving", level: 95 },
        { name: "Strategic Planning", level: 87 },
      ],
    },
  ]

  const tools = [
    "VS Code",
    "Google Colab",
    "Kaggle",
    "Git & GitHub",
    "Docker",
    "Linux/Unix",
    "Jupyter Notebook",
    "Postman",
  ]

  const coursework = [
    "Data Structures",
    "Analysis of Algorithms",
    "Operating Systems",
    "Software Engineering",
    "Database Management",
    "Discrete Mathematics",
    "Artificial Intelligence",
    "Deep Learning",
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
        {/* Header */}
        <header className="border-b border-border/30 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <ArrowLeft className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Back to Home</span>
            </Link>
            <h1 className="text-2xl font-bold text-foreground">Skills & Expertise</h1>
            <div className="w-20" />
          </div>
        </header>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-6 py-20">
          {/* Introduction */}
          <section
            className={`mb-20 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-4xl font-bold mb-6 text-foreground">Technical & Professional Skills</h2>
            <p className="text-lg  leading-relaxed max-w-3xl">
              A comprehensive overview of my technical expertise, frameworks, tools, and soft skills developed through
              academic coursework, projects, and professional experiences. I'm passionate about continuous learning and
              staying updated with emerging technologies.
            </p>
          </section>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {skillCategories.map((category, categoryIdx) => {
              const Icon = category.icon
              return (
                <div
                  key={categoryIdx}
                  className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: isLoaded ? `${categoryIdx * 150}ms` : "0ms" }}
                >
                  <div
                    className={`border border-border/30 backdrop-blur-sm rounded-xl p-8 bg-gradient-to-br ${category.color} hover:border-primary/50 transition-all duration-300 h-full`}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-primary/20">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-semibold text-foreground">{category.title}</h3>
                    </div>

                    <div className="space-y-5">
                      {category.skills.map((skill, idx) => (
                        <div key={idx}>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-foreground">{skill.name}</span>
                            <span className="text-xs text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="w-full h-2 bg-muted/30 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                              style={{
                                width: isLoaded ? `${skill.level}%` : "0%",
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Tools & Technologies */}
          <section
            className={`mb-20 transition-all duration-1000 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h3 className="text-3xl font-bold mb-8 text-foreground">Developer Tools & Platforms</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {tools.map((tool, idx) => (
                <div
                  key={idx}
                  className="border border-border/30 rounded-lg p-4 text-center hover:border-primary/50 hover:bg-card/60 transition-all duration-300 backdrop-blur-sm"
                >
                  <p className="font-medium text-foreground text-sm">{tool}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Relevant Coursework */}
          <section
            className={`mb-20 transition-all duration-1000 delay-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h3 className="text-3xl font-bold mb-8 text-foreground">Relevant Coursework</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {coursework.map((course, idx) => (
                <div
                  key={idx}
                  className="border border-primary/30 rounded-lg p-4 text-center bg-primary/5 hover:bg-primary/10 transition-all duration-300"
                >
                  <p className="font-medium text-foreground text-sm">{course}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Learning Philosophy */}
          {/* <section
            className={`border-t border-border/20 pt-12 transition-all duration-1000 delay-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h3 className="text-3xl font-bold mb-6 text-foreground">Continuous Learning</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-border/30 backdrop-blur-sm rounded-lg p-6 hover:border-accent/50 transition-all duration-300">
                <h4 className="font-semibold text-foreground mb-2">Current Focus</h4>
                <p className="text-muted-foreground text-sm">
                  Advanced AI/ML techniques, RAG systems, and LLM applications for enterprise solutions.
                </p>
              </div>
              <div className="border border-border/30 backdrop-blur-sm rounded-lg p-6 hover:border-accent/50 transition-all duration-300">
                <h4 className="font-semibold text-foreground mb-2">Exploration Areas</h4>
                <p className="text-muted-foreground text-sm">
                  Sustainable technology solutions, system design, and emerging AI paradigms.
                </p>
              </div>
              <div className="border border-border/30 backdrop-blur-sm rounded-lg p-6 hover:border-accent/50 transition-all duration-300">
                <h4 className="font-semibold text-foreground mb-2">Community Contribution</h4>
                <p className="text-muted-foreground text-sm">
                  Mentoring peers, conducting technical workshops, and fostering collaborative learning environments.
                </p>
              </div>
            </div>
          </section> */}

          {/* CTA */}
          {/* <div
            className={`mt-16 pt-12 border-t border-border/20 text-center transition-all duration-1000 delay-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          >
            <p className="text-muted-foreground mb-6">Want to collaborate or learn more?</p>
            <Link
              href="/contact"
              className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 inline-flex items-center gap-2"
            >
              Get in Touch
            </Link>
          </div> */}
        </div>
      </div>
    </main>
  )
}
