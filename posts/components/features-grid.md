---
title: Features Grid
slug: features-grid
description: >-
  A collection of responsive feature grid layouts with various styles including
  modern, card-based, and minimal designs. Perfect for showcasing product
  features, services, or key benefits.
category: Marketing & Landing
componentName: FeaturesGrid
categorySlug: marketing-landing
thumbnailUrl: ''
lastUpdated: '2025-01-09'
usage: Copy the layout you like and use
---
'use client'

import { Zap, Shield, Smartphone, Globe, Cloud, Lock, Sparkles, Rocket, RefreshCw, Layers, Cpu, Wifi } from 'lucide-react'

// Modern Grid with Icons
export function ModernFeatureGrid() {
  const features = [
    {
      title: "Lightning Fast",
      description: "Built on cutting-edge technology for optimal performance and speed.",
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: "Secure by Default",
      description: "Enterprise-grade security with end-to-end encryption built in.",
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: "Mobile Optimized",
      description: "Responsive design that works seamlessly across all devices.",
      icon: <Smartphone className="h-6 w-6" />
    },
    {
      title: "Global Scale",
      description: "Deploy worldwide with automatic scaling and load balancing.",
      icon: <Globe className="h-6 w-6" />
    }
  ]

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to deploy your app
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.title} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  {feature.title}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

// Card Grid with Hover Effects
export function CardFeatureGrid() {
  const features = [
    {
      title: "Cloud Infrastructure",
      description: "Deploy to our global cloud infrastructure with just a few clicks.",
      icon: <Cloud className="h-6 w-6" />
    },
    {
      title: "Advanced Security",
      description: "Enterprise-grade security features to protect your data.",
      icon: <Lock className="h-6 w-6" />
    },
    {
      title: "AI-Powered",
      description: "Leverage machine learning for intelligent insights.",
      icon: <Sparkles className="h-6 w-6" />
    },
    {
      title: "Quick Deployment",
      description: "Go from code to production in minutes, not hours.",
      icon: <Rocket className="h-6 w-6" />
    },
    {
      title: "Auto Updates",
      description: "Always stay up to date with automatic updates.",
      icon: <RefreshCw className="h-6 w-6" />
    },
    {
      title: "Scalable Architecture",
      description: "Built to scale with your needs, from startup to enterprise.",
      icon: <Layers className="h-6 w-6" />
    }
  ]

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
            Everything you need
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Powerful features for powerful developers
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group relative flex flex-col rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-4">
                  <div className="rounded-lg bg-indigo-600/10 p-3 w-fit group-hover:bg-indigo-600">
                    <div className="h-6 w-6 text-indigo-600 group-hover:text-white transition-colors">
                      {feature.icon}
                    </div>
                  </div>
                </div>
                <dt className="text-lg font-semibold leading-7 text-gray-900">
                  {feature.title}
                </dt>
                <dd className="mt-2 flex-auto text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

// Minimal Grid with Border
export function MinimalFeatureGrid() {
  const features = [
    {
      title: "High Performance",
      description: "Optimized for speed and efficiency at every level.",
      icon: <Cpu className="h-5 w-5" />
    },
    {
      title: "Always Connected",
      description: "Stay connected with real-time updates and notifications.",
      icon: <Wifi className="h-5 w-5" />
    },
    {
      title: "Global CDN",
      description: "Content delivery network spanning the globe.",
      icon: <Globe className="h-5 w-5" />
    },
    {
      title: "Smart Caching",
      description: "Intelligent caching for faster load times.",
      icon: <Zap className="h-5 w-5" />
    }
  ]

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Built for developers
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Designed and built by developers for developers. Every feature is crafted with performance and ease of use in mind.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {features.map((feature, featureIdx) => (
              <div
                key={feature.title}
                className={`relative flex gap-4 rounded-lg border border-gray-200 p-6 hover:border-gray-300 transition-colors`}
              >
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <div className="text-gray-600">{feature.icon}</div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FeatureGridPage() {
  return (
    <div>
      <ModernFeatureGrid />
      <CardFeatureGrid />
      <MinimalFeatureGrid />
    </div>
  )
}

