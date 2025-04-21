import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import FlowEditor from '@/components/flows/FlowEditor';
import { FiInfo } from 'react-icons/fi';

export default function FlowsPage() {
  // Dados de exemplo para os fluxos
  const [flows, setFlows] = React.useState([
    {
      id: '1',
      name: 'Fluxo de Vendas',
      description: 'Identifica oportunidades de vendas em grupos',
      type: 'sales' as const,
      active: true
    },
    {
      id: '2',
      name: 'Atendimento ao Cliente',
      description: 'Responde dúvidas comuns e direciona para atendentes',
      type: 'support' as const,
      active: false
    },
    {
      id: '3',
      name: 'Concessionária Auto',
      description: 'Atendimento especializado para concessionárias',
      type: 'dealership' as const,
      active: false
    }
  ]);
  
  const handleCreateFlow = () => {
    console.log('Criar novo fluxo');
    // Em produção, aqui abriria um modal ou redirecionaria para uma página de criação
  };
  
  const handleEditFlow = (id: string) => {
    console.log('Editar fluxo', id);
    // Em produção, aqui abriria um modal ou redirecionaria para uma página de edição
  };
  
  const handleDeleteFlow = (id: string) => {
    console.log('Excluir fluxo', id);
    // Em produção, aqui mostraria uma confirmação antes de excluir
    setFlows(flows.filter(flow => flow.id !== id));
  };
  
  const handleToggleActive = (id: string, active: boolean) => {
    console.log('Alternar status do fluxo', id, active);
    setFlows(flows.map(flow => 
      flow.id === id ? { ...flow, active } : flow
    ));
  };

  return (
    <DashboardLayout title="Fluxos de Atendimento" currentPath="/flows">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Fluxos de Atendimento</h1>
        <p className="text-gray-600">Crie e gerencie fluxos personalizados para diferentes cenários</p>
      </div>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <div className="flex">
          <div className="flex-shrink-0">
            <FiInfo className="h-5 w-5 text-blue-600" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">Sobre os Fluxos de Atendimento</h3>
            <div className="mt-2 text-sm text-blue-700">
              <p>
                Os fluxos de atendimento permitem configurar como o chatbot deve se comportar em diferentes cenários.
                Você pode criar fluxos específicos para vendas, suporte ao cliente, concessionárias e outros casos de uso.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <FlowEditor 
        flows={flows}
        onCreateFlow={handleCreateFlow}
        onEditFlow={handleEditFlow}
        onDeleteFlow={handleDeleteFlow}
        onToggleActive={handleToggleActive}
      />
    </DashboardLayout>
  );
}
