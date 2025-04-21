"use client";

import React from 'react';
import { FiBarChart2, FiPieChart, FiTrendingUp } from 'react-icons/fi';

interface ChartCardProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const ChartCard: React.FC<ChartCardProps> = ({ title, children, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-800">{title}</h3>
        {icon && (
          <div className="p-2 rounded-full bg-blue-50 text-blue-600">
            {icon}
          </div>
        )}
      </div>
      <div className="h-64">
        {children}
      </div>
    </div>
  );
};

const DashboardCharts: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
      <ChartCard title="Oportunidades por Grupo" icon={<FiPieChart size={18} />}>
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <p className="text-gray-500 mb-2">Gráfico de Oportunidades por Grupo</p>
            <p className="text-sm text-gray-400">
              Este é um placeholder para o gráfico que mostrará a distribuição de oportunidades detectadas por grupo do WhatsApp.
            </p>
          </div>
        </div>
      </ChartCard>
      
      <ChartCard title="Tendência de Conversões" icon={<FiTrendingUp size={18} />}>
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <p className="text-gray-500 mb-2">Gráfico de Tendência de Conversões</p>
            <p className="text-sm text-gray-400">
              Este é um placeholder para o gráfico que mostrará a tendência de conversões ao longo do tempo.
            </p>
          </div>
        </div>
      </ChartCard>
    </div>
  );
};

export default DashboardCharts;
