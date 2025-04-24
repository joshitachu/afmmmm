"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container-custom flex items-center justify-between py-4">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="AFM Management Logo" width={120} height={50} className="h-12 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#about" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
            About Us
          </Link>
          <Link href="#services" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
            Services
          </Link>
          <Link href="#pricing" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
            Partnership Plans
          </Link>
          <Link href="#faq" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
            FAQ
          </Link>
          <Link href="#contact" className="btn-primary">
            Free Consultation
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link
              href="#about"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="#services"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#pricing"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Partnership Plans
            </Link>
            <Link
              href="#faq"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link href="#contact" className="btn-primary inline-block text-center" onClick={() => setIsMenuOpen(false)}>
              Free Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
