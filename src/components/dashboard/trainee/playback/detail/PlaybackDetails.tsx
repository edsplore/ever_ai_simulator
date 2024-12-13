import React from 'react';
import { Card, IconButton, Button, Divider } from '@mui/material';
import { X } from 'lucide-react';

const PlaybackDetails = () => {
  return (
    <Card className="w-80 p-4 space-y-6">
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <h2 className="text-lg font-semibold">Simulation Details</h2>
          <IconButton size="small">
            <X className="h-4 w-4" />
          </IconButton>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-sm text-gray-600 mb-2">Sim Name & ID</h3>
            <p className="font-medium">Humana_MS_PCP Change</p>
            <p className="text-sm text-gray-600">82840</p>
          </div>

          <div>
            <h3 className="text-sm text-gray-600 mb-2">Completion Date</h3>
            <p className="font-medium">Dec 20, 2024</p>
            <p className="text-sm text-gray-600">12:13pm IST</p>
          </div>

          <div className="flex justify-between">
            <div>
              <h3 className="text-sm text-gray-600 mb-2">Sim Type</h3>
              <span className="inline-flex items-center rounded-full bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700">
                Visual-Audio
              </span>
            </div>
            <div>
              <h3 className="text-sm text-gray-600 mb-2">Level</h3>
              <p className="font-medium">Lvl 02</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-600 mb-2">Attempt Type</h3>
              <p className="font-medium">Test</p>
            </div>
          </div>
        </div>
      </div>

      <Divider />

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Score</h2>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-sm text-gray-600 mb-1">Sim Score</h3>
            <p className="text-xl font-semibold text-orange-600">56%</p>
          </div>
          <div>
            <h3 className="text-sm text-gray-600 mb-1">Sim Accuracy Score</h3>
            <p className="text-xl font-semibold">72%</p>
          </div>
        </div>

        <div>
          <h3 className="text-sm text-gray-600 mb-1">Completion Time</h3>
          <p className="text-xl font-semibold">26m 54s</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-sm text-gray-600 mb-1">Click Score</h3>
            <p className="text-lg font-semibold">62/70</p>
          </div>
          <div>
            <h3 className="text-sm text-gray-600 mb-1">Keyword Score</h3>
            <p className="text-lg font-semibold">4/12</p>
          </div>
        </div>

        <div>
          <h3 className="text-sm text-gray-600 mb-1">Text Field Keyword Score</h3>
          <p className="text-lg font-semibold">62/70</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-sm text-gray-600 mb-1">Confidence</h3>
            <p className="text-lg font-semibold">High</p>
            <Button variant="text" sx={{ color: '#2563EB', p: 0, minWidth: 'auto' }}>
              View Insight
            </Button>
          </div>
          <div>
            <h3 className="text-sm text-gray-600 mb-1">Concentration</h3>
            <p className="text-lg font-semibold">High</p>
            <Button variant="text" sx={{ color: '#2563EB', p: 0, minWidth: 'auto' }}>
              View Insight
            </Button>
          </div>
        </div>

        <div>
          <h3 className="text-sm text-gray-600 mb-1">Energy</h3>
          <p className="text-lg font-semibold">High</p>
        </div>
      </div>
    </Card>
  );
};

export default PlaybackDetails;