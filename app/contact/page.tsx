"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Mail, Github, Linkedin, Twitter, Send, CheckCircle } from "lucide-react"

export default function PortalRoom() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      url: "mailto:hello@example.com",
      color: "from-primary/20 to-primary/5",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com",
      color: "from-accent/20 to-accent/5",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com",
      color: "from-secondary/20 to-secondary/5",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com",
      color: "from-primary/20 to-accent/5",
    },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitted(true)
    setIsLoading(false)

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" })
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl ambient-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl ambient-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-secondary/5 rounded-full blur-3xl ambient-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-border/30 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm">Back to Home</span>
            </Link>
            <h1 className="text-2xl font-bold text-foreground">Connect with me</h1>
            <div className="w-20" />
          </div>
        </header>

        {/* Content */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Let's Connect</h2>
            <p className="text-muted-foreground text-lg">
              Whether you want to discuss a project, collaborate, or just say hello, I'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">Send a Message</h3>

              {isSubmitted ? (
                <div className="rounded-lg border border-primary/30 bg-primary/10 p-8 flex flex-col items-center justify-center text-center">
                  <CheckCircle className="w-12 h-12 text-primary mb-4" />
                  <h4 className="text-lg font-semibold text-foreground mb-2">Message Sent!</h4>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-card/40 border border-border/30 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-card/40 border border-border/30 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-card/40 border border-border/30 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-card/40 border border-border/30 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium hover:opacity-90 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">Connect Elsewhere</h3>

              <div className="space-y-4 mb-12">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative rounded-lg border border-border/30 bg-card/40 p-6 "
                    >
                      <div
                        className={`absolute inset-0  ${social.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`}
                      />

                      <div className="relative z-10 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {social.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">Connect with me</p>
                        </div>
                      </div>

                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 blur-xl" />
                      </div>
                    </a>
                  )
                })}
              </div>

              {/* Quick Info */}
              <div className="rounded-lg border border-border/30 bg-card/40 backdrop-blur-sm p-6">
                <h4 className="font-semibold text-foreground mb-3">Quick Info</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Based in - VJTI, Mumbai, India</li>
                  <li>Currently in Third year of Computer Engineering</li>
                  <li>Open to - Collaborations, speaking, mentoring</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-20 pt-12 border-t border-border/20 text-center">
            <p className="text-muted-foreground text-sm">
              Thank you for visiting my Mind Palace. I look forward to connecting with you.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
