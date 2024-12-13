---
title: Tailwind loading animations
slug: tailwind-loading-animations
description: Loading animations built with tailwind css no need to install any packages
category: Loading UI
componentName: LoadingAnimations
categorySlug: loading-ui
thumbnailUrl: img
lastUpdated: '2024-12-12'
usage: Just copy the components and run
---
import React from 'react';

const LoadingAnimations = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {/* Simple Spinner */}
      <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-xl shadow-sm">
        <div className="w-8 h-8 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
        <p className="text-sm text-gray-600">Simple Spinner</p>
      </div>

      {/* Pulse */}
      <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-xl shadow-sm">
        <div className="w-8 h-8 bg-blue-500 rounded-full animate-pulse"></div>
        <p className="text-sm text-gray-600">Pulse</p>
      </div>

      {/* Bouncing Dots */}
      <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-xl shadow-sm">
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-150"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-300"></div>
        </div>
        <p className="text-sm text-gray-600">Bouncing Dots</p>
      </div>

      {/* Skeleton Loading */}
      <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-xl shadow-sm">
        <div className="space-y-3 w-full">
          <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
        </div>
        <p className="text-sm text-gray-600">Skeleton</p>
      </div>

      {/* Ping/Ripple */}
      <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-xl shadow-sm">
        <div className="relative">
          <div className="absolute -inset-2 rounded-full bg-blue-500/20 animate-ping"></div>
          <div className="relative w-4 h-4 rounded-full bg-blue-500"></div>
        </div>
        <p className="text-sm text-gray-600">Ping</p>
      </div>

      {/* Dual Spinner */}
      <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-xl shadow-sm">
        <div className="relative w-8 h-8">
          <div className="absolute w-full h-full border-2 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
          <div className="absolute w-6 h-6 m-1 border-2 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
        <p className="text-sm text-gray-600">Dual Spinner</p>
      </div>
    </div>
  );
};

export default LoadingAnimations;
