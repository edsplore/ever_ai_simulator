import React from 'react';
import DashboardLayout from '../../layout/DashboardLayout';
import PlaybackHeader from './playback/PlaybackHeader';
import PlaybackStats from './playback/PlaybackStats';
import PlaybackTable from './playback/PlaybackTable';

const PlaybackPage = () => {
  return (
    <DashboardLayout>
      <main className="p-8">
        <PlaybackHeader />
        <PlaybackStats />
        <PlaybackTable />
      </main>
    </DashboardLayout>
  );
};

export default PlaybackPage;