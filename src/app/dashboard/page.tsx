"use client";

import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import DashboardStats from '@/components/dashboard/DashboardStats';
import DashboardActivity from '@/components/dashboard/DashboardActivity';
import DashboardCharts from '@/components/dashboard/DashboardCharts';

export default function Dashboard() {
  return (
    <DashboardLayout title="Dashboard" currentPath="/dashboard">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600">Visão geral do seu chatbot WhatsApp</p>
      </div>
      
      <DashboardStats />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2">
          <DashboardCharts />
        </div>
        <div>
          <DashboardActivity />
        </div>
      </div>
    </DashboardLayout>
  );
}
