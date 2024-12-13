"use client";
import React, { useState } from "react";
import {  Code,Eye,Layers,ChevronLeft} from "lucide-react";
import CodeDisplay from "../CodeDisplay";
import dynamic from 'next/dynamic'



const ComponentDetailPage = ({myData, frontmatter}) => {
  // Dynamic import with loading state
  const DynamicComponent = dynamic(
    () => import(`@/components/DemoComponents/${frontmatter.componentName}`),
    {
      loading: () => <p>Loading...</p>,
      ssr: false
    }
  )

  const [activeTab, setActiveTab] = useState("preview");
  return (
    <div>
      {/* Header */}
      <div className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 text-base"
          >
            <ChevronLeft className="h-5 w-5" />
            Back to components
          </button>

          <div className="flex items-start justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-3">{frontmatter.title}</h1>
              <p className="text-gray-600 text-lg max-w-2xl">
               {frontmatter.description}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-8">
            {[
              { id: "preview", icon: Eye, label: "Preview" },
              { id: "code", icon: Code, label: "Code" }
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
      <div className="max-w-7xl bg-white  mx-auto px-8 py-10 pb-[5rem]">
        {activeTab === "preview" && (
          <>
          <div className="space-y-8 border shadow-sm p-4 py-[5rem] min-h-fit w-full">
              <DynamicComponent/>
          </div>

          <h1 className="flex items-center gap-2 pb-4 mt-8 text-[1.2rem] font-medium transition-colors"> <Layers/> Usage</h1>

          <div className="bg-white rounded-xl border  shadow-sm p-8">
          {/* Usage Instructions */}
          {frontmatter.usage}
          </div>
          </>
        )}

        {activeTab === "code" && <CodeDisplay myData={myData} />}

      </div>


    </div>
  );
};

export default ComponentDetailPage;
