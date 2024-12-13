import React from 'react';
import { ClipboardList, CheckCircle, Target, Trophy } from 'lucide-react';
import StatCard from './StatCard';

const StatsGrid = () => {
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">My Overall Stats</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          title="Assigned Simulations"
          value="32"
          subtitle="7 Training plan"
          icon={<ClipboardList className="h-4 w-4 text-gray-500" />}
        />
        <StatCard
          title="Simulations Completed"
          value="18"
          subtitle="6 Training plan"
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
    </>
  );
};

export default StatsGrid;