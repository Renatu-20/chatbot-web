import { NextRequest, NextResponse } from 'next/server';

/**
 * API route para testar conexão com Google Sheets
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Simulação de teste de conexão com Google Sheets
    // Em produção, aqui seria feita uma chamada real para o backend do chatbot
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simulação de resposta bem-sucedida (70% de chance)
    const success = Math.random() > 0.3;
    
    if (success) {
      return NextResponse.json({ 
        success: true, 
        message: 'Conexão com Google Sheets estabelecida com sucesso',
        details: {
          sheetTitle: 'Estoque de Produtos',
          rowCount: 156,
          columnCount: 8
        }
      });
    } else {
      return NextResponse.json({ 
        success: false, 
        message: 'Falha ao conectar com Google Sheets. Verifique suas credenciais e ID da planilha.' 
      }, { status: 400 });
    }
  } catch (error) {
    console.error('Erro ao testar conexão com Google Sheets:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Erro interno ao processar requisição' 
    }, { status: 500 });
  }
}
