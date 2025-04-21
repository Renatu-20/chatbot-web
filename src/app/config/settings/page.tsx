"use client";

import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { FiSettings, FiSave, FiRefreshCw } from 'react-icons/fi';

export default function Settings() {
  const [loading, setLoading] = React.useState(false);
  const [saveStatus, setSaveStatus] = React.useState<null | 'success' | 'error'>(null);
  
  const handleSaveSettings = async () => {
    setLoading(true);
    setSaveStatus(null);
    
    try {
      // Simulação de salvamento
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSaveStatus('success');
    } catch (error) {
      setSaveStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout title="Configurações Gerais" currentPath="/config/settings">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Configurações Gerais</h1>
        <p className="text-gray-600">Configure as preferências gerais do sistema</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Preferências do Sistema</h2>
          <p className="text-gray-600">Ajuste as configurações gerais do chatbot</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="form-group">
            <label htmlFor="systemName">Nome do Sistema</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSettings className="text-gray-400" size={16} />
              </div>
              <input
                type="text"
                id="systemName"
                name="systemName"
                defaultValue="Chatbot WhatsApp"
                className="pl-10"
                placeholder="Nome do sistema"
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="language">Idioma</label>
            <select
              id="language"
              name="language"
              defaultValue="pt-BR"
            >
              <option value="pt-BR">Português (Brasil)</option>
              <option value="en-US">English (United States)</option>
              <option value="es">Español</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="timezone">Fuso Horário</label>
            <select
              id="timezone"
              name="timezone"
              defaultValue="America/Sao_Paulo"
            >
              <option value="America/Sao_Paulo">Brasília (GMT-3)</option>
              <option value="America/Manaus">Manaus (GMT-4)</option>
              <option value="America/New_York">New York (GMT-4)</option>
              <option value="Europe/London">London (GMT+1)</option>
              <option value="Europe/Paris">Paris (GMT+2)</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="dateFormat">Formato de Data</label>
            <select
              id="dateFormat"
              name="dateFormat"
              defaultValue="DD/MM/YYYY"
            >
              <option value="DD/MM/YYYY">DD/MM/YYYY</option>
              <option value="MM/DD/YYYY">MM/DD/YYYY</option>
              <option value="YYYY-MM-DD">YYYY-MM-DD</option>
            </select>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-700 mb-3">Notificações</h3>
          
          <div className="space-y-3">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="emailNotifications"
                name="emailNotifications"
                defaultChecked
                className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor="emailNotifications" className="ml-2 block text-sm text-gray-700">
                Receber notificações por e-mail
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="browserNotifications"
                name="browserNotifications"
                defaultChecked
                className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor="browserNotifications" className="ml-2 block text-sm text-gray-700">
                Receber notificações no navegador
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="soundAlerts"
                name="soundAlerts"
                defaultChecked
                className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor="soundAlerts" className="ml-2 block text-sm text-gray-700">
                Alertas sonoros
              </label>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-700 mb-3">Segurança</h3>
          
          <div className="space-y-3">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="twoFactorAuth"
                name="twoFactorAuth"
                className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor="twoFactorAuth" className="ml-2 block text-sm text-gray-700">
                Ativar autenticação de dois fatores
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="sessionTimeout"
                name="sessionTimeout"
                defaultChecked
                className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor="sessionTimeout" className="ml-2 block text-sm text-gray-700">
                Encerrar sessão após 30 minutos de inatividade
              </label>
            </div>
          </div>
        </div>
        
        {saveStatus && (
          <div className={`p-4 mb-6 rounded-md ${saveStatus === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
            <p>
              {saveStatus === 'success' 
                ? 'Configurações salvas com sucesso!' 
                : 'Erro ao salvar configurações. Tente novamente.'}
            </p>
          </div>
        )}
        
        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleSaveSettings}
            disabled={loading}
            className="btn-primary flex items-center"
          >
            {loading ? (
              <>
                <FiRefreshCw className="animate-spin mr-2" size={18} />
                Salvando...
              </>
            ) : (
              <>
                <FiSave className="mr-2" size={18} />
                Salvar Configurações
              </>
            )}
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
