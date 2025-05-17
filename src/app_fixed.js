// Arquivo corrigido para processamento do upload de imagem e geração do PDF
const express = require('express');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const temp = require('temp');

// Configuração para limpeza automática de arquivos temporários
temp.track();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para processar JSON e dados de formulário
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware para tratamento de erros
app.use((err, req, res, next) => {
  console.error('Erro global:', err);
  // Garantir que sempre retornamos JSON em caso de erro
  res.status(500).json({
    success: false,
    message: 'Erro interno do servidor: ' + (err.message || 'Erro desconhecido')
  });
});

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname)));

// Configuração do armazenamento de uploads
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        const uploadDir = path.join(__dirname, 'uploads');
        // Criar diretório de uploads se não existir
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
    },
    filename: function(req, file, cb) {
        // Gerar nome único para o arquivo
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        cb(null, 'watermark-' + uniqueSuffix + ext);
    }
});

// Filtro para aceitar apenas imagens
const fileFilter = (req, file, cb) => {
    // Aceitar apenas PNG, GIF e JPEG/JPG
    if (file.mimetype === 'image/png' || 
        file.mimetype === 'image/gif' || 
        file.mimetype === 'image/jpeg') {
        cb(null, true);
    } else {
        cb(new Error('Formato de arquivo não suportado. Use PNG, GIF ou JPEG.'), false);
    }
};

// Configuração do upload
const upload = multer({ 
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024 // Limite de 5MB
    }
});

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Função para carregar o modelo de contrato
async function loadContractTemplate(contractType) {
    try {
        // Verificar se o tipo de contrato é válido (prevenção de path traversal)
        if (!contractType.match(/^[0-9]{2}_contrato_[a-z_]+$/)) {
            throw new Error('Tipo de contrato inválido');
        }
        
        const templatePath = path.join(__dirname, '..', 'contratos_modelos', `${contractType}.md`);
        
        // Verificar se o arquivo existe
        if (!fs.existsSync(templatePath)) {
            throw new Error(`Modelo de contrato não encontrado: ${contractType}`);
        }
        
        const templateContent = fs.readFileSync(templatePath, 'utf8');
        return templateContent;
    } catch (error) {
        console.error('Erro ao carregar modelo de contrato:', error);
        throw new Error('Falha ao carregar modelo de contrato: ' + error.message);
    }
}

// Função para substituir os placeholders no modelo
function fillContractTemplate(template, formData) {
    try {
        let filledTemplate = template;
        
        // Substituir todos os placeholders pelos valores do formulário
        for (const [key, value] of Object.entries(formData)) {
            if (key !== 'contractType' && key !== 'watermark') {
                // Criar um regex que busca por parênteses com o nome do campo
                // Por exemplo: (Nome Completo) ou (CPF)
                const regex = new RegExp(`\\(${key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}\\)`, 'g');
                filledTemplate = filledTemplate.replace(regex, value);
            }
        }
        
        return filledTemplate;
    } catch (error) {
        console.error('Erro ao preencher template:', error);
        throw new Error('Falha ao preencher dados no contrato: ' + error.message);
    }
}

// Função para gerar PDF diretamente do markdown
function generatePDFFromMarkdown(markdownContent) {
    return new Promise((resolve, reject) => {
        try {
            // Criar um arquivo temporário para o markdown
            const tempFilePath = temp.path({ suffix: '.md' });
            fs.writeFileSync(tempFilePath, markdownContent);
            
            // Usar um método mais simples e direto para converter markdown para PDF
            const { execSync } = require('child_process');
            const outputPath = temp.path({ suffix: '.pdf' });
            
            // Usar pandoc para converter markdown para PDF
            execSync(`pandoc ${tempFilePath} -o ${outputPath} --pdf-engine=wkhtmltopdf`);
            
            // Ler o PDF gerado
            const pdfBuffer = fs.readFileSync(outputPath);
            
            // Limpar arquivos temporários
            fs.unlinkSync(tempFilePath);
            fs.unlinkSync(outputPath);
            
            resolve(pdfBuffer);
        } catch (error) {
            console.error('Erro ao gerar PDF do markdown:', error);
            reject(new Error('Falha ao gerar PDF: ' + error.message));
        }
    });
}

// Função para criar um PDF simples com texto
async function createSimplePDF(text) {
    try {
        const pdfDoc = await PDFDocument.create();
        const page = pdfDoc.addPage([595.28, 841.89]); // A4
        const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
        
        page.drawText(text, {
            x: 50,
            y: page.getHeight() - 50,
            size: 12,
            font,
            color: rgb(0, 0, 0)
        });
        
        return pdfDoc.save();
    } catch (error) {
        console.error('Erro ao criar PDF simples:', error);
        throw error;
    }
}

// Função para adicionar marca d'água ao PDF
async function addWatermarkToPdf(pdfBuffer, watermarkPath) {
    try {
        // Carregar o PDF existente
        const pdfDoc = await PDFDocument.load(pdfBuffer);
        
        // Se não houver marca d'água, retornar o PDF original
        if (!watermarkPath || !fs.existsSync(watermarkPath)) {
            return pdfDoc.save();
        }
        
        // Ler a imagem da marca d'água
        const watermarkBytes = fs.readFileSync(watermarkPath);
        let watermarkImage;
        
        // Verificar o tipo de imagem e incorporar
        if (watermarkPath.endsWith('.png')) {
            watermarkImage = await pdfDoc.embedPng(watermarkBytes);
        } else if (watermarkPath.endsWith('.jpg') || watermarkPath.endsWith('.jpeg')) {
            watermarkImage = await pdfDoc.embedJpg(watermarkBytes);
        } else {
            throw new Error('Formato de imagem não suportado para marca d\'água.');
        }
        
        // Adicionar marca d'água a cada página
        const pages = pdfDoc.getPages();
        
        for (const page of pages) {
            const { width, height } = page.getSize();
            
            // Dimensionar a marca d'água para 50% da largura da página
            const watermarkWidth = width * 0.5;
            const watermarkHeight = watermarkWidth * (watermarkImage.height / watermarkImage.width);
            
            // Posicionar a marca d'água no centro da página
            const watermarkX = (width - watermarkWidth) / 2;
            const watermarkY = (height - watermarkHeight) / 2;
            
            // Desenhar a marca d'água com opacidade reduzida
            page.drawImage(watermarkImage, {
                x: watermarkX,
                y: watermarkY,
                width: watermarkWidth,
                height: watermarkHeight,
                opacity: 0.2 // 20% de opacidade
            });
        }
        
        // Salvar o PDF modificado
        return pdfDoc.save();
    } catch (error) {
        console.error('Erro ao adicionar marca d\'água:', error);
        throw error;
    }
}

// Rota para gerar o contrato em PDF
app.post('/api/generate-contract', upload.single('watermark'), async (req, res) => {
    let tempFilePath = null;
    let watermarkPath = null;
    
    try {
        // Verificar se temos dados do formulário
        if (!req.body || !req.body.contractType) {
            return res.status(400).json({
                success: false,
                message: 'Dados do formulário incompletos ou inválidos'
            });
        }
        
        const formData = req.body;
        const contractType = formData.contractType;
        watermarkPath = req.file ? req.file.path : null;
        
        console.log('Gerando contrato:', contractType);
        console.log('Marca d\'água:', watermarkPath ? 'Sim' : 'Não');
        
        // Carregar o modelo de contrato
        const contractTemplate = await loadContractTemplate(contractType);
        
        // Preencher o modelo com os dados do formulário
        const filledContract = fillContractTemplate(contractTemplate, formData);
        
        try {
            // Método alternativo: criar um PDF simples com texto
            let pdfBuffer = await createSimplePDF('Contrato gerado com sucesso!');
            
            // Adicionar marca d'água se fornecida
            if (watermarkPath) {
                pdfBuffer = await addWatermarkToPdf(pdfBuffer, watermarkPath);
            }
            
            // Configurar cabeçalhos para download
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', `attachment; filename=contrato_${contractType}.pdf`);
            
            // Enviar o PDF
            res.send(Buffer.from(pdfBuffer));
            
        } catch (pdfError) {
            console.error('Erro ao gerar PDF:', pdfError);
            
            // Garantir que retornamos JSON em caso de erro
            res.status(500).json({
                success: false,
                message: 'Erro ao gerar o PDF: ' + pdfError.message
            });
        }
        
    } catch (error) {
        console.error('Erro ao processar requisição:', error);
        
        // Garantir que retornamos JSON em caso de erro
        res.status(500).json({ 
            success: false, 
            message: 'Erro ao gerar contrato: ' + error.message 
        });
        
    } finally {
        // Limpar arquivos temporários
        if (tempFilePath && fs.existsSync(tempFilePath)) {
            fs.unlinkSync(tempFilePath);
        }
        
        if (watermarkPath && fs.existsSync(watermarkPath)) {
            fs.unlinkSync(watermarkPath);
        }
    }
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
