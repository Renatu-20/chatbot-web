import { NextRequest, NextResponse } from 'next/server';

/**
 * API route para salvar configurações do WhatsApp
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Simulação de salvamento de configurações
    // Em produção, aqui seria feita uma chamada real para o backend do chatbot
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simulação de resposta bem-sucedida
    return NextResponse.json({ 
      success: true, 
      message: 'Configurações do WhatsApp salvas com sucesso',
      config: body
    });
  } catch (error) {
    console.error('Erro ao salvar configurações do WhatsApp:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Erro interno ao processar requisição' 
    }, { status: 500 });
  }
}
