import { NextRequest, NextResponse } from 'next/server';

/**
 * API route para obter estatísticas do dashboard
 */
export async function GET(request: NextRequest) {
  try {
    // Simulação de busca de estatísticas
    // Em produção, aqui seria feita uma chamada real para o backend do chatbot
    await new Promise(resolve => setTimeout(resolve, 600));
    
    // Dados de exemplo
    const stats = {
      totalMessages: 1248,
      totalGroups: 15,
      activeFlows: 2,
      opportunitiesDetected: 87,
      opportunitiesConverted: 32,
      conversionRate: 36.8,
      messagesPerDay: [
        { date: '2025-04-15', count: 156 },
        { date: '2025-04-16', count: 142 },
        { date: '2025-04-17', count: 189 },
        { date: '2025-04-18', count: 201 },
        { date: '2025-04-19', count: 167 },
        { date: '2025-04-20', count: 178 },
        { date: '2025-04-21', count: 215 }
      ],
      opportunitiesByCategory: [
        { category: 'Vendas', count: 45 },
        { category: 'Informações', count: 23 },
        { category: 'Suporte', count: 19 }
      ],
      responseTime: {
        average: 2.4,
        min: 0.5,
        max: 8.2
      }
    };
    
    return NextResponse.json({ 
      success: true, 
      stats
    });
  } catch (error) {
    console.error('Erro ao obter estatísticas do dashboard:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Erro interno ao processar requisição' 
    }, { status: 500 });
  }
}
