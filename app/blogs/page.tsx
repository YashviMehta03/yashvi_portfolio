"use client"

import { useState } from "react"
import { BookOpen, Calendar, Clock, Tag, Search } from "lucide-react"

interface Blog {
  id: string
  title: string
  excerpt: string
  content: string
  category: string
  tags: string[]
  date: string
  readTime: string
  featured?: boolean
}

const initialBlogs: Blog[] = [
  {
    id: "1",
    title: "Building AI Document Querying Systems with RAG",
    excerpt:
      "A deep dive into Retrieval Augmented Generation pipelines for processing complex financial documents with 95% accuracy.",
    content:
      "In this article, I explore the architecture behind automated financial document querying using RAG techniques. We'll cover hybrid retrieval systems, chunking strategies, and how combining vector similarity search with keyword matching can achieve remarkable precision. From PDF parsing with Docling to implementing re-ranking techniques, this guide walks through the complete pipeline.",
    category: "AI/ML",
    tags: ["RAG", "LLM", "Document Processing", "AI"],
    date: "Mar 15, 2025",
    readTime: "8 min",
    featured: true,
  },
  {
    id: "2",
    title: "Stock Price Prediction: LSTM vs Transformers",
    excerpt: "Comparing different deep learning architectures for time series forecasting with real stock market data.",
    content:
      "Which architecture performs best for volatile market prediction? Through extensive experimentation with LSTM, Transformers, and Informers on real stock data, I discovered that architecture choice depends heavily on market volatility patterns. This article breaks down the metrics, trade-offs, and when to use each approach.",
    category: "AI/ML",
    tags: ["Deep Learning", "Stock Market", "Time Series", "Python"],
    date: "Feb 20, 2025",
    readTime: "12 min",
  },
  {
    id: "3",
    title: "Sustainable Tech: Building Eco-Friendly Applications",
    excerpt:
      "How technology can drive positive environmental impact and the design decisions behind the Sustainable Travel Planner.",
    content:
      "Building with sustainability in mind changes how we approach development. The Sustainable Travel Planner project taught me that technology can be a force for environmental good. From carbon footprint calculations to real-time weather integration, learn how to design applications that promote responsible choices.",
    category: "Sustainability",
    tags: ["Green Tech", "Web Development", "Impact", "Design"],
    date: "Jan 30, 2025",
    readTime: "6 min",
  },
  {
    id: "4",
    title: "Leadership Lessons from Sports and Tech",
    excerpt: "Unexpected parallels between athletic leadership and managing technical teams and projects.",
    content:
      "My journey as a football team captain taught me principles that directly apply to tech leadership. Communication, trust, shared vision, and accountability are universal. Whether you're organizing a hackathon, mentoring juniors, or coordinating placements, the fundamentals remain the same. This article explores practical lessons.",
    category: "Leadership",
    tags: ["Leadership", "Teamwork", "Mentorship"],
    date: "Jan 10, 2025",
    readTime: "5 min",
  },
  // {
  //   id: "5",
  //   title: "Full-Stack Development: A Practical Journey",
  //   excerpt: "Insights from building multiple full-stack projects and the technologies that made it possible.",
  //   content:
  //     "Building full-stack applications requires understanding both frontend elegance and backend robustness. Through projects like the Sustainable Travel Planner, I've learned to balance React's responsiveness with Node.js reliability and MongoDB's flexibility. This guide shares practical patterns and architectural decisions.",
  //   category: "Web Development",
  //   tags: ["React", "Node.js", "MongoDB", "Architecture"],
  //   date: "Dec 28, 2024",
  //   readTime: "10 min",
  // },
  // {
  //   id: "6",
  //   title: "Technical Communication: Writing Code Others Understand",
  //   excerpt: "Best practices for documentation, code comments, and communicating technical ideas clearly.",
  //   content:
  //     "Clear communication separates good developers from great ones. Whether it's documenting an API, writing commit messages, or explaining complex algorithms, the principles remain: be precise, provide context, and consider your audience. This article outlines strategies for becoming a better communicator.",
  //   category: "Best Practices",
  //   tags: ["Documentation", "Communication", "Code Quality"],
  //   date: "Dec 15, 2024",
  //   readTime: "7 min",
  // },
]

const categories = ["All", "AI/ML", "Web Development", "Leadership", "Agentic-Ai"]

export default function Blogs() {
  const [blogs, setBlogs] = useState(initialBlogs)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoaded, setIsLoaded] = useState(true)

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <main className="min-h-screen bg-background overflow-hidden pb-24">
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
          <div className="max-w-4xl mx-auto px-6 py-6">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-6 h-6 text-primary" />
              <h1 className="text-3xl font-bold">Blog</h1>
            </div>
            <p className="text-muted-foreground">
              Articles on AI, development, leadership, and building technology with purpose
            </p>
          </div>
        </header>

        {/* Content */}
        <section className="max-w-4xl mx-auto px-6 py-12">
          {/* Search Bar */}
          <div className="mb-8 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-border/30 bg-card/60 backdrop-blur-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>

          {/* Category Filter */}
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-card/60 border border-border/30 text-foreground hover:border-primary/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blogs Grid */}
          <div className="space-y-6">
            {filteredBlogs.map((blog, index) => (
              <article
                key={blog.id}
                className={`group relative overflow-hidden rounded-xl border border-border/30 bg-card/40 backdrop-blur-sm p-8 hover:border-primary/50 transition-all duration-500 cursor-pointer ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: isLoaded ? `${index * 100}ms` : "0ms" }}
              >
                {/* Featured badge */}
                {blog.featured && (
                  <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-primary/20 border border-primary/50 text-xs font-semibold text-primary">
                    Featured
                  </div>
                )}

                {/* Content */}
                <div className="mb-4">
                  <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {blog.title}
                  </h2>
                  <p className="text-base text-foreground/80 leading-relaxed mb-4">{blog.excerpt}</p>

                  {/* Meta information */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{blog.readTime}</span>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                      {blog.category}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-border/30 text-muted-foreground px-3 py-1 rounded-full">
                        <Tag className="w-3 h-3 inline mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Read more indicator */}
                <div className="mt-6 pt-4 border-t border-border/20 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium">Read Article</span>
                  <span>→</span>
                </div>
              </article>
            ))}
          </div>

          {filteredBlogs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No articles found matching your search.</p>
            </div>
          )}
        </section>
      </div>
    </main>
  )
}
