import { NextRequest, NextResponse } from 'next/server';

/**
 * API route para criar um novo fluxo de atendimento
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Simulação de criação de fluxo
    // Em produção, aqui seria feita uma chamada real para o backend do chatbot
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Gera um ID único para o novo fluxo
    const newId = Date.now().toString();
    
    // Simulação de resposta bem-sucedida
    return NextResponse.json({ 
      success: true, 
      message: 'Fluxo de atendimento criado com sucesso',
      flow: {
        ...body,
        id: newId,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    });
  } catch (error) {
    console.error('Erro ao criar fluxo de atendimento:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Erro interno ao processar requisição' 
    }, { status: 500 });
  }
}
