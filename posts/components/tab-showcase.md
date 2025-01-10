---
title: Tab Showcase
slug: tab-showcase
description: >-
  A Tab System UI component for you to organize and display content within a
  confined space.
category: Layout & Navigations
componentName: TabSystemsShowcase
categorySlug: layout-navigations
thumbnailUrl: ''
lastUpdated: '2025-01-10'
usage: You can select the tab ui you like and just copy and use it
---
'use client'

import { useState } from 'react'
import { ChevronRight, Menu, X, Layout, User, Settings, HelpCircle } from 'lucide-react'

type Tab = {
  id: string
  label: string
  icon: React.ReactNode
  content: string
  description: string
}

const tabData: Tab[] = [
  {
    id: 'tab1',
    label: 'Dashboard',
    icon: <Layout className="w-5 h-5" />,
    description: 'Overview and Analytics',
    content: 'This is your main dashboard view. Here you can see an overview of your analytics, recent activity, and key metrics.'
  },
  {
    id: 'tab2',
    label: 'Profile',
    icon: <User className="w-5 h-5" />,
    description: 'Personal Information',
    content: 'Manage your profile settings, update your personal information, and customize your preferences.'
  },
  {
    id: 'tab3',
    label: 'Settings',
    icon: <Settings className="w-5 h-5" />,
    description: 'Account Configuration',
    content: 'Configure your account settings, notification preferences, and security options.'
  },
  {
    id: 'tab4',
    label: 'Help',
    icon: <HelpCircle className="w-5 h-5" />,
    description: 'Support and Resources',
    content: 'Need assistance? Find helpful resources, FAQs, and contact information for support.'
  }
]

export function ClassicTabs() {
  const [activeTab, setActiveTab] = useState(tabData[0].id)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="w-full bg-white rounded-xl shadow-sm">
      <div className="border-b border-gray-200">
        <div className="flex items-center justify-between md:hidden px-4 py-3">
          <span className="font-medium text-gray-900">
            {tabData.find(tab => tab.id === activeTab)?.label}
          </span>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-500 hover:text-gray-700"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        <nav 
          className={`
            ${isMobileMenuOpen ? 'block' : 'hidden'}
            md:block md:overflow-x-auto
          `}
        >
          <div className="flex flex-col md:flex-row min-w-full px-4 md:px-6">
            {tabData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id)
                  setIsMobileMenuOpen(false)
                }}
                className={`
                  group flex items-center py-3 md:py-4 px-3 md:px-4 border-l-4 md:border-l-0 md:border-b-2 font-medium text-sm transition-all duration-200
                  ${activeTab === tab.id
                    ? 'border-primary bg-primary/5 md:bg-transparent text-primary md:text-black md:border-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50 md:hover:bg-transparent hover:border-gray-300'
                  }
                `}
                aria-current={activeTab === tab.id ? 'page' : undefined}
              >
                <span className={`mr-2 transition-colors duration-200 ${
                  activeTab === tab.id ? 'text-primary' : 'text-gray-400 group-hover:text-gray-500'
                }`}>
                  {tab.icon}
                </span>
                {tab.label}
              </button>
            ))}
          </div>
        </nav>
      </div>
      <div className="p-4 md:p-6">
        {tabData.map((tab) => (
          <div
            key={tab.id}
            className={`space-y-2 transition-all duration-300 ${
              activeTab === tab.id 
                ? 'opacity-100 transform translate-y-0' 
                : 'hidden opacity-0 transform translate-y-4'
            }`}
            role="tabpanel"
            aria-labelledby={`tab-${tab.id}`}
          >
            <h3 className="text-lg font-medium text-gray-900">{tab.description}</h3>
            <p className="text-gray-500">{tab.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export function PillTabs() {
  const [activeTab, setActiveTab] = useState(tabData[0].id)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="w-full bg-white rounded-xl shadow-sm">
      <div className="p-4 md:p-6">
        <div className="relative">
          <div className="md:hidden flex items-center justify-between mb-4">
            <button
              className={`
                flex items-center px-4 py-2.5 rounded-lg text-sm font-medium
                bg-gray-50 text-gray-900
              `}
            >
              <span className="mr-2 text-primary">
                {tabData.find(tab => tab.id === activeTab)?.icon}
              </span>
              {tabData.find(tab => tab.id === activeTab)?.label}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-500 hover:text-gray-700"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
          <div className={`
            ${isMobileMenuOpen ? 'block' : 'hidden'}
            md:block
          `}>
            <div className="bg-gray-50/80 p-2 rounded-xl">
              <div className="flex flex-col md:flex-row min-w-full gap-2">
                {tabData.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id)
                      setIsMobileMenuOpen(false)
                    }}
                    className={`
                      flex items-center px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200
                      ${activeTab === tab.id
                        ? 'bg-white text-black shadow-sm ring-1 ring-gray-200/50'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }
                    `}
                  >
                    <span className={`mr-2 transition-colors duration-200 ${
                      activeTab === tab.id ? 'text-primary' : 'text-gray-400'
                    }`}>
                      {tab.icon}
                    </span>
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          {tabData.map((tab) => (
            <div
              key={tab.id}
              className={`space-y-2 transition-all duration-300 ${
                activeTab === tab.id 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'hidden opacity-0 transform translate-y-4'
              }`}
            >
              <h3 className="text-lg font-medium text-gray-900">{tab.description}</h3>
              <p className="text-gray-500">{tab.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function VerticalTabs() {
  const [activeTab, setActiveTab] = useState(tabData[0].id)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="w-full bg-white rounded-xl shadow-sm">
      <div className="p-4 md:p-6">
        <div className="lg:hidden flex items-center justify-between mb-4">
          <button
            className={`
              flex items-center px-4 py-2.5 rounded-lg text-sm font-medium
              bg-primary/5 text-primary
            `}
          >
            <span className="mr-2 text-primary">
              {tabData.find(tab => tab.id === activeTab)?.icon}
            </span>
            {tabData.find(tab => tab.id === activeTab)?.label}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-500 hover:text-gray-700"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          <nav 
            className={`
              ${isMobileMenuOpen ? 'block' : 'hidden'}
              lg:block lg:w-56 lg:flex-none
            `}
            aria-label="Tabs"
          >
            <div className="flex flex-col gap-2">
              {tabData.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id)
                    setIsMobileMenuOpen(false)
                  }}
                  className={`
                    flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200
                    ${activeTab === tab.id
                      ? 'bg-primary/5 text-primary ring-1 ring-primary/10'
                      : 'text-gray-600 hover:bg-gray-50'
                    }
                  `}
                >
                  <span className={`mr-3 transition-colors duration-200 ${
                    activeTab === tab.id ? 'text-primary' : 'text-gray-400'
                  }`}>
                    {tab.icon}
                  </span>
                  <div className="text-left">
                    <div className="font-medium">{tab.label}</div>
                    <div className={`text-xs ${
                      activeTab === tab.id ? 'text-black/60' : 'text-gray-400'
                    }`}>
                      {tab.description}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </nav>
          <div className="flex-1 bg-gray-50/50 rounded-lg p-4 md:p-6">
            {tabData.map((tab) => (
              <div
                key={tab.id}
                className={`space-y-2 transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'opacity-100 transform translate-x-0' 
                    : 'hidden opacity-0 transform translate-x-4'
                }`}
              >
                <h3 className="text-lg font-medium text-gray-900">{tab.description}</h3>
                <p className="text-gray-500">{tab.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function TabSystemsShowcase() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 md:py-12">
      <div className="container mx-auto px-4 space-y-8 md:space-y-12">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Tab System Variations</h1>
          <p className="mt-2 text-gray-500">Three different styles of tab navigation components</p>
        </div>
        <div className="grid gap-8 md:gap-12">
          <ClassicTabs />
          <PillTabs />
          <VerticalTabs />
        </div>
      </div>
    </div>
  )
}