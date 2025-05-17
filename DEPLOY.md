# Gerador de Contratos - Documentação para Deploy

## Visão Geral
Este projeto é um gerador de contratos online que permite aos usuários selecionar entre diversos modelos de contratos, preencher informações personalizadas, adicionar uma marca d'água opcional e gerar um PDF formatado de acordo com as normas ABNT.

## Estrutura do Projeto
- `/src`: Código-fonte da aplicação Node.js/Express
- `/contratos_modelos`: Modelos de contratos em formato Markdown
- `package.json`: Dependências e scripts de inicialização

## Requisitos Técnicos
- Node.js 14.0 ou superior
- Dependências principais:
  - express: Framework web
  - multer: Processamento de upload de arquivos
  - pdf-lib: Manipulação de PDFs
  - temp: Gerenciamento de arquivos temporários

## Configuração para Produção
1. **Variáveis de Ambiente**:
   - PORT: Porta em que o servidor será executado (padrão: 3000)

2. **Diretórios Necessários**:
   - O diretório `/uploads` deve ter permissões de escrita para armazenar temporariamente as imagens de marca d'água

3. **Comando de Inicialização**:
   - `npm start` (executa `node src/app.js`)

## Plataformas de Hospedagem Recomendadas
1. **Vercel**:
   - Suporte nativo a Node.js
   - Integração com GitHub
   - Implantação automática

2. **Heroku**:
   - Suporte a Node.js
   - Escalabilidade automática
   - Fácil configuração

3. **AWS Elastic Beanstalk**:
   - Alta disponibilidade
   - Escalabilidade
   - Monitoramento integrado

## Instruções para Deploy

### Vercel
1. Instale a CLI do Vercel: `npm i -g vercel`
2. Execute `vercel login` e siga as instruções
3. No diretório do projeto, execute `vercel`
4. Siga as instruções para configurar o projeto
5. Para produção, execute `vercel --prod`

### Heroku
1. Instale a CLI do Heroku: `npm i -g heroku`
2. Execute `heroku login` e siga as instruções
3. Crie um novo app: `heroku create gerador-contratos`
4. Faça o deploy: `git push heroku main`

### AWS Elastic Beanstalk
1. Instale a CLI do EB: `pip install awsebcli`
2. Inicialize o projeto: `eb init`
3. Crie um ambiente: `eb create gerador-contratos-env`
4. Faça o deploy: `eb deploy`

## Considerações Adicionais
- Certifique-se de que a plataforma escolhida suporte a geração de PDFs
- Configure limites adequados para upload de arquivos
- Implemente monitoramento para rastrear erros em produção
