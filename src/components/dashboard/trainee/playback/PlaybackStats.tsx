import React from 'react';
import { ClipboardList, CheckCircle, Target, Trophy } from 'lucide-react';
import StatCard from '../StatCard';

const PlaybackStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <StatCard
        title="Assigned Simulations"
        value="32"
        subtitle="7 Exercises"
        icon={<ClipboardList className="h-4 w-4 text-gray-500" />}
      />
      <StatCard
        title="Simulations Completed"
        value="18"
        subtitle="6 Exercises"
        icon={<CheckCircle className="h-4 w-4 text-gray-500" />}
      />
      <StatCard
        title="Average Score"
        value="89%"
        trend={{ value: -4, label: "vs last week" }}
        icon={<Target className="h-4 w-4 text-gray-500" />}
      />
      <StatCard
        title="Highest Score"
        value="94%"
        trend={{ value: 2, label: "vs last week" }}
        icon={<Trophy className="h-4 w-4 text-gray-500" />}
      />
    </div>
  );
};

export default PlaybackStats;