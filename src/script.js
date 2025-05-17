// Configuração dos contratos e seus campos
const contractFields = {
    '01_contrato_desenvolvimento_web': [
        { id: 'contratante_nome', label: 'Nome do Contratante', type: 'text', required: true },
        { id: 'contratante_nacionalidade', label: 'Nacionalidade do Contratante', type: 'text', required: true },
        { id: 'contratante_estado_civil', label: 'Estado Civil do Contratante', type: 'select', options: ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'União Estável'], required: true },
        { id: 'contratante_profissao', label: 'Profissão do Contratante', type: 'text', required: true },
        { id: 'contratante_rg', label: 'RG do Contratante', type: 'text', required: true },
        { id: 'contratante_cpf', label: 'CPF do Contratante', type: 'text', required: true },
        { id: 'contratante_endereco', label: 'Endereço Completo do Contratante', type: 'textarea', required: true },
        { id: 'contratada_nome', label: 'Nome/Razão Social da Contratada', type: 'text', required: true },
        { id: 'contratada_cnpj', label: 'CNPJ da Contratada', type: 'text', required: true },
        { id: 'contratada_endereco', label: 'Endereço Completo da Contratada', type: 'textarea', required: true },
        { id: 'contratada_representante', label: 'Nome do Representante Legal da Contratada', type: 'text', required: true },
        { id: 'contratada_representante_cargo', label: 'Cargo do Representante Legal', type: 'text', required: true },
        { id: 'objeto_contrato', label: 'Descrição do Projeto Web', type: 'textarea', required: true },
        { id: 'valor_contrato', label: 'Valor Total do Contrato (R$)', type: 'number', required: true },
        { id: 'prazo_execucao', label: 'Prazo de Execução (dias)', type: 'number', required: true },
        { id: 'local_data', label: 'Local e Data', type: 'text', required: true }
    ],
    '02_contrato_prestacao_servicos_gerais': [
        { id: 'contratante_nome', label: 'Nome do Contratante', type: 'text', required: true },
        { id: 'contratante_nacionalidade', label: 'Nacionalidade do Contratante', type: 'text', required: true },
        { id: 'contratante_estado_civil', label: 'Estado Civil do Contratante', type: 'select', options: ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'União Estável'], required: true },
        { id: 'contratante_profissao', label: 'Profissão do Contratante', type: 'text', required: true },
        { id: 'contratante_rg', label: 'RG do Contratante', type: 'text', required: true },
        { id: 'contratante_cpf', label: 'CPF do Contratante', type: 'text', required: true },
        { id: 'contratante_endereco', label: 'Endereço Completo do Contratante', type: 'textarea', required: true },
        { id: 'contratado_nome', label: 'Nome/Razão Social do Contratado', type: 'text', required: true },
        { id: 'contratado_cpf_cnpj', label: 'CPF/CNPJ do Contratado', type: 'text', required: true },
        { id: 'contratado_endereco', label: 'Endereço Completo do Contratado', type: 'textarea', required: true },
        { id: 'servico_descricao', label: 'Descrição Detalhada dos Serviços', type: 'textarea', required: true },
        { id: 'valor_contrato', label: 'Valor Total do Contrato (R$)', type: 'number', required: true },
        { id: 'prazo_execucao', label: 'Prazo de Execução (dias)', type: 'number', required: true },
        { id: 'local_data', label: 'Local e Data', type: 'text', required: true }
    ],
    '03_contrato_locacao_residencial': [
        { id: 'locador_nome', label: 'Nome do Locador', type: 'text', required: true },
        { id: 'locador_nacionalidade', label: 'Nacionalidade do Locador', type: 'text', required: true },
        { id: 'locador_estado_civil', label: 'Estado Civil do Locador', type: 'select', options: ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'União Estável'], required: true },
        { id: 'locador_profissao', label: 'Profissão do Locador', type: 'text', required: true },
        { id: 'locador_rg', label: 'RG do Locador', type: 'text', required: true },
        { id: 'locador_cpf', label: 'CPF do Locador', type: 'text', required: true },
        { id: 'locador_endereco', label: 'Endereço Completo do Locador', type: 'textarea', required: true },
        { id: 'locatario_nome', label: 'Nome do Locatário', type: 'text', required: true },
        { id: 'locatario_nacionalidade', label: 'Nacionalidade do Locatário', type: 'text', required: true },
        { id: 'locatario_estado_civil', label: 'Estado Civil do Locatário', type: 'select', options: ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'União Estável'], required: true },
        { id: 'locatario_profissao', label: 'Profissão do Locatário', type: 'text', required: true },
        { id: 'locatario_rg', label: 'RG do Locatário', type: 'text', required: true },
        { id: 'locatario_cpf', label: 'CPF do Locatário', type: 'text', required: true },
        { id: 'imovel_endereco', label: 'Endereço Completo do Imóvel', type: 'textarea', required: true },
        { id: 'valor_aluguel', label: 'Valor do Aluguel Mensal (R$)', type: 'number', required: true },
        { id: 'prazo_locacao', label: 'Prazo da Locação (meses)', type: 'number', required: true },
        { id: 'data_inicio', label: 'Data de Início da Locação', type: 'date', required: true },
        { id: 'local_data', label: 'Local e Data', type: 'text', required: true }
    ],
    '04_contrato_compra_venda_veiculo': [
        { id: 'vendedor_nome', label: 'Nome do Vendedor', type: 'text', required: true },
        { id: 'vendedor_nacionalidade', label: 'Nacionalidade do Vendedor', type: 'text', required: true },
        { id: 'vendedor_estado_civil', label: 'Estado Civil do Vendedor', type: 'select', options: ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'União Estável'], required: true },
        { id: 'vendedor_profissao', label: 'Profissão do Vendedor', type: 'text', required: true },
        { id: 'vendedor_rg', label: 'RG do Vendedor', type: 'text', required: true },
        { id: 'vendedor_cpf', label: 'CPF do Vendedor', type: 'text', required: true },
        { id: 'vendedor_endereco', label: 'Endereço Completo do Vendedor', type: 'textarea', required: true },
        { id: 'comprador_nome', label: 'Nome do Comprador', type: 'text', required: true },
        { id: 'comprador_nacionalidade', label: 'Nacionalidade do Comprador', type: 'text', required: true },
        { id: 'comprador_estado_civil', label: 'Estado Civil do Comprador', type: 'select', options: ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'União Estável'], required: true },
        { id: 'comprador_profissao', label: 'Profissão do Comprador', type: 'text', required: true },
        { id: 'comprador_rg', label: 'RG do Comprador', type: 'text', required: true },
        { id: 'comprador_cpf', label: 'CPF do Comprador', type: 'text', required: true },
        { id: 'comprador_endereco', label: 'Endereço Completo do Comprador', type: 'textarea', required: true },
        { id: 'veiculo_marca', label: 'Marca do Veículo', type: 'text', required: true },
        { id: 'veiculo_modelo', label: 'Modelo do Veículo', type: 'text', required: true },
        { id: 'veiculo_ano', label: 'Ano de Fabricação/Modelo', type: 'text', required: true },
        { id: 'veiculo_cor', label: 'Cor do Veículo', type: 'text', required: true },
        { id: 'veiculo_placa', label: 'Placa do Veículo', type: 'text', required: true },
        { id: 'veiculo_renavam', label: 'RENAVAM', type: 'text', required: true },
        { id: 'veiculo_chassi', label: 'Número do Chassi', type: 'text', required: true },
        { id: 'valor_venda', label: 'Valor da Venda (R$)', type: 'number', required: true },
        { id: 'forma_pagamento', label: 'Forma de Pagamento', type: 'textarea', required: true },
        { id: 'local_data', label: 'Local e Data', type: 'text', required: true }
    ],
    '05_contrato_trabalho_prazo_determinado': [
        { id: 'empregador_nome', label: 'Nome/Razão Social do Empregador', type: 'text', required: true },
        { id: 'empregador_cpf_cnpj', label: 'CPF/CNPJ do Empregador', type: 'text', required: true },
        { id: 'empregador_endereco', label: 'Endereço Completo do Empregador', type: 'textarea', required: true },
        { id: 'empregador_representante', label: 'Nome do Representante Legal (se PJ)', type: 'text', required: false },
        { id: 'empregado_nome', label: 'Nome do Empregado', type: 'text', required: true },
        { id: 'empregado_nacionalidade', label: 'Nacionalidade do Empregado', type: 'text', required: true },
        { id: 'empregado_estado_civil', label: 'Estado Civil do Empregado', type: 'select', options: ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'União Estável'], required: true },
        { id: 'empregado_profissao', label: 'Profissão do Empregado', type: 'text', required: true },
        { id: 'empregado_rg', label: 'RG do Empregado', type: 'text', required: true },
        { id: 'empregado_cpf', label: 'CPF do Empregado', type: 'text', required: true },
        { id: 'empregado_ctps', label: 'CTPS (Número e Série)', type: 'text', required: true },
        { id: 'empregado_endereco', label: 'Endereço Completo do Empregado', type: 'textarea', required: true },
        { id: 'cargo', label: 'Cargo/Função', type: 'text', required: true },
        { id: 'salario', label: 'Salário Mensal (R$)', type: 'number', required: true },
        { id: 'prazo_contrato', label: 'Prazo do Contrato (meses)', type: 'number', required: true },
        { id: 'data_inicio', label: 'Data de Início', type: 'date', required: true },
        { id: 'jornada_trabalho', label: 'Jornada de Trabalho', type: 'textarea', required: true },
        { id: 'local_data', label: 'Local e Data', type: 'text', required: true }
    ],
    '06_contrato_uniao_estavel': [
        { id: 'convivente1_nome', label: 'Nome do(a) Primeiro(a) Convivente', type: 'text', required: true },
        { id: 'convivente1_nacionalidade', label: 'Nacionalidade do(a) Primeiro(a) Convivente', type: 'text', required: true },
        { id: 'convivente1_profissao', label: 'Profissão do(a) Primeiro(a) Convivente', type: 'text', required: true },
        { id: 'convivente1_rg', label: 'RG do(a) Primeiro(a) Convivente', type: 'text', required: true },
        { id: 'convivente1_cpf', label: 'CPF do(a) Primeiro(a) Convivente', type: 'text', required: true },
        { id: 'convivente1_endereco', label: 'Endereço do(a) Primeiro(a) Convivente', type: 'textarea', required: true },
        { id: 'convivente2_nome', label: 'Nome do(a) Segundo(a) Convivente', type: 'text', required: true },
        { id: 'convivente2_nacionalidade', label: 'Nacionalidade do(a) Segundo(a) Convivente', type: 'text', required: true },
        { id: 'convivente2_profissao', label: 'Profissão do(a) Segundo(a) Convivente', type: 'text', required: true },
        { id: 'convivente2_rg', label: 'RG do(a) Segundo(a) Convivente', type: 'text', required: true },
        { id: 'convivente2_cpf', label: 'CPF do(a) Segundo(a) Convivente', type: 'text', required: true },
        { id: 'convivente2_endereco', label: 'Endereço do(a) Segundo(a) Convivente', type: 'textarea', required: true },
        { id: 'data_inicio', label: 'Data de Início da União Estável', type: 'date', required: true },
        { id: 'regime_bens', label: 'Regime de Bens', type: 'select', options: ['Comunhão Parcial de Bens', 'Comunhão Universal de Bens', 'Separação Total de Bens', 'Participação Final nos Aquestos'], required: true },
        { id: 'local_data', label: 'Local e Data', type: 'text', required: true }
    ],
    '07_contrato_locacao_comercial': [
        { id: 'locador_nome', label: 'Nome/Razão Social do Locador', type: 'text', required: true },
        { id: 'locador_cpf_cnpj', label: 'CPF/CNPJ do Locador', type: 'text', required: true },
        { id: 'locador_endereco', label: 'Endereço Completo do Locador', type: 'textarea', required: true },
        { id: 'locador_representante', label: 'Nome do Representante Legal (se PJ)', type: 'text', required: false },
        { id: 'locatario_nome', label: 'Nome/Razão Social do Locatário', type: 'text', required: true },
        { id: 'locatario_cpf_cnpj', label: 'CPF/CNPJ do Locatário', type: 'text', required: true },
        { id: 'locatario_endereco', label: 'Endereço Completo do Locatário', type: 'textarea', required: true },
        { id: 'locatario_representante', label: 'Nome do Representante Legal (se PJ)', type: 'text', required: false },
        { id: 'imovel_endereco', label: 'Endereço Completo do Imóvel Comercial', type: 'textarea', required: true },
        { id: 'imovel_descricao', label: 'Descrição do Imóvel', type: 'textarea', required: true },
        { id: 'finalidade_uso', label: 'Finalidade de Uso do Imóvel', type: 'text', required: true },
        { id: 'valor_aluguel', label: 'Valor do Aluguel Mensal (R$)', type: 'number', required: true },
        { id: 'prazo_locacao', label: 'Prazo da Locação (meses)', type: 'number', required: true },
        { id: 'data_inicio', label: 'Data de Início da Locação', type: 'date', required: true },
        { id: 'local_data', label: 'Local e Data', type: 'text', required: true }
    ],
    '08_contrato_comodato_imovel': [
        { id: 'comodante_nome', label: 'Nome do Comodante', type: 'text', required: true },
        { id: 'comodante_nacionalidade', label: 'Nacionalidade do Comodante', type: 'text', required: true },
        { id: 'comodante_estado_civil', label: 'Estado Civil do Comodante', type: 'select', options: ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'União Estável'], required: true },
        { id: 'comodante_profissao', label: 'Profissão do Comodante', type: 'text', required: true },
        { id: 'comodante_rg', label: 'RG do Comodante', type: 'text', required: true },
        { id: 'comodante_cpf', label: 'CPF do Comodante', type: 'text', required: true },
        { id: 'comodante_endereco', label: 'Endereço Completo do Comodante', type: 'textarea', required: true },
        { id: 'comodatario_nome', label: 'Nome do Comodatário', type: 'text', required: true },
        { id: 'comodatario_nacionalidade', label: 'Nacionalidade do Comodatário', type: 'text', required: true },
        { id: 'comodatario_estado_civil', label: 'Estado Civil do Comodatário', type: 'select', options: ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'União Estável'], required: true },
        { id: 'comodatario_profissao', label: 'Profissão do Comodatário', type: 'text', required: true },
        { id: 'comodatario_rg', label: 'RG do Comodatário', type: 'text', required: true },
        { id: 'comodatario_cpf', label: 'CPF do Comodatário', type: 'text', required: true },
        { id: 'imovel_endereco', label: 'Endereço Completo do Imóvel', type: 'textarea', required: true },
        { id: 'finalidade_uso', label: 'Finalidade de Uso do Imóvel', type: 'text', required: true },
        { id: 'prazo_comodato', label: 'Prazo do Comodato (meses)', type: 'number', required: true },
        { id: 'data_inicio', label: 'Data de Início do Comodato', type: 'date', required: true },
        { id: 'local_data', label: 'Local e Data', type: 'text', required: true }
    ],
    '09_contrato_parceria_empresarial': [
        { id: 'parceira_a_nome', label: 'Nome/Razão Social da Parceira A', type: 'text', required: true },
        { id: 'parceira_a_cpf_cnpj', label: 'CPF/CNPJ da Parceira A', type: 'text', required: true },
        { id: 'parceira_a_endereco', label: 'Endereço Completo da Parceira A', type: 'textarea', required: true },
        { id: 'parceira_a_representante', label: 'Nome do Representante Legal da Parceira A', type: 'text', required: false },
        { id: 'parceira_a_representante_cargo', label: 'Cargo do Representante da Parceira A', type: 'text', required: false },
        { id: 'parceira_b_nome', label: 'Nome/Razão Social da Parceira B', type: 'text', required: true },
        { id: 'parceira_b_cpf_cnpj', label: 'CPF/CNPJ da Parceira B', type: 'text', required: true },
        { id: 'parceira_b_endereco', label: 'Endereço Completo da Parceira B', type: 'textarea', required: true },
        { id: 'parceira_b_representante', label: 'Nome do Representante Legal da Parceira B', type: 'text', required: false },
        { id: 'parceira_b_representante_cargo', label: 'Cargo do Representante da Parceira B', type: 'text', required: false },
        { id: 'objeto_parceria', label: 'Objeto da Parceria', type: 'textarea', required: true },
        { id: 'responsabilidades_a', label: 'Responsabilidades da Parceira A', type: 'textarea', required: true },
        { id: 'responsabilidades_b', label: 'Responsabilidades da Parceira B', type: 'textarea', required: true },
        { id: 'percentual_a', label: 'Percentual de Participação da Parceira A (%)', type: 'number', required: true },
        { id: 'percentual_b', label: 'Percentual de Participação da Parceira B (%)', type: 'number', required: true },
        { id: 'prazo_parceria', label: 'Prazo da Parceria (meses)', type: 'number', required: true },
        { id: 'data_inicio', label: 'Data de Início da Parceria', type: 'date', required: true },
        { id: 'local_data', label: 'Local e Data', type: 'text', required: true }
    ],
    '10_contrato_confidencialidade_nda': [
        { id: 'parte_reveladora_nome', label: 'Nome/Razão Social da Parte Reveladora', type: 'text', required: true },
        { id: 'parte_reveladora_cpf_cnpj', label: 'CPF/CNPJ da Parte Reveladora', type: 'text', required: true },
        { id: 'parte_reveladora_endereco', label: 'Endereço Completo da Parte Reveladora', type: 'textarea', required: true },
        { id: 'parte_reveladora_representante', label: 'Nome do Representante Legal (se PJ)', type: 'text', required: false },
        { id: 'parte_receptora_nome', label: 'Nome/Razão Social da Parte Receptora', type: 'text', required: true },
        { id: 'parte_receptora_cpf_cnpj', label: 'CPF/CNPJ da Parte Receptora', type: 'text', required: true },
        { id: 'parte_receptora_endereco', label: 'Endereço Completo da Parte Receptora', type: 'textarea', required: true },
        { id: 'parte_receptora_representante', label: 'Nome do Representante Legal (se PJ)', type: 'text', required: false },
        { id: 'objeto_confidencialidade', label: 'Objeto/Contexto da Confidencialidade', type: 'textarea', required: true },
        { id: 'prazo_confidencialidade', label: 'Prazo de Confidencialidade (anos)', type: 'number', required: true },
        { id: 'valor_multa', label: 'Valor da Multa por Violação (R$)', type: 'number', required: true },
        { id: 'local_data', label: 'Local e Data', type: 'text', required: true }
    ],
    '11_contrato_representacao_comercial': [
        { id: 'representada_nome', label: 'Razão Social da Representada', type: 'text', required: true },
        { id: 'representada_cnpj', label: 'CNPJ da Representada', type: 'text', required: true },
        { id: 'representada_endereco', label: 'Endereço Completo da Representada', type: 'textarea', required: true },
        { id: 'representada_representante', label: 'Nome do Representante Legal', type: 'text', required: true },
        { id: 'representada_representante_cargo', label: 'Cargo do Representante Legal', type: 'text', required: true },
        { id: 'representante_nome', label: 'Nome/Razão Social do Representante', type: 'text', required: true },
        { id: 'representante_cpf_cnpj', label: 'CPF/CNPJ do Representante', type: 'text', required: true },
        { id: 'representante_core', label: 'Número de Registro no CORE', type: 'text', required: true },
        { id: 'representante_endereco', label: 'Endereço Completo do Representante', type: 'textarea', required: true },
        { id: 'zona_atuacao', label: 'Zona de Atuação', type: 'textarea', required: true },
        { id: 'produtos_servicos', label: 'Produtos/Serviços Objeto da Representação', type: 'textarea', required: true },
        { id: 'percentual_comissao', label: 'Percentual de Comissão (%)', type: 'number', required: true },
        { id: 'prazo_contrato', label: 'Prazo do Contrato (meses)', type: 'number', required: true },
        { id: 'data_inicio', label: 'Data de Início', type: 'date', required: true },
        { id: 'local_data', label: 'Local e Data', type: 'text', required: true }
    ],
    '12_contrato_estagio': [
        { id: 'concedente_nome', label: 'Razão Social da Concedente', type: 'text', required: true },
        { id: 'concedente_cnpj', label: 'CNPJ da Concedente', type: 'text', required: true },
        { id: 'concedente_endereco', label: 'Endereço Completo da Concedente', type: 'textarea', required: true },
        { id: 'concedente_representante', label: 'Nome do Representante Legal', type: 'text', required: true },
        { id: 'concedente_representante_cargo', label: 'Cargo do Representante Legal', type: 'text', required: true },
        { id: 'estagiario_nome', label: 'Nome do Estagiário', type: 'text', required: true },
        { id: 'estagiario_nacionalidade', label: 'Nacionalidade do Estagiário', type: 'text', required: true },
        { id: 'estagiario_estado_civil', label: 'Estado Civil do Estagiário', type: 'select', options: ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'União Estável'], required: true },
        { id: 'estagiario_rg', label: 'RG do Estagiário', type: 'text', required: true },
        { id: 'estagiario_cpf', label: 'CPF do Estagiário', type: 'text', required: true },
        { id: 'estagiario_endereco', label: 'Endereço Completo do Estagiário', type: 'textarea', required: true },
        { id: 'instituicao_ensino', label: 'Nome da Instituição de Ensino', type: 'text', required: true },
        { id: 'instituicao_cnpj', label: 'CNPJ da Instituição de Ensino', type: 'text', required: true },
        { id: 'instituicao_endereco', label: 'Endereço da Instituição de Ensino', type: 'textarea', required: true },
        { id: 'instituicao_representante', label: 'Nome do Representante da Instituição', type: 'text', required: true },
        { id: 'curso_estagiario', label: 'Curso do Estagiário', type: 'text', required: true },
        { id: 'periodo_curso', label: 'Período/Semestre/Ano do Curso', type: 'text', required: true },
        { id: 'tipo_estagio', label: 'Tipo de Estágio', type: 'select', options: ['Obrigatório', 'Não Obrigatório'], required: true },
        { id: 'setor_estagio', label: 'Setor/Departamento do Estágio', type: 'text', required: true },
        { id: 'supervisor_nome', label: 'Nome do Supervisor de Estágio', type: 'text', required: true },
        { id: 'supervisor_cargo', label: 'Cargo do Supervisor', type: 'text', required: true },
        { id: 'supervisor_formacao', label: 'Formação do Supervisor', type: 'text', required: true },
        { id: 'carga_horaria', label: 'Carga Horária Semanal (horas)', type: 'number', required: true },
        { id: 'valor_bolsa', label: 'Valor da Bolsa-Auxílio (R$)', type: 'number', required: true },
        { id: 'prazo_estagio', label: 'Prazo do Estágio (meses)', type: 'number', required: true },
        { id: 'data_inicio', label: 'Data de Início do Estágio', type: 'date', required: true },
        { id: 'local_data', label: 'Local e Data', type: 'text', required: true }
    ],
    '13_contrato_servicos_medicos': [
        { id: 'contratante_nome', label: 'Nome/Razão Social do Contratante', type: 'text', required: true },
        { id: 'contratante_cpf_cnpj', label: 'CPF/CNPJ do Contratante', type: 'text', required: true },
        { id: 'contratante_endereco', label: 'Endereço Completo do Contratante', type: 'textarea', required: true },
        { id: 'contratado_nome', label: 'Nome/Razão Social do Médico/Clínica', type: 'text', required: true },
        { id: 'contratado_crm', label: 'Número do CRM', type: 'text', required: true },
        { id: 'contratado_cpf_cnpj', label: 'CPF/CNPJ do Médico/Clínica', type: 'text', required: true },
        { id: 'contratado_endereco', label: 'Endereço Completo do Médico/Clínica', type: 'textarea', required: true },
        { id: 'especialidade_medica', label: 'Especialidade Médica', type: 'text', required: true },
        { id: 'servicos_descricao', label: 'Descrição Detalhada dos Serviços Médicos', type: 'textarea', required: true },
        { id: 'local_atendimento', label: 'Local de Atendimento', type: 'text', required: true },
        { id: 'endereco_atendimento', label: 'Endereço do Local de Atendimento', type: 'textarea', required: true },
        { id: 'valor_honorarios', label: 'Valor dos Honorários Médicos (R$)', type: 'number', required: true },
        { id: 'forma_pagamento', label: 'Forma de Pagamento', type: 'textarea', required: true },
        { id: 'prazo_contrato', label: 'Prazo do Contrato (meses)', type: 'number', required: true },
        { id: 'data_inicio', label: 'Data de Início', type: 'date', required: true },
        { id: 'local_data', label: 'Local e Data', type: 'text', required: true }
    ],
    '14_contrato_freelancer': [
        { id: 'contratante_nome', label: 'Nome/Razão Social do Contratante', type: 'text', required: true },
        { id: 'contratante_cpf_cnpj', label: 'CPF/CNPJ do Contratante', type: 'text', required: true },
        { id: 'contratante_endereco', label: 'Endereço Completo do Contratante', type: 'textarea', required: true },
        { id: 'contratado_nome', label: 'Nome do Freelancer', type: 'text', required: true },
        { id: 'contratado_nacionalidade', label: 'Nacionalidade do Freelancer', type: 'text', required: true },
        { id: 'contratado_estado_civil', label: 'Estado Civil do Freelancer', type: 'select', options: ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'União Estável'], required: true },
        { id: 'contratado_profissao', label: 'Profissão do Freelancer', type: 'text', required: true },
        { id: 'contratado_rg', label: 'RG do Freelancer', type: 'text', required: true },
        { id: 'contratado_cpf', label: 'CPF do Freelancer', type: 'text', required: true },
        { id: 'contratado_endereco', label: 'Endereço Completo do Freelancer', type: 'textarea', required: true },
        { id: 'servicos_descricao', label: 'Descrição Detalhada dos Serviços', type: 'textarea', required: true },
        { id: 'prazo_execucao', label: 'Prazo de Execução (dias)', type: 'number', required: true },
        { id: 'data_inicio', label: 'Data de Início', type: 'date', required: true },
        { id: 'valor_servicos', label: 'Valor dos Serviços (R$)', type: 'number', required: true },
        { id: 'forma_pagamento', label: 'Forma de Pagamento', type: 'textarea', required: true },
        { id: 'local_data', label: 'Local e Data', type: 'text', required: true }
    ],
    '15_contrato_emprestimo_dinheiro': [
        { id: 'credor_nome', label: 'Nome do Credor', type: 'text', required: true },
        { id: 'credor_nacionalidade', label: 'Nacionalidade do Credor', type: 'text', required: true },
        { id: 'credor_estado_civil', label: 'Estado Civil do Credor', type: 'select', options: ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'União Estável'], required: true },
        { id: 'credor_profissao', label: 'Profissão do Credor', type: 'text', required: true },
        { id: 'credor_rg', label: 'RG do Credor', type: 'text', required: true },
        { id: 'credor_cpf', label: 'CPF do Credor', type: 'text', required: true },
        { id: 'credor_endereco', label: 'Endereço Completo do Credor', type: 'textarea', required: true },
        { id: 'devedor_nome', label: 'Nome do Devedor', type: 'text', required: true },
        { id: 'devedor_nacionalidade', label: 'Nacionalidade do Devedor', type: 'text', required: true },
        { id: 'devedor_estado_civil', label: 'Estado Civil do Devedor', type: 'select', options: ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'União Estável'], required: true },
        { id: 'devedor_profissao', label: 'Profissão do Devedor', type: 'text', required: true },
        { id: 'devedor_rg', label: 'RG do Devedor', type: 'text', required: true },
        { id: 'devedor_cpf', label: 'CPF do Devedor', type: 'text', required: true },
        { id: 'devedor_endereco', label: 'Endereço Completo do Devedor', type: 'textarea', required: true },
        { id: 'valor_emprestimo', label: 'Valor do Empréstimo (R$)', type: 'number', required: true },
        { id: 'forma_entrega', label: 'Forma de Entrega do Valor', type: 'text', required: true },
        { id: 'finalidade_emprestimo', label: 'Finalidade do Empréstimo', type: 'textarea', required: false },
        { id: 'taxa_juros', label: 'Taxa de Juros (% ao mês)', type: 'number', required: true },
        { id: 'prazo_pagamento', label: 'Prazo de Pagamento (meses)', type: 'number', required: true },
        { id: 'forma_pagamento', label: 'Forma de Pagamento', type: 'select', options: ['Parcela Única', 'Parcelas Mensais'], required: true },
        { id: 'numero_parcelas', label: 'Número de Parcelas', type: 'number', required: false },
        { id: 'data_primeiro_vencimento', label: 'Data do Primeiro Vencimento', type: 'date', required: true },
        { id: 'garantia', label: 'Tipo de Garantia', type: 'select', options: ['Sem Garantia', 'Fiador/Avalista', 'Nota Promissória', 'Garantia Real (Penhor/Hipoteca/Alienação)'], required: true },
        { id: 'local_data', label: 'Local e Data', type: 'text', required: true }
    ]
};

// Variáveis globais
let selectedContract = null;
let watermarkFile = null;

// Função para inicializar a página
document.addEventListener('DOMContentLoaded', function() {
    // Configurar os listeners para a lista de contratos
    const contractLinks = document.querySelectorAll('#contract-list a');
    contractLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const contractId = this.getAttribute('data-contract');
            selectContract(contractId);
            
            // Atualizar a aparência dos links
            contractLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Configurar o botão de voltar
    document.getElementById('back-btn').addEventListener('click', function() {
        showWelcomeScreen();
    });
    
    // Configurar o botão de ajuda
    document.getElementById('help-btn').addEventListener('click', function() {
        const helpModal = new bootstrap.Modal(document.getElementById('helpModal'));
        helpModal.show();
    });
    
    // Configurar o botão de reset do formulário
    document.getElementById('reset-form').addEventListener('click', function() {
        document.getElementById('contract-form').reset();
        document.getElementById('watermark-preview').classList.add('d-none');
        watermarkFile = null;
    });
    
    // Configurar o upload e preview da marca d'água
    document.getElementById('watermark-upload').addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            watermarkFile = file;
            const reader = new FileReader();
            reader.onload = function(event) {
                const previewImg = document.querySelector('#watermark-preview img');
                previewImg.src = event.target.result;
                document.getElementById('watermark-preview').classList.remove('d-none');
            };
            reader.readAsDataURL(file);
        }
    });
    
    document.getElementById('preview-watermark').addEventListener('click', function() {
        document.getElementById('watermark-upload').click();
    });
    
    // Configurar o envio do formulário
    document.getElementById('contract-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validar o formulário
        if (!validateForm()) {
            return;
        }
        
        // Coletar os dados do formulário
        const formData = new FormData(this);
        formData.append('contractType', selectedContract);
        if (watermarkFile) {
            formData.append('watermark', watermarkFile);
        }
        
        // Aqui seria a lógica para enviar os dados para o servidor
        // Por enquanto, vamos apenas simular o processamento
        generateContract(formData);
    });
});

// Função para selecionar um contrato
function selectContract(contractId) {
    selectedContract = contractId;
    
    // Atualizar o título do formulário
    const contractTitle = document.querySelector(`#contract-list a[data-contract="${contractId}"]`).textContent;
    document.getElementById('contract-title').textContent = `Contrato de ${contractTitle}`;
    
    // Gerar os campos dinâmicos
    generateDynamicFields(contractId);
    
    // Mostrar o formulário
    document.getElementById('welcome-screen').classList.add('d-none');
    document.getElementById('form-container').classList.remove('d-none');
}

// Função para mostrar a tela de boas-vindas
function showWelcomeScreen() {
    document.getElementById('welcome-screen').classList.remove('d-none');
    document.getElementById('form-container').classList.add('d-none');
    
    // Limpar a seleção de contrato
    const contractLinks = document.querySelectorAll('#contract-list a');
    contractLinks.forEach(l => l.classList.remove('active'));
    
    selectedContract = null;
}

// Função para gerar os campos dinâmicos do formulário
function generateDynamicFields(contractId) {
    const dynamicFields = document.getElementById('dynamic-fields');
    dynamicFields.innerHTML = '';
    
    const fields = contractFields[contractId];
    if (!fields) return;
    
    fields.forEach(field => {
        const fieldContainer = document.createElement('div');
        fieldContainer.className = 'mb-3';
        
        const label = document.createElement('label');
        label.setAttribute('for', field.id);
        label.className = field.required ? 'form-label required-field' : 'form-label';
        label.textContent = field.label;
        
        let input;
        
        switch (field.type) {
            case 'textarea':
                input = document.createElement('textarea');
                input.className = 'form-control';
                input.rows = 3;
                break;
                
            case 'select':
                input = document.createElement('select');
                input.className = 'form-select';
                
                // Adicionar opção vazia
                const emptyOption = document.createElement('option');
                emptyOption.value = '';
                emptyOption.textContent = 'Selecione...';
                input.appendChild(emptyOption);
                
                // Adicionar as opções
                field.options.forEach(option => {
                    const optionElement = document.createElement('option');
                    optionElement.value = option;
                    optionElement.textContent = option;
                    input.appendChild(optionElement);
                });
                break;
                
            default:
                input = document.createElement('input');
                input.className = 'form-control';
                input.type = field.type;
                break;
        }
        
        input.id = field.id;
        input.name = field.id;
        if (field.required) {
            input.required = true;
        }
        
        // Adicionar feedback de validação
        const invalidFeedback = document.createElement('div');
        invalidFeedback.className = 'invalid-feedback';
        invalidFeedback.textContent = `Por favor, preencha o campo ${field.label}.`;
        
        fieldContainer.appendChild(label);
        fieldContainer.appendChild(input);
        fieldContainer.appendChild(invalidFeedback);
        
        dynamicFields.appendChild(fieldContainer);
    });
}

// Função para validar o formulário
function validateForm() {
    const form = document.getElementById('contract-form');
    
    // Adicionar classe para ativar a validação do Bootstrap
    form.classList.add('was-validated');
    
    return form.checkValidity();
}

// Função para gerar o contrato
function generateContract(formData) {
    // Mostrar um alerta de processamento
    const processingAlert = document.createElement('div');
    processingAlert.className = 'alert alert-info position-fixed top-0 start-50 translate-middle-x mt-3';
    processingAlert.setAttribute('role', 'alert');
    processingAlert.innerHTML = `
        <div class="d-flex align-items-center">
            <div class="spinner-border spinner-border-sm me-2" role="status">
                <span class="visually-hidden">Carregando...</span>
            </div>
            <div>Processando seu contrato. O download começará em breve...</div>
        </div>
    `;
    document.body.appendChild(processingAlert);
    
    // Criar um objeto FormData para enviar ao servidor
    const serverFormData = new FormData();
    
    // Adicionar todos os campos do formulário
    for (const [key, value] of formData.entries()) {
        serverFormData.append(key, value);
    }
    
    // Enviar a requisição para o servidor
    fetch('/api/generate-contract', {
        method: 'POST',
        body: serverFormData
    })
    .then(response => {
        // Remover o alerta de processamento
        document.body.removeChild(processingAlert);
        
        if (!response.ok) {
            // Se a resposta não for ok, converter para JSON para obter a mensagem de erro
            return response.json().then(data => {
                throw new Error(data.message || 'Erro ao gerar o contrato');
            });
        }
        
        // Se for um PDF, iniciar o download
        if (response.headers.get('Content-Type') === 'application/pdf') {
            // Criar um link para download e clicar nele automaticamente
            return response.blob().then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = `contrato_${selectedContract}.pdf`;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                
                // Mostrar mensagem de sucesso
                const successAlert = document.createElement('div');
                successAlert.className = 'alert alert-success position-fixed top-0 start-50 translate-middle-x mt-3';
                successAlert.setAttribute('role', 'alert');
                successAlert.innerHTML = 'Contrato gerado com sucesso! O download foi iniciado.';
                document.body.appendChild(successAlert);
                
                // Remover a mensagem após 5 segundos
                setTimeout(() => {
                    document.body.removeChild(successAlert);
                }, 5000);
            });
        } else {
            // Se não for um PDF, converter para JSON e mostrar a mensagem
            return response.json().then(data => {
                if (!data.success) {
                    throw new Error(data.message || 'Erro ao gerar o contrato');
                }
                
                // Mostrar mensagem de sucesso
                alert('Contrato gerado com sucesso!');
            });
        }
    })
    .catch(error => {
        // Remover o alerta de processamento se ainda existir
        if (document.body.contains(processingAlert)) {
            document.body.removeChild(processingAlert);
        }
        
        // Mostrar mensagem de erro
        const errorAlert = document.createElement('div');
        errorAlert.className = 'alert alert-danger position-fixed top-0 start-50 translate-middle-x mt-3';
        errorAlert.setAttribute('role', 'alert');
        errorAlert.innerHTML = `Erro: ${error.message}`;
        document.body.appendChild(errorAlert);
        
        // Remover a mensagem após 5 segundos
        setTimeout(() => {
            document.body.removeChild(errorAlert);
        }, 5000);
        
        console.error('Erro:', error);
    });
}
