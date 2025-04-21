"use client";

import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import GoogleSheetsConfigForm from '@/components/forms/GoogleSheetsConfigForm';

export default function GoogleSheetsConfig() {
  // Estado inicial para o formulário
  const initialConfig = {
    spreadsheetId: '',
    sheetName: 'Estoque',
    credentials: '',
    productColumn: 'A',
    quantityColumn: 'B',
    priceColumn: 'C',
    vendorColumn: 'D'
  };
  
  // Função para salvar as configurações
  const handleSaveConfig = (config: any) => {
    console.log('Configurações salvas:', config);
    // Em produção, aqui seria feita uma chamada à API para salvar as configurações
  };

  return (
    <DashboardLayout title="Configuração do Google Sheets" currentPath="/config/sheets">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Configuração do Google Sheets</h1>
        <p className="text-gray-600">Configure a integração com o Google Sheets para gerenciamento de estoque</p>
      </div>
      
      <GoogleSheetsConfigForm config={initialConfig} onSave={handleSaveConfig} />
      
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="text-lg font-medium text-blue-800 mb-2">Dica</h3>
        <p className="text-blue-700">
          Para obter as credenciais da API do Google Sheets, acesse o 
          <a href="https://console.cloud.google.com/apis/credentials" 
             target="_blank" 
             rel="noopener noreferrer"
             className="text-blue-600 underline ml-1">
            Google Cloud Console
          </a> 
          e crie uma chave de conta de serviço.
        </p>
      </div>
    </DashboardLayout>
  );
}
