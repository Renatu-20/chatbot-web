# README - Chatbot WhatsApp Web

## Visão Geral

O Chatbot WhatsApp Web é uma aplicação que permite configurar, gerenciar e monitorar um chatbot para WhatsApp através de uma interface web intuitiva e acessível. O sistema monitora conversas em grupos do WhatsApp, identifica oportunidades de vendas, consulta estoque em planilhas do Google Sheets e envia alertas para vendedores.

## Principais Funcionalidades

- **Interface Web Responsiva**: Acesse e configure o chatbot de qualquer dispositivo
- **Dashboard Completo**: Visualize estatísticas, gráficos e atividades recentes
- **Editor Visual de Fluxos**: Crie fluxos de atendimento personalizados sem código
- **Integração com WhatsApp Business API**: Conecte-se facilmente à API oficial
- **Integração com Google Sheets**: Consulte dados de estoque em tempo real
- **Monitoramento Inteligente**: Configure palavras-chave e grupos para monitoramento
- **Sistema de Alertas**: Notifique vendedores sobre oportunidades detectadas
- **Múltiplos Cenários de Uso**: Adaptável para vendas, atendimento, concessionárias e mais

## Tecnologias Utilizadas

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Backend**: API Routes do Next.js
- **Integração**: WhatsApp Business API, Google Sheets API
- **Deploy**: Vercel (configuração pronta para deploy)

## Documentação

A documentação completa está disponível nos seguintes arquivos:

- [Manual do Usuário](./USER_MANUAL.md) - Guia detalhado para uso da aplicação
- [Documentação de Testes](./TESTS.md) - Descrição dos testes realizados
- [Guia de Deploy](./DEPLOY.md) - Instruções para implantação em produção
- [Deploy via CLI](./DEPLOY_CLI.md) - Instruções para deploy via linha de comando
- [Configuração de Deploy](./vercel-deploy-config.md) - Resumo das configurações de deploy

## Requisitos

- Node.js 14.x ou superior
- Conta no WhatsApp Business API
- Conta no Google Cloud Platform (para Google Sheets API)
- Conta na Vercel (para deploy)

## Instalação e Execução Local

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/chatbot-whatsapp-web.git
cd chatbot-whatsapp-web
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env.local
# Edite o arquivo .env.local com suas configurações
```

4. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

5. Acesse a aplicação em http://localhost:3000

## Deploy em Produção

Para realizar o deploy em produção, siga as instruções detalhadas no [Guia de Deploy](./DEPLOY.md).

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para detalhes.

## Suporte

Para suporte, entre em contato através do e-mail support@chatbot-whatsapp.com
