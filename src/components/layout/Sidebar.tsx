import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { BarChart3, BookOpen, PlayCircle, HelpCircle, Headphones } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: '/dashboard', icon: BarChart3, label: 'Dashboard' },
    { path: '/training', icon: BookOpen, label: 'Training plan' },
    { path: '/playback', icon: PlayCircle, label: 'Playback' },
    { path: '/support', icon: HelpCircle, label: 'Help & Support' },
  ];

  return (
    <div className="w-64 border-r bg-white h-screen">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <Link to="/dashboard" className="flex items-center space-x-2">
            <div className="bg-teal-500 rounded p-1">
              <Headphones className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-xl font-bold">Simulator</h2>
          </Link>
        </div>
        <nav className="space-y-1 px-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                  isActive(item.path)
                    ? 'bg-teal-50 text-teal-600'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;