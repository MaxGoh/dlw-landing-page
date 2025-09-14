"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-baseline space-x-8">
              <a
                href="#"
                className="text-secondary hover:text-primary px-3 py-2 text-sm transition-colors font-[family-name:Ppmori,sans-serif] font-semibold"
              >
                Product
              </a>
              <a
                href="#"
                className="text-secondary hover:text-primary px-3 py-2 text-sm transition-colors font-[family-name:Ppmori,sans-serif] font-semibold"
              >
                Use Cases
              </a>
              <a
                href="#"
                className="text-secondary hover:text-primary px-3 py-2 text-sm transition-colors font-[family-name:Ppmori,sans-serif] font-semibold"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-secondary hover:text-primary px-3 py-2 text-sm transition-colors font-[family-name:Ppmori,sans-serif] font-semibold"
              >
                Blog
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold font-[family-name:Ppmori,sans-serif]">
              Book a demo
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
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg border-t">
            <a
              href="#"
              className="text-secondary hover:text-primary block px-3 py-2 text-base font-medium transition-colors font-[family-name:Ppmori,sans-serif]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Product
            </a>
            <a
              href="#"
              className="text-secondary hover:text-primary block px-3 py-2 text-base font-medium transition-colors font-[family-name:Ppmori,sans-serif]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Use Cases
            </a>
            <a
              href="#"
              className="text-secondary hover:text-primary block px-3 py-2 text-base font-medium transition-colors font-[family-name:Ppmori,sans-serif]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-secondary hover:text-primary block px-3 py-2 text-base font-medium transition-colors font-[family-name:Ppmori,sans-serif]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </a>
            <div className="px-3 py-2">
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold font-[family-name:Ppmori,sans-serif]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book a demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
