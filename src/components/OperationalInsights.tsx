'use client';

import React from 'react';
import ActivityFeed from './ActivityFeed';
import MiniCharts from './MiniCharts';

const OperationalInsights: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Activity Feed - Takes up 2 columns on large screens */}
      <div className="lg:col-span-2">
        <ActivityFeed />
      </div>

      {/* Mini Charts and Portfolio Health - Takes up 1 column on large screens */}
      <div className="space-y-2">
        <MiniCharts />
      </div>
    </div>
  );
};

export default OperationalInsights;
