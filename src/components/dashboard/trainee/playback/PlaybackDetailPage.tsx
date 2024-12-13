import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import DashboardLayout from '../../../layout/DashboardLayout';
import PlaybackHeader from './detail/PlaybackHeader';
import PlaybackChat from './detail/PlaybackChat';
import PlaybackDetails from './detail/PlaybackDetails';
import PlaybackControls from './detail/PlaybackControls';

const PlaybackDetailPage = () => {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState(true);

  return (
    <DashboardLayout>
      <main className="p-8">
        <PlaybackHeader 
          showDetails={showDetails} 
          onToggleDetails={() => setShowDetails(!showDetails)} 
        />

        <div className="flex gap-4">
          <div className="flex-1 space-y-4">
            <div className="text-center text-sm text-gray-600">
              Ringing...
            </div>

            <PlaybackChat />
            <PlaybackControls />
          </div>

          {showDetails && <PlaybackDetails />}
        </div>
      </main>
    </DashboardLayout>
  );
};

export default PlaybackDetailPage;