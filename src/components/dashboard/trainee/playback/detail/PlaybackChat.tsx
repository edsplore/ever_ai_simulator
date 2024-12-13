import React from 'react';
import { Avatar } from '@mui/material';

interface Message {
  type: 'agent' | 'customer';
  text: string;
  scores?: {
    keywordScore: string;
    symAccuracy: string;
  };
}

const messages: Message[] = [
  {
    type: 'agent',
    text: "Thank you for calling Centerwell Pharmacy. My name is [Your Name]. Are you ready to take advantage of your Mail Order Benefits today?",
    scores: {
      keywordScore: "1/2",
      symAccuracy: "68%"
    }
  },
  {
    type: 'customer',
    text: "Hello! I want to refill my medications please."
  },
  {
    type: 'agent',
    text: "Thank you for calling Centerwell Pharmacy. My name is [Your Name]. Are you ready to take advantage of your Mail Order Benefits today?",
    scores: {
      keywordScore: "1/2",
      symAccuracy: "68%"
    }
  },
  {
    type: 'customer',
    text: "Hello! I want to refill my medications please."
  }
];

const PlaybackChat = () => {
  return (
    <div className="space-y-4">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex gap-2 ${
            message.type === 'agent' ? 'flex-row' : 'flex-row-reverse'
          }`}
        >
          {message.type === 'agent' && (
            <Avatar sx={{ width: 32, height: 32 }}>A</Avatar>
          )}
          <div
            className={`rounded-lg p-4 max-w-[80%] ${
              message.type === 'agent'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100'
            }`}
          >
            <p>{message.text}</p>
            {message.scores && (
              <div className="flex gap-4 mt-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 rounded-full bg-blue-700">
                    {message.scores.keywordScore}
                  </span>
                  <span className="text-blue-100">Keyword Score</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 rounded-full bg-blue-700">
                    {message.scores.symAccuracy}
                  </span>
                  <span className="text-blue-100">Sym Accuracy</span>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlaybackChat;