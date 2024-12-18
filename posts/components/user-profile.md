---
title: 'User profile '
slug: user-profile
description: User profile demos
category: User Profile
componentName: ProfileCard
categorySlug: user-profile
thumbnailUrl: asd
lastUpdated: '2024-12-18'
usage: copy and use
---
import React from 'react';
import { Mail, MapPin, Link as LinkIcon, Twitter, GitHub, Calendar, Users, MoreVertical } from 'lucide-react';

// Modern Profile Card with Cover Image
const ProfileCardModern = () => {
  return (
    <div className="max-w-2xl bg-white rounded-xl shadow-sm border">
      {/* Cover Image Area */}
      <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-xl" />
      
      <div className="px-6 pb-6">
        {/* Profile Image */}
        <div className="flex justify-between">
          <div className="-mt-12 mb-4">
            <img 
              src="/api/placeholder/150/150" 
              alt="Profile" 
              className="w-24 h-24 rounded-full border-4 border-white"
            />
          </div>
          <button className="mt-4 text-gray-600 hover:text-gray-900">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>

        {/* Profile Info */}
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Sarah Anderson</h2>
            <p className="text-gray-600">Senior Product Designer</p>
          </div>

          <p className="text-gray-600">
            Creating user-centered designs and turning complex problems into simple solutions.
          </p>

          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              San Francisco, CA
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              34 followers
            </div>
          </div>

          {/* Social Links */}
          <div className="flex space-x-3">
            <button className="p-2 text-gray-600 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors">
              <Twitter className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
              <GitHub className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors">
              <LinkIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Minimal Profile Card
const ProfileCardMinimal = () => {
  return (
    <div className="max-w-2xl bg-white rounded-xl border p-6">
      <div className="flex items-start justify-between">
        {/* Left: Profile Info */}
        <div className="flex space-x-4">
          <img 
            src="/api/placeholder/100/100" 
            alt="Profile" 
            className="w-16 h-16 rounded-lg"
          />
          
          <div className="space-y-3">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Alex Thompson</h2>
              <p className="text-sm text-gray-500">Full Stack Developer</p>
            </div>

            <div className="flex items-center space-x-4 text-sm">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Available for work
              </span>
              <span className="text-gray-500">
                <Calendar className="w-4 h-4 inline mr-1" />
                Joined 2023
              </span>
            </div>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center space-x-2">
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Follow
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-500 rounded-lg hover:bg-gray-50">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Contact Links */}
      <div className="mt-6 pt-6 border-t grid grid-cols-2 gap-4">
        <a href="#" className="flex items-center text-sm text-gray-600 hover:text-blue-600">
          <Mail className="w-4 h-4 mr-2" />
          alex.thompson@example.com
        </a>
        <a href="#" className="flex items-center text-sm text-gray-600 hover:text-blue-600">
          <GitHub className="w-4 h-4 mr-2" />
          @alexthompson
        </a>
      </div>
    </div>
  );
};

const ProfileCard = ()=>{
  return(
    <>
    <ProfileCardModern/>
    <ProfileCardMinimal/>
    </>
  )
}

export default ProfileCard;
