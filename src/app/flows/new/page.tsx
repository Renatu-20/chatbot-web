import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import FlowBuilder from '@/components/flows/FlowBuilder';
import { FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';

export default function NewFlowPage() {
  const handleSaveFlow = (flow: any) => {
    console.log('Salvar novo fluxo:', flow);
    // Em produção, aqui seria feita uma chamada à API para salvar o fluxo
  };

  return (
    <DashboardLayout title="Novo Fluxo de Atendimento" currentPath="/flows">
      <div className="mb-6">
        <Link href="/flows" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
          <FiArrowLeft className="mr-2" size={16} />
          Voltar para Fluxos
        </Link>
        
        <h1 className="text-2xl font-bold text-gray-800">Criar Novo Fluxo</h1>
        <p className="text-gray-600">Configure um novo fluxo de atendimento personalizado</p>
      </div>
      
      <FlowBuilder onSave={handleSaveFlow} />
    </DashboardLayout>
  );
}
