# Configuração para Deploy na Vercel

Este arquivo contém as configurações necessárias para realizar o deploy da aplicação na plataforma Vercel.

## Configurações de Build

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "outputDirectory": ".next"
}
```

## Variáveis de Ambiente

As seguintes variáveis de ambiente devem ser configuradas no dashboard da Vercel:

- `NEXT_PUBLIC_API_URL`: URL da API do backend do chatbot
- `NEXTAUTH_URL`: URL completa da aplicação após o deploy
- `NEXTAUTH_SECRET`: Chave secreta para autenticação
- `WHATSAPP_API_URL`: URL da API do WhatsApp Business
- `WHATSAPP_API_VERSION`: Versão da API do WhatsApp
- `GOOGLE_SHEETS_API_URL`: URL da API do Google Sheets

## Integrações

### Integração com GitHub

Para configurar a integração com GitHub e habilitar o CI/CD:

1. Conecte seu repositório GitHub ao projeto na Vercel
2. Configure os secrets necessários no repositório GitHub:
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`

### Domínio Personalizado

Para configurar um domínio personalizado:

1. Acesse as configurações do projeto na Vercel
2. Adicione seu domínio na seção "Domains"
3. Configure os registros DNS conforme as instruções

## Recursos Adicionais

Para mais informações sobre o deploy, consulte:
- [DEPLOY.md](./DEPLOY.md) - Guia completo de deploy
- [DEPLOY_CLI.md](./DEPLOY_CLI.md) - Instruções para deploy via CLI
