---
title: Timeline Example
slug: timeline-example
description: des
category: Timeline
componentName: TimelineExample
categorySlug: timeline
thumbnailUrl: sd
lastUpdated: '2024-12-12'
usage: ss
---
import React from 'react';

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  description: string;
  status?: 'completed' | 'current' | 'upcoming';
  icon?: React.ReactNode;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'current':
        return 'bg-blue-500';
      case 'upcoming':
        return 'bg-gray-300';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="mx-auto max-w-3xl">
        <div className="relative space-y-8 before:absolute before:inset-0 before:left-4 before:h-full before:w-0.5 before:bg-gray-200">
          {items.map((item, index) => (
            <div key={item.id} className="relative flex gap-6">
              <div className="flex flex-col items-center">
                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${getStatusColor(item.status)} text-white`}>
                  {item.icon || (
                    <span className="h-3 w-3 rounded-full bg-white"></span>
                  )}
                </div>
                {index !== items.length - 1 && (
                  <div className="h-full w-0.5"></div>
                )}
              </div>

              <div className="flex-1 rounded-lg bg-white p-6 shadow-md">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <time className="text-sm text-gray-500">{item.date}</time>
                </div>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Example usage component
const TimelineExample = () => {
  const timelineItems: TimelineItem[] = [
    {
      id: 1,
      title: "Project Started",
      date: "January 2024",
      description: "Initial project kickoff and team formation. Setting up project infrastructure and defining key milestones.",
      status: "completed"
    },
    {
      id: 2,
      title: "Design Phase",
      date: "February 2024",
      description: "Creating wireframes, user flows, and finalizing the design system. Conducting user research and gathering feedback.",
      status: "completed"
    },
    {
      id: 3,
      title: "Development",
      date: "March 2024",
      description: "Implementation of core features and functionality. Regular code reviews and testing procedures in place.",
      status: "current"
    },
    {
      id: 4,
      title: "Testing & QA",
      date: "April 2024",
      description: "Comprehensive testing phase including unit tests, integration tests, and user acceptance testing.",
      status: "upcoming"
    },
    {
      id: 5,
      title: "Launch",
      date: "May 2024",
      description: "Product launch and deployment to production. Monitoring system performance and user feedback.",
      status: "upcoming"
    }
  ];

  return <Timeline items={timelineItems} />;
};

export default TimelineExample;
