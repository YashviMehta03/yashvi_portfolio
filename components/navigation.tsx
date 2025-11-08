"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, User, Briefcase, Award, MessageSquare, Images, Mail, Code2, BookOpen } from "lucide-react"

export function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About", icon: User },
    { href: "/projects", label: "Projects", icon: Briefcase },
    { href: "/achievements", label: "Experience", icon: Award },
    { href: "/thoughts", label: "Thoughts", icon: MessageSquare },
    { href: "/blogs", label: "Blogs", icon: BookOpen },
    { href: "/memories", label: "Memories", icon: Images },
    { href: "/skills", label: "Skills", icon: Code2 },
    { href: "/contact", label: "Contact", icon: Mail },
  ]

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
      <div className="flex items-center gap-2 rounded-full border border-border/30 bg-card/40 backdrop-blur-sm p-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 text-sm font-medium ${
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-card/60"
              }`}
              title={item.label}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
