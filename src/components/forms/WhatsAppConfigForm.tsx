"use client";

import React from 'react';
import { FiMessageSquare, FiKey, FiServer, FiRefreshCw } from 'react-icons/fi';

interface WhatsAppConfigFormProps {
  config: {
    apiKey: string;
    phoneNumberId: string;
    businessAccountId: string;
    webhookUrl: string;
    webhookVerifyToken: string;
    autoReconnect: boolean;
  };
  onSave: (config: any) => void;
}

const WhatsAppConfigForm: React.FC<WhatsAppConfigFormProps> = ({ config, onSave }) => {
  const [formData, setFormData] = React.useState(config);
  const [loading, setLoading] = React.useState(false);
  const [testStatus, setTestStatus] = React.useState<null | 'success' | 'error'>(null);
  const [testMessage, setTestMessage] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simulação de salvamento
      await new Promise(resolve => setTimeout(resolve, 1000));
      onSave(formData);
      setTestStatus(null);
      setTestMessage('');
    } catch (error) {
      console.error('Erro ao salvar configurações:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleTestConnection = async () => {
    setLoading(true);
    setTestStatus(null);
    setTestMessage('');
    
    try {
      // Simulação de teste de conexão
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulação de sucesso (em produção, isso seria uma chamada real à API)
      const success = Math.random() > 0.3; // 70% de chance de sucesso para demonstração
      
      if (success) {
        setTestStatus('success');
        setTestMessage('Conexão estabelecida com sucesso! API do WhatsApp está respondendo corretamente.');
      } else {
        setTestStatus('error');
        setTestMessage('Falha ao conectar com a API do WhatsApp. Verifique suas credenciais e tente novamente.');
      }
    } catch (error) {
      setTestStatus('error');
      setTestMessage('Erro ao testar conexão. Verifique sua conexão com a internet e tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Configuração da API do WhatsApp</h2>
        <p className="text-gray-600">Configure as credenciais da API do WhatsApp Business para integração com o chatbot.</p>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="form-group">
            <label htmlFor="apiKey">Chave da API (API Key)</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiKey className="text-gray-400" size={16} />
              </div>
              <input
                type="text"
                id="apiKey"
                name="apiKey"
                value={formData.apiKey}
                onChange={handleChange}
                className="pl-10"
                placeholder="Insira sua chave da API"
                required
              />
            </div>
            <small className="text-gray-500">Encontrada no painel do WhatsApp Business API</small>
          </div>
          
          <div className="form-group">
            <label htmlFor="phoneNumberId">ID do Número de Telefone</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMessageSquare className="text-gray-400" size={16} />
              </div>
              <input
                type="text"
                id="phoneNumberId"
                name="phoneNumberId"
                value={formData.phoneNumberId}
                onChange={handleChange}
                className="pl-10"
                placeholder="ID do número de telefone"
                required
              />
            </div>
            <small className="text-gray-500">ID do número de telefone verificado</small>
          </div>
          
          <div className="form-group">
            <label htmlFor="businessAccountId">ID da Conta Business</label>
            <input
              type="text"
              id="businessAccountId"
              name="businessAccountId"
              value={formData.businessAccountId}
              onChange={handleChange}
              placeholder="ID da conta business"
              required
            />
            <small className="text-gray-500">ID da sua conta business no WhatsApp</small>
          </div>
          
          <div className="form-group">
            <label htmlFor="webhookVerifyToken">Token de Verificação do Webhook</label>
            <input
              type="text"
              id="webhookVerifyToken"
              name="webhookVerifyToken"
              value={formData.webhookVerifyToken}
              onChange={handleChange}
              placeholder="Token para verificação do webhook"
              required
            />
            <small className="text-gray-500">Token personalizado para verificar webhooks</small>
          </div>
          
          <div className="form-group md:col-span-2">
            <label htmlFor="webhookUrl">URL do Webhook</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiServer className="text-gray-400" size={16} />
              </div>
              <input
                type="url"
                id="webhookUrl"
                name="webhookUrl"
                value={formData.webhookUrl}
                onChange={handleChange}
                className="pl-10"
                placeholder="https://seu-dominio.com/api/webhook"
                required
              />
            </div>
            <small className="text-gray-500">URL para receber notificações do WhatsApp</small>
          </div>
          
          <div className="form-group md:col-span-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="autoReconnect"
                name="autoReconnect"
                checked={formData.autoReconnect}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor="autoReconnect" className="ml-2 block text-sm text-gray-700">
                Reconectar automaticamente em caso de desconexão
              </label>
            </div>
          </div>
        </div>
        
        {testStatus && (
          <div className={`p-4 mb-6 rounded-md ${testStatus === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
            <p>{testMessage}</p>
          </div>
        )}
        
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
          <button
            type="button"
            onClick={handleTestConnection}
            disabled={loading}
            className="btn-secondary flex items-center justify-center"
          >
            {loading ? (
              <FiRefreshCw className="animate-spin mr-2" size={18} />
            ) : (
              <FiServer className="mr-2" size={18} />
            )}
            Testar Conexão
          </button>
          
          <button
            type="submit"
            disabled={loading}
            className="btn-primary"
          >
            {loading ? 'Salvando...' : 'Salvar Configurações'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default WhatsAppConfigForm;
