"use client";

import React from 'react';
import { FiActivity, FiUsers, FiMessageCircle, FiAlertCircle, FiCheckCircle } from 'react-icons/fi';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  color?: 'blue' | 'green' | 'yellow' | 'red' | 'purple';
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  icon, 
  trend,
  color = 'blue'
}) => {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600',
    green: 'bg-green-50 text-green-600',
    yellow: 'bg-yellow-50 text-yellow-600',
    red: 'bg-red-50 text-red-600',
    purple: 'bg-purple-50 text-purple-600',
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
        <div className={`p-2 rounded-full ${colorClasses[color]}`}>
          {icon}
        </div>
      </div>
      <div className="flex items-end justify-between">
        <div>
          <p className="text-2xl font-semibold text-gray-800">{value}</p>
          {trend && (
            <p className={`text-sm ${trend.isPositive ? 'text-green-600' : 'text-red-600'} flex items-center mt-1`}>
              {trend.isPositive ? '+' : ''}{trend.value}%
              <span className="ml-1">{trend.isPositive ? '↑' : '↓'}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const DashboardStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard 
        title="Mensagens Monitoradas" 
        value="1,248" 
        icon={<FiMessageCircle size={20} />}
        trend={{ value: 12, isPositive: true }}
        color="blue"
      />
      <StatCard 
        title="Oportunidades Detectadas" 
        value="64" 
        icon={<FiAlertCircle size={20} />}
        trend={{ value: 8, isPositive: true }}
        color="yellow"
      />
      <StatCard 
        title="Conversões" 
        value="28" 
        icon={<FiCheckCircle size={20} />}
        trend={{ value: 5, isPositive: true }}
        color="green"
      />
      <StatCard 
        title="Usuários Ativos" 
        value="12" 
        icon={<FiUsers size={20} />}
        color="purple"
      />
    </div>
  );
};

export default DashboardStats;
