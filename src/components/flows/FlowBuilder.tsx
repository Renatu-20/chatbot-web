import React from 'react';
import { FiMessageSquare, FiArrowRight, FiPlus, FiTrash2 } from 'react-icons/fi';

interface FlowBuilderProps {
  flowId?: string;
  initialFlow?: {
    name: string;
    description: string;
    type: 'sales' | 'support' | 'dealership' | 'custom';
    nodes: FlowNode[];
    connections: FlowConnection[];
  };
  onSave: (flow: any) => void;
}

interface FlowNode {
  id: string;
  type: 'trigger' | 'condition' | 'message' | 'action';
  position: { x: number; y: number };
  data: {
    title: string;
    content: string;
    [key: string]: any;
  };
}

interface FlowConnection {
  id: string;
  source: string;
  target: string;
  label?: string;
}

const FlowBuilder: React.FC<FlowBuilderProps> = ({ flowId, initialFlow, onSave }) => {
  const [flow, setFlow] = React.useState(initialFlow || {
    name: '',
    description: '',
    type: 'custom' as const,
    nodes: [],
    connections: []
  });
  
  const [loading, setLoading] = React.useState(false);
  const [saveStatus, setSaveStatus] = React.useState<null | 'success' | 'error'>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFlow({
      ...flow,
      [name]: value
    });
  };
  
  const handleAddNode = (type: 'trigger' | 'condition' | 'message' | 'action') => {
    const newNode: FlowNode = {
      id: `node-${Date.now()}`,
      type,
      position: { x: 100, y: 100 + flow.nodes.length * 100 },
      data: {
        title: type === 'trigger' ? 'Início' : 
               type === 'condition' ? 'Condição' : 
               type === 'message' ? 'Mensagem' : 'Ação',
        content: ''
      }
    };
    
    setFlow({
      ...flow,
      nodes: [...flow.nodes, newNode]
    });
  };
  
  const handleRemoveNode = (nodeId: string) => {
    setFlow({
      ...flow,
      nodes: flow.nodes.filter(node => node.id !== nodeId),
      connections: flow.connections.filter(
        conn => conn.source !== nodeId && conn.target !== nodeId
      )
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSaveStatus(null);
    
    try {
      // Simulação de salvamento
      await new Promise(resolve => setTimeout(resolve, 1500));
      onSave(flow);
      setSaveStatus('success');
    } catch (error) {
      setSaveStatus('error');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {flowId ? 'Editar Fluxo' : 'Novo Fluxo'}
        </h2>
        <p className="text-gray-600">Configure o comportamento do chatbot para este fluxo</p>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="form-group">
            <label htmlFor="name">Nome do Fluxo</label>
            <input
              type="text"
              id="name"
              name="name"
              value={flow.name}
              onChange={handleChange}
              placeholder="Ex: Atendimento de Vendas"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="type">Tipo de Fluxo</label>
            <select
              id="type"
              name="type"
              value={flow.type}
              onChange={handleChange}
              required
            >
              <option value="sales">Vendas</option>
              <option value="support">Suporte ao Cliente</option>
              <option value="dealership">Concessionária</option>
              <option value="custom">Personalizado</option>
            </select>
          </div>
          
          <div className="form-group md:col-span-2">
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              name="description"
              value={flow.description}
              onChange={handleChange}
              rows={2}
              placeholder="Descreva o propósito deste fluxo"
              required
            />
          </div>
        </div>
        
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-700">Construtor de Fluxo</h3>
            <div className="flex space-x-2">
              <button
                type="button"
                onClick={() => handleAddNode('trigger')}
                className="px-3 py-2 bg-blue-100 text-blue-700 rounded-md text-sm font-medium hover:bg-blue-200"
              >
                <FiMessageSquare className="inline mr-1" size={16} />
                Gatilho
              </button>
              <button
                type="button"
                onClick={() => handleAddNode('condition')}
                className="px-3 py-2 bg-yellow-100 text-yellow-700 rounded-md text-sm font-medium hover:bg-yellow-200"
              >
                <FiArrowRight className="inline mr-1" size={16} />
                Condição
              </button>
              <button
                type="button"
                onClick={() => handleAddNode('message')}
                className="px-3 py-2 bg-green-100 text-green-700 rounded-md text-sm font-medium hover:bg-green-200"
              >
                <FiMessageSquare className="inline mr-1" size={16} />
                Mensagem
              </button>
              <button
                type="button"
                onClick={() => handleAddNode('action')}
                className="px-3 py-2 bg-purple-100 text-purple-700 rounded-md text-sm font-medium hover:bg-purple-200"
              >
                <FiPlus className="inline mr-1" size={16} />
                Ação
              </button>
            </div>
          </div>
          
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 min-h-[400px] bg-gray-50 relative">
            {flow.nodes.length === 0 ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <FiMessageSquare size={48} className="mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-700 mb-2">Fluxo Vazio</h3>
                  <p className="text-gray-500 mb-4">Adicione nós ao seu fluxo usando os botões acima</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {flow.nodes.map((node) => (
                  <div 
                    key={node.id}
                    className={`p-4 rounded-lg shadow-sm relative ${
                      node.type === 'trigger' ? 'bg-blue-50 border border-blue-200' :
                      node.type === 'condition' ? 'bg-yellow-50 border border-yellow-200' :
                      node.type === 'message' ? 'bg-green-50 border border-green-200' :
                      'bg-purple-50 border border-purple-200'
                    }`}
                    style={{
                      position: 'absolute',
                      left: `${node.position.x}px`,
                      top: `${node.position.y}px`,
                      width: '200px'
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className={`text-sm font-medium ${
                        node.type === 'trigger' ? 'text-blue-700' :
                        node.type === 'condition' ? 'text-yellow-700' :
                        node.type === 'message' ? 'text-green-700' :
                        'text-purple-700'
                      }`}>
                        {node.data.title}
                      </h4>
                      <button
                        type="button"
                        onClick={() => handleRemoveNode(node.id)}
                        className="text-gray-500 hover:text-red-500"
                      >
                        <FiTrash2 size={16} />
                      </button>
                    </div>
                    <p className="text-sm text-gray-600">
                      {node.data.content || 'Sem conteúdo'}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <p className="text-sm text-gray-500 mt-2">
            Nota: Esta é uma versão simplificada do construtor de fluxo. Em produção, seria implementado um editor visual completo com arrastar e soltar.
          </p>
        </div>
        
        {saveStatus && (
          <div className={`p-4 mb-6 rounded-md ${saveStatus === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
            <p>
              {saveStatus === 'success' 
                ? 'Fluxo salvo com sucesso!' 
                : 'Erro ao salvar fluxo. Tente novamente.'}
            </p>
          </div>
        )}
        
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="btn-primary"
          >
            {loading ? 'Salvando...' : 'Salvar Fluxo'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FlowBuilder;
