'use client';

import React from 'react';

interface TimeframeSelectorProps {
  timeframes: string[];
  selectedTimeframe: string;
  onSelect: (timeframe: string) => void;
}

export default function TimeframeSelector({
  timeframes,
  selectedTimeframe,
  onSelect,
}: TimeframeSelectorProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {timeframes.map((timeframe) => (
        <button
          key={timeframe}
          onClick={() => onSelect(timeframe)}
          className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
            selectedTimeframe === timeframe
              ? 'bg-blue-600 text-white'
              : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
          }`}
        >
          {timeframe}
        </button>
      ))}
    </div>
  );
}
