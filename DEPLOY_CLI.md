# Configuração do Vercel CLI para deploy local

## Pré-requisitos

Para realizar o deploy local usando o Vercel CLI, você precisará:

1. Node.js instalado (versão 14 ou superior)
2. npm ou yarn instalado
3. Uma conta na Vercel

## Instalação do Vercel CLI

```bash
# Instalar o Vercel CLI globalmente
npm install -g vercel
```

## Login na Vercel

```bash
# Fazer login na sua conta Vercel
vercel login
```

## Deploy Local

Para realizar o deploy a partir do seu ambiente local:

```bash
# Navegar até o diretório do projeto
cd /caminho/para/chatbot-whatsapp-web

# Realizar o deploy em ambiente de desenvolvimento
vercel

# Realizar o deploy em ambiente de produção
vercel --prod
```

## Configuração de Variáveis de Ambiente

Você pode configurar as variáveis de ambiente durante o processo de deploy ou através do comando:

```bash
# Configurar variáveis de ambiente
vercel env add NOME_DA_VARIAVEL
```

## Visualização de Logs

Para visualizar os logs da aplicação:

```bash
# Visualizar logs em tempo real
vercel logs
```

## Configuração de Domínio

Para configurar um domínio personalizado:

```bash
# Adicionar domínio personalizado
vercel domains add meu-dominio.com
```

## Integração com Repositório Git

Para configurar a integração com um repositório Git:

```bash
# Conectar com repositório Git
vercel git connect
```

Este guia complementa o arquivo DEPLOY.md principal, fornecendo instruções específicas para deploy usando o Vercel CLI.
