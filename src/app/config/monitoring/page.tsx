"use client";

import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import MonitoringConfigForm from '@/components/forms/MonitoringConfigForm';

export default function MonitoringConfig() {
  // Estado inicial para o formulário
  const initialConfig = {
    mode: 'sales' as const,
    monitorGroups: true,
    monitorPrivateChats: true,
    keywordsList: "comprar\npreço\nquanto custa\ndisponível\nestoque",
    responseDelay: 2,
    notifyVendors: true,
    autoRespond: false,
    businessHours: {
      enabled: false,
      startTime: "08:00",
      endTime: "18:00",
      workDays: [1, 2, 3, 4, 5]
    }
  };
  
  // Função para salvar as configurações
  const handleSaveConfig = (config: any) => {
    console.log('Configurações salvas:', config);
    // Em produção, aqui seria feita uma chamada à API para salvar as configurações
  };

  return (
    <DashboardLayout title="Configuração de Monitoramento" currentPath="/config/monitoring">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Configuração de Monitoramento</h1>
        <p className="text-gray-600">Configure como o chatbot deve monitorar conversas e identificar oportunidades</p>
      </div>
      
      <MonitoringConfigForm config={initialConfig} onSave={handleSaveConfig} />
      
      <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h3 className="text-lg font-medium text-yellow-800 mb-2">Importante</h3>
        <p className="text-yellow-700">
          Adicione palavras-chave específicas para seu negócio para melhorar a detecção de oportunidades. 
          Quanto mais específicas forem as palavras-chave, melhores serão os resultados.
        </p>
      </div>
    </DashboardLayout>
  );
}
