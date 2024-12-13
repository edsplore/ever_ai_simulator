import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import DashboardLayout from '../../layout/DashboardLayout';
import { Input } from '@mui/material';
import { ChevronDown, ChevronLeft, ChevronRight, Filter, SortAsc } from 'lucide-react';

interface Module {
  name: string;
  sims: number;
  id: string;
  assignment: string;
  score: string;
  dueDate: string;
  status: 'Ongoing' | 'Not Started' | 'Finished';
}

const modules: Module[] = [
  {
    name: "Module_name_01",
    sims: 3,
    id: "45789",
    assignment: "New Assignment",
    score: "86%",
    dueDate: "25 Dec 2024",
    status: "Ongoing"
  },
  {
    name: "Module_name_02",
    sims: 3,
    id: "45789",
    assignment: "New Assignment",
    score: "NA",
    dueDate: "25 Dec 2024",
    status: "Not Started"
  },
  {
    name: "Module_name_03",
    sims: 3,
    id: "45789",
    assignment: "New Assignment",
    score: "56%",
    dueDate: "25 Dec 2024",
    status: "Ongoing"
  },
  {
    name: "Module_name_04",
    sims: 3,
    id: "45789",
    assignment: "New Assignment",
    score: "86%",
    dueDate: "25 Dec 2024",
    status: "Finished"
  }
];

const TrainingPlanDetailsPage = () => {
  const { id } = useParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState('50');

  const filteredModules = modules.filter(module =>
    module.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    module.assignment.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardLayout>
      <main className="p-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-2xl font-semibold">
            <Link to="/training" className="text-gray-500 hover:text-gray-700">
              Training Plan
            </Link>
            <span className="text-gray-500">/</span>
            <h1>Training_plan_name 01</h1>
          </div>
        </div>

        <div className="space-y-4">
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
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Module</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">No. of Sims</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">ID No.</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Assignment</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Sim Score</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Due Date</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredModules.map((module, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3 px-4 text-sm font-medium">
                      <div className="flex items-center">
                        <ChevronDown className="mr-2 h-4 w-4" />
                        {module.name}
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm">{module.sims} Sims</td>
                    <td className="py-3 px-4 text-sm">{module.id}</td>
                    <td className="py-3 px-4 text-sm">{module.assignment}</td>
                    <td className="py-3 px-4 text-sm">
                      <span className={
                        module.score === "NA" ? "text-gray-500" :
                        parseInt(module.score) >= 80 ? "text-green-600" :
                        parseInt(module.score) >= 60 ? "text-orange-600" :
                        "text-red-600"
                      }>
                        {module.score}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm">{module.dueDate}</td>
                    <td className="py-3 px-4 text-sm">
                      <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium
                        ${module.status === 'Ongoing' ? 'bg-blue-50 text-blue-700' : 
                          module.status === 'Finished' ? 'bg-green-50 text-green-700' :
                          'bg-orange-50 text-orange-700'}`}>
                        {module.status}
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
      </main>
    </DashboardLayout>
  );
};

export default TrainingPlanDetailsPage;