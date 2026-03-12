"use client";
import React, { useEffect, useState } from "react";

interface ProgressCircleProps {
  label: string;
  percent: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
}

export default function ProgressCircle({
  label,
  percent,
  size = 80,
  strokeWidth = 4,
  color = "#22c55e", // Tailwind green-500
}: ProgressCircleProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate on mount or update
    const timeout = setTimeout(() => setProgress(percent), 100);
    return () => clearTimeout(timeout);
  }, [percent]);

  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
          {/* Background ring */}
          <circle
            cx="18"
            cy="18"
            r={radius}
            stroke="#1e293b" // slate-800
            strokeWidth={strokeWidth}
            fill="none"
          />
          {/* Animated progress ring */}
          <circle
            cx="18"
            cy="18"
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: "stroke-dashoffset 0.5s ease" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold">
          {progress}%
        </div>
      </div>
      <p className="mt-2 text-xs text-slate-400">{label}</p>
    </div>
  );
}
