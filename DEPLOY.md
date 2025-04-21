# Configuração do Vercel para deploy da aplicação

## Pré-requisitos

Para realizar o deploy desta aplicação na Vercel, você precisará:

1. Uma conta na [Vercel](https://vercel.com)
2. Uma conta no [GitHub](https://github.com) (opcional, para CI/CD)
3. Acesso ao código-fonte da aplicação

## Passos para Deploy

### 1. Preparação do Projeto

O projeto já está configurado para deploy na Vercel com os seguintes arquivos:

- `vercel.json` - Configurações específicas da Vercel
- `next.config.js` - Configurações do Next.js
- `.env.production` - Variáveis de ambiente para produção
- `.github/workflows/deploy.yml` - Configuração de CI/CD (opcional)

### 2. Deploy Manual

Para realizar o deploy manualmente:

1. Faça login na sua conta Vercel
2. Clique em "New Project"
3. Importe o repositório do GitHub ou faça upload do código
4. Configure as variáveis de ambiente conforme o arquivo `.env.production`
5. Clique em "Deploy"

### 3. Deploy Automatizado (CI/CD)

Para configurar o deploy automatizado com GitHub Actions:

1. Faça push do código para um repositório GitHub
2. Configure os seguintes secrets no repositório:
   - `VERCEL_TOKEN` - Token de API da Vercel
   - `VERCEL_ORG_ID` - ID da organização na Vercel
   - `VERCEL_PROJECT_ID` - ID do projeto na Vercel
3. O workflow configurado em `.github/workflows/deploy.yml` irá automaticamente:
   - Executar testes
   - Verificar a qualidade do código
   - Realizar o deploy na Vercel quando houver push na branch main

### 4. Configuração de Domínio Personalizado

Para configurar um domínio personalizado:

1. No dashboard da Vercel, acesse o projeto
2. Vá para a aba "Settings" > "Domains"
3. Adicione seu domínio personalizado
4. Siga as instruções para configurar os registros DNS

## Monitoramento e Logs

Após o deploy, você pode monitorar a aplicação através do dashboard da Vercel:

1. Acesse o projeto no dashboard da Vercel
2. Vá para a aba "Analytics" para ver métricas de desempenho
3. Vá para a aba "Logs" para ver logs de execução

## Rollback

Se necessário, você pode fazer rollback para uma versão anterior:

1. Acesse o projeto no dashboard da Vercel
2. Vá para a aba "Deployments"
3. Encontre a versão desejada e clique em "..." > "Promote to Production"
