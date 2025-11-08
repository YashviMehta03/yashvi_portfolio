"use client"

import { useState } from "react"
import { Heart, MessageCircle, Repeat2, Share, Search, Users } from "lucide-react"

export default function MindEchoes() {
  const [activeTab, setActiveTab] = useState<"stream" | "communities">("stream")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const categories = [
    { id: "all", label: "All Thoughts", color: "from-primary/20 to-primary/5" },
    { id: "tech", label: "Tech Talks", color: "from-accent/20 to-accent/5" },
    { id: "random", label: "Random Thoughts", color: "from-secondary/20 to-secondary/5" },
    { id: "life", label: "Life Logs", color: "from-primary/20 to-accent/5" },
    { id: "design", label: "Design Notes", color: "from-accent/20 to-secondary/5" },
  ]

  const thoughts = [
    {
      id: 1,
      author: "You",
      handle: "@mindpalace",
      avatar: "🧠",
      content:
        "Just realized that the best ideas come when you're not actively looking for them. The mind works in mysterious ways.",
      category: "random",
      timestamp: "2 hours ago",
      likes: 24,
      replies: 5,
      reposts: 3,
      liked: false,
    },
    {
      id: 2,
      author: "You",
      handle: "@mindpalace",
      avatar: "🧠",
      content:
        "Building with React Server Components feels like unlocking a new dimension of web development. The possibilities are endless.",
      category: "tech",
      timestamp: "5 hours ago",
      likes: 156,
      replies: 23,
      reposts: 42,
      liked: false,
    },
    {
      id: 3,
      author: "You",
      handle: "@mindpalace",
      avatar: "🧠",
      content:
        "There's something beautiful about minimalist design. It's not about removing everything—it's about keeping only what matters.",
      category: "design",
      timestamp: "1 day ago",
      likes: 89,
      replies: 12,
      reposts: 18,
      liked: false,
    },
    {
      id: 4,
      author: "You",
      handle: "@mindpalace",
      avatar: "🧠",
      content:
        "Coffee tastes better when you're solving a problem. Or maybe I'm just addicted to caffeine. Probably both.",
      category: "life",
      timestamp: "1 day ago",
      likes: 45,
      replies: 8,
      reposts: 7,
      liked: false,
    },
    {
      id: 5,
      author: "You",
      handle: "@mindpalace",
      avatar: "🧠",
      content: "The intersection of art and technology is where magic happens. Every pixel tells a story.",
      category: "design",
      timestamp: "2 days ago",
      likes: 112,
      replies: 19,
      reposts: 31,
      liked: false,
    },
  ]

  const communities = [
    {
      id: 1,
      name: "AI/ML Circle",
      description: "Exploring artificial intelligence, machine learning, and the future of tech",
      members: 342,
      trending: ["LLMs", "Neural Networks", "Transformers"],
      icon: "🤖",
    },
    {
      id: 2,
      name: "Hackathon Crew",
      description: "Building cool things under pressure. Stories, wins, and lessons learned.",
      members: 156,
      trending: ["Web3", "Startups", "Innovation"],
      icon: "🚀",
    },
    {
      id: 3,
      name: "Design Thinkers",
      description: "UX/UI design, design systems, and the art of creating beautiful interfaces",
      members: 289,
      trending: ["Design Systems", "Accessibility", "Motion Design"],
      icon: "🎨",
    },
    {
      id: 4,
      name: "Open Source Advocates",
      description: "Contributing to open source, building in public, and community-driven development",
      members: 421,
      trending: ["GitHub", "Collaboration", "Community"],
      icon: "🔓",
    },
  ]

  const filteredThoughts = thoughts.filter((thought) => {
    const matchesCategory = !selectedCategory || selectedCategory === "all" || thought.category === selectedCategory
    const matchesSearch = searchQuery === "" || thought.content.toLowerCase().includes(searchQuery.toLowerCase())
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
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent portal-glow flex items-center justify-center">
                <span className="text-lg">💭</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Mind Echoes</h1>
                <p className="text-xs text-muted-foreground">Open thoughts and reflections</p>
              </div>
            </div>

            {/* Search bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search thoughts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-border/30 bg-card/40 backdrop-blur-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
          </div>

          {/* Tabs */}
          <div className="border-t border-border/30 backdrop-blur-sm">
            <div className="max-w-4xl mx-auto px-6 flex gap-8">
              <button
                onClick={() => setActiveTab("stream")}
                className={`py-4 px-2 border-b-2 transition-colors font-medium text-sm ${
                  activeTab === "stream"
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                Thought Stream
              </button>
              <button
                onClick={() => setActiveTab("communities")}
                className={`py-4 px-2 border-b-2 transition-colors font-medium text-sm flex items-center gap-2 ${
                  activeTab === "communities"
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                <Users className="w-4 h-4" />
                Communities
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 py-8">
          {activeTab === "stream" && (
            <div>
              {/* Category filter */}
              <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 text-sm font-medium ${
                      selectedCategory === cat.id
                        ? "bg-primary text-primary-foreground"
                        : "border border-border/30 text-muted-foreground hover:text-foreground hover:border-primary/50"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Thoughts feed */}
              <div className="space-y-4">
                {filteredThoughts.map((thought) => (
                  <div
                    key={thought.id}
                    className="group relative overflow-hidden rounded-xl border border-border/30 bg-card/40 backdrop-blur-sm p-6 hover:border-primary/50 transition-all duration-300 hover:bg-card/60"
                  >
                    {/* Hover glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 blur-xl" />
                    </div>

                    <div className="relative z-10">
                      {/* Author info */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-lg">
                          {thought.avatar}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-foreground">{thought.author}</span>
                            <span className="text-muted-foreground text-sm">{thought.handle}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">{thought.timestamp}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <p className="text-foreground mb-4 leading-relaxed">{thought.content}</p>

                      {/* Interactions */}
                      <div className="flex items-center gap-8 text-muted-foreground text-sm">
                        <button className="flex items-center gap-2 hover:text-accent transition-colors group/btn">
                          <MessageCircle className="w-4 h-4 group-hover/btn:bg-accent/20 rounded-full p-1 w-6 h-6" />
                          <span className="text-xs">{thought.replies}</span>
                        </button>
                        <button className="flex items-center gap-2 hover:text-secondary transition-colors group/btn">
                          <Repeat2 className="w-4 h-4 group-hover/btn:bg-secondary/20 rounded-full p-1 w-6 h-6" />
                          <span className="text-xs">{thought.reposts}</span>
                        </button>
                        <button className="flex items-center gap-2 hover:text-primary transition-colors group/btn">
                          <Heart className="w-4 h-4 group-hover/btn:bg-primary/20 rounded-full p-1 w-6 h-6" />
                          <span className="text-xs">{thought.likes}</span>
                        </button>
                        <button className="flex items-center gap-2 hover:text-accent transition-colors ml-auto">
                          <Share className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "communities" && (
            <div className="grid md:grid-cols-2 gap-6">
              {communities.map((community) => (
                <div
                  key={community.id}
                  className="group relative overflow-hidden rounded-xl border border-border/30 bg-card/40 backdrop-blur-sm p-6 hover:border-primary/50 transition-all duration-300 hover:bg-card/60"
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 blur-xl" />
                  </div>

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl">
                        {community.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {community.name}
                        </h3>
                        <p className="text-xs text-muted-foreground">{community.members} members</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4">{community.description}</p>

                    {/* Trending topics */}
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-muted-foreground mb-2">Trending</p>
                      <div className="flex flex-wrap gap-2">
                        {community.trending.map((topic) => (
                          <span
                            key={topic}
                            className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20 transition-colors cursor-pointer"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Join button */}
                    <button className="w-full py-2 rounded-lg border border-primary/50 text-primary hover:bg-primary/10 transition-colors font-medium text-sm">
                      Join Circle
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
