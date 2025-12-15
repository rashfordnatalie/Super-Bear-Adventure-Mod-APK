"use client"
import { useState } from "react"
import Link from "next/link"
import { useTheme } from "@/components/theme-provider"
import { Sun, Moon } from "lucide-react"

export function Header() {
  const { theme, setTheme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="sticky top-1 z-50 bg-background border-b border-border transition-colors duration-300">
        <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/images/logo.webp" style={{ maxWidth: "121px", height: "auto" }} alt="Super Bear Adventures Logo" />
          </Link>

          <ul className="hidden md:flex items-center space-x-8 font-semibold text-foreground">
            <li >
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link> 
            </li>
            <li className="relative group">
              <Link href="/blog" className="hover:text-primary transition-colors">
                Blog
              </Link>
              {/* Desktop Dropdown */}
              <div className="absolute left-0 top-full mt-2 w-64 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link
                    href="/blog/super-bear-adventure-game-settings"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    Super Bear Adventure Game Settings
                  </Link>
                  <Link
                    href="/blog/super-bear-adventure-mod-apk-old-versions"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    Super Bear Adventure Mod APK Old Versions
                  </Link>
                  <Link
                    href="/blog/super-bear-adventure-mod-apk-for-ios"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    Super Bear Adventure Mod APK For iOS
                  </Link>
                  <Link
                    href="/blog/super-bear-adventure-mod-apk-for-pc"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    Super Bear Adventure Mod APK For PC
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <Link href="/download" className="hover:text-primary transition-colors">
                Download 
              </Link>
            </li>
              
             <li>
              <Link href="/contact-us" className="hover:text-primary transition-colors">
                  Contact Us
              </Link>
            </li>
          </ul>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-foreground hover:text-primary text-xl transition-colors"
            >
              {theme === "dark" ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
              <span className="sr-only">{theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}</span>
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-foreground hover:text-primary p-2 transition-colors"
                aria-label="Toggle mobile menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {isMobileMenuOpen && (
          <div className="md:hidden px-6 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-2 pt-4">
              <Link
                href="/"
                className="py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/blog"
                className="py-2 text-foreground hover:text-primary transition-colors font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              {/* Mobile Blog Submenu Items */}
              <div className="pl-4 flex flex-col space-y-1">
                <Link
                  href="/blog/super-bear-adventure-game-settings"
                  className="py-2 text-sm text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Super Bear Adventure Game Settings
                </Link>
                <Link
                  href="/blog/super-bear-adventure-mod-apk-old-versions"
                  className="py-2 text-sm text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Super Bear Adventure Mod APK Old Versions
                </Link>
                <Link
                  href="/blog/super-bear-adventure-mod-apk-for-ios"
                  className="py-2 text-sm text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Super Bear Adventure Mod APK For iOS
                </Link>
                <Link
                  href="/blog/super-bear-adventure-mod-apk-for-pc"
                  className="py-2 text-sm text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Super Bear Adventure Mod APK For PC
                </Link>
              </div>
              <Link
                href="/download"
                className="py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Download
              </Link>

               <Link
                href="/contact-us"
                className="py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </header>

      <nav className="sr-only" aria-label="Complete Site Navigation">
        <span>All Site Pages</span>
        <ul>
          <li>
            <a href="/">Home - Super Bear Adventures</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/download">Download APK</a>
          </li>
          
          <li>
            <a href="/privacy">Privacy Policy</a>
          </li>
        </ul>
      </nav>
    </>
  )
}