"use client";

import React from 'react';
import Link from 'next/link';
import { FiHome, FiSettings, FiMessageSquare, FiDatabase, FiBarChart2, FiHelpCircle } from 'react-icons/fi';

interface SidebarProps {
  currentPath: string;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPath }) => {
  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: <FiHome size={20} /> },
    { path: '/config/whatsapp', label: 'WhatsApp', icon: <FiMessageSquare size={20} /> },
    { path: '/config/sheets', label: 'Google Sheets', icon: <FiDatabase size={20} /> },
    { path: '/config/monitoring', label: 'Monitoramento', icon: <FiBarChart2 size={20} /> },
    { path: '/config/settings', label: 'Configurações', icon: <FiSettings size={20} /> },
    { path: '/help', label: 'Ajuda', icon: <FiHelpCircle size={20} /> },
  ];

  return (
    <aside className="bg-white shadow-md w-64 min-h-screen fixed left-0 top-0">
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-xl font-bold text-blue-600">Chatbot WhatsApp</h1>
        <p className="text-sm text-gray-600">Painel de Controle</p>
      </div>
      <nav className="mt-6">
        <ul>
          {menuItems.map((item) => (
            <li key={item.path} className="mb-2">
              <Link 
                href={item.path}
                className={`flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors ${
                  currentPath === item.path ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600' : ''
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="absolute bottom-0 w-full p-4 border-t border-gray-200">
        <div className="flex items-center text-sm text-gray-500">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
          Sistema Online
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
