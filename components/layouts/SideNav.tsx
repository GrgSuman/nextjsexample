// SideNav.jsx
'use client'
import { Search } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

const SideNav = ({ categories }: any) => {
  const params = useParams()
  const activeCategory = params.category

  return (
    // Added -mt-[1px] to overlap with header border and prevent gap
    <div className="fixed z-[70] left-0 top-16 -mt-[1px] bottom-0 w-72 border-r border-gray-800 bg-gray-900 overflow-hidden">
      <div className="flex flex-col h-full">
        {/* Search */}
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-4 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-12 pr-4 py-2.5 bg-gray-800 text-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 placeholder-gray-500"
            />
          </div>
        </div>

        {/* Refined Category List */}
        <div className="flex-1 overflow-y-auto px-3 py-4">
          <div className="space-y-1">
            {categories.map((item, index) => (
              <Link href={`/components/${item.categorySlug}`} className='font-semibold' key={item.categorySlug + index}>
                <div
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all ${
                    activeCategory === item.categorySlug
                      ? 'bg-blue-900/50 text-blue-300'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-gray-100'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {item.category}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideNav