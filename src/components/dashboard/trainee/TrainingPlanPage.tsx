import React from 'react';
import DashboardLayout from '../../layout/DashboardLayout';
import StatsGrid from './StatsGrid';
import TrainingPlanTable from './TrainingPlanTable';

const TrainingPlanPage = () => {
  return (
    <DashboardLayout>
      <main className="p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold mb-2">Training Plan</h1>
          <p className="text-gray-600">
            Monitor your score and progress on your assigned training plans
          </p>
        </div>

        <StatsGrid />
        <TrainingPlanTable />
      </main>
    </DashboardLayout>
  );
};

export default TrainingPlanPage;