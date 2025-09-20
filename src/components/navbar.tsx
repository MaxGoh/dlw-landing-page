"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"


export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="w-full bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                  <Image
                    src="/dlw-logo.svg"
                    alt="DLW Logo"
                    width={180}
                    height={140}
                  />
                </div>
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-baseline space-x-8">
              <a
                href="#why-reddit-section"
                className="text-secondary hover:text-primary px-3 py-2 text-sm transition-colors font-[family-name:Ppmori,sans-serif] font-semibold"
              >
                Grow on Reddit
              </a>
              <a
                href="#backlink-section"
                className="text-secondary hover:text-primary px-3 py-2 text-sm transition-colors font-[family-name:Ppmori,sans-serif] font-semibold"
              >
                Search Ranking
              </a>
              <a
                href="#analysis-section"
                className="text-secondary hover:text-primary px-3 py-2 text-sm transition-colors font-[family-name:Ppmori,sans-serif] font-semibold"
              >
                Analysis
              </a>
              <a
                href="#discovery-section"
                className="text-secondary hover:text-primary px-3 py-2 text-sm transition-colors font-[family-name:Ppmori,sans-serif] font-semibold"
              >
                Discovery
              </a>
              <a
                href="#engage-section"
                className="text-secondary hover:text-primary px-3 py-2 text-sm transition-colors font-[family-name:Ppmori,sans-serif] font-semibold"
              >
                Listen
              </a>
              <a
                href="#engage-section"
                className="text-secondary hover:text-primary px-3 py-2 text-sm transition-colors font-[family-name:Ppmori,sans-serif] font-semibold"
              >
                Engage
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold font-[family-name:Ppmori,sans-serif]" asChild>
              <Link href="https://form.typeform.com/to/J59frRUQ">
                Book a demo
              </Link>
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-secondary hover:text-primary p-2 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm shadow-lg border-t">
            <a
              href="#why-reddit-section"
              className="text-secondary hover:text-primary block px-3 py-2 text-base font-medium transition-colors font-[family-name:Ppmori,sans-serif]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Grow on Reddit
            </a>
            <a
              href="#backlink-section"
              className="text-secondary hover:text-primary block px-3 py-2 text-base font-medium transition-colors font-[family-name:Ppmori,sans-serif]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Search Ranking
            </a>
            <a
              href="#analysis-section"
              className="text-secondary hover:text-primary block px-3 py-2 text-base font-medium transition-colors font-[family-name:Ppmori,sans-serif]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Analysis
            </a>
            <a
              href="#discovery-section"
              className="text-secondary hover:text-primary block px-3 py-2 text-base font-medium transition-colors font-[family-name:Ppmori,sans-serif]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Discovery
            </a>
            <a
              href="#engage-section"
              className="text-secondary hover:text-primary block px-3 py-2 text-base font-medium transition-colors font-[family-name:Ppmori,sans-serif]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Listen
            </a>
            <a
              href="#engage-section"
              className="text-secondary hover:text-primary block px-3 py-2 text-base font-medium transition-colors font-[family-name:Ppmori,sans-serif]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Engage
            </a>
            <div className="px-3 py-2">
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold font-[family-name:Ppmori,sans-serif]"
                onClick={() => setIsMobileMenuOpen(false)}
                asChild
              >
                <Link href="https://form.typeform.com/to/J59frRUQ">
                  Book a demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
