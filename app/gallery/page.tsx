"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, X } from "lucide-react"
 
export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const images = [
    {
      id: "img-1",
      src: "/gallery-conference-speaking.jpg",
      title: "Speaking at Tech Conference",
      caption: "Sharing insights on AI and web development at the annual tech summit.",
      category: "Events",
    },
    {
      id: "img-2",
      src: "/gallery-team-collaboration.jpg",
      title: "Team Colllaboration",
      caption: "Working together on an exciting new project with the development team.",
      category: "Work",
    },
    {
      id: "img-3",
      src: "/gallery-hackathon-win.jpg",
      title: "Hackathon Victory",
      caption: "Celebrating our team's first-place win at the annual hackathon.",
      category: "Events",
    },
    {
      id: "img-4",
      src: "/gallery-workspace-setup.jpg",
      title: "Creative Workspace",
      caption: "My minimalist workspace where ideas come to life.",
      category: "Personal",
    },
    {
      id: "img-5",
      src: "/gallery-open-source-community.jpg",
      title: "Open Source Community",
      caption: "Contributing to open source projects and building with the community.",
      category: "Community",
    },
    {
      id: "img-6",
      src: "/gallery-learning-moment.jpg",
      title: "Learning & Growth",
      caption: "Attending workshops and continuously expanding my knowledge.",
      category: "Learning",
    },
    {
      id: "img-7",
      src: "/gallery-travel-inspiration.jpg",
      title: "Travel & Inspiration",
      caption: "Finding inspiration in new places and different perspectives.",
      category: "Personal",
    },
    {
      id: "img-8",
      src: "/gallery-product-launch.jpg",
      title: "Product Launch",
      caption: "The moment we launched our latest product to the world.",
      category: "Work",
    },
    {
      id: "img-9",
      src: "/gallery-mentoring-session.jpg",
      title: "Mentoring Others",
      caption: "Helping junior developers grow and achieve their goals.",
      category: "Community",
    },
  ]

  const categories = Array.from(new Set(images.map((img) => img.category)))

  return (
    <main className="min-h-screen bg-background">
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
          <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm">Back to Mind Palace</span>
            </Link>
            <h1 className="text-2xl font-bold text-foreground">The Gallery</h1>
            <div className="w-20" />
          </div>
        </header>

        {/* Content */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="mb-12">
            <p className="text-muted-foreground text-lg max-w-2xl mb-8">
              Visual stories and memories from conferences, projects, travels, and moments of growth.
            </p>

            {/* Category info */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <span key={category} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary/80">
                  {category}
                </span>
              ))}
            </div>
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 auto-rows-max">
            {images.map((image, index) => (
              <div
                key={image.id}
                className={`group relative rounded-lg overflow-hidden border border-border/30 bg-card/40 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 cursor-pointer ${
                  index % 5 === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                }`}
                onClick={() => setSelectedImage(image.id)}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-muted/20">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-lg font-semibold text-foreground mb-1">{image.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{image.caption}</p>
                  <span className="text-xs px-2 py-1 rounded w-fit bg-primary/20 text-primary/80">
                    {image.category}
                  </span>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 blur-xl" />
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="pt-12 border-t border-border/20 text-center">
            <p className="text-muted-foreground text-sm">
              Each image captures a moment of growth, collaboration, and inspiration.
            </p>
          </div>
        </section>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="rounded-lg overflow-hidden border border-border/30 bg-card/40">
              {(() => {
                const image = images.find((img) => img.id === selectedImage)
                return image ? (
                  <div className="flex flex-col">
                    <img src={image.src || "/placeholder.svg"} alt={image.title} className="w-full h-auto" />
                    <div className="p-6 border-t border-border/30">
                      <h2 className="text-2xl font-semibold text-foreground mb-2">{image.title}</h2>
                      <p className="text-muted-foreground mb-4">{image.caption}</p>
                      <span className="text-xs px-3 py-1 rounded bg-primary/20 text-primary/80">{image.category}</span>
                    </div>
                  </div>
                ) : null
              })()}
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
