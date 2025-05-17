# Gerador de Contratos - Implantação em Render.com

Este guia descreve como implantar o Gerador de Contratos na plataforma Render.com, que oferece hospedagem gratuita para aplicações Node.js com suporte a todas as funcionalidades necessárias.

## Pré-requisitos

1. Conta no Render.com (gratuita)
2. Git instalado localmente
3. Repositório Git para o projeto (GitHub, GitLab, etc.)

## Passos para Implantação

### 1. Preparar o Projeto

O projeto já está configurado para implantação no Render.com com:
- `package.json` com scripts e dependências
- `Procfile` para definir o comando de inicialização
- Estrutura de diretórios organizada

### 2. Criar um Novo Serviço Web no Render.com

1. Faça login no Render.com
2. Clique em "New +" e selecione "Web Service"
3. Conecte seu repositório Git
4. Configure o serviço:
   - Nome: gerador-contratos
   - Runtime: Node
   - Build Command: `npm install`
   - Start Command: `node src/app.js`
   - Plano: Free

### 3. Configurar Variáveis de Ambiente

No painel do Render.com, adicione as seguintes variáveis de ambiente:
- `NODE_ENV`: production
- `PORT`: 10000 (o Render atribuirá automaticamente a porta correta)

### 4. Deploy

Clique em "Create Web Service" para iniciar o deploy.

## Monitoramento

Após o deploy, você pode monitorar o serviço no painel do Render.com:
- Logs em tempo real
- Métricas de uso
- Status do serviço

## Atualizações

Para atualizar o serviço:
1. Faça push das alterações para o repositório Git
2. O Render detectará automaticamente as mudanças e fará um novo deploy

## Limitações do Plano Gratuito

- O serviço entra em modo de suspensão após 15 minutos de inatividade
- Limitado a 750 horas de uso por mês
- 100GB de largura de banda por mês
