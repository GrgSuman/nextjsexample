import Link from 'next/link'
import { Sparkles } from 'lucide-react'

const Homepage = () => {
  return (
    <div className="min-h-screen bg-white antialiased">
      {/* Hero Section with Animated Background */}
      <div className="relative pt-28 pb-20 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        
        <div className="relative mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center"> {/* Added mx-auto and text-center */}
            <div className="flex items-center justify-center gap-2 text-sm mb-8 text-gray-600 animate-fade-in-up"> {/* Added justify-center */}
              <Sparkles className="h-4 w-4" />
              <span>Modern components for your Next.js applications</span>
            </div>
            <h1 className="text-5xl font-bold tracking-tight mb-6 animate-fade-in-up animation-delay-150">
              Premium UI Components for Modern Web Applications
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in-up animation-delay-300">
              A collection of beautiful and functional components built with React and Tailwind CSS. 
              Copy, paste, and create stunning web applications.
            </p>
            <div className="flex items-center justify-center gap-4 animate-fade-in-up animation-delay-450"> {/* Added justify-center */}
              <Link href="/components" className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                Browse Components
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage

