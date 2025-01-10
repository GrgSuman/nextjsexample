---
title: Date Picker
slug: date-picker
description: >-
  Simple date picker UI component. It helps you to select the range between two
  dates.
category: Forms and Inputs
componentName: DateRangePickerDemo
categorySlug: forms-and-inputs
thumbnailUrl: ''
lastUpdated: '2025-01-10'
usage: 'Install the requried packages like date-fns to use it '
---
'use client'

import * as React from 'react'
import { addDays, format, isBefore, isEqual, startOfToday, startOfMonth, endOfMonth } from 'date-fns'
import { CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react'

type DateRange = {
  from: Date
  to?: Date
}

interface DateRangePickerProps {
  value?: DateRange
  onChange?: (value: DateRange | undefined) => void
  placeholder?: string
}

const presets = [
  {
    label: 'Today',
    value: 'today',
    dateRange: {
      from: startOfToday(),
      to: startOfToday(),
    },
  },
  {
    label: 'Yesterday',
    value: 'yesterday',
    dateRange: {
      from: addDays(startOfToday(), -1),
      to: addDays(startOfToday(), -1),
    },
  },
  {
    label: 'Last 7 days',
    value: 'last-7',
    dateRange: {
      from: addDays(startOfToday(), -6),
      to: startOfToday(),
    },
  },
  {
    label: 'Last 30 days',
    value: 'last-30',
    dateRange: {
      from: addDays(startOfToday(), -29),
      to: startOfToday(),
    },
  },
  {
    label: 'This Month',
    value: 'this-month',
    dateRange: {
      from: startOfMonth(new Date()),
      to: endOfMonth(new Date()),
    },
  }
]

function Calendar({ 
  selected,
  onSelect,
  month,
  onMonthChange
}: {
  selected?: DateRange
  onSelect: (date: Date) => void
  month: Date
  onMonthChange: (date: Date) => void
}) {
  const daysInMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate()
  const firstDayOfMonth = new Date(month.getFullYear(), month.getMonth(), 1).getDay()
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const weeks = Math.ceil((daysInMonth + firstDayOfMonth) / 7)

  const isSelected = (date: Date) => {
    if (!selected?.from && !selected?.to) return false
    if (selected.from && !selected.to) return isEqual(date, selected.from)
    if (!selected.from || !selected.to) return false
    return (
      isEqual(date, selected.from) ||
      isEqual(date, selected.to) ||
      (isBefore(selected.from, date) && isBefore(date, selected.to))
    )
  }

  return (
    <div className="p-3">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => onMonthChange(addDays(month, -30))}
          className="p-1 hover:bg-gray-100 rounded-md"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="font-medium">
          {format(month, 'MMMM yyyy')}
        </div>
        <button
          onClick={() => onMonthChange(addDays(month, 30))}
          className="p-1 hover:bg-gray-100 rounded-md"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 mb-2">
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
          <div key={day} className="text-center text-sm text-gray-500">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: firstDayOfMonth }).map((_, index) => (
          <div key={`empty-${index}`} />
        ))}
        {days.map((day) => {
          const date = new Date(month.getFullYear(), month.getMonth(), day)
          const isToday = isEqual(date, startOfToday())
          
          return (
            <button
              key={day}
              onClick={() => onSelect(date)}
              className={`
                h-8 w-8 rounded-md flex items-center justify-center text-sm
                ${isSelected(date) ? 'bg-black text-white' : 'hover:bg-gray-100'}
                ${isToday ? 'font-bold' : ''}
              `}
            >
              {day}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export function DateRangePicker({
  value,
  onChange,
  placeholder = "Select date range",
}: DateRangePickerProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [month1, setMonth1] = React.useState(new Date())
  const [month2, setMonth2] = React.useState(addDays(new Date(), 31))
  const containerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (date: Date) => {
    if (!value?.from || (value.from && value.to)) {
      onChange?.({ from: date, to: undefined })
    } else {
      if (isBefore(date, value.from)) {
        onChange?.({ from: date, to: value.from })
      } else {
        onChange?.({ from: value.from, to: date })
      }
    }
  }

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-full flex items-center justify-between px-3 py-2 text-sm
          border rounded-md bg-white hover:bg-gray-50
          ${isOpen ? 'ring-2 ring-black' : ''}
        `}
      >
        <div className="flex items-center">
          <CalendarIcon className="mr-2 h-4 w-4 text-gray-500" />
          {value?.from ? (
            <span>
              {format(value.from, 'MMM dd, yyyy')}
              {value.to ? ` - ${format(value.to, 'MMM dd, yyyy')}` : ''}
            </span>
          ) : (
            <span className="text-gray-500">{placeholder}</span>
          )}
        </div>
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-2 p-4 bg-white rounded-lg shadow-lg border min-w-[600px]">
          <div className="mb-4">
            <label className="text-sm font-medium text-gray-700">Presets</label>
            <div className="mt-1 flex flex-wrap gap-2">
              {presets.map((preset) => (
                <button
                  key={preset.value}
                  onClick={() => {
                    onChange?.(preset.dateRange)
                    setIsOpen(false)
                  }}
                  className="px-3 py-1 text-sm rounded-md bg-gray-100 hover:bg-gray-200"
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex gap-4">
            <Calendar
              selected={value}
              onSelect={handleSelect}
              month={month1}
              onMonthChange={setMonth1}
            />
            <Calendar
              selected={value}
              onSelect={handleSelect}
              month={month2}
              onMonthChange={setMonth2}
            />
          </div>

          {value?.from && value?.to && (
            <div className="mt-4 pt-4 border-t">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Start Date
                  </label>
                  <input
                    type="date"
                    value={format(value.from, 'yyyy-MM-dd')}
                    onChange={(e) => {
                      const date = new Date(e.target.value)
                      onChange?.({ ...value, from: date })
                    }}
                    className="mt-1 block w-full px-3 py-2 text-sm border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    End Date
                  </label>
                  <input
                    type="date"
                    value={format(value.to, 'yyyy-MM-dd')}
                    onChange={(e) => {
                      const date = new Date(e.target.value)
                      onChange?.({ ...value, to: date })
                    }}
                    className="mt-1 block w-full px-3 py-2 text-sm border rounded-md"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// Example usage
export default function DateRangePickerDemo() {
  const [dateRange, setDateRange] = React.useState<DateRange>()

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-md mx-auto space-y-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Date Range Picker</h1>
          <p className="text-sm text-gray-500">Select a date range or choose from presets</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
          <DateRangePicker
            value={dateRange}
            onChange={setDateRange}
          />
          
          {dateRange && (
            <div className="pt-4 border-t">
              <h2 className="text-sm font-medium text-gray-900">Selected Range:</h2>
              <p className="mt-1 text-sm text-gray-500">
                {format(dateRange.from, 'PPP')} - {dateRange.to ? format(dateRange.to, 'PPP') : 'Present'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

