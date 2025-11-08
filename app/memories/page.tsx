"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, X, Pin } from "lucide-react"
import Image from "next/image"

interface Story {
  id: string
  title: string
  images: string[]
}

interface Memory {
  id: string
  image: string
  title: string
  caption: string
  date: string
  pinned: boolean
}

const stories: Story[] = [
  {
    id: "1",
    title: "Conducted Workshop",
    images: ["/workshop.jpg"],
  },
  {
    id: "2",
    title: "Hackathon Win",
    images: ["/cfg.jpg"],
  },
  {
    id: "3",
    title: "Football Victory",
    images: ["/football.jpg"],
  },
  {
    id: "4",
    title: "Coding Sessions",
    images: ["/coding.jpg"],
  },
  {
    id: "5",
    title: "Travel Adventures",
    images: ["/travel.jpg"],
  },
  {
    id: "6",
    title: "Concert Night",
    images: ["/concerrt.jpg"],
  },
]

const initialMemories: Memory[] = [
  {
    id: "1",
    image: "/workshop.jpg",
    title: "Workshop on Agentic AI for Juniors in College",
    caption: "Speaking about Langraph framework AI agents and building AI applications",
    date: "March 2025",
    pinned: false,
  },
  {
    id: "2",
    image: "/cfg.jpg",
    title: "JPMorgan CodeForGood",
    caption: "Finalist in the prestigious hackathon, building solutions for NGOs",
    date: "February 2025",
    pinned: false,
  },
  {
    id: "3",
    image: "/football.jpg",
    title: "Inter-College Football",
    caption: "Leading our team to victory as captain and highest goal scorer",
    date: "January 2025",
    pinned: false,
  },
  {
    id: "4",
    image: "/coding.jpg",
    title: "Cybersecurity event at DJ Sanghvi College",
    caption: "Participated in the Capture The Flag event with 2 of my classmates. Great learning experience",
    date: "November 2025",
    pinned: false,
  },
  
  {
    id: "6",
    image: "/ostrich.jpg",
    title: "Enjoying with animals at Ostrich Farm",
    caption: "",
    date: "November 2024",
    pinned: false,
  },
  {
    id: "7",
    image: "/skydiving.jpg",
    title: "Skydiving Adventure",
    caption: "In South Africa, took the plunge and experienced the thrill of freefalling from 15,000 feet",
    date: "July 2024",
    pinned: false,
  },
  {
    id: "8",
    image: "/friends.jpg",
    title: "Campus Life",
    caption: "Moments with friends on tradition day at VJTI",
    date: "September 2024",
    pinned: false,
  },
  {
    id: "9",
    image: "/bungee.jpg",
    title: "Bungee Jumping",
    caption: "Leaping off the south africa's bridge, the highest natural bungee jump in the world",
    date: "August 2024",
    pinned: false,
  },
]

export default function Memories() {
  const [memories, setMemories] = useState(initialMemories)
  const [selectedStory, setSelectedStory] = useState<string | null>(null)
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0)
  const [viewedStories, setViewedStories] = useState<string[]>([])

  const openStory = (storyId: string) => {
    setSelectedStory(storyId)
    setCurrentStoryIndex(0)
    if (!viewedStories.includes(storyId)) {
      setViewedStories([...viewedStories, storyId])
    }
  }

  const nextStory = () => {
    const currentStory = stories.find((s) => s.id === selectedStory)
    if (currentStory && currentStoryIndex < currentStory.images.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1)
    }
  }

  const prevStory = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(currentStoryIndex - 1)
    }
  }

  const togglePin = (id: string) => {
    setMemories((prevMemories) =>
      prevMemories.map((memory) => (memory.id === id ? { ...memory, pinned: !memory.pinned } : memory)),
    )
  }

  const pinnedMemories = memories.filter((m) => m.pinned)
  const unpinnedMemories = memories.filter((m) => !m.pinned)
  const sortedMemories = [...pinnedMemories, ...unpinnedMemories]

  const currentStory = stories.find((s) => s.id === selectedStory)
  const currentImage = currentStory?.images[currentStoryIndex]

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
        <header className="border-b border-border/30 backdrop-blur-sm sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <h1 className="text-3xl font-bold mb-2">Moments & Memories</h1>
            <p className="text-muted-foreground">Visual stories and snapshots of my journey</p>
          </div>
        </header>

        {/* Content */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          {/* Stories Strip */}
          <div className="mb-16">
            <h2 className="text-xl font-semibold mb-6 text-foreground">Recent Stories</h2>
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
              {stories.map((story) => {
                const isViewed = viewedStories.includes(story.id)
                return (
                  <button
                    key={story.id}
                    onClick={() => openStory(story.id)}
                    className={`flex-shrink-0 relative w-24 h-24 rounded-full overflow-hidden cursor-pointer transition-all duration-300 group ${
                      isViewed ? "opacity-60" : "hover:scale-105"
                    }`}
                  >
                    <Image
                      src={story.images[0] || "/placeholder.svg"}
                      alt={story.title}
                      fill
                      className="object-cover"
                    />
                    <div
                      className={`absolute inset-0 rounded-full border-2 ${
                        isViewed ? "border-muted-foreground/30" : "border-primary"
                      }`}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-full" />
                    <p className="absolute bottom-1 left-1/2 -translate-x-1/2 text-xs font-medium text-white text-center w-full line-clamp-1">
                      {story.title}
                    </p>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Gallery Grid */}
          <div>
            <h2 className="text-xl font-semibold mb-6 text-foreground">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
              {sortedMemories.map((memory, index) => (
                <div
                  key={memory.id}
                  className={`group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-500 hover:scale-105 ${
                    memory.pinned ? "lg:col-span-2 lg:row-span-2" : ""
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  {/* Image */}
                  <div className="relative w-full h-64 md:h-72 lg:h-96">
                    <Image
                      src={memory.image || "/placeholder.svg"}
                      alt={memory.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">{memory.title}</h3>
                    <p className="text-sm text-gray-200 mb-3 line-clamp-2">{memory.caption}</p>
                    <p className="text-xs text-gray-400">{memory.date}</p>
                  </div>

                  {/* Pin button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      togglePin(memory.id)
                    }}
                    className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
                      memory.pinned
                        ? "bg-primary/80 text-primary-foreground"
                        : "bg-black/30 text-white hover:bg-black/50"
                    }`}
                  >
                    <Pin className={`w-4 h-4 ${memory.pinned ? "fill-current" : ""}`} />
                  </button>

                  {/* Pinned badge */}
                  {memory.pinned && (
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/80 text-primary-foreground text-xs font-semibold">
                      Pinned
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Story Lightbox */}
      {selectedStory && currentImage && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center">
          {/* Close button */}
          <button
            onClick={() => setSelectedStory(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Story content */}
          <div className="relative w-full max-w-md mx-auto">
            {/* Progress bar */}
            <div className="flex gap-1 mb-4 px-4">
              {currentStory?.images.map((_, index) => (
                <div
                  key={index}
                  className={`flex-1 h-1 rounded-full transition-all duration-300 ${
                    index <= currentStoryIndex ? "bg-primary" : "bg-white/30"
                  }`}
                />
              ))}
            </div>

            {/* Image */}
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4">
              <Image src={currentImage || "/placeholder.svg"} alt="Story" fill className="object-cover" />
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between px-4 mb-4">
              <button
                onClick={prevStory}
                disabled={currentStoryIndex === 0}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-50 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <span className="text-white text-sm">
                {currentStoryIndex + 1} / {currentStory?.images.length}
              </span>
              <button
                onClick={nextStory}
                disabled={currentStoryIndex === (currentStory?.images.length || 1) - 1}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-50 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Story info */}
            <div className="px-4 text-white">
              <h3 className="text-lg font-semibold mb-1">{currentStory?.title}</h3>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
