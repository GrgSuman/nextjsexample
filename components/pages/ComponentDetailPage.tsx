"use client";
import React, { useState } from "react";
import { Code, Eye, Layers, ChevronLeft } from "lucide-react";
import CodeDisplay from "../CodeDisplay";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";

// Load Inter with specific weights
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const ComponentDetailPage = ({ myData, frontmatter }) => {
  // Dynamic import with loading state
  const DynamicComponent = dynamic(
    () => import(`@/components/DemoComponents/${frontmatter.componentName}`),
    {

      loading: () => (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ),
      ssr: false,
    }
  );
  const [activeTab, setActiveTab] = useState("preview");
  return (
    <div>
      {/* Header */}
      <div className={`bg-white ${inter.className}`}>
        <div className=" mx-auto px-8 py-8">

          <button onClick={() => window.history.back()} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 text-base">
            <ChevronLeft className="h-5 w-5" /> Back to components
          </button>

          <div className="flex items-start justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-3">{frontmatter.title}</h1>
              <p className="text-gray-600 text-lg max-w-2xl">{frontmatter.description}</p>
            </div>
          </div>

          <div className="flex items-center gap-8">
            {[
              { id: "preview", icon: Eye, label: "Preview" },
              { id: "code", icon: Code, label: "Code" },
              { id: "usage", icon: Layers, label: "Usage" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 pb-4 text-base font-medium transition-colors ${
                  activeTab === tab.id
                    ? "border-b-2 border-black text-black"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <tab.icon className="h-5 w-5" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className=" bg-white  mx-auto pb-[5rem]">

        {activeTab === "preview" && <DynamicComponent />}

        {activeTab === "code" && <CodeDisplay myData={myData} />}

        {activeTab === "usage" && (
          <>
            <p>{frontmatter.usage}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ComponentDetailPage;
