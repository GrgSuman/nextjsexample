---
title: Signup components
slug: signup-components
description: >-
  A sleek and minimal signup form with social media integration and intuitive
  design for a seamless user experience.
category: Authentication
componentName: SignupPageUI
categorySlug: authentication
thumbnailUrl: ''
lastUpdated: '2025-01-09'
usage: copy and paste
---
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Github, Twitter, Eye, EyeOff, Facebook, ArrowRight, Check, Building2, Briefcase, MapPin } from 'lucide-react'

// Modern Signup (Simple)
export function ModernSignup() {
  const [showPassword, setShowPassword] = useState(false)
  const [agreed, setAgreed] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-xl w-full space-y-8 bg-white p-8 rounded-2xl shadow-sm">
        {/* Header */}
        <div className="text-center">
          <div className="h-12 w-12 mx-auto mb-4 rounded-xl bg-black flex items-center justify-center">
            <div className="h-3 w-3 rounded-full bg-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Create your account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Enter your details to get started
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                  First name
                </label>
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                  Last name
                </label>
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-black focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-400" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                Confirm password
              </label>
              <div className="mt-1 relative">
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                I agree to the{" "}
                <Link href="#" className="text-black hover:text-gray-800">
                  Terms
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-black hover:text-gray-800">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <button
              type="submit"
              disabled={!agreed}
              className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-black hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Create account
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 border rounded-lg shadow-sm text-sm font-medium text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#24292F]"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </button>
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 border rounded-lg shadow-sm text-sm font-medium text-white bg-[#1DA1F2] hover:bg-[#1DA1F2]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1DA1F2]"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </button>
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 border rounded-lg shadow-sm text-sm font-medium text-white bg-[#1877F2] hover:bg-[#1877F2]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1877F2]"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </button>
          </div>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-black hover:text-gray-800">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

// Long Form Multistep Signup
export function LongFormSignup() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    
    // Professional Details
    company: '',
    role: '',
    department: '',
    experience: '',
    
    // Additional Information
    address: '',
    city: '',
    country: '',
    interests: [] as string[],
    bio: ''
  })

  const updateFormData = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const steps = [
    {
      title: "Personal Information",
      description: "Start with your basic details",
      icon: <Building2 className="h-6 w-6" />
    },
    {
      title: "Professional Details",
      description: "Tell us about your work",
      icon: <Briefcase className="h-6 w-6" />
    },
    {
      title: "Additional Info",
      description: "Help us know you better",
      icon: <MapPin className="h-6 w-6" />
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Form Content */}
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="bg-white shadow-sm rounded-xl p-8">
          <div className="max-w-3xl mx-auto">
            {/* Step Content */}
            <div className="space-y-8">
              {/* Step Icon */}
              <div className="flex justify-center">
                <div className={`p-3 rounded-full ${
                  step === 1 ? 'bg-blue-50' : step === 2 ? 'bg-purple-50' : 'bg-green-50'
                }`}>
                  {steps[step - 1].icon}
                </div>
              </div>

              {/* Step Title */}
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900">
                  {steps[step - 1].title}
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  {steps[step - 1].description}
                </p>
              </div>

              {/* Step Forms */}
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                {step === 1 && (
                  <>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                          First name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          id="firstName"
                          value={formData.firstName}
                          onChange={updateFormData}
                          className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:ring-black"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                          Last name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          id="lastName"
                          value={formData.lastName}
                          onChange={updateFormData}
                          className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:ring-black"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={updateFormData}
                        className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:ring-black"
                      />
                    </div>

                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={updateFormData}
                        className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:ring-black"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={updateFormData}
                        className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:ring-black"
                      />
                    </div>
                  </>
                )}

                {step === 2 && (
                  <>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                        Company name
                      </label>
                      <input
                        type="text"
                        name="company"
                        id="company"
                        value={formData.company}
                        onChange={updateFormData}
                        className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:ring-black"
                      />
                    </div>

                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                        Job title
                      </label>
                      <input
                        type="text"
                        name="role"
                        id="role"
                        value={formData.role}
                        onChange={updateFormData}
                        className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:ring-black"
                      />
                    </div>

                    <div>
                      <label htmlFor="department" className="block text-sm font-medium text-gray-700">
                        Department
                      </label>
                      <select
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={updateFormData}
                        className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:ring-black"
                      >
                        <option value="">Select a department</option>
                        <option value="engineering">Engineering</option>
                        <option value="design">Design</option>
                        <option value="product">Product</option>
                        <option value="marketing">Marketing</option>
                        <option value="sales">Sales</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                        Years of experience
                      </label>
                      <input
                        type="number"
                        name="experience"
                        id="experience"
                        value={formData.experience}
                        onChange={updateFormData}
                        min="0"
                        max="50"
                        className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:ring-black"
                      />
                    </div>
                  </>
                )}

                {step === 3 && (
                  <>
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        value={formData.address}
                        onChange={updateFormData}
                        className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:ring-black"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          id="city"
                          value={formData.city}
                          onChange={updateFormData}
                          className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:ring-black"
                        />
                      </div>
                      <div>
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                          Country
                        </label>
                        <input
                          type="text"
                          name="country"
                          id="country"
                          value={formData.country}
                          onChange={updateFormData}
                          className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:ring-black"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                        Bio
                      </label>
                      <textarea
                        id="bio"
                        name="bio"
                        rows={4}
                        value={formData.bio}
                        onChange={updateFormData}
                        className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:ring-black"
                      />
                    </div>
                  </>
                )}

                {/* Navigation */}
                <div className="flex justify-between pt-6">
                  <button
                    type="button"
                    onClick={() => setStep(Math.max(1, step - 1))}
                    className={`${
                      step === 1 ? 'invisible' : ''
                    } inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black`}
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (step < 3) {
                        setStep(step + 1)
                      }
                    }}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-black hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                  >
                    {step === 3 ? 'Complete' : 'Continue'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SignupPage() {
  return (
    <div className="space-y-24">
      <ModernSignup />
      <LongFormSignup />
    </div>
  )
}



