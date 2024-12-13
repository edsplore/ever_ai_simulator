import React from 'react';
import { Info } from 'lucide-react';
import { Tooltip } from '@mui/material';

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  tooltip?: string;
  icon?: React.ReactNode;
  trend?: {
    value: number;
    label: string;
  };
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  subtitle,
  tooltip,
  icon,
  trend,
}) => {
  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-600 flex items-center gap-2">
          {title}
          {tooltip && (
            <Tooltip title={tooltip}>
              <Info className="h-4 w-4 cursor-help" />
            </Tooltip>
          )}
        </h3>
        {icon}
      </div>
      <div className="mt-2 flex items-baseline gap-2">
        <h2 className="text-3xl font-semibold text-gray-900">{value}</h2>
        {subtitle && <span className="text-sm text-gray-600">{subtitle}</span>}
      </div>
      {trend && (
        <div className="mt-2">
          <span
            className={`text-sm ${
              trend.value > 0 ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {trend.value > 0 ? '↑' : '↓'} {Math.abs(trend.value)}%
          </span>
          <span className="text-sm text-gray-600 ml-1">{trend.label}</span>
        </div>
      )}
    </div>
  );
};

export default StatCard;