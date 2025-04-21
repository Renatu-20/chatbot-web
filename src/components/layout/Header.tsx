"use client";

import React from 'react';
import { FiBell, FiUser, FiLogOut } from 'react-icons/fi';

interface HeaderProps {
  title: string;
  username?: string;
}

const Header: React.FC<HeaderProps> = ({ title, username = 'Usuário' }) => {
  return (
    <header className="bg-white shadow-sm h-16 fixed top-0 right-0 left-64 z-10">
      <div className="flex items-center justify-between h-full px-6">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        
        <div className="flex items-center space-x-4">
          <button className="relative p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
            <FiBell size={20} />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium mr-2">
              {username.charAt(0).toUpperCase()}
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-gray-700">{username}</p>
              <p className="text-xs text-gray-500">Administrador</p>
            </div>
            <div className="relative group ml-2">
              <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
                <FiUser size={18} />
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20 hidden group-hover:block">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Perfil</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Configurações</a>
                <a href="#" className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                  <FiLogOut size={16} className="mr-2" />
                  Sair
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
