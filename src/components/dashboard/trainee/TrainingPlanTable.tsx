import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@mui/material';
import { Filter, SortAsc, ChevronLeft, ChevronRight } from 'lucide-react';

interface TrainingPlan {
  id: string;
  name: string;
  modules: string;
  time: string;
  score: string;
  dueDate: string;
  status: 'Ongoing' | 'Not Started' | 'Finished';
}

const TrainingPlanTable = () => {
  const navigate = useNavigate();
  const [rowsPerPage, setRowsPerPage] = useState('50');
  
  const trainingPlans: TrainingPlan[] = [
    {
      id: "45789",
      name: "New Training Plan 01",
      modules: "4 Modules | 12 Sims",
      time: "1h 30m",
      score: "86%",
      dueDate: "25 Dec 2024",
      status: "Ongoing"
    },
    {
      id: "45790",
      name: "New Training Plan 02",
      modules: "4 Modules | 12 Sims",
      time: "1h 30m",
      score: "NA",
      dueDate: "25 Dec 2024",
      status: "Not Started"
    },
    {
      id: "45791",
      name: "New Training Plan 03",
      modules: "4 Modules | 12 Sims",
      time: "1h 30m",
      score: "56%",
      dueDate: "25 Dec 2024",
      status: "Ongoing"
    },
    {
      id: "45792",
      name: "New Training Plan 04",
      modules: "4 Modules | 12 Sims",
      time: "1h 30m",
      score: "86%",
      dueDate: "25 Dec 2024",
      status: "Finished"
    }
  ];

  const handleRowClick = (id: string) => {
    navigate(`/training/${id}`);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Input 
          placeholder="Search" 
          className="max-w-sm"
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
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">ID No.</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Training Plan</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">No. of Modules</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Est. Time</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Score</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Due Date</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {trainingPlans.map((plan) => (
              <tr 
                key={plan.id} 
                className="border-b hover:bg-gray-50 cursor-pointer" 
                onClick={() => handleRowClick(plan.id)}
              >
                <td className="py-3 px-4 text-sm">{plan.id}</td>
                <td className="py-3 px-4 text-sm font-medium">{plan.name}</td>
                <td className="py-3 px-4 text-sm">{plan.modules}</td>
                <td className="py-3 px-4 text-sm">{plan.time}</td>
                <td className="py-3 px-4 text-sm">
                  <span className={
                    plan.score === "NA" ? "text-gray-500" :
                    parseInt(plan.score) >= 80 ? "text-green-600" :
                    parseInt(plan.score) >= 60 ? "text-orange-600" :
                    "text-red-600"
                  }>
                    {plan.score}
                  </span>
                </td>
                <td className="py-3 px-4 text-sm">{plan.dueDate}</td>
                <td className="py-3 px-4 text-sm">
                  <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium
                    ${plan.status === 'Ongoing' ? 'bg-blue-50 text-blue-700' : 
                      plan.status === 'Finished' ? 'bg-green-50 text-green-700' :
                      'bg-orange-50 text-orange-700'}`}>
                    {plan.status}
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

export default TrainingPlanTable;