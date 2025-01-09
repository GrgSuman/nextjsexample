---
title: Navbar Collections
slug: navbar-collections
description: >-
  A responsive navigation menu component with dropdown support and mobile
  optimization. Perfect for main website navigation.
category: Layout & Navigations
componentName: Headers
categorySlug: layout-navigations
thumbnailUrl: ''
lastUpdated: '2025-01-09'
usage: Just Copy and Paste
---
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Github, ChevronDown } from 'lucide-react'

type HeaderProps = {
  variant?: 'simple' | 'modern' | 'minimal' | 'bordered'
}

const navigation = [
  { name: 'Components', href: '/components' },
  { name: 'Templates', href: '/templates' },
  { name: 'Documentation', href: '/docs' },
]

// Simple Header
export function SimpleHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Main navigation">
        <div className="relative flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-black" />
            <span className="text-lg font-semibold">Snippets</span>
          </Link>

          <div className="hidden md:flex md:items-center md:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/login"
              className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/90"
            >
              Sign In
            </Link>
          </div>

          <button
            className="md:hidden rounded-lg p-2 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-sm font-medium text-gray-700"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/login"
              className="block py-2 text-sm font-medium text-gray-900"
            >
              Sign In
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}

// Modern Header
export function ModernHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full">
      <nav className="mx-auto backdrop-blur-xl bg-white/80 border-b border-gray-200" aria-label="Main navigation">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-rose-500 to-indigo-500" />
              <span className="text-lg font-semibold">Snippets</span>
            </Link>

            <div className="hidden md:flex md:items-center md:gap-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="https://github.com"
                className="text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="/login"
                className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/90"
              >
                Sign In
              </Link>
            </div>

            <button
              className="md:hidden rounded-lg p-2 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-sm font-medium text-gray-700"
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center gap-4 pt-2">
                <Link
                  href="https://github.com"
                  className="text-sm font-medium text-gray-700"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href="/login"
                  className="text-sm font-medium text-gray-900"
                >
                  Sign In
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}

// Minimal Header
export function MinimalHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Main navigation">
        <div className="relative flex h-16 items-center justify-between">
          <Link href="/" className="text-lg font-semibold">
            Snippets
          </Link>

          <div className="hidden md:flex md:items-center md:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/login"
              className="text-sm font-medium text-gray-900 hover:text-gray-700"
            >
              Sign In →
            </Link>
          </div>

          <button
            className="md:hidden rounded-lg p-2 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-sm font-medium text-gray-700"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/login"
              className="block py-2 text-sm font-medium text-gray-900"
            >
              Sign In
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}

// Bordered Header
export function BorderedHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="sticky top-0 z-50 w-full px-4 py-4">
      <header className="mx-auto max-w-7xl rounded-full border bg-white shadow-sm">
        <nav className="px-4" aria-label="Main navigation">
          <div className="relative flex h-14 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-black" />
              <span className="text-base font-semibold">Snippets</span>
            </Link>

            <div className="hidden md:flex md:items-center md:gap-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  {item.name}
                </Link>
              ))}
              <div className="ml-4 h-4 w-px bg-gray-200" />
              <Link
                href="/login"
                className="ml-4 rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/90"
              >
                Sign In
              </Link>
            </div>

            <button
              className="md:hidden rounded-lg p-2 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-sm font-medium text-gray-700"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/login"
                className="block py-2 text-sm font-medium text-gray-900"
              >
                Sign In
              </Link>
            </div>
          )}
        </nav>
      </header>
    </div>
  )
}

export default function HeaderPage() {
  return (
    <div className="space-y-24 py-12">
      <SimpleHeader />
      <ModernHeader />
      <MinimalHeader />
      <BorderedHeader />
    </div>
  )
}

