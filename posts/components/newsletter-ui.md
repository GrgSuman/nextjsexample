---
title: Newsletter UI
slug: newsletter-ui
description: 'Minimal design Newsletter signup components '
category: Marketing & Landing
componentName: NewsLetterUI
categorySlug: marketing-landing
thumbnailUrl: ''
lastUpdated: '2025-01-10'
usage: copy and use
---
'use client'

import { useState } from 'react'
import { Loader2, ArrowRight, Mail, CheckCircle2, AlertCircle, X } from 'lucide-react'

interface NewsletterState {
  email: string
  loading: boolean
  success: boolean
  error: string | null
}

const initialState: NewsletterState = {
  email: '',
  loading: false,
  success: false,
  error: null
}

/**
 * SimpleNewsletter - A minimal inline newsletter signup form
 */
export function SimpleNewsletter() {
  const [state, setState] = useState<NewsletterState>(initialState)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState(prev => ({ ...prev, loading: true, error: null }))

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setState(prev => ({ ...prev, loading: false, success: true }))
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: 'Something went wrong. Please try again.'
      }))
    }
  }

  if (state.success) {
    return (
      <div className="flex items-center gap-2 text-green-600 bg-green-50 px-4 py-2 rounded-lg">
        <CheckCircle2 className="w-5 h-5" />
        <p>Thanks for subscribing!</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <div className="flex-1">
        <label htmlFor="simple-email" className="sr-only">Email address</label>
        <input
          id="simple-email"
          type="email"
          placeholder="Enter your email"
          value={state.email}
          onChange={(e) => setState(prev => ({ ...prev, email: e.target.value }))}
          required
          disabled={state.loading}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors disabled:opacity-50"
        />
      </div>
      <button
        type="submit"
        disabled={state.loading}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 transition-colors"
      >
        {state.loading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          'Subscribe'
        )}
      </button>
      {state.error && (
        <div className="fixed top-4 right-4 bg-red-50 text-red-600 px-4 py-3 rounded-lg flex items-center gap-2 shadow-lg">
          <AlertCircle className="w-5 h-5" />
          <p>{state.error}</p>
          <button
            onClick={() => setState(prev => ({ ...prev, error: null }))}
            className="ml-2 text-red-400 hover:text-red-600"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </form>
  )
}

/**
 * BoxNewsletter - A boxed newsletter signup with additional context
 */
export function BoxNewsletter() {
  const [state, setState] = useState<NewsletterState>(initialState)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState(prev => ({ ...prev, loading: true, error: null }))

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setState(prev => ({ ...prev, loading: false, success: true }))
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: 'Something went wrong. Please try again.'
      }))
    }
  }

  return (
    <div className="w-full md:w-[60%] border border-gray-200 rounded-xl p-6 bg-white shadow-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Subscribe to our newsletter</h2>
        <p className="text-gray-600">
          Get the latest updates and exclusive offers delivered to your inbox weekly.
        </p>
      </div>

      {state.success ? (
        <div className="bg-green-50 text-green-600 px-4 py-3 rounded-lg flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
          <p>Thank you for subscribing to our newsletter. Please check your email for confirmation.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="box-email" className="block text-sm font-medium text-gray-700 mb-1">
              Email address
            </label>
            <input
              id="box-email"
              type="email"
              placeholder="you@example.com"
              value={state.email}
              onChange={(e) => setState(prev => ({ ...prev, email: e.target.value }))}
              required
              disabled={state.loading}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors disabled:opacity-50"
            />
          </div>
          <button
            type="submit"
            disabled={state.loading}
            className="w-full px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 transition-colors flex items-center justify-center gap-2"
          >
            {state.loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Subscribing...
              </>
            ) : (
              <>
                <Mail className="w-4 h-4" />
                Subscribe
              </>
            )}
          </button>
          {state.error && (
            <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              <p>{state.error}</p>
            </div>
          )}
        </form>
      )}
    </div>
  )
}

/**
 * FeaturedNewsletter - A full-width newsletter signup with image and extended content
 */
export function FeaturedNewsletter() {
  const [state, setState] = useState<NewsletterState>(initialState)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState(prev => ({ ...prev, loading: true, error: null }))

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setState(prev => ({ ...prev, loading: false, success: true }))
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: 'Something went wrong. Please try again.'
      }))
    }
  }

  return (
    <div className="relative overflow-hidden bg-gray-900 text-white rounded-2xl">
      <div className="absolute inset-0">
        <img
          src="/placeholder.svg?height=400&width=800"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-900/50" />
      </div>

      <div className="relative px-6 py-12 md:py-16 md:px-12 lg:px-16 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Join our community</h2>
        <p className="text-lg text-gray-300 mb-8">
          Subscribe to our newsletter and get exclusive access to premium content, early product releases,
          and monthly insights from industry experts delivered straight to your inbox.
        </p>

        {state.success ? (
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 inline-block">
            <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">You're all set!</h3>
            <p className="text-gray-300">
              Thank you for joining our newsletter. Watch your inbox for our welcome email.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <label htmlFor="featured-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="featured-email"
                  type="email"
                  placeholder="Enter your email address"
                  value={state.email}
                  onChange={(e) => setState(prev => ({ ...prev, email: e.target.value }))}
                  required
                  disabled={state.loading}
                  className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:border-white focus:ring-2 focus:ring-white/20 focus:outline-none transition-colors disabled:opacity-50"
                />
              </div>
              <button
                type="submit"
                disabled={state.loading}
                className="px-6 py-2.5 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 transition-colors flex items-center justify-center gap-2"
              >
                {state.loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  <>
                    Subscribe Now
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
            {state.error && (
              <div className="mt-4 bg-red-500/10 text-red-200 px-4 py-3 rounded-lg flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                <p>{state.error}</p>
              </div>
            )}
          </form>
        )}

        <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>No spam, ever</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>Unsubscribe anytime</span>
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * Demo component showcasing all three newsletter variations
 */
export default function NewsletterSignupDemo() {
  return (
    <div className="space-y-12 p-6">
      <section>
        <h2 className="text-2xl font-bold mb-6">Simple Newsletter</h2>
        <div className="max-w-xl">
          <SimpleNewsletter />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Box Newsletter</h2>
        <BoxNewsletter />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Featured Newsletter</h2>
        <FeaturedNewsletter />
      </section>
    </div>
  )
}

