# Manual do Usuário - Chatbot WhatsApp Web

## Introdução

Bem-vindo ao Manual do Usuário do Chatbot WhatsApp Web! Esta aplicação permite configurar e gerenciar um chatbot para WhatsApp que monitora conversas em grupos, identifica oportunidades de vendas e envia alertas para vendedores, tudo através de uma interface web intuitiva e acessível de qualquer dispositivo.

## Índice

1. [Primeiros Passos](#1-primeiros-passos)
2. [Dashboard](#2-dashboard)
3. [Configuração do WhatsApp](#3-configuração-do-whatsapp)
4. [Configuração do Google Sheets](#4-configuração-do-google-sheets)
5. [Monitoramento de Conversas](#5-monitoramento-de-conversas)
6. [Fluxos de Atendimento](#6-fluxos-de-atendimento)
7. [Configurações Gerais](#7-configurações-gerais)
8. [Solução de Problemas](#8-solução-de-problemas)

## 1. Primeiros Passos

### 1.1 Acessando a Aplicação

Acesse a aplicação através do URL fornecido após o deploy (por exemplo, https://chatbot-whatsapp.vercel.app). Na primeira vez, você precisará criar uma conta de administrador.

### 1.2 Criando uma Conta

1. Clique em "Criar Conta" na tela inicial
2. Preencha seu nome, e-mail e senha
3. Clique em "Registrar"

### 1.3 Fazendo Login

1. Digite seu e-mail e senha
2. Clique em "Entrar"

### 1.4 Visão Geral da Interface

Após o login, você verá a interface principal com:
- Menu lateral para navegação
- Área principal de conteúdo
- Barra superior com notificações e perfil

## 2. Dashboard

O Dashboard é a página inicial que mostra uma visão geral do desempenho do chatbot.

### 2.1 Estatísticas

Aqui você encontra:
- Total de mensagens processadas
- Número de grupos monitorados
- Oportunidades detectadas
- Taxa de conversão

### 2.2 Gráficos

Os gráficos mostram:
- Mensagens por dia
- Oportunidades por categoria
- Tempo médio de resposta

### 2.3 Atividades Recentes

Lista as atividades mais recentes do chatbot, como:
- Oportunidades detectadas
- Alertas enviados
- Alterações de configuração

## 3. Configuração do WhatsApp

Esta seção permite configurar a integração com o WhatsApp Business API.

### 3.1 Requisitos

Para integrar com o WhatsApp, você precisará:
- Conta no WhatsApp Business API
- Token de acesso
- Número de telefone verificado

### 3.2 Configurando a Integração

1. Acesse "Configuração > WhatsApp"
2. Preencha os campos:
   - Token de Acesso
   - ID da Conta
   - Número de Telefone
   - Versão da API
3. Clique em "Testar Conexão" para verificar
4. Clique em "Salvar" para confirmar

## 4. Configuração do Google Sheets

Esta seção permite configurar a integração com o Google Sheets para consulta de estoque.

### 4.1 Requisitos

Para integrar com o Google Sheets, você precisará:
- Conta no Google Cloud Platform
- Credenciais de API (arquivo JSON)
- ID da planilha de estoque

### 4.2 Configurando a Integração

1. Acesse "Configuração > Google Sheets"
2. Faça upload do arquivo de credenciais JSON
3. Preencha o ID da planilha
4. Configure o nome da aba e o intervalo de células
5. Clique em "Testar Conexão" para verificar
6. Clique em "Salvar" para confirmar

## 5. Monitoramento de Conversas

Esta seção permite configurar como o chatbot monitora as conversas em grupos.

### 5.1 Configurando Grupos

1. Acesse "Configuração > Monitoramento"
2. Na aba "Grupos", adicione os grupos a serem monitorados
3. Para cada grupo, defina:
   - Nome do grupo
   - Prioridade (Alta, Média, Baixa)
   - Categorias de produtos associadas

### 5.2 Configurando Palavras-chave

1. Na aba "Palavras-chave", adicione as palavras que indicam interesse
2. Agrupe as palavras por categoria (ex: Vendas, Suporte, Informações)
3. Defina o peso de cada palavra para o algoritmo de detecção

### 5.3 Configurando Horários

1. Na aba "Horários", defina quando o monitoramento deve ocorrer
2. Você pode configurar:
   - Dias da semana
   - Horário de início e fim
   - Pausas programadas

## 6. Fluxos de Atendimento

Esta seção permite criar e gerenciar fluxos de atendimento personalizados.

### 6.1 Visão Geral dos Fluxos

1. Acesse "Fluxos"
2. Veja a lista de fluxos existentes com status (ativo/inativo)
3. Clique em um fluxo para editar ou em "Novo Fluxo" para criar

### 6.2 Criando um Novo Fluxo

1. Clique em "Novo Fluxo"
2. Defina:
   - Nome do fluxo
   - Descrição
   - Tipo (Vendas, Suporte, Concessionária, etc.)
3. Clique em "Criar" para abrir o editor de fluxos

### 6.3 Usando o Editor de Fluxos

O editor de fluxos permite criar visualmente o comportamento do chatbot:

1. Arraste componentes do painel lateral para a área de trabalho:
   - Gatilhos (início do fluxo)
   - Condições (tomada de decisões)
   - Mensagens (respostas do chatbot)
   - Ações (notificações, consultas, etc.)

2. Conecte os componentes para criar o fluxo:
   - Clique e arraste de um ponto de conexão para outro
   - Defina condições nas conexões quando necessário

3. Configure cada componente:
   - Clique no componente para abrir o painel de propriedades
   - Defina textos, condições, variáveis, etc.

4. Salve o fluxo clicando em "Salvar"

### 6.4 Ativando/Desativando Fluxos

1. Na lista de fluxos, use o botão de alternância para ativar/desativar
2. Apenas fluxos ativos serão executados pelo chatbot

## 7. Configurações Gerais

Esta seção permite configurar aspectos gerais do chatbot.

### 7.1 Configurações de Notificação

1. Acesse "Configuração > Configurações"
2. Na aba "Notificações", configure:
   - Canais de notificação (WhatsApp, Email, SMS)
   - Modelos de mensagem para alertas
   - Regras de encaminhamento para vendedores

### 7.2 Configurações de Sistema

1. Na aba "Sistema", configure:
   - Intervalo de verificação de mensagens
   - Limite de mensagens processadas
   - Comportamento em caso de erro
   - Logs e relatórios

### 7.3 Gerenciamento de Usuários

1. Na aba "Usuários", gerencie:
   - Contas de administradores
   - Contas de vendedores
   - Permissões de acesso

## 8. Solução de Problemas

### 8.1 Problemas Comuns

#### O chatbot não está detectando oportunidades
- Verifique se as palavras-chave estão configuradas corretamente
- Confirme se os grupos estão na lista de monitoramento
- Verifique se o chatbot está ativo no Dashboard

#### Falha na conexão com WhatsApp
- Verifique se o token de acesso está correto e não expirou
- Confirme se o número de telefone está verificado
- Verifique os logs de sistema para erros específicos

#### Falha na conexão com Google Sheets
- Verifique se as credenciais JSON são válidas
- Confirme se o ID da planilha está correto
- Verifique se a planilha tem permissões de acesso corretas

### 8.2 Suporte

Se precisar de ajuda adicional:
- Consulte a documentação completa em "Ajuda > Documentação"
- Verifique os logs de sistema em "Configuração > Logs"
- Entre em contato com o suporte através do e-mail support@chatbot-whatsapp.com
