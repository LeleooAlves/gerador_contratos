// Script para adicionar cabeçalho e rodapé ao PDF no padrão ABNT
module.exports = {
  header: {
    height: '1cm',
    contents: function(pageNum, numPages) {
      // Não mostrar cabeçalho na primeira página
      if (pageNum === 1) return '';
      
      // Cabeçalho simples com número da página no canto superior direito
      return `<div style="text-align: right; font-size: 10pt; font-family: 'Times New Roman', Times, serif;">
                Página ${pageNum} de ${numPages}
              </div>`;
    }
  },
  
  footer: {
    height: '1cm',
    contents: function(pageNum, numPages) {
      // Rodapé com linha horizontal e informações do documento
      return `<div style="border-top: 1px solid #000; padding-top: 5px; text-align: center; font-size: 9pt; font-family: 'Times New Roman', Times, serif;">
                Contrato gerado pelo Gerador de Contratos - Documento válido mediante assinatura das partes
              </div>`;
    }
  }
};
