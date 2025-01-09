---
title: Rating System Collection
slug: rating-system-collection
description: >-
  A collection of different rating components including Star Rating, Emoji
  Rating, Numeric Rating, and Interactive Rating
category: Feedback & Reviews
componentName: RatingSystems
categorySlug: feedback-reviews
thumbnailUrl: ''
lastUpdated: '2025-01-07'
usage: Copy and use
---
'use client'

import { useState } from 'react'
import { Star, Heart, ThumbsUp, SmilePlus, Frown, Meh, Smile, HeartIcon } from 'lucide-react'

// Star Rating
export function StarRating() {
  const [rating, setRating] = useState<number>(0)
  const [hover, setHover] = useState<number>(0)

  return (
    <div className="md:w-[80%] mx-auto p-6 bg-white rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Rate your experience</h3>
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            className="p-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
          >
            <Star
              className={`w-8 h-8 ${
                star <= (hover || rating)
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-300'
              }`}
            />
          </button>
        ))}
      </div>
      <p className="mt-2 text-sm text-gray-500">
        {rating ? `You rated this ${rating} stars` : 'Click to rate'}
      </p>
    </div>
  )
}

// Emoji Rating
export function EmojiRating() {
  const [selected, setSelected] = useState<number | null>(null)

  const options = [
    { value: 1, icon: Frown, label: 'Poor' },
    { value: 2, icon: Meh, label: 'Okay' },
    { value: 3, icon: Smile, label: 'Great' },
  ]

  return (
    <div className="md:w-[80%] mx-auto p-6 bg-white rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">How was your experience?</h3>
      <div className="flex justify-center gap-8">
        {options.map((option) => {
          const Icon = option.icon
          return (
            <button
              key={option.value}
              onClick={() => setSelected(option.value)}
              className={`group flex flex-col items-center p-2 rounded-lg transition-colors ${
                selected === option.value
                  ? 'bg-indigo-50'
                  : 'hover:bg-gray-50'
              }`}
            >
              <Icon
                className={`w-10 h-10 mb-2 ${
                  selected === option.value
                    ? 'text-indigo-600'
                    : 'text-gray-400 group-hover:text-gray-600'
                }`}
              />
              <span className={`text-sm ${
                selected === option.value
                  ? 'text-indigo-600 font-medium'
                  : 'text-gray-500'
              }`}>
                {option.label}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

// Numeric Rating
export function NumericRating() {
  const [rating, setRating] = useState<number | null>(null)

  return (
    <div className="md:w-[80%] mx-auto p-6 bg-white rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">How likely are you to recommend us?</h3>
      <div className="flex justify-between gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
          <button
            key={num}
            onClick={() => setRating(num)}
            className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-medium transition-colors ${
              rating === num
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {num}
          </button>
        ))}
      </div>
      <div className="flex justify-between mt-2">
        <span className="text-sm text-gray-500">Not likely</span>
        <span className="text-sm text-gray-500">Very likely</span>
      </div>
    </div>
  )
}

// Interactive Heart Rating
export function HeartRating() {
  const [rating, setRating] = useState<number>(0)
  const [hover, setHover] = useState<number>(0)

  return (
    <div className="md:w-[80%] mx-auto p-6 bg-white rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Rate this content</h3>
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((heart) => (
          <button
            key={heart}
            type="button"
            className="p-1 focus:outline-none focus:ring-2 focus:ring-pink-500 rounded transition-transform hover:scale-110"
            onClick={() => setRating(heart)}
            onMouseEnter={() => setHover(heart)}
            onMouseLeave={() => setHover(0)}
          >
            <Heart
              className={`w-8 h-8 transition-colors ${
                heart <= (hover || rating)
                  ? 'fill-pink-500 text-pink-500'
                  : 'text-gray-300'
              }`}
            />
          </button>
        ))}
      </div>
      <p className="mt-2 text-sm text-gray-500">
        {rating ? `You rated this ${rating} hearts` : 'Click to rate'}
      </p>
    </div>
  )
}

// Thumbs Up/Down Rating
export function ThumbRating() {
  const [rating, setRating] = useState<'up' | 'down' | null>(null)

  return (
    <div className="md:w-[80%] mx-auto p-6 bg-white rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Was this helpful?</h3>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setRating('up')}
          className={`p-3 rounded-full transition-colors ${
            rating === 'up'
              ? 'bg-green-100 text-green-600'
              : 'hover:bg-gray-100 text-gray-400'
          }`}
        >
          <ThumbsUp className="w-6 h-6" />
        </button>
        <button
          onClick={() => setRating('down')}
          className={`p-3 rounded-full transition-colors ${
            rating === 'down'
              ? 'bg-red-100 text-red-600'
              : 'hover:bg-gray-100 text-gray-400'
          }`}
        >
          <ThumbsUp className="w-6 h-6 rotate-180" />
        </button>
      </div>
      {rating && (
        <p className="mt-4 text-sm text-center text-gray-500">
          Thank you for your feedback!
        </p>
      )}
    </div>
  )
}

// Custom Feedback Rating
export function CustomRating() {
  const [rating, setRating] = useState<number | null>(null)
  const [feedback, setFeedback] = useState('')

  return (
    <div className="md:w-[80%] mx-auto p-6 bg-white rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Share your experience</h3>
      <div className="flex items-center gap-1 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            className="p-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
            onClick={() => setRating(star)}
          >
            <Star
              className={`w-6 h-6 ${
                star <= (rating || 0)
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-300'
              }`}
            />
          </button>
        ))}
      </div>
        <>
          <textarea
            placeholder="Tell us more about your experience..."
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows={3}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
          <button
            className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Submit Feedback
          </button>
        </>
    </div>
  )
}

export default function RatingPage() {
  return (
    <div className="py-12 space-y-12 bg-gray-50">
      <StarRating />
      <EmojiRating />
      <NumericRating />
      <HeartRating />
      <ThumbRating />
      <CustomRating />
    </div>
  )
}


