import React from 'react';
import { FiPlus, FiEdit, FiTrash2, FiMessageSquare, FiUsers, FiArrowRight } from 'react-icons/fi';

interface FlowEditorProps {
  flows: {
    id: string;
    name: string;
    description: string;
    type: 'sales' | 'support' | 'dealership' | 'custom';
    active: boolean;
  }[];
  onCreateFlow: () => void;
  onEditFlow: (id: string) => void;
  onDeleteFlow: (id: string) => void;
  onToggleActive: (id: string, active: boolean) => void;
}

const FlowEditor: React.FC<FlowEditorProps> = ({
  flows,
  onCreateFlow,
  onEditFlow,
  onDeleteFlow,
  onToggleActive
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Fluxos de Atendimento</h2>
          <p className="text-gray-600">Crie e gerencie fluxos personalizados para diferentes cenários</p>
        </div>
        <button
          onClick={onCreateFlow}
          className="btn-primary flex items-center"
        >
          <FiPlus className="mr-2" size={18} />
          Novo Fluxo
        </button>
      </div>
      
      {flows.length === 0 ? (
        <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded-lg">
          <FiMessageSquare size={48} className="mx-auto text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-700 mb-2">Nenhum fluxo criado</h3>
          <p className="text-gray-500 mb-4">Crie seu primeiro fluxo de atendimento para começar</p>
          <button
            onClick={onCreateFlow}
            className="btn-primary inline-flex items-center"
          >
            <FiPlus className="mr-2" size={18} />
            Criar Fluxo
          </button>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nome
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tipo
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {flows.map((flow) => (
                <tr key={flow.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                        <FiMessageSquare size={20} />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{flow.name}</div>
                        <div className="text-sm text-gray-500">{flow.description}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${flow.type === 'sales' ? 'bg-green-100 text-green-800' : 
                        flow.type === 'support' ? 'bg-blue-100 text-blue-800' : 
                        flow.type === 'dealership' ? 'bg-purple-100 text-purple-800' : 
                        'bg-gray-100 text-gray-800'}`}>
                      {flow.type === 'sales' ? 'Vendas' : 
                       flow.type === 'support' ? 'Suporte' : 
                       flow.type === 'dealership' ? 'Concessionária' : 
                       'Personalizado'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <label className="inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={flow.active} 
                        onChange={(e) => onToggleActive(flow.id, e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      <span className="ms-3 text-sm font-medium text-gray-700">
                        {flow.active ? 'Ativo' : 'Inativo'}
                      </span>
                    </label>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => onEditFlow(flow.id)}
                      className="text-blue-600 hover:text-blue-900 mr-4"
                    >
                      <FiEdit size={18} />
                    </button>
                    <button
                      onClick={() => onDeleteFlow(flow.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <FiTrash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default FlowEditor;
