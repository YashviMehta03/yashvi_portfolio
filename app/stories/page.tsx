"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

export default function FragmentsOfMemory() {
  const [selectedStoryIndex, setSelectedStoryIndex] = useState<number | null>(null)
  const [viewedStories, setViewedStories] = useState<Set<number>>(new Set())

  const stories = [
    {
      id: 1,
      title: "Conference Speaking",
      category: "Milestones",
      image: "/gallery-conference-speaking.jpg",
      description: "Sharing insights on design systems at a major tech conference",
      date: "Oct 2024",
    },
    {
      id: 2,
      title: "Team Collaboration",
      category: "Work",
      image: "/gallery-team-collaboration.jpg",
      description: "Building amazing things with an incredible team",
      date: "Sep 2024",
    },
    {
      id: 3,
      title: "Hackathon Win",
      category: "Achievements",
      image: "/gallery-hackathon-win.jpg",
      description: "First place at the annual hackathon with an AI-powered project",
      date: "Aug 2024",
    },
    {
      id: 4,
      title: "Workspace Setup",
      category: "Daily Life",
      image: "/gallery-workspace-setup.jpg",
      description: "My creative sanctuary where ideas come to life",
      date: "Jul 2024",
    },
    {
      id: 5,
      title: "Open Source Community",
      category: "Community",
      image: "/gallery-open-source-community.jpg",
      description: "Contributing to projects that matter",
      date: "Jun 2024",
    },
    {
      id: 6,
      title: "Learning Moment",
      category: "Growth",
      image: "/gallery-learning-moment.jpg",
      description: "Continuous learning and skill development",
      date: "May 2024",
    },
    {
      id: 7,
      title: "Travel Inspiration",
      category: "Exploration",
      image: "/gallery-travel-inspiration.jpg",
      description: "Finding inspiration in new places and cultures",
      date: "Apr 2024",
    },
    {
      id: 8,
      title: "Product Launch",
      category: "Milestones",
      image: "/gallery-product-launch.jpg",
      description: "Launching a project I'm proud of",
      date: "Mar 2024",
    },
  ]

  const handleStoryClick = (index: number) => {
    setSelectedStoryIndex(index)
    setViewedStories((prev) => new Set(prev).add(index))
  }

  const handleNextStory = () => {
    if (selectedStoryIndex !== null && selectedStoryIndex < stories.length - 1) {
      setSelectedStoryIndex(selectedStoryIndex + 1)
      setViewedStories((prev) => new Set(prev).add(selectedStoryIndex + 1))
    }
  }

  const handlePrevStory = () => {
    if (selectedStoryIndex !== null && selectedStoryIndex > 0) {
      setSelectedStoryIndex(selectedStoryIndex - 1)
    }
  }

  const handleCloseStory = () => {
    setSelectedStoryIndex(null)
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
        <header className="border-b border-border/30 backdrop-blur-sm sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent portal-glow flex items-center justify-center">
                <span className="text-lg">📸</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Fragments of Memory</h1>
                <p className="text-xs text-muted-foreground">Quick glimpses into moments that matter</p>
              </div>
            </div>
          </div>
        </header>

        {/* Stories Strip */}
        <div className="border-b border-border/30 backdrop-blur-sm sticky top-20 z-30 bg-background/50">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <p className="text-xs font-semibold text-muted-foreground mb-4 uppercase tracking-wider">Stories</p>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {stories.map((story, index) => (
                <button
                  key={story.id}
                  onClick={() => handleStoryClick(index)}
                  className={`flex-shrink-0 relative group cursor-pointer transition-all duration-300 ${
                    viewedStories.has(index) ? "opacity-60" : ""
                  }`}
                >
                  {/* Story circle */}
                  <div
                    className={`w-16 h-16 rounded-full border-2 overflow-hidden transition-all duration-300 ${
                      selectedStoryIndex === index
                        ? "border-primary scale-110"
                        : "border-border/50 group-hover:border-primary/70"
                    }`}
                  >
                    <img
                      src={story.image || "/placeholder.svg"}
                      alt={story.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  {/* Story title */}
                  <p className="text-xs text-center mt-2 text-muted-foreground group-hover:text-foreground transition-colors max-w-16 truncate">
                    {story.title}
                  </p>
                  {/* Viewed indicator */}
                  {viewedStories.has(index) && (
                    <div className="absolute top-0 right-0 w-2 h-2 bg-muted-foreground rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stories Grid */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map((story, index) => (
              <button
                key={story.id}
                onClick={() => handleStoryClick(index)}
                className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
              >
                {/* Image */}
                <img
                  src={story.image || "/placeholder.svg"}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xs font-semibold text-primary mb-2 uppercase tracking-wider">{story.category}</p>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{story.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{story.description}</p>
                </div>

                {/* Vignette effect */}
                <div className="absolute inset-0 rounded-xl shadow-inset pointer-events-none border border-border/20" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Story Lightbox */}
      {selectedStoryIndex !== null && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300">
          {/* Close button */}
          <button
            onClick={handleCloseStory}
            className="absolute top-6 right-6 p-2 rounded-lg border border-border/30 bg-card/40 hover:bg-card/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Story content */}
          <div className="w-full max-w-2xl">
            {/* Progress bar */}
            <div className="mb-4 flex gap-1">
              {stories.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                    index === selectedStoryIndex
                      ? "bg-primary"
                      : index < selectedStoryIndex
                        ? "bg-primary/50"
                        : "bg-border/30"
                  }`}
                />
              ))}
            </div>

            {/* Story image */}
            <div className="relative rounded-xl overflow-hidden mb-6 aspect-video bg-card/40 border border-border/30">
              <img
                src={stories[selectedStoryIndex].image || "/placeholder.svg"}
                alt={stories[selectedStoryIndex].title}
                className="w-full h-full object-cover animate-in fade-in duration-300"
              />
            </div>

            {/* Story info */}
            <div className="mb-6">
              <p className="text-xs font-semibold text-primary mb-2 uppercase tracking-wider">
                {stories[selectedStoryIndex].category}
              </p>
              <h2 className="text-2xl font-bold text-foreground mb-3">{stories[selectedStoryIndex].title}</h2>
              <p className="text-muted-foreground mb-4">{stories[selectedStoryIndex].description}</p>
              <p className="text-xs text-muted-foreground">{stories[selectedStoryIndex].date}</p>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-4">
              <button
                onClick={handlePrevStory}
                disabled={selectedStoryIndex === 0}
                className="p-2 rounded-lg border border-border/30 bg-card/40 hover:bg-card/60 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <span className="text-sm text-muted-foreground">
                {selectedStoryIndex + 1} / {stories.length}
              </span>

              <button
                onClick={handleNextStory}
                disabled={selectedStoryIndex === stories.length - 1}
                className="p-2 rounded-lg border border-border/30 bg-card/40 hover:bg-card/60 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <button className="ml-auto px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium text-sm">
                Share Story
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
