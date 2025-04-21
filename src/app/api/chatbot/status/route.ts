import { NextRequest, NextResponse } from 'next/server';

/**
 * API route para obter o status atual do chatbot
 */
export async function GET(request: NextRequest) {
  try {
    // Simulação de obtenção do status do chatbot
    // Em produção, aqui seria feita uma chamada real para o backend do chatbot
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Simulação de resposta com status do chatbot
    return NextResponse.json({ 
      success: true, 
      status: 'running', // ou 'stopped', 'error'
      uptime: '2 dias, 5 horas, 37 minutos',
      lastStartTime: '2025-04-19T13:03:22Z',
      connectedGroups: 15,
      activeFlows: 2,
      memoryUsage: '128MB',
      version: '1.2.3'
    });
  } catch (error) {
    console.error('Erro ao obter status do chatbot:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Erro interno ao processar requisição' 
    }, { status: 500 });
  }
}
