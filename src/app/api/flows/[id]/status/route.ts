import { NextRequest, NextResponse } from 'next/server';

/**
 * API route para alterar o status (ativo/inativo) de um fluxo de atendimento
 */
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const body = await request.json();
    const { active } = body;
    
    // Validação do corpo da requisição
    if (typeof active !== 'boolean') {
      return NextResponse.json({ 
        success: false, 
        message: 'O parâmetro "active" é obrigatório e deve ser um booleano' 
      }, { status: 400 });
    }
    
    // Simulação de atualização de status
    // Em produção, aqui seria feita uma chamada real para o backend do chatbot
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Simulação de resposta bem-sucedida
    return NextResponse.json({ 
      success: true, 
      message: `Fluxo de atendimento ${active ? 'ativado' : 'desativado'} com sucesso`,
      id,
      active,
      updatedAt: new Date().toISOString()
    });
  } catch (error) {
    console.error(`Erro ao alterar status do fluxo ${params.id}:`, error);
    return NextResponse.json({ 
      success: false, 
      message: 'Erro interno ao processar requisição' 
    }, { status: 500 });
  }
}
