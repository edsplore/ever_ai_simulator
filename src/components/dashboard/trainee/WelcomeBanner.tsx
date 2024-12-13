import React from 'react';
import { Button } from '@mui/material';

interface WelcomeBannerProps {
  userName: string;
}

const WelcomeBanner: React.FC<WelcomeBannerProps> = ({ userName }) => {
  return (
    <div className="rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 p-8 text-white mb-8">
      <div className="flex justify-between items-center">
        <div className="space-y-2">
          <h1 className="text-2xl font-medium">
            Hi {userName}, Welcome to<br />Humana Telesales - Operations
          </h1>
          <p className="text-teal-50 text-sm">
            Monitor Progress, Sharpen Skills, and Ace<br />Your Simulations!
          </p>
          <div className="space-x-3 mt-4">
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'white',
                color: '#0D9488',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                },
              }}
            >
              My Exercises
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: 'white',
                borderColor: 'white',
                textTransform: 'none',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              View Playback
            </Button>
          </div>
        </div>
        <div className="w-48 h-48">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=300"
            alt="Dashboard illustration"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;