'use client';

import React from 'react';

interface ChartSelectorProps {
  assets: string[];
  selectedAsset: string;
  onSelect: (asset: string) => void;
}

export default function ChartSelector({ assets, selectedAsset, onSelect }: ChartSelectorProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {assets.map((asset) => (
        <button
          key={asset}
          onClick={() => onSelect(asset)}
          className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
            selectedAsset === asset
              ? 'bg-blue-600 text-white'
              : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
          }`}
        >
          {asset}
        </button>
      ))}
    </div>
  );
}
