import { NextRequest, NextResponse } from 'next/server';

/**
 * API route para testar conexão com WhatsApp
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Simulação de teste de conexão com WhatsApp
    // Em produção, aqui seria feita uma chamada real para o backend do chatbot
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simulação de resposta bem-sucedida (70% de chance)
    const success = Math.random() > 0.3;
    
    if (success) {
      return NextResponse.json({ 
        success: true, 
        message: 'Conexão com WhatsApp estabelecida com sucesso' 
      });
    } else {
      return NextResponse.json({ 
        success: false, 
        message: 'Falha ao conectar com WhatsApp. Verifique suas credenciais.' 
      }, { status: 400 });
    }
  } catch (error) {
    console.error('Erro ao testar conexão com WhatsApp:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Erro interno ao processar requisição' 
    }, { status: 500 });
  }
}
