import { NextRequest, NextResponse } from 'next/server';

/**
 * API route para controlar o status do chatbot (iniciar/parar)
 */
export async function POST(request: NextRequest) {
  try {
    const { action } = await request.json();
    
    if (action !== 'start' && action !== 'stop') {
      return NextResponse.json({ 
        success: false, 
        message: 'Ação inválida. Use "start" ou "stop".' 
      }, { status: 400 });
    }
    
    // Simulação de controle do chatbot
    // Em produção, aqui seria feita uma chamada real para o backend do chatbot
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simulação de resposta bem-sucedida
    return NextResponse.json({ 
      success: true, 
      message: action === 'start' ? 'Chatbot iniciado com sucesso' : 'Chatbot parado com sucesso',
      status: action === 'start' ? 'running' : 'stopped',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Erro ao controlar chatbot:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Erro interno ao processar requisição' 
    }, { status: 500 });
  }
}
