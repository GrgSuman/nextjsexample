// NavLayout.jsx
'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  Github,
  Menu,
  X,
  ChevronsLeftRight,
} from 'lucide-react'

const NavLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
    
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-[#1a1b1e]">
      {/* Header - Added z-[60] to ensure it's above the sidenav */}
      <nav className={`fixed w-full z-[60] transition-all duration-300 ${
        scrolled ? 'bg-[#1a1b1e]/90 backdrop-blur-sm border-b border-[#2c2d31]' : 'bg-[#1a1b1e]'
      }`}>
        <div className="mx-auto">
          <div className="flex items-center justify-between h-16 px-6">
            <Link href="/" className="font-bold text-xl text-[1.5rem] flex items-center gap-2 text-white">
              <ChevronsLeftRight height={30} width={30} className="text-indigo-400" />
              <span className="block">nextjsexample</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/components" className="text-gray-300 hover:text-white transition-colors">
                Components
              </Link>
              <Link href="/pages" className="text-gray-300 hover:text-white transition-colors">
                Pages
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="/components"
                className="px-4 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition-colors"
              >
                Get Started
              </Link>
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#1a1b1e] md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <Link
              href="/components"
              className="text-2xl text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Components
            </Link>
            <Link
              href="/pages"
              className="text-2xl text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pages
            </Link>
            <Link
              href="#"
              className="text-2xl text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Github className="h-8 w-8" />
            </Link>
            <Link
              href="/components"
              className="px-6 py-3 bg-indigo-500 text-white text-xl rounded-full hover:bg-indigo-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default NavLayout