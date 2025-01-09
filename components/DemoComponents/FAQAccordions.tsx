'use client'

import { useState } from 'react'
import { ChevronDown, Plus, Minus, ChevronRight } from 'lucide-react'

type FAQItem = {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. For enterprise customers, we also offer invoice-based payments."
  },
  {
    question: "How do I cancel my subscription?",
    answer: "You can cancel your subscription at any time from your account settings. Once cancelled, you'll continue to have access to the service until the end of your current billing period."
  },
  {
    question: "Can I change my plan later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will take effect immediately, and we'll prorate your billing accordingly."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer 24/7 email support for all customers. Premium plans include priority support with guaranteed response times and access to phone support during business hours."
  }
]

// Simple Accordion
export function SimpleAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex justify-between items-center w-full py-4 text-left"
            >
              <span className="font-medium text-gray-900">{item.question}</span>
              <ChevronDown 
                className={`w-5 h-5 text-gray-500 transition-transform ${
                  openIndex === index ? 'transform rotate-180' : ''
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="pb-4 text-gray-500">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// Modern Accordion
export function ModernAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Got questions?</h2>
      <p className="text-gray-500 mb-8">Find answers to common questions about our service.</p>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg shadow-sm transition-all duration-200 ${
              openIndex === index ? 'ring-2 ring-indigo-600' : 'hover:shadow-md'
            }`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex justify-between items-center w-full p-4 text-left"
            >
              <span className="font-semibold text-gray-900">{item.question}</span>
              {openIndex === index ? (
                <Minus className="w-5 h-5 text-indigo-600" />
              ) : (
                <Plus className="w-5 h-5 text-gray-400" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-500">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// Bordered Accordion
export function BorderedAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
        <p className="mt-4 text-gray-500">Can't find what you're looking for? Contact our support team.</p>
      </div>
      <div className="border rounded-lg divide-y">
        {faqData.map((item, index) => (
          <div key={index} className="bg-white">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className={`flex justify-between items-center w-full p-4 text-left ${
                openIndex === index ? 'bg-gray-50' : ''
              }`}
            >
              <span className="font-medium text-gray-900">{item.question}</span>
              <ChevronRight 
                className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                  openIndex === index ? 'transform rotate-90' : ''
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 bg-gray-50">
                <p className="text-gray-500">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// Minimal Accordion
export function MinimalAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Common Questions</h2>
      <div className="space-y-6">
        {faqData.map((item, index) => (
          <div key={index}>
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="group flex items-start w-full text-left"
            >
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {item.question}
                </h3>
                <div
                  className={`mt-2 text-gray-500 transition-all duration-200 ${
                    openIndex === index ? 'block' : 'hidden'
                  }`}
                >
                  {item.answer}
                </div>
              </div>
              <span className="ml-6 flex-shrink-0">
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-indigo-600" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-400 group-hover:text-indigo-600" />
                )}
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function FAQPage() {
  return (
    <div className="space-y-24 py-12">
      <SimpleAccordion />
      <ModernAccordion />
      <BorderedAccordion />
      <MinimalAccordion />
    </div>
  )
}

