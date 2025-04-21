import axios from 'axios';

/**
 * Classe para integração com o chatbot WhatsApp
 */
class ChatbotAPI {
  private baseUrl: string;
  private apiKey: string | null;

  constructor(baseUrl: string = '/api', apiKey: string | null = null) {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
  }

  /**
   * Configura a API key para autenticação
   */
  setApiKey(apiKey: string) {
    this.apiKey = apiKey;
  }

  /**
   * Obtém os headers padrão para as requisições
   */
  private getHeaders() {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    if (this.apiKey) {
      headers['Authorization'] = `Bearer ${this.apiKey}`;
    }

    return headers;
  }

  /**
   * Testa a conexão com a API do WhatsApp
   */
  async testWhatsAppConnection(config: any) {
    try {
      const response = await axios.post(
        `${this.baseUrl}/whatsapp/test-connection`,
        config,
        { headers: this.getHeaders() }
      );
      return response.data;
    } catch (error) {
      console.error('Erro ao testar conexão com WhatsApp:', error);
      throw error;
    }
  }

  /**
   * Salva as configurações do WhatsApp
   */
  async saveWhatsAppConfig(config: any) {
    try {
      const response = await axios.post(
        `${this.baseUrl}/whatsapp/config`,
        config,
        { headers: this.getHeaders() }
      );
      return response.data;
    } catch (error) {
      console.error('Erro ao salvar configurações do WhatsApp:', error);
      throw error;
    }
  }

  /**
   * Testa a conexão com o Google Sheets
   */
  async testGoogleSheetsConnection(config: any) {
    try {
      const response = await axios.post(
        `${this.baseUrl}/sheets/test-connection`,
        config,
        { headers: this.getHeaders() }
      );
      return response.data;
    } catch (error) {
      console.error('Erro ao testar conexão com Google Sheets:', error);
      throw error;
    }
  }

  /**
   * Salva as configurações do Google Sheets
   */
  async saveGoogleSheetsConfig(config: any) {
    try {
      const response = await axios.post(
        `${this.baseUrl}/sheets/config`,
        config,
        { headers: this.getHeaders() }
      );
      return response.data;
    } catch (error) {
      console.error('Erro ao salvar configurações do Google Sheets:', error);
      throw error;
    }
  }

  /**
   * Salva as configurações de monitoramento
   */
  async saveMonitoringConfig(config: any) {
    try {
      const response = await axios.post(
        `${this.baseUrl}/monitoring/config`,
        config,
        { headers: this.getHeaders() }
      );
      return response.data;
    } catch (error) {
      console.error('Erro ao salvar configurações de monitoramento:', error);
      throw error;
    }
  }

  /**
   * Obtém a lista de fluxos de atendimento
   */
  async getFlows() {
    try {
      const response = await axios.get(
        `${this.baseUrl}/flows`,
        { headers: this.getHeaders() }
      );
      return response.data;
    } catch (error) {
      console.error('Erro ao obter fluxos de atendimento:', error);
      throw error;
    }
  }

  /**
   * Obtém um fluxo de atendimento específico
   */
  async getFlow(id: string) {
    try {
      const response = await axios.get(
        `${this.baseUrl}/flows/${id}`,
        { headers: this.getHeaders() }
      );
      return response.data;
    } catch (error) {
      console.error(`Erro ao obter fluxo de atendimento ${id}:`, error);
      throw error;
    }
  }

  /**
   * Cria um novo fluxo de atendimento
   */
  async createFlow(flow: any) {
    try {
      const response = await axios.post(
        `${this.baseUrl}/flows`,
        flow,
        { headers: this.getHeaders() }
      );
      return response.data;
    } catch (error) {
      console.error('Erro ao criar fluxo de atendimento:', error);
      throw error;
    }
  }

  /**
   * Atualiza um fluxo de atendimento existente
   */
  async updateFlow(id: string, flow: any) {
    try {
      const response = await axios.put(
        `${this.baseUrl}/flows/${id}`,
        flow,
        { headers: this.getHeaders() }
      );
      return response.data;
    } catch (error) {
      console.error(`Erro ao atualizar fluxo de atendimento ${id}:`, error);
      throw error;
    }
  }

  /**
   * Exclui um fluxo de atendimento
   */
  async deleteFlow(id: string) {
    try {
      const response = await axios.delete(
        `${this.baseUrl}/flows/${id}`,
        { headers: this.getHeaders() }
      );
      return response.data;
    } catch (error) {
      console.error(`Erro ao excluir fluxo de atendimento ${id}:`, error);
      throw error;
    }
  }

  /**
   * Ativa ou desativa um fluxo de atendimento
   */
  async toggleFlowStatus(id: string, active: boolean) {
    try {
      const response = await axios.patch(
        `${this.baseUrl}/flows/${id}/status`,
        { active },
        { headers: this.getHeaders() }
      );
      return response.data;
    } catch (error) {
      console.error(`Erro ao alterar status do fluxo ${id}:`, error);
      throw error;
    }
  }

  /**
   * Obtém estatísticas do dashboard
   */
  async getDashboardStats() {
    try {
      const response = await axios.get(
        `${this.baseUrl}/dashboard/stats`,
        { headers: this.getHeaders() }
      );
      return response.data;
    } catch (error) {
      console.error('Erro ao obter estatísticas do dashboard:', error);
      throw error;
    }
  }

  /**
   * Obtém atividades recentes
   */
  async getRecentActivities(limit: number = 5) {
    try {
      const response = await axios.get(
        `${this.baseUrl}/dashboard/activities?limit=${limit}`,
        { headers: this.getHeaders() }
      );
      return response.data;
    } catch (error) {
      console.error('Erro ao obter atividades recentes:', error);
      throw error;
    }
  }

  /**
   * Inicia o chatbot
   */
  async startChatbot() {
    try {
      const response = await axios.post(
        `${this.baseUrl}/chatbot/start`,
        {},
        { headers: this.getHeaders() }
      );
      return response.data;
    } catch (error) {
      console.error('Erro ao iniciar chatbot:', error);
      throw error;
    }
  }

  /**
   * Para o chatbot
   */
  async stopChatbot() {
    try {
      const response = await axios.post(
        `${this.baseUrl}/chatbot/stop`,
        {},
        { headers: this.getHeaders() }
      );
      return response.data;
    } catch (error) {
      console.error('Erro ao parar chatbot:', error);
      throw error;
    }
  }

  /**
   * Obtém o status do chatbot
   */
  async getChatbotStatus() {
    try {
      const response = await axios.get(
        `${this.baseUrl}/chatbot/status`,
        { headers: this.getHeaders() }
      );
      return response.data;
    } catch (error) {
      console.error('Erro ao obter status do chatbot:', error);
      throw error;
    }
  }
}

// Exporta uma instância única da API
export const chatbotAPI = new ChatbotAPI();

// Exporta a classe para casos onde múltiplas instâncias são necessárias
export default ChatbotAPI;
