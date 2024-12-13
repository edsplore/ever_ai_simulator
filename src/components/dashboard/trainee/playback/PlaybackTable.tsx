import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Tabs, Tab } from '@mui/material';
import { Filter, SortAsc, ChevronLeft, ChevronRight } from 'lucide-react';

interface SimulationRecord {
  id: string;
  trainingPlan: string;
  module: string;
  simId: string;
  simName: string;
  simType: string;
  level: string;
  score: string;
  status: string;
}

const simulationData: SimulationRecord[] = [
  {
    id: "1",
    trainingPlan: "New Training Plan 01",
    module: "Module_name_01",
    simId: "82840",
    simName: "Humana_MS_PCP Change",
    simType: "Visual-Audio",
    level: "Lvl 02",
    score: "56%",
    status: "Finished"
  },
  {
    id: "2",
    trainingPlan: "New Training Plan 01",
    module: "Module_name_01",
    simId: "82841",
    simName: "Humana_MS_PCP Change",
    simType: "Visual-Audio",
    level: "Lvl 02",
    score: "56%",
    status: "Finished"
  },
  {
    id: "3",
    trainingPlan: "New Training Plan 01",
    module: "Module_name_01",
    simId: "82842",
    simName: "Humana_MS_PCP Change",
    simType: "Visual-Audio",
    level: "Lvl 02",
    score: "56%",
    status: "Finished"
  },
  {
    id: "4",
    trainingPlan: "New Training Plan 01",
    module: "Module_name_01",
    simId: "82843",
    simName: "Humana_MS_PCP Change",
    simType: "Visual-Audio",
    level: "Lvl 02",
    score: "56%",
    status: "Finished"
  }
];

const PlaybackTable = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState('50');

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
  };

  const handleRowClick = (id: string) => {
    navigate(`/playback/${id}`);
  };

  return (
    <div className="space-y-4">
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        sx={{
          '& .MuiTabs-indicator': {
            backgroundColor: '#0D9488',
          },
        }}
      >
        <Tab 
          label="All" 
          value="all"
          sx={{ 
            '&.Mui-selected': {
              color: '#0D9488',
            },
          }}
        />
        <Tab 
          label="Test Attempt" 
          value="test"
          sx={{ 
            '&.Mui-selected': {
              color: '#0D9488',
            },
          }}
        />
        <Tab 
          label="Practice Attempt" 
          value="practice"
          sx={{ 
            '&.Mui-selected': {
              color: '#0D9488',
            },
          }}
        />
      </Tabs>

      <div className="flex items-center justify-between">
        <Input 
          placeholder="Search" 
          className="max-w-sm"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
            <Filter className="h-4 w-4" />
          </button>
          <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
            <SortAsc className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="rounded-lg border bg-white">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-gray-50">
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Training Plan & Module</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Sim ID</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Sim Name</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Sim Type</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Level</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Sim Score</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {simulationData.map((sim) => (
              <tr 
                key={sim.id} 
                className="border-b hover:bg-gray-50 cursor-pointer transition-colors"
                onClick={() => handleRowClick(sim.id)}
              >
                <td className="py-3 px-4">
                  <div>
                    <div className="font-medium text-sm">{sim.trainingPlan}</div>
                    <div className="text-sm text-gray-600">{sim.module}</div>
                  </div>
                </td>
                <td className="py-3 px-4 text-sm">{sim.simId}</td>
                <td className="py-3 px-4 text-sm">{sim.simName}</td>
                <td className="py-3 px-4 text-sm">
                  <span className="inline-flex items-center rounded-full bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700">
                    {sim.simType}
                  </span>
                </td>
                <td className="py-3 px-4 text-sm">{sim.level}</td>
                <td className="py-3 px-4 text-sm">
                  <span className={
                    parseInt(sim.score) >= 80 ? "text-green-600" :
                    parseInt(sim.score) >= 60 ? "text-orange-600" :
                    "text-red-600"
                  }>
                    {sim.score}
                  </span>
                </td>
                <td className="py-3 px-4 text-sm">
                  <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700">
                    {sim.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Rows per page:</span>
          <select
            value={rowsPerPage}
            onChange={(e) => setRowsPerPage(e.target.value)}
            className="border rounded p-1 text-sm"
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">
            1-50 of 110
          </span>
          <div className="flex gap-1">
            <button className="p-1 border rounded hover:bg-gray-50">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button className="p-1 border rounded hover:bg-gray-50">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaybackTable;