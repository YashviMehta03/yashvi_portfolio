"use client"

import { useState } from "react"
import { Heart, MessageCircle, Repeat2, Share, Sparkles, Users } from "lucide-react"

interface Post {
  id: string
  title: string
  content: string
  timestamp: string
  category: string
  likes: number
  replies: number
  reposts: number
  liked: boolean
  featured?: boolean
}

interface Community {
  id: string
  name: string
  description: string
  members: number
  topics: string[]
  icon: string
  color: string
}

const initialPosts: Post[] = [
  
  {
    id: "1",
    title: "Back to College Life!",
    content:
      "First week back on campus, group projects, canteen food, and long chai breaks with friends. There’s just something about the chaos that feels oddly comforting.",
    timestamp: "7 July 2025",
    category: "College Diaries",
    likes: 275,
    replies: 19,
    reposts: 88,
    liked: false,
  },
  {
    id: "2",
    title: "Weekend Getaway to Manali",
    content:
      "Took an impromptu trip to Manali this weekend. Snow, hot Maggi, and mountain air — pure therapy! Sometimes all you need is to disconnect to recharge.",
    timestamp: "6 days ago",
    category: "Travel Logs",
    likes: 498,
    replies: 41,
    reposts: 210,
    liked: false,
  },
  {
    id: "3",
    title: "Midnight Maggie and Hostel Talks",
    content:
      "Best ideas come out of 2 AM hostel room chats — from startup dreams to random jokes. Add some steaming Maggi and laughter, and you’ve got the perfect night combo.",
    timestamp: "1 day ago",
    category: "College Diaries",
    likes: 382,
    replies: 37,
    reposts: 150,
    liked: false,
  },
  {
    id: "4",
    title: "The Future of AI",
    content:
      "Just finished implementing a hybrid retrieval system for financial document querying. The combination of vector similarity + keyword search + re-ranking achieved 95% accuracy. Excited about how AI keeps reshaping industries!",
    timestamp: "2 hours ago",
    category: "Tech Talk",
    likes: 342,
    replies: 28,
    reposts: 156,
    liked: false,
    
  },
  {
    id: "5",
    title: "Exploring Street Food in Delhi",
    content:
      "Tried everything from golgappas at Rajouri to kebabs in Chandni Chowk, pure bliss. Street food really is an adventure for your taste buds!",
    timestamp: "2 days ago",
    category: "Foodie Tales",
    likes: 612,
    replies: 58,
    reposts: 239,
    liked: false,
  },
  // {
  //   id: "6",
  //   title: "AI in Education",
  //   content:
  //     "Been reading about adaptive learning systems powered by AI — they personalize lessons based on student performance. Could make learning so much more efficient.",
  //   timestamp: "3 days ago",
  //   category: "Tech Talk",
  //   likes: 210,
  //   replies: 17,
  //   reposts: 95,
  //   liked: false,
  // },
]

const communities: Community[] = [
  
  {
    id: "2",
    name: "Wanderlust",
    description: "Share your travel stories, hidden gems, and adventures.",
    members: 3125,
    topics: ["Travel", "Photography", "Experiences"],
    icon: "🌍",
    color: "from-accent/20 to-accent/5",
  },
  {
    id: "1",
    name: "Tech Talk",
    description: "Discussions on AI, coding, and emerging tech trends.",
    members: 2780,
    topics: ["AI", "Machine Learning", "Web Dev"],
    icon: "💻",
    color: "from-primary/20 to-primary/5",
  },
  {
    id: "3",
    name: "Foodies United",
    description: "For everyone who believes good food = good mood.",
    members: 2856,
    topics: ["Recipes", "Street Food", "Cafes"],
    icon: "🍜",
    color: "from-secondary/20 to-secondary/5",
  },
]

const categories = ["All", "College Diaries", "Travel Logs","Tech Talk", "Foodie Tales"]

export default function Thoughts() {
  const [posts, setPosts] = useState(initialPosts)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [isLoaded, setIsLoaded] = useState(true)

  const filteredPosts = selectedCategory === "All" ? posts : posts.filter((p) => p.category === selectedCategory)

  const toggleLike = (id: string) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 } : post,
      ),
    )
  }

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
          <div className="max-w-6xl mx-auto px-6 py-6">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-6 h-6 text-primary" />
              <h1 className="text-3xl font-bold">Thought Stream</h1>
            </div>
            <p className="text-muted-foreground">
              Thoughts, stories, and moments from everyday life — tech, travel, food, and beyond.
            </p>
          </div>
        </header>

        {/* Content */}
        <section className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left: Posts */}
            <div className="lg:col-span-2">
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

              {/* Posts */}
              <div className="space-y-6">
                {filteredPosts.map((post, index) => (
                  <div
                    key={post.id}
                    className={`group relative overflow-hidden rounded-xl border border-border/30 bg-card/40 backdrop-blur-sm p-6 hover:border-primary/50 transition-all duration-500 ${
                      isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: isLoaded ? `${index * 100}ms` : "0ms" }}
                  >
                    {/* Featured badge */}
                    {post.featured && (
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/20 border border-primary/50 text-xs font-semibold text-primary flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        Featured
                      </div>
                    )}

                    {/* Post content */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-foreground">{post.title}</h3>
                        <span className="text-xs text-muted-foreground">{post.timestamp}</span>
                      </div>
                      <p className="text-sm text-primary font-medium mb-3">{post.category}</p>
                      <p className="text-base text-foreground/90 leading-relaxed">{post.content}</p>
                    </div>

                    {/* Interaction bar */}
                    <div className="flex items-center justify-between pt-4 border-t border-border/20 text-muted-foreground text-sm">
                      <button className="flex items-center gap-2 hover:text-primary transition-colors duration-300">
                        <MessageCircle className="w-4 h-4" />
                        <span>{post.replies}</span>
                      </button>
                      <button className="flex items-center gap-2 hover:text-accent transition-colors duration-300">
                        <Repeat2 className="w-4 h-4" />
                        <span>{post.reposts}</span>
                      </button>
                      <button
                        onClick={() => toggleLike(post.id)}
                        className={`flex items-center gap-2 transition-colors duration-300 ${
                          post.liked ? "text-red-500" : "hover:text-red-500"
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${post.liked ? "fill-current" : ""}`} />
                        <span>{post.likes}</span>
                      </button>
                      <button className="flex items-center gap-2 hover:text-secondary transition-colors duration-300">
                        <Share className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Communities Section */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="flex items-center gap-2 mb-6">
                  <Users className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-semibold">Communities</h2>
                </div>

                <div className="space-y-4">
                  {communities.map((community, index) => (
                    <div
                      key={community.id}
                      className={`group relative overflow-hidden rounded-lg border border-border/30 bg-card/40 backdrop-blur-sm p-4 hover:border-primary/50 transition-all duration-500 cursor-pointer ${
                        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      }`}
                      style={{ transitionDelay: isLoaded ? `${(index + 5) * 100}ms` : "0ms" }}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${community.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      />
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-3">
                          <span className="text-2xl">{community.icon}</span>
                          <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full font-medium">
                            {community.members.toLocaleString()}
                          </span>
                        </div>
                        <h3 className="font-semibold text-sm text-foreground mb-1 group-hover:text-primary transition-colors">
                          {community.name}
                        </h3>
                        <p className="text-xs text-muted-foreground mb-3">{community.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {community.topics.slice(0, 2).map((topic) => (
                            <span key={topic} className="text-xs bg-border/30 text-muted-foreground px-2 py-1 rounded">
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
