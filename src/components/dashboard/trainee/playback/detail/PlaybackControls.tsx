import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import { Play, Pause } from 'lucide-react';

const PlaybackControls = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(21);
  const totalDuration = 1614; // 26m 54s in seconds

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
      <div className="container max-w-6xl mx-auto flex items-center gap-4">
        <IconButton onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
        </IconButton>
        <div className="text-sm text-gray-600">
          {Math.floor(currentTime / 60)}:{(currentTime % 60).toString().padStart(2, '0')} / 
          {Math.floor(totalDuration / 60)}:{(totalDuration % 60).toString().padStart(2, '0')}
        </div>
        <div className="flex-1 h-2 bg-gray-200 rounded-full">
          <div
            className="h-full bg-blue-600 rounded-full"
            style={{ width: `${(currentTime / totalDuration) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default PlaybackControls;