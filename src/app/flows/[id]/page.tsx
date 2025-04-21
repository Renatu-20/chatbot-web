import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import FlowBuilder from '@/components/flows/FlowBuilder';
import { FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';

export default function EditFlowPage({ params }: { params: { id: string } }) {
  // Em produção, aqui seria feita uma chamada à API para buscar os dados do fluxo
  const initialFlow = {
    name: 'Fluxo de Vendas',
    description: 'Identifica oportunidades de vendas em grupos',
    type: 'sales' as const,
    nodes: [
      {
        id: 'node-1',
        type: 'trigger' as const,
        position: { x: 100, y: 100 },
        data: {
          title: 'Início',
          content: 'Mensagem recebida'
        }
      },
      {
        id: 'node-2',
        type: 'condition' as const,
        position: { x: 100, y: 250 },
        data: {
          title: 'Verificar Intenção',
          content: 'Contém palavras-chave de compra?'
        }
      },
      {
        id: 'node-3',
        type: 'message' as const,
        position: { x: 100, y: 400 },
        data: {
          title: 'Responder',
          content: 'Olá! Identificamos seu interesse em nossos produtos.'
        }
      }
    ],
    connections: [
      {
        id: 'conn-1',
        source: 'node-1',
        target: 'node-2',
      },
      {
        id: 'conn-2',
        source: 'node-2',
        target: 'node-3',
        label: 'Sim'
      }
    ]
  };
  
  const handleSaveFlow = (flow: any) => {
    console.log('Salvar fluxo editado:', flow);
    // Em produção, aqui seria feita uma chamada à API para atualizar o fluxo
  };

  return (
    <DashboardLayout title="Editar Fluxo de Atendimento" currentPath="/flows">
      <div className="mb-6">
        <Link href="/flows" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
          <FiArrowLeft className="mr-2" size={16} />
          Voltar para Fluxos
        </Link>
        
        <h1 className="text-2xl font-bold text-gray-800">Editar Fluxo</h1>
        <p className="text-gray-600">Modifique o fluxo de atendimento existente</p>
      </div>
      
      <FlowBuilder 
        flowId={params.id} 
        initialFlow={initialFlow} 
        onSave={handleSaveFlow} 
      />
    </DashboardLayout>
  );
}
