"use client";

import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import WhatsAppConfigForm from '@/components/forms/WhatsAppConfigForm';

export default function WhatsAppConfig() {
  // Estado inicial para o formulário
  const initialConfig = {
    apiKey: '',
    phoneNumberId: '',
    businessAccountId: '',
    webhookUrl: '',
    webhookVerifyToken: '',
    autoReconnect: true
  };
  
  // Função para salvar as configurações
  const handleSaveConfig = (config: any) => {
    console.log('Configurações salvas:', config);
    // Em produção, aqui seria feita uma chamada à API para salvar as configurações
  };

  return (
    <DashboardLayout title="Configuração do WhatsApp" currentPath="/config/whatsapp">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Configuração do WhatsApp</h1>
        <p className="text-gray-600">Configure a integração com a API do WhatsApp Business</p>
      </div>
      
      <WhatsAppConfigForm config={initialConfig} onSave={handleSaveConfig} />
      
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="text-lg font-medium text-blue-800 mb-2">Dica</h3>
        <p className="text-blue-700">
          Para obter as credenciais da API do WhatsApp Business, acesse o 
          <a href="https://developers.facebook.com/docs/whatsapp/cloud-api/get-started" 
             target="_blank" 
             rel="noopener noreferrer"
             className="text-blue-600 underline ml-1">
            Portal de Desenvolvedores do Meta
          </a>.
        </p>
      </div>
    </DashboardLayout>
  );
}
