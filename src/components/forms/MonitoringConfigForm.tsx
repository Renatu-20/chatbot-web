"use client";

import React from 'react';
import { FiMessageCircle, FiSearch, FiAlertCircle, FiRefreshCw } from 'react-icons/fi';

interface MonitoringConfigFormProps {
  config: {
    mode: 'sales' | 'support' | 'dealership' | 'custom';
    monitorGroups: boolean;
    monitorPrivateChats: boolean;
    keywordsList: string;
    responseDelay: number;
    notifyVendors: boolean;
    autoRespond: boolean;
    businessHours: {
      enabled: boolean;
      startTime: string;
      endTime: string;
      workDays: number[];
    };
  };
  onSave: (config: any) => void;
}

const MonitoringConfigForm: React.FC<MonitoringConfigFormProps> = ({ config, onSave }) => {
  const [formData, setFormData] = React.useState(config);
  const [loading, setLoading] = React.useState(false);
  const [saveStatus, setSaveStatus] = React.useState<null | 'success' | 'error'>(null);
  const [saveMessage, setSaveMessage] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleBusinessHoursChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData({
      ...formData,
      businessHours: {
        ...formData.businessHours,
        [name]: type === 'checkbox' ? checked : value
      }
    });
  };

  const handleWorkDayToggle = (day: number) => {
    const workDays = [...formData.businessHours.workDays];
    const index = workDays.indexOf(day);
    
    if (index > -1) {
      workDays.splice(index, 1);
    } else {
      workDays.push(day);
      workDays.sort();
    }
    
    setFormData({
      ...formData,
      businessHours: {
        ...formData.businessHours,
        workDays
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSaveStatus(null);
    setSaveMessage('');
    
    try {
      // Simulação de salvamento
      await new Promise(resolve => setTimeout(resolve, 1000));
      onSave(formData);
      setSaveStatus('success');
      setSaveMessage('Configurações de monitoramento salvas com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar configurações:', error);
      setSaveStatus('error');
      setSaveMessage('Erro ao salvar configurações. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Configuração de Monitoramento</h2>
        <p className="text-gray-600">Configure como o chatbot deve monitorar as conversas e identificar oportunidades.</p>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="form-group">
            <label htmlFor="mode">Modo de Operação</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMessageCircle className="text-gray-400" size={16} />
              </div>
              <select
                id="mode"
                name="mode"
                value={formData.mode}
                onChange={handleChange}
                className="pl-10"
                required
              >
                <option value="sales">Vendas (identificar oportunidades)</option>
                <option value="support">Suporte ao Cliente</option>
                <option value="dealership">Concessionária Automotiva</option>
                <option value="custom">Personalizado</option>
              </select>
            </div>
            <small className="text-gray-500">Define o comportamento geral do chatbot</small>
          </div>
          
          <div className="form-group">
            <label htmlFor="responseDelay">Atraso na Resposta (segundos)</label>
            <input
              type="number"
              id="responseDelay"
              name="responseDelay"
              value={formData.responseDelay}
              onChange={handleChange}
              min="0"
              max="60"
              required
            />
            <small className="text-gray-500">Tempo de espera antes de responder (0 = imediato)</small>
          </div>
          
          <div className="form-group md:col-span-2">
            <h3 className="text-lg font-medium text-gray-700 mb-3">Configurações de Monitoramento</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    id="monitorGroups"
                    name="monitorGroups"
                    checked={formData.monitorGroups}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  />
                  <label htmlFor="monitorGroups" className="ml-2 block text-sm text-gray-700">
                    Monitorar grupos
                  </label>
                </div>
                
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    id="monitorPrivateChats"
                    name="monitorPrivateChats"
                    checked={formData.monitorPrivateChats}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  />
                  <label htmlFor="monitorPrivateChats" className="ml-2 block text-sm text-gray-700">
                    Monitorar conversas privadas
                  </label>
                </div>
                
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    id="notifyVendors"
                    name="notifyVendors"
                    checked={formData.notifyVendors}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  />
                  <label htmlFor="notifyVendors" className="ml-2 block text-sm text-gray-700">
                    Notificar vendedores
                  </label>
                </div>
                
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    id="autoRespond"
                    name="autoRespond"
                    checked={formData.autoRespond}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  />
                  <label htmlFor="autoRespond" className="ml-2 block text-sm text-gray-700">
                    Resposta automática
                  </label>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="keywordsList">Palavras-chave (uma por linha)</label>
                <div className="relative">
                  <div className="absolute top-3 left-3 text-gray-400">
                    <FiSearch size={16} />
                  </div>
                  <textarea
                    id="keywordsList"
                    name="keywordsList"
                    value={formData.keywordsList}
                    onChange={handleChange}
                    rows={6}
                    className="pl-10"
                    placeholder="comprar&#10;preço&#10;quanto custa&#10;disponível&#10;estoque"
                  />
                </div>
                <small className="text-gray-500">Lista de palavras-chave para identificar oportunidades</small>
              </div>
            </div>
          </div>
          
          <div className="form-group md:col-span-2">
            <h3 className="text-lg font-medium text-gray-700 mb-3">Horário de Funcionamento</h3>
            
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="businessHoursEnabled"
                name="enabled"
                checked={formData.businessHours.enabled}
                onChange={handleBusinessHoursChange}
                className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor="businessHoursEnabled" className="ml-2 block text-sm text-gray-700">
                Ativar horário de funcionamento
              </label>
            </div>
            
            {formData.businessHours.enabled && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="form-group">
                    <label htmlFor="startTime">Horário de início</label>
                    <input
                      type="time"
                      id="startTime"
                      name="startTime"
                      value={formData.businessHours.startTime}
                      onChange={handleBusinessHoursChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="endTime">Horário de término</label>
                    <input
                      type="time"
                      id="endTime"
                      name="endTime"
                      value={formData.businessHours.endTime}
                      onChange={handleBusinessHoursChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Dias de funcionamento</label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { day: 0, label: 'Dom' },
                      { day: 1, label: 'Seg' },
                      { day: 2, label: 'Ter' },
                      { day: 3, label: 'Qua' },
                      { day: 4, label: 'Qui' },
                      { day: 5, label: 'Sex' },
                      { day: 6, label: 'Sáb' }
                    ].map(({ day, label }) => (
                      <button
                        key={day}
                        type="button"
                        onClick={() => handleWorkDayToggle(day)}
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                          formData.businessHours.workDays.includes(day)
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {saveStatus && (
          <div className={`p-4 mb-6 rounded-md ${saveStatus === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
            <p>{saveMessage}</p>
          </div>
        )}
        
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="btn-primary flex items-center"
          >
            {loading && <FiRefreshCw className="animate-spin mr-2" size={18} />}
            {loading ? 'Salvando...' : 'Salvar Configurações'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default MonitoringConfigForm;
