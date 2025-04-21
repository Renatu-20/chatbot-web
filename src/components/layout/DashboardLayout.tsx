"use client";

import React from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
  currentPath: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ 
  children, 
  title,
  currentPath 
}) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar currentPath={currentPath} />
      
      <div className="flex-1 ml-64">
        <Header title={title} />
        
        <main className="pt-24 px-6 pb-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
