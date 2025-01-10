"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function CategoriesSection({ categories }) {
  const params = useParams();
  const activeCategory = params.category;

  const getCurrentCategoryDetails = (categorySlug) => {
    for (let i = 0; i < categories.length; i++) {
      if (categories[i].categorySlug == categorySlug) {
        return categories[i];
      }
    }
  };
  return (
    <div className="bg-white sticky top-[-20px] z-10">
      <div className=" py-6">
        <div className="flex flex-col space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-1">
                {" "}
                {activeCategory == undefined
                  ? "All UI Components"
                  : getCurrentCategoryDetails(activeCategory).category}
              </h1>
              <p className="text-gray-600">
                {activeCategory == undefined
                  ? "Beautiful and responsive components for your site"
                  : `Explore our collection of ${getCurrentCategoryDetails(
                      activeCategory
                    ).category.toLowerCase()} components`}
              </p>
            </div>
          </div>

          {/* Categories Filter */}
          <div className="flex items-center gap-2 pb-2 overflow-x-auto scrollbar-hide">
            <Link
              className="inline-flex items-center justify-center px-4 py-2 rounded-full
                text-sm font-medium transition-colors whitespace-nowrap
                hover:bg-gray-100 
                data-[state=active]:bg-black data-[state=active]:text-white"
              data-state={activeCategory === undefined ? "active" : "inactive"}
              href={`/components`}
            >
              All
            </Link>
            {categories.map((category, index) => (
              <Link
                key={index}
                className="inline-flex items-center justify-center px-4 py-2 rounded-full
                text-sm font-medium transition-colors whitespace-nowrap
                hover:bg-gray-100 
                data-[state=active]:bg-black data-[state=active]:text-white"
                data-state={
                  category.categorySlug === activeCategory
                    ? "active"
                    : "inactive"
                }
                href={`/components/${category.categorySlug}`}
              >
                {category.category}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
