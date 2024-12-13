---
title: 'Interactive Search '
slug: interactive-search
description: SearchVariants
category: Interactive Components
componentName: SearchVariants
categorySlug: interactive-components
thumbnailUrl: uri
lastUpdated: '2024-12-12'
usage: install lucide-icons
---
import React, { useState } from 'react';
import { Search, X, Filter, Command, ArrowRight } from 'lucide-react';

const SearchVariants = () => {
  const [focused, setFocused] = useState('');
  const [query, setQuery] = useState('');

  // Sample suggestion data
  const suggestions = [
    { title: 'React Components', category: 'Development' },
    { title: 'Tailwind CSS', category: 'Styling' },
    { title: 'Next.js', category: 'Framework' },
    { title: 'TypeScript', category: 'Language' }
  ];

  return (
    <div className="space-y-12 max-w-2xl mx-auto p-8">
      {/* Modern Command Bar */}
      <div className="relative">
        <div className={`relative rounded-2xl bg-white shadow-lg ring-1 ring-gray-200 transition-shadow ${focused === '1' ? 'ring-2 ring-blue-500' : ''}`}>
          <div className="flex items-center px-4">
            <Command className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search anything..."
              className="w-full py-4 px-3 text-gray-800 placeholder-gray-400 bg-transparent border-none focus:outline-none focus:ring-0"
              onFocus={() => setFocused('1')}
              onBlur={() => setFocused('')}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <kbd className="hidden sm:inline-flex items-center px-2 py-1 text-xs text-gray-500 bg-gray-100 rounded">
              ⌘K
            </kbd>
          </div>
        </div>
      </div>

      {/* Filter Search */}
      <div className="relative">
        <div className={`flex items-center bg-white rounded-lg border ${focused === '2' ? 'border-blue-500' : 'border-gray-200'}`}>
          <div className="flex-1 flex items-center">
            <Search className="w-5 h-5 text-gray-400 ml-4" />
            <input
              type="text"
              placeholder="Search with filters..."
              className="w-full p-3 text-gray-800 placeholder-gray-400 bg-transparent border-none focus:outline-none focus:ring-0"
              onFocus={() => setFocused('2')}
              onBlur={() => setFocused('')}
            />
          </div>
          <button className="px-4 py-2 flex items-center gap-2 text-gray-600 hover:text-gray-900 border-l">
            <Filter className="w-4 h-4" />
            <span className="hidden sm:inline">Filters</span>
          </button>
        </div>
      </div>

      {/* Suggestions Search */}
      <div className="relative">
        <div className={`rounded-t-lg border ${focused === '3' ? 'border-blue-500' : 'border-gray-200'}`}>
          <div className="flex items-center px-4 bg-white rounded-t-lg">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search with suggestions..."
              className="w-full p-4 text-gray-800 placeholder-gray-400 bg-transparent border-none focus:outline-none focus:ring-0"
              onFocus={() => setFocused('3')}
              onBlur={() => setTimeout(() => setFocused(''), 200)}
            />
            {query && (
              <button onClick={() => setQuery('')} className="p-1 hover:bg-gray-100 rounded-full">
                <X className="w-4 h-4 text-gray-400" />
              </button>
            )}
          </div>
        </div>
        {focused === '3' && (
          <div className="absolute w-full bg-white border border-t-0 border-gray-200 rounded-b-lg shadow-lg z-10">
            <div className="p-2">
              {suggestions.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-gray-50 cursor-pointer"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-900">{item.title}</p>
                    <p className="text-xs text-gray-500">{item.category}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Minimal Search */}
      <div className="relative">
        <div className={`flex items-center bg-gray-100 rounded-full transition-colors ${focused === '4' ? 'bg-white ring-1 ring-gray-200' : ''}`}>
          <Search className="w-5 h-5 text-gray-400 ml-4" />
          <input
            type="text"
            placeholder="Quick search..."
            className="w-full py-3 px-3 text-gray-800 placeholder-gray-400 bg-transparent border-none focus:outline-none focus:ring-0"
            onFocus={() => setFocused('4')}
            onBlur={() => setFocused('')}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchVariants;
