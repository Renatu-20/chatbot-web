"use client";

import React from 'react';
import { FiDatabase, FiKey, FiGrid, FiRefreshCw } from 'react-icons/fi';

interface GoogleSheetsConfigFormProps {
  config: {
    spreadsheetId: string;
    sheetName: string;
    credentials: string;
    productColumn: string;
    quantityColumn: string;
    priceColumn: string;
    vendorColumn: string;
  };
  onSave: (config: any) => void;
}

const GoogleSheetsConfigForm: React.FC<GoogleSheetsConfigFormProps> = ({ config, onSave }) => {
  const [formData, setFormData] = React.useState(config);
  const [loading, setLoading] = React.useState(false);
  const [testStatus, setTestStatus] = React.useState<null | 'success' | 'error'>(null);
  const [testMessage, setTestMessage] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
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
        setTestMessage('Conexão estabelecida com sucesso! Planilha encontrada e acessível.');
      } else {
        setTestStatus('error');
        setTestMessage('Falha ao conectar com o Google Sheets. Verifique suas credenciais e ID da planilha.');
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
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Configuração do Google Sheets</h2>
        <p className="text-gray-600">Configure a integração com o Google Sheets para gerenciamento de estoque e produtos.</p>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="form-group">
            <label htmlFor="spreadsheetId">ID da Planilha</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiDatabase className="text-gray-400" size={16} />
              </div>
              <input
                type="text"
                id="spreadsheetId"
                name="spreadsheetId"
                value={formData.spreadsheetId}
                onChange={handleChange}
                className="pl-10"
                placeholder="ID da planilha do Google Sheets"
                required
              />
            </div>
            <small className="text-gray-500">Encontrado na URL da planilha</small>
          </div>
          
          <div className="form-group">
            <label htmlFor="sheetName">Nome da Aba</label>
            <input
              type="text"
              id="sheetName"
              name="sheetName"
              value={formData.sheetName}
              onChange={handleChange}
              placeholder="Nome da aba (ex: Estoque)"
              required
            />
            <small className="text-gray-500">Nome da aba onde estão os dados</small>
          </div>
          
          <div className="form-group md:col-span-2">
            <label htmlFor="credentials">Credenciais JSON</label>
            <textarea
              id="credentials"
              name="credentials"
              value={formData.credentials}
              onChange={handleChange}
              rows={6}
              placeholder="Cole aqui o JSON de credenciais da API do Google"
              required
              className="font-mono text-sm"
            />
            <small className="text-gray-500">Credenciais obtidas no Google Cloud Console</small>
          </div>
          
          <div className="form-group md:col-span-2">
            <h3 className="text-lg font-medium text-gray-700 mb-3">Mapeamento de Colunas</h3>
            <p className="text-gray-600 mb-4">Defina quais colunas contêm as informações de produtos e estoque.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="form-group">
                <label htmlFor="productColumn">Coluna de Produtos</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiGrid className="text-gray-400" size={16} />
                  </div>
                  <input
                    type="text"
                    id="productColumn"
                    name="productColumn"
                    value={formData.productColumn}
                    onChange={handleChange}
                    className="pl-10"
                    placeholder="A"
                    maxLength={2}
                    required
                  />
                </div>
                <small className="text-gray-500">Ex: A</small>
              </div>
              
              <div className="form-group">
                <label htmlFor="quantityColumn">Coluna de Quantidade</label>
                <input
                  type="text"
                  id="quantityColumn"
                  name="quantityColumn"
                  value={formData.quantityColumn}
                  onChange={handleChange}
                  placeholder="B"
                  maxLength={2}
                  required
                />
                <small className="text-gray-500">Ex: B</small>
              </div>
              
              <div className="form-group">
                <label htmlFor="priceColumn">Coluna de Preço</label>
                <input
                  type="text"
                  id="priceColumn"
                  name="priceColumn"
                  value={formData.priceColumn}
                  onChange={handleChange}
                  placeholder="C"
                  maxLength={2}
                  required
                />
                <small className="text-gray-500">Ex: C</small>
              </div>
              
              <div className="form-group">
                <label htmlFor="vendorColumn">Coluna de Vendedor</label>
                <input
                  type="text"
                  id="vendorColumn"
                  name="vendorColumn"
                  value={formData.vendorColumn}
                  onChange={handleChange}
                  placeholder="D"
                  maxLength={2}
                  required
                />
                <small className="text-gray-500">Ex: D</small>
              </div>
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
              <FiDatabase className="mr-2" size={18} />
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

export default GoogleSheetsConfigForm;
