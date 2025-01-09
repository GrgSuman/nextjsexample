import React from "react";
import Link from "next/link";
import { ArrowUpRight, Code2, Star } from 'lucide-react';

const IndividualCards = ({ data }) => {
  return (
    <Link href={`/components/${data.categorySlug}/${data.slug}`} className="block">
      <div className="group relative h-64 bg-white rounded-2xl border border-gray-200 hover:border-blue-500 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md">
        {/* <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div> */}
        
        <div className="p-6 h-full flex flex-col">
          {/* Header section */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors duration-300 transform group-hover:scale-110">
                <Code2 className="w-5 h-5 text-blue-600" />
              </div>
              <span className="text-sm font-semibold text-gray-600 group-hover:text-blue-600 transition-colors duration-300">
                {data.category}
              </span>
            </div>
          </div>

          {/* Content section */}
          <div className="flex-grow">
            <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
              {data.title}
            </h3>
            
            {data.description && (
              <p className="text-gray-600 text-sm line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                {data.description}
              </p>
            )}
          </div>
          
          {/* Footer section */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1.5 text-xs font-semibold bg-gray-50 text-gray-600 rounded-full group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors duration-300">
                {data.type || "Component"}
              </span>
            </div>
            <div className="flex items-center text-gray-400 group-hover:text-blue-500 transition-colors duration-300">
              <span className="text-sm font-medium mr-1.5">View</span>
              <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default IndividualCards;

