import { NextRequest, NextResponse } from 'next/server';

/**
 * API route para obter atividades recentes
 */
export async function GET(request: NextRequest) {
  try {
    // Obter o parâmetro limit da URL
    const searchParams = request.nextUrl.searchParams;
    const limit = parseInt(searchParams.get('limit') || '5', 10);
    
    // Simulação de busca de atividades
    // Em produção, aqui seria feita uma chamada real para o backend do chatbot
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Dados de exemplo
    const activities = [
      {
        id: '1',
        type: 'opportunity',
        message: 'Nova oportunidade de venda detectada',
        group: 'Grupo Vendas Diretas',
        contact: '+5511987654321',
        timestamp: '2025-04-21T17:45:23Z'
      },
      {
        id: '2',
        type: 'alert',
        message: 'Alerta enviado para vendedor',
        contact: 'João Silva',
        product: 'Smartphone XYZ',
        timestamp: '2025-04-21T17:46:10Z'
      },
      {
        id: '3',
        type: 'config',
        message: 'Configurações de monitoramento atualizadas',
        user: 'admin@empresa.com',
        timestamp: '2025-04-21T16:30:45Z'
      },
      {
        id: '4',
        type: 'flow',
        message: 'Fluxo "Atendimento Concessionária" ativado',
        user: 'admin@empresa.com',
        timestamp: '2025-04-21T15:20:12Z'
      },
      {
        id: '5',
        type: 'opportunity',
        message: 'Nova oportunidade de venda detectada',
        group: 'Grupo Ofertas Especiais',
        contact: '+5511912345678',
        timestamp: '2025-04-21T14:55:37Z'
      },
      {
        id: '6',
        type: 'alert',
        message: 'Alerta enviado para vendedor',
        contact: 'Maria Oliveira',
        product: 'Notebook ABC',
        timestamp: '2025-04-21T14:56:20Z'
      },
      {
        id: '7',
        type: 'system',
        message: 'Sistema reiniciado',
        user: 'system',
        timestamp: '2025-04-21T12:00:00Z'
      }
    ];
    
    // Retorna apenas o número de atividades solicitado
    const limitedActivities = activities.slice(0, limit);
    
    return NextResponse.json({ 
      success: true, 
      activities: limitedActivities
    });
  } catch (error) {
    console.error('Erro ao obter atividades recentes:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Erro interno ao processar requisição' 
    }, { status: 500 });
  }
}
