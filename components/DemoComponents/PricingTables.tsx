'use client'

import { useState } from 'react'
import { Check, X, ChevronRight } from 'lucide-react'

type PricingFeature = {
  name: string
  included: boolean
}

type PricingTier = {
  name: string
  description: string
  price: {
    monthly: number
    yearly: number
  }
  features: PricingFeature[]
  highlighted?: boolean
  badge?: string
}

const pricingTiers: PricingTier[] = [
  {
    name: "Basic",
    description: "Everything you need to get started",
    price: {
      monthly: 15,
      yearly: 144,
    },
    features: [
      { name: "Up to 5 users", included: true },
      { name: "Basic analytics", included: true },
      { name: "24-hour support response time", included: true },
      { name: "API Access", included: false },
      { name: "Custom domain", included: false },
      { name: "Dedicated support", included: false },
    ],
  },
  {
    name: "Pro",
    description: "Perfect for growing teams",
    price: {
      monthly: 29,
      yearly: 288,
    },
    features: [
      { name: "Up to 10 users", included: true },
      { name: "Advanced analytics", included: true },
      { name: "4-hour support response time", included: true },
      { name: "API Access", included: true },
      { name: "Custom domain", included: true },
      { name: "Dedicated support", included: false },
    ],
    highlighted: true,
    badge: "Most Popular"
  },
  {
    name: "Enterprise",
    description: "For large-scale applications",
    price: {
      monthly: 59,
      yearly: 588,
    },
    features: [
      { name: "Unlimited users", included: true },
      { name: "Custom analytics", included: true },
      { name: "1-hour support response time", included: true },
      { name: "API Access", included: true },
      { name: "Custom domain", included: true },
      { name: "Dedicated support", included: true },
    ],
    badge: "Custom"
  },
]

// Modern Card Layout
export function ModernPricingTable() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the perfect plan for your needs
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="relative flex items-center">
            <span className={`mr-3 text-sm ${!isYearly ? 'font-semibold text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              type="button"
              className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                isYearly ? 'bg-indigo-600' : 'bg-gray-200'
              }`}
              onClick={() => setIsYearly(!isYearly)}
            >
              <span className="sr-only">Use yearly billing</span>
              <span
                className={`pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  isYearly ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`ml-3 text-sm ${isYearly ? 'font-semibold text-gray-900' : 'text-gray-500'}`}>
              Yearly <span className="text-green-500 font-medium">(Save 20%)</span>
            </span>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl ${
                tier.highlighted
                  ? 'bg-white shadow-xl ring-1 ring-indigo-600 scale-105'
                  : 'bg-white shadow-md ring-1 ring-gray-200'
              }`}
            >
              {tier.badge && (
                <div className={`absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full px-3 py-2 text-sm font-medium text-white text-center ${
                  tier.highlighted ? 'bg-indigo-600' : 'bg-gray-900'
                }`}>
                  {tier.badge}
                </div>
              )}

              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-900">{tier.name}</h3>
                <p className="mt-2 text-gray-500">{tier.description}</p>
                <p className="mt-8 flex items-baseline">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    ${isYearly ? tier.price.yearly : tier.price.monthly}
                  </span>
                  <span className="ml-1 text-sm font-semibold text-gray-500">
                    /{isYearly ? 'year' : 'month'}
                  </span>
                </p>
                <button
                  type="button"
                  className={`mt-8 w-full rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
                    tier.highlighted
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'
                  }`}
                >
                  Get started
                </button>
              </div>

              <div className="flex flex-1 flex-col justify-between p-8 pt-0">
                <ul role="list" className="mt-4 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature.name} className="flex items-start">
                      {feature.included ? (
                        <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                      ) : (
                        <X className="h-5 w-5 flex-shrink-0 text-gray-300" />
                      )}
                      <span className="ml-3 text-sm text-gray-500">{feature.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Minimal Layout
export function MinimalPricingTable() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Choose your plan
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Start with our free trial. No credit card needed.
          </p>
        </div>

        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative p-6 rounded-xl bg-white ${
                tier.highlighted ? 'ring-2 ring-indigo-600' : 'ring-1 ring-gray-200'
              }`}
            >
              <div className="flex justify-between items-baseline">
                <h3 className="text-lg font-semibold text-gray-900">{tier.name}</h3>
                {tier.badge && (
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    tier.highlighted ? 'bg-indigo-100 text-indigo-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {tier.badge}
                  </span>
                )}
              </div>

              <p className="mt-4 text-sm text-gray-500">{tier.description}</p>

              <div className="mt-6">
                <p className="flex items-baseline">
                  <span className="text-3xl font-bold text-gray-900">
                    ${isYearly ? tier.price.yearly : tier.price.monthly}
                  </span>
                  <span className="ml-1 text-sm text-gray-500">/{isYearly ? 'year' : 'month'}</span>
                </p>
              </div>

              <ul role="list" className="mt-6 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature.name} className="flex text-sm">
                    {feature.included && (
                      <Check className="h-5 w-5 flex-shrink-0 text-indigo-600" />
                    )}
                    <span className={`ml-3 ${feature.included ? 'text-gray-600' : 'text-gray-400'}`}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={`mt-8 w-full flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  tier.highlighted
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'text-indigo-600 border border-indigo-600 hover:bg-indigo-50'
                }`}
              >
                Get started
                <ChevronRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Horizontal Layout
export function HorizontalPricingTable() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Compare plans
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Find the right plan for your business
          </p>
        </div>

        <div className="space-y-4">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative p-6 rounded-xl bg-white ${
                tier.highlighted
                  ? 'ring-2 ring-indigo-600'
                  : 'ring-1 ring-gray-200'
              }`}
            >
              <div className="lg:grid lg:grid-cols-7 lg:gap-8">
                {/* Plan Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">{tier.name}</h3>
                    {tier.badge && (
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        tier.highlighted ? 'bg-indigo-100 text-indigo-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {tier.badge}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-gray-500">{tier.description}</p>
                </div>

                {/* Price */}
                <div className="mt-6 lg:mt-0 lg:col-span-2">
                  <div className="flex items-center">
                    <p className="text-3xl font-bold text-gray-900">
                      ${isYearly ? tier.price.yearly : tier.price.monthly}
                    </p>
                    <span className="ml-1 text-sm text-gray-500">
                      /{isYearly ? 'year' : 'month'}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="mt-6 lg:mt-0 lg:col-span-2">
                  <ul role="list" className="space-y-2">
                    {tier.features.slice(0, 3).map((feature) => (
                      <li key={feature.name} className="flex text-sm">
                        {feature.included && (
                          <Check className="h-5 w-5 flex-shrink-0 text-indigo-600" />
                        )}
                        <span className={`ml-3 ${feature.included ? 'text-gray-600' : 'text-gray-400'}`}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-6 lg:mt-0 lg:col-span-1 flex items-center">
                  <button
                    type="button"
                    className={`w-full flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      tier.highlighted
                        ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                        : 'text-indigo-600 border border-indigo-600 hover:bg-indigo-50'
                    }`}
                  >
                    Get started
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function PricingPage() {
  return (
    <div className="space-y-24">
      <ModernPricingTable />
      <MinimalPricingTable />
      <HorizontalPricingTable />
    </div>
  )
}

