'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Github, Twitter, Eye, EyeOff, Facebook, Mail } from 'lucide-react'

// Modern Login with Branded Social Buttons
export function ModernLogin() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-sm">
        {/* Header */}
        <div className="text-center">
          <div className="h-12 w-12 mx-auto mb-4 rounded-xl bg-black flex items-center justify-center">
            <div className="h-3 w-3 rounded-full bg-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Welcome back</h2>
          <p className="mt-2 text-sm text-gray-600">
            Please sign in to your account
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="modern-email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="modern-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="modern-password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="modern-password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
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
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>

            <Link href="/forgot-password" className="text-sm font-medium text-black hover:text-gray-800">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-black hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            Sign in
          </button>

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
        </form>
      </div>
    </div>
  )
}

// Split Screen Login
export function SplitLogin() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen flex">
      {/* Left: Image */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-violet-600 to-indigo-800 items-center justify-center p-12">
        <div className="max-w-lg">
          <div className="text-white space-y-6">
            <h2 className="text-4xl font-bold">Start your journey with us</h2>
            <p className="text-violet-100">
              Join thousands of users who trust our platform for their daily needs.
            </p>
          </div>
        </div>
      </div>

      {/* Right: Login Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Sign in</h2>
            <p className="mt-2 text-sm text-gray-600">
              Welcome back! Please enter your details.
            </p>
          </div>

          <form className="mt-8 space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="split-email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="split-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="split-password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1 relative">
                  <input
                    id="split-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-violet-500 focus:border-transparent"
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
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
            >
              Sign in
            </button>

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
          </form>
        </div>
      </div>
    </div>
  )
}

// Card Login
export function CardLogin() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-12">
      <div className="max-w-md w-full">
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          {/* Top Banner */}
          <div className="h-24 bg-gradient-to-r from-emerald-500 to-teal-500" />

          {/* Form Content */}
          <div className="px-8 py-6 -mt-12">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <div className="flex items-center justify-center size-12 mx-auto bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-4">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">Welcome back</h2>
              <p className="text-center text-sm text-gray-600">Sign in to continue to your account</p>
            </div>

            <form className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="card-email" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <input
                    id="card-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="card-password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="mt-1 relative">
                    <input
                      id="card-password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      required
                      className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
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
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              >
                Sign in
              </button>

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
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <div className="space-y-24">
      <ModernLogin />
      <SplitLogin />
      <CardLogin />
    </div>
  )
}

