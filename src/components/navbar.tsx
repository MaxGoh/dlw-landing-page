"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { trackNavClick, trackButtonClick } from "@/lib/analytics";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

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

          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-baseline space-x-8">
              {/* Product Dropdown */}
              <DropdownMenu open={isProductDropdownOpen} onOpenChange={setIsProductDropdownOpen}>
                <DropdownMenuTrigger asChild>
                  <button
                    className="text-secondary hover:text-primary px-3 py-2 text-sm transition-colors font-[family-name:Ppmori,sans-serif] font-semibold flex items-center gap-1"
                    onClick={() => trackNavClick("product_dropdown")}
                  >
                    Product
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${isProductDropdownOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white border border-gray-200 rounded-lg shadow-lg p-2 mt-2 min-w-[200px]">
                  <DropdownMenuItem asChild>
                    <a
                      href="#why-reddit-section"
                      className="text-secondary hover:text-primary hover:bg-gray-50 px-3 py-2 text-sm transition-colors font-[family-name:Ppmori,sans-serif] block rounded-md"
                      onClick={() => {
                        trackNavClick("grow_on_reddit");
                        setIsProductDropdownOpen(false);
                      }}
                    >
                      Grow on Reddit
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a
                      href="#backlink-section"
                      className="text-secondary hover:text-primary hover:bg-gray-50 px-3 py-2 text-sm transition-colors font-[family-name:Ppmori,sans-serif] block rounded-md"
                      onClick={() => {
                        trackNavClick("search_ranking");
                        setIsProductDropdownOpen(false);
                      }}
                    >
                      Search Ranking
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a
                      href="#analysis-section"
                      className="text-secondary hover:text-primary hover:bg-gray-50 px-3 py-2 text-sm transition-colors font-[family-name:Ppmori,sans-serif] block rounded-md"
                      onClick={() => {
                        trackNavClick("analysis");
                        setIsProductDropdownOpen(false);
                      }}
                    >
                      Analysis
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a
                      href="#discovery-section"
                      className="text-secondary hover:text-primary hover:bg-gray-50 px-3 py-2 text-sm transition-colors font-[family-name:Ppmori,sans-serif] block rounded-md"
                      onClick={() => {
                        trackNavClick("discovery");
                        setIsProductDropdownOpen(false);
                      }}
                    >
                      Discovery
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a
                      href="#engage-section"
                      className="text-secondary hover:text-primary hover:bg-gray-50 px-3 py-2 text-sm transition-colors font-[family-name:Ppmori,sans-serif] block rounded-md"
                      onClick={() => {
                        trackNavClick("listen");
                        setIsProductDropdownOpen(false);
                      }}
                    >
                      Listen
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a
                      href="#engage-section"
                      className="text-secondary hover:text-primary hover:bg-gray-50 px-3 py-2 text-sm transition-colors font-[family-name:Ppmori,sans-serif] block rounded-md"
                      onClick={() => {
                        trackNavClick("engage");
                        setIsProductDropdownOpen(false);
                      }}
                    >
                      Engage
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Blog Link */}
              <Link
                href="/blog"
                className="text-secondary hover:text-primary px-3 py-2 text-sm transition-colors font-[family-name:Ppmori,sans-serif] font-semibold"
                onClick={() => trackNavClick("blog")}
              >
                Blog
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex items-center">
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold font-[family-name:Ppmori,sans-serif]"
              onClick={() => trackButtonClick("book_demo", "navbar_desktop")}
              asChild
            >
              <Link href="https://form.typeform.com/to/J59frRUQ">
                Book a demo
              </Link>
            </Button>
          </div>

          <div className="lg:hidden">
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
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm shadow-lg border-t">
            {/* Product Section Header */}
            <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider font-[family-name:Ppmori,sans-serif]">
              Product
            </div>
            <a
              href="#why-reddit-section"
              className="text-secondary hover:text-primary block px-6 py-2 text-base font-medium transition-colors font-[family-name:Ppmori,sans-serif]"
              onClick={() => {
                trackNavClick("grow_on_reddit", true);
                setIsMobileMenuOpen(false);
              }}
            >
              Grow on Reddit
            </a>
            <a
              href="#backlink-section"
              className="text-secondary hover:text-primary block px-6 py-2 text-base font-medium transition-colors font-[family-name:Ppmori,sans-serif]"
              onClick={() => {
                trackNavClick("search_ranking", true);
                setIsMobileMenuOpen(false);
              }}
            >
              Search Ranking
            </a>
            <a
              href="#analysis-section"
              className="text-secondary hover:text-primary block px-6 py-2 text-base font-medium transition-colors font-[family-name:Ppmori,sans-serif]"
              onClick={() => {
                trackNavClick("analysis", true);
                setIsMobileMenuOpen(false);
              }}
            >
              Analysis
            </a>
            <a
              href="#discovery-section"
              className="text-secondary hover:text-primary block px-6 py-2 text-base font-medium transition-colors font-[family-name:Ppmori,sans-serif]"
              onClick={() => {
                trackNavClick("discovery", true);
                setIsMobileMenuOpen(false);
              }}
            >
              Discovery
            </a>
            <a
              href="#engage-section"
              className="text-secondary hover:text-primary block px-6 py-2 text-base font-medium transition-colors font-[family-name:Ppmori,sans-serif]"
              onClick={() => {
                trackNavClick("listen", true);
                setIsMobileMenuOpen(false);
              }}
            >
              Listen
            </a>
            <a
              href="#engage-section"
              className="text-secondary hover:text-primary block px-6 py-2 text-base font-medium transition-colors font-[family-name:Ppmori,sans-serif]"
              onClick={() => {
                trackNavClick("engage", true);
                setIsMobileMenuOpen(false);
              }}
            >
              Engage
            </a>

            {/* Divider */}
            <div className="border-t border-gray-200 my-2"></div>

            {/* Blog Link */}
            <Link
              href="/blog"
              className="text-secondary hover:text-primary block px-3 py-2 text-base font-medium transition-colors font-[family-name:Ppmori,sans-serif]"
              onClick={() => {
                trackNavClick("blog", true);
                setIsMobileMenuOpen(false);
              }}
            >
              Blog
            </Link>

            <div className="px-3 py-2">
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold font-[family-name:Ppmori,sans-serif]"
                onClick={() => {
                  trackButtonClick("book_demo", "navbar_mobile");
                  setIsMobileMenuOpen(false);
                }}
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
  );
}