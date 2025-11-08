"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Github, ExternalLink, Tag } from "lucide-react"

export default function Workshop() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const projects = [
    {
      id: "project-1",
      title: "Automated Financial Document Querying using RAG",
      description:
        "AI-powered pipeline to extract and query data from complex regulatory documents like annual reports.",
      longDescription:
        "Developed a Retrieval Augmented Generation pipeline using Docling library to convert PDFs to markdown, implemented custom chunking strategies for document accuracy. Used hybrid retrieval combining vector similarity and keyword search with re-ranking techniques, achieving 95% retrieval accuracy and 85-87% answer accuracy with LLM.",
      tags: ["AI", "LLM", "RAG", "Python", "Vector Database"],
      image: "/ai-document-querying-financial-data.jpg",
      github: "https://github.com/YashviMehta03",
      demo: "#",
      year: "2025",
      status: "In Progress",
    },
    {
      id: "project-2",
      title: "Sustainable Travel Planner",
      description: "Personalized itinerary creator with carbon footprint calculator for sustainable travel planning.",
      longDescription:
        "Built a GenAI-powered travel planning platform that generates day-wise detailed itineraries based on preferences, budget, and travel mode. Integrated accommodation and restaurant recommendations via APIs, enabling seamless flight and hotel bookings with real-time weather alerts.",
      tags: ["React", "Node.js", "Python", "MongoDB", "Flask"],
      image: "/travel-planning-itinerary-sustainability.jpg",
      github: "https://github.com/YashviMehta03",
      demo: "#",
      year: "2024",
      status: "Completed",
    },
    {
      id: "project-3",
      title: "Stock Price Predictor",
      description: "ML models predicting closing prices and trends for volatile and non-volatile stocks.",
      longDescription:
        "Implemented 3 architectures (LSTM, Transformer, Informer) with Time2Vec encoding to capture periodic patterns. Engineered features including RSI, ROC, and Bollinger Bands indicators. LSTM achieved 0.93 accuracy, Transformers and Informers at 0.9, with performance analysis across stock volatility levels.",
      tags: ["Python", "TensorFlow", "Machine Learning", "Time Series", "Data Engineering"],
      image: "/stock-market-prediction-deep-learning-charts.jpg",
      github: "https://github.com/YashviMehta03",
      demo: "#",
      year: "2024",
      status: "Completed",
    },
  ]

  const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)))

  const filteredProjects = selectedTag ? projects.filter((p) => p.tags.includes(selectedTag)) : projects

  return (
    <main className="min-h-screen bg-background pb-24">
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl ambient-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl ambient-pulse"
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
            <h1 className="text-2xl font-bold text-foreground">The Workshop</h1>
            <div className="w-20" />
          </div>
        </header>

        {/* Content */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-12">
            <p className="text-muted-foreground text-lg max-w-2xl mb-8">
              A collection of projects showcasing my exploration of AI, machine learning, and full-stack development.
            </p>

            {/* Tag filter */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedTag === null
                    ? "bg-primary text-primary-foreground"
                    : "bg-card/40 text-muted-foreground hover:bg-card/60 border border-border/30"
                }`}
              >
                All Projects
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedTag === tag
                      ? "bg-accent text-accent-foreground"
                      : "bg-card/40 text-muted-foreground hover:bg-card/60 border border-border/30"
                  }`}
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative rounded-xl overflow-hidden border border-border/30 bg-card/40 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 cursor-pointer"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image container */}
                <div className="relative h-48 overflow-hidden bg-muted/20">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 right-3 px-3 py-1 bg-background/80 backdrop-blur text-xs font-semibold rounded-full text-accent border border-accent/30">
                    {project.status}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                        {project.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">{project.year}</p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded bg-primary/10 text-primary/80 border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs px-2 py-1 rounded bg-muted/20 text-muted-foreground">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div
                    className={`flex gap-3 transition-all duration-300 ${
                      hoveredId === project.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    {project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 blur-xl" />
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found with the selected tag.</p>
            </div>
          )}

          {/* Footer
          <div className="pt-12 border-t border-border/20 text-center">
            <p className="text-muted-foreground text-sm">
              Each project represents a unique challenge in AI, machine learning, and full-stack development.
            </p>
          </div> */}
        </section>
      </div>
    </main>
  )
}
