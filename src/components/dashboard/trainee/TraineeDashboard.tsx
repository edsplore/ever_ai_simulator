import React from 'react';
import { useAuth } from '../../../context/AuthContext';
import DashboardLayout from '../../layout/DashboardLayout';
import WelcomeBanner from './WelcomeBanner';
import StatsGrid from './StatsGrid';
import TrainingPlanTable from './TrainingPlanTable';

const TraineeDashboard = () => {
  const { user } = useAuth();

  return (
    <DashboardLayout>
      <main className="p-8">
        <WelcomeBanner userName={user?.name || ''} />
        <StatsGrid />
        <TrainingPlanTable />
      </main>
    </DashboardLayout>
  );
};

export default TraineeDashboard;