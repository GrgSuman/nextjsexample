// Light Variation: Copy-Paste Components Design
export default function HeroLight() {
  const categories = [
    { id: 1, name: "Buttons & CTAs", count: "45+" },
    { id: 2, name: "Navigation Bars", count: "30+" },
    { id: 3, name: "Hero Sections", count: "25+" },
    { id: 4, name: "Input Fields", count: "40+" },
    { id: 5, name: "Card Layouts", count: "35+" },
    { id: 6, name: "Pricing Tables", count: "20+" },
    { id: 7, name: "Testimonials", count: "25+" },
    { id: 8, name: "Feature Lists", count: "30+" },
  ];

  return (
    <div className="relative min-h-[90vh] bg-gradient-to-br pt-[2rem] md:pt-[3rem] from-rose-50 via-white to-indigo-50 overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-24 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl bg-black/5 mb-6 sm:mb-8">
              <span className="size-1.5 sm:size-2 rounded-full bg-blue-900" />
              <span className="text-xs sm:text-sm font-medium">
                Just Copy & Paste
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 sm:mb-8 px-4">
              300+ Ready-to-Use
              <br />
              <span className="relative">
                <span className="absolute -inset-1 bg-gradient-to-r from-rose-400 to-indigo-400 blur-2xl opacity-20" />
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-indigo-500">
                  Tailwind Snippets
                </span>
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mb-12 px-4">
              Stop writing components from scratch. Find the component you need,
              copy the code, and paste it into your project. It's that simple.
            </p>

            {/* Categories Section */}
            <div className="w-full max-w-6xl pt-3 sm:pt-5 mx-auto px-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-10">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-0">
                  Browse Components
                </h2>
                <button className="text-sm text-gray-600 hover:text-gray-900">
                  View all →
                </button>
              </div>
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className="group p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-white shadow-sm hover:shadow-md 
                      transition-all hover:scale-102 text-left w-full"
                  >
                    <div className="text-sm sm:text-base text-center font-semibold text-gray-800 mb-1 sm:mb-2">
                      {category.name}
                    </div>
                    <div className="text-xs sm:text-sm text-center text-gray-500">
                      {category.count}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
