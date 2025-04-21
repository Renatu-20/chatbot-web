"use client";

import React from 'react';
import { FiMessageSquare, FiAlertCircle, FiTrendingUp, FiCalendar } from 'react-icons/fi';

interface RecentActivityProps {
  activities: {
    id: string;
    type: 'message' | 'opportunity' | 'alert' | 'conversion';
    content: string;
    source: string;
    time: string;
  }[];
}

const ActivityIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'message':
      return <div className="p-2 rounded-full bg-blue-50 text-blue-600"><FiMessageSquare size={16} /></div>;
    case 'opportunity':
      return <div className="p-2 rounded-full bg-yellow-50 text-yellow-600"><FiAlertCircle size={16} /></div>;
    case 'alert':
      return <div className="p-2 rounded-full bg-red-50 text-red-600"><FiAlertCircle size={16} /></div>;
    case 'conversion':
      return <div className="p-2 rounded-full bg-green-50 text-green-600"><FiTrendingUp size={16} /></div>;
    default:
      return <div className="p-2 rounded-full bg-gray-50 text-gray-600"><FiCalendar size={16} /></div>;
  }
};

const RecentActivity: React.FC<RecentActivityProps> = ({ activities }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium text-gray-800">Atividades Recentes</h3>
        <button className="text-sm text-blue-600 hover:text-blue-800">Ver todas</button>
      </div>
      
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start">
            <ActivityIcon type={activity.type} />
            
            <div className="ml-4 flex-1">
              <p className="text-sm text-gray-800">{activity.content}</p>
              <div className="flex items-center mt-1">
                <span className="text-xs text-gray-500">{activity.source}</span>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-xs text-gray-500">{activity.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {activities.length === 0 && (
        <div className="text-center py-6">
          <p className="text-gray-500">Nenhuma atividade recente</p>
        </div>
      )}
    </div>
  );
};

const DashboardActivity: React.FC = () => {
  // Dados de exemplo
  const recentActivities = [
    {
      id: '1',
      type: 'opportunity',
      content: 'Nova oportunidade detectada: "Preciso de informações sobre o modelo X"',
      source: 'Grupo: Carros e Ofertas',
      time: '5 minutos atrás'
    },
    {
      id: '2',
      type: 'alert',
      content: 'Alerta enviado para vendedor Carlos sobre cliente interessado',
      source: 'Sistema',
      time: '12 minutos atrás'
    },
    {
      id: '3',
      type: 'message',
      content: 'Mensagem processada com palavras-chave: "preço", "disponível"',
      source: 'Chat privado',
      time: '25 minutos atrás'
    },
    {
      id: '4',
      type: 'conversion',
      content: 'Venda concluída: Produto XYZ para cliente João Silva',
      source: 'Vendedor: Maria Oliveira',
      time: '1 hora atrás'
    },
    {
      id: '5',
      type: 'message',
      content: 'Mensagem processada com palavras-chave: "comprar", "entrega"',
      source: 'Grupo: Ofertas do Dia',
      time: '2 horas atrás'
    }
  ];

  return <RecentActivity activities={recentActivities} />;
};

export default DashboardActivity;
