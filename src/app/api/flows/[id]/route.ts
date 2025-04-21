import { NextRequest, NextResponse } from 'next/server';

/**
 * API route para obter, atualizar ou excluir um fluxo de atendimento específico
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    
    // Simulação de busca de fluxo específico
    // Em produção, aqui seria feita uma chamada real para o backend do chatbot
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Dados de exemplo
    const flow = {
      id,
      name: 'Fluxo de Vendas',
      description: 'Identifica oportunidades de vendas em grupos',
      type: 'sales',
      active: true,
      createdAt: '2025-04-15T10:30:00Z',
      updatedAt: '2025-04-20T14:45:00Z',
      nodes: [
        {
          id: 'node-1',
          type: 'trigger',
          position: { x: 100, y: 100 },
          data: {
            title: 'Início',
            content: 'Mensagem recebida'
          }
        },
        {
          id: 'node-2',
          type: 'condition',
          position: { x: 100, y: 250 },
          data: {
            title: 'Verificar Intenção',
            content: 'Contém palavras-chave de compra?'
          }
        },
        {
          id: 'node-3',
          type: 'message',
          position: { x: 100, y: 400 },
          data: {
            title: 'Responder',
            content: 'Olá! Identificamos seu interesse em nossos produtos.'
          }
        }
      ],
      connections: [
        {
          id: 'conn-1',
          source: 'node-1',
          target: 'node-2',
        },
        {
          id: 'conn-2',
          source: 'node-2',
          target: 'node-3',
          label: 'Sim'
        }
      ]
    };
    
    return NextResponse.json({ 
      success: true, 
      flow
    });
  } catch (error) {
    console.error(`Erro ao obter fluxo de atendimento ${params.id}:`, error);
    return NextResponse.json({ 
      success: false, 
      message: 'Erro interno ao processar requisição' 
    }, { status: 500 });
  }
}

/**
 * API route para atualizar um fluxo de atendimento
 */
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const body = await request.json();
    
    // Simulação de atualização de fluxo
    // Em produção, aqui seria feita uma chamada real para o backend do chatbot
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Simulação de resposta bem-sucedida
    return NextResponse.json({ 
      success: true, 
      message: 'Fluxo de atendimento atualizado com sucesso',
      flow: {
        ...body,
        id,
        updatedAt: new Date().toISOString()
      }
    });
  } catch (error) {
    console.error(`Erro ao atualizar fluxo de atendimento ${params.id}:`, error);
    return NextResponse.json({ 
      success: false, 
      message: 'Erro interno ao processar requisição' 
    }, { status: 500 });
  }
}

/**
 * API route para excluir um fluxo de atendimento
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    
    // Simulação de exclusão de fluxo
    // Em produção, aqui seria feita uma chamada real para o backend do chatbot
    await new Promise(resolve => setTimeout(resolve, 600));
    
    // Simulação de resposta bem-sucedida
    return NextResponse.json({ 
      success: true, 
      message: 'Fluxo de atendimento excluído com sucesso',
      id
    });
  } catch (error) {
    console.error(`Erro ao excluir fluxo de atendimento ${params.id}:`, error);
    return NextResponse.json({ 
      success: false, 
      message: 'Erro interno ao processar requisição' 
    }, { status: 500 });
  }
}
