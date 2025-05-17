// Arquivo para processamento do upload de imagem e geração do PDF
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');

const router = express.Router();

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

// Rota para upload da marca d'água
router.post('/upload-watermark', upload.single('watermark'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ 
                success: false, 
                message: 'Nenhum arquivo enviado ou formato inválido.' 
            });
        }
        
        // Retornar o caminho do arquivo para uso posterior
        return res.status(200).json({ 
            success: true, 
            message: 'Arquivo enviado com sucesso.',
            filePath: req.file.path,
            fileName: req.file.filename
        });
    } catch (error) {
        console.error('Erro no upload:', error);
        return res.status(500).json({ 
            success: false, 
            message: 'Erro ao processar o upload: ' + error.message 
        });
    }
});

// Função para carregar o modelo de contrato
async function loadContractTemplate(contractType) {
    try {
        const templatePath = path.join(__dirname, 'contratos_modelos', `${contractType}.md`);
        const templateContent = fs.readFileSync(templatePath, 'utf8');
        return templateContent;
    } catch (error) {
        console.error('Erro ao carregar modelo de contrato:', error);
        throw new Error('Modelo de contrato não encontrado.');
    }
}

// Função para substituir os placeholders no modelo
function fillContractTemplate(template, formData) {
    let filledTemplate = template;
    
    // Substituir todos os placeholders pelos valores do formulário
    for (const [key, value] of Object.entries(formData)) {
        if (key !== 'contractType' && key !== 'watermark') {
            const placeholder = new RegExp(`\\(${key}\\)`, 'g');
            filledTemplate = filledTemplate.replace(placeholder, value);
        }
    }
    
    return filledTemplate;
}

// Função para converter Markdown para PDF com marca d'água
async function generatePDF(markdownContent, watermarkPath = null) {
    try {
        // Criar um novo documento PDF
        const pdfDoc = await PDFDocument.create();
        
        // Adicionar uma página
        const page = pdfDoc.addPage([595.28, 841.89]); // A4
        
        // Configurar fonte
        const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
        const fontSize = 12;
        
        // Configurar margens e área de texto
        const margin = 50;
        const textWidth = page.getWidth() - 2 * margin;
        const lineHeight = fontSize * 1.2;
        
        // Converter markdown para texto simples (implementação básica)
        // Em uma implementação real, usaríamos uma biblioteca de markdown para HTML e depois HTML para PDF
        const lines = markdownContent.split('\n');
        
        // Posição inicial do texto
        let y = page.getHeight() - margin;
        
        // Adicionar marca d'água se fornecida
        if (watermarkPath) {
            try {
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
                
                // Calcular dimensões para a marca d'água centralizada
                const pageWidth = page.getWidth();
                const pageHeight = page.getHeight();
                
                // Dimensionar a marca d'água para 50% da largura da página
                const watermarkWidth = pageWidth * 0.5;
                const watermarkHeight = watermarkWidth * (watermarkImage.height / watermarkImage.width);
                
                // Posicionar a marca d'água no centro da página
                const watermarkX = (pageWidth - watermarkWidth) / 2;
                const watermarkY = (pageHeight - watermarkHeight) / 2;
                
                // Desenhar a marca d'água com opacidade reduzida
                page.drawImage(watermarkImage, {
                    x: watermarkX,
                    y: watermarkY,
                    width: watermarkWidth,
                    height: watermarkHeight,
                    opacity: 0.2 // 20% de opacidade
                });
            } catch (error) {
                console.error('Erro ao adicionar marca d\'água:', error);
                // Continuar sem a marca d'água em caso de erro
            }
        }
        
        // Desenhar o texto linha por linha
        for (const line of lines) {
            // Verificar se é um título
            if (line.startsWith('#')) {
                const titleLevel = line.match(/^#+/)[0].length;
                const titleText = line.replace(/^#+\s+/, '');
                const titleFontSize = fontSize + (6 - titleLevel) * 2; // Ajustar tamanho com base no nível
                
                y -= lineHeight * 1.5; // Espaço extra antes do título
                
                page.drawText(titleText, {
                    x: margin,
                    y,
                    size: titleFontSize,
                    font,
                    color: rgb(0, 0, 0)
                });
                
                y -= titleFontSize * 1.2; // Espaço após o título
            } 
            // Verificar se é uma linha em branco
            else if (line.trim() === '') {
                y -= lineHeight;
            }
            // Texto normal
            else {
                // Quebrar linhas longas
                const words = line.split(' ');
                let currentLine = '';
                
                for (const word of words) {
                    const testLine = currentLine ? `${currentLine} ${word}` : word;
                    const textWidth = font.widthOfTextAtSize(testLine, fontSize);
                    
                    if (textWidth > page.getWidth() - 2 * margin) {
                        // Desenhar a linha atual
                        page.drawText(currentLine, {
                            x: margin,
                            y,
                            size: fontSize,
                            font,
                            color: rgb(0, 0, 0)
                        });
                        
                        y -= lineHeight;
                        currentLine = word;
                    } else {
                        currentLine = testLine;
                    }
                }
                
                // Desenhar a última linha
                if (currentLine) {
                    page.drawText(currentLine, {
                        x: margin,
                        y,
                        size: fontSize,
                        font,
                        color: rgb(0, 0, 0)
                    });
                    
                    y -= lineHeight;
                }
            }
            
            // Verificar se precisamos de uma nova página
            if (y < margin) {
                // Adicionar nova página
                const newPage = pdfDoc.addPage([595.28, 841.89]); // A4
                page = newPage;
                y = page.getHeight() - margin;
                
                // Adicionar marca d'água na nova página se fornecida
                if (watermarkPath) {
                    // Código similar ao anterior para adicionar marca d'água
                    // Omitido para brevidade
                }
            }
        }
        
        // Serializar o PDF para bytes
        const pdfBytes = await pdfDoc.save();
        
        return pdfBytes;
    } catch (error) {
        console.error('Erro ao gerar PDF:', error);
        throw new Error('Falha ao gerar o PDF: ' + error.message);
    }
}

// Rota para gerar o contrato em PDF
router.post('/generate-contract', upload.single('watermark'), async (req, res) => {
    try {
        const formData = req.body;
        const contractType = formData.contractType;
        const watermarkPath = req.file ? req.file.path : null;
        
        // Carregar o modelo de contrato
        const contractTemplate = await loadContractTemplate(contractType);
        
        // Preencher o modelo com os dados do formulário
        const filledContract = fillContractTemplate(contractTemplate, formData);
        
        // Gerar o PDF
        const pdfBytes = await generatePDF(filledContract, watermarkPath);
        
        // Configurar cabeçalhos para download
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename=contrato_${contractType}.pdf`);
        
        // Enviar o PDF
        res.send(Buffer.from(pdfBytes));
        
        // Limpar arquivos temporários
        if (watermarkPath && fs.existsSync(watermarkPath)) {
            fs.unlinkSync(watermarkPath);
        }
    } catch (error) {
        console.error('Erro ao gerar contrato:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Erro ao gerar contrato: ' + error.message 
        });
    }
});

module.exports = router;
