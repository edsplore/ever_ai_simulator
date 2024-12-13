import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

interface PlaybackHeaderProps {
  showDetails: boolean;
  onToggleDetails: () => void;
}

const PlaybackHeader: React.FC<PlaybackHeaderProps> = ({ showDetails, onToggleDetails }) => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-2">
        <Link to="/playback" className="text-2xl font-semibold text-gray-500 hover:text-gray-700">
          Playback
        </Link>
        <span className="text-2xl text-gray-500">/</span>
        <h1 className="text-2xl font-semibold">Humana_MS_PCP Change</h1>
      </div>
      <Button
        variant="text"
        onClick={onToggleDetails}
        sx={{ color: '#2563EB' }}
      >
        {showDetails ? 'Hide Details' : 'Show Details'}
      </Button>
    </div>
  );
};

export default PlaybackHeader;