export interface SpedField {
  name: string;
  description: string;
}

export interface SpedRegister {
  description: string;
  fields: Record<number, SpedField>;
}

export const spedDictionary: Record<string, SpedRegister> = {
  "0000": {
    description: "Abertura do Arquivo Digital e Identificação da Entidade",
    fields: {
      0: { name: "REG", description: "Texto fixo contendo 0000" },
      1: { name: "COD_VER", description: "Código da versão do layout" },
      2: { name: "COD_FIN", description: "Código da finalidade do arquivo" },
      3: { name: "DT_INI", description: "Data inicial das informações" },
      4: { name: "DT_FIN", description: "Data final das informações" },
      5: { name: "NOME", description: "Nome empresarial da entidade" },
      6: { name: "CNPJ", description: "CNPJ da entidade" },
      7: { name: "CPF", description: "CPF da entidade (quando aplicável)" },
      8: { name: "UF", description: "Unidade da Federação" },
      9: { name: "IE", description: "Inscrição Estadual" },
      10: { name: "COD_MUN", description: "Código do município (IBGE)" },
      11: { name: "IM", description: "Inscrição Municipal" },
      12: { name: "SUFRAMA", description: "Inscrição na SUFRAMA" },
      13: { name: "IND_PERFIL", description: "Perfil de apresentação do arquivo" },
      14: { name: "IND_ATIV", description: "Indicador de tipo de atividade" }
    }
  },

  "0001": {
    description: "Abertura do Bloco 0",
    fields: {
      0: { name: "REG", description: "Texto fixo contendo 0001" },
      1: { name: "IND_MOV", description: "Indicador de movimento no bloco" }
    }
  },

  "0150": {
    description: "Cadastro de Participantes",
    fields: {
      1: { name: "REG", description: "Texto fixo contendo 0150" },
      2: { name: "COD_PART", description: "Código de identificação do participante" },
      3: { name: "NOME", description: "Nome pessoal ou empresarial do participante" },
      4: { name: "COD_PAIS", description: "Código do país do participante" },
      5: { name: "CNPJ", description: "CNPJ do participante" },
      6: { name: "CPF", description: "CPF do participante" },
      7: { name: "IE", description: "Inscrição Estadual do participante" },
      8: { name: "COD_MUN", description: "Código do município do participante" },
      9: { name: "SUFRAMA", description: "Número de inscrição na Suframa" },
      10: { name: "END", description: "Logradouro e endereço do participante" },
      11: { name: "NUM", description: "Número no endereço do participante" },
      12: { name: "COMPL", description: "Complemento do endereço" },
      13: { name: "BAIRRO", description: "Bairro do participante" }
    }
  },

  "0200": {
    description: "Cadastro de Itens",
    fields: {
      1: { name: "REG", description: "Texto fixo contendo 0200" },
      2: { name: "COD_ITEM", description: "Código do item (produto ou serviço)" },
      3: { name: "DESCR_ITEM", description: "Descrição do item" },
      4: { name: "COD_BARRA", description: "Código de barras do item" },
      5: { name: "COD_ANT_ITEM", description: "Código anterior do item" },
      6: { name: "UNID_INV", description: "Unidade de medida no inventário" },
      7: { name: "TIPO_ITEM", description: "Tipo do item (00-Revenda, 01-Matéria-Prima...)" },
      8: { name: "COD_NCM", description: "Código NCM" },
      9: { name: "EX_IPI", description: "Código da Exceção da TIPI" },
      10: { name: "COD_GEN", description: "Código do gênero do item" },
      11: { name: "COD_LST", description: "Código do serviço conforme LC 116/03" },
      12: { name: "ALIQ_ICMS", description: "Alíquota de ICMS aplicável ao item" },
      13: { name: "CEST", description: "Código Especificador da Substituição Tributária" }
    }
  },

  "0990": {
    description: "Encerramento do Bloco 0",
    fields: {
      0: { name: "REG", description: "Texto fixo contendo 0990" },
      1: { name: "QTD_LIN_0", description: "Quantidade total de linhas do Bloco 0" }
    }
  },

  "C100": {
    description: "Documento Fiscal (NF-e, modelo 55 e outros modelos)",
    fields: {
      0: { name: "REG", description: "Texto fixo contendo C100" },
      1: { name: "IND_OPER", description: "0-Entrada; 1-Saída" },
      2: { name: "IND_EMIT", description: "0-Emissão própria; 1-Terceiros" },
      3: { name: "COD_PART", description: "Código do participante (registro 0150)" },
      4: { name: "COD_MOD", description: "Código do modelo do documento fiscal" },
      5: { name: "COD_SIT", description: "Código da situação do documento fiscal" },
      6: { name: "SER", description: "Série do documento fiscal" },
      7: { name: "NUM_DOC", description: "Número do documento fiscal" },
      8: { name: "CHV_NFE", description: "Chave da NF-e" },
      9: { name: "DT_DOC", description: "Data da emissão do documento fiscal" },
      10: { name: "DT_E_S", description: "Data da entrada ou saída" },
      11: { name: "VL_DOC", description: "Valor total do documento fiscal" },
      12: { name: "IND_PGTO", description: "Indicador de tipo de pagamento" },
      13: { name: "VL_DESC", description: "Valor total do desconto" },
      14: { name: "VL_ABAT_NT", description: "Valor do abatimento não tributado" },
      15: { name: "VL_MERC", description: "Valor total das mercadorias e serviços" },
      16: { name: "IND_FRT", description: "Indicador do tipo de frete" },
      17: { name: "VL_FRT", description: "Valor do frete" },
      18: { name: "VL_SEG", description: "Valor do seguro" },
      19: { name: "VL_OUT_DA", description: "Outras despesas acessórias" },
      20: { name: "VL_BC_ICMS", description: "Base de cálculo do ICMS" },
      21: { name: "VL_ICMS", description: "Valor do ICMS" },
      22: { name: "VL_BC_ICMS_ST", description: "Base de cálculo do ICMS ST" },
      23: { name: "VL_ICMS_ST", description: "Valor do ICMS ST" },
      24: { name: "VL_IPI", description: "Valor do IPI" },
      25: { name: "VL_PIS", description: "Valor do PIS" },
      26: { name: "VL_COFINS", description: "Valor da COFINS" },
      27: { name: "VL_PIS_ST", description: "Valor do PIS ST" },
      28: { name: "VL_COFINS_ST", description: "Valor da COFINS ST" }
    }
  },

  "C170": {
    description: "Itens do Documento Fiscal",
    fields: {
      0: { name: "REG", description: "Texto fixo contendo C170" },
      1: { name: "NUM_ITEM", description: "Número sequencial do item" },
      2: { name: "COD_ITEM", description: "Código do item (registro 0200)" },
      3: { name: "DESCR_COMPL", description: "Descrição complementar do item" },
      4: { name: "QTD", description: "Quantidade do item" },
      5: { name: "UNID", description: "Unidade de medida" },
      6: { name: "VL_ITEM", description: "Valor total do item" },
      7: { name: "VL_DESC", description: "Valor do desconto comercial" },
      8: { name: "IND_MOV", description: "Indicador de movimentação física" },
      9: { name: "CST_ICMS", description: "Código da situação tributária do ICMS" },
      10: { name: "CFOP", description: "Código Fiscal de Operações e Prestações" },
      11: { name: "COD_NAT", description: "Código da natureza da operação" },
      12: { name: "VL_BC_ICMS", description: "Base de cálculo do ICMS" },
      13: { name: "ALIQ_ICMS", description: "Alíquota do ICMS" },
      14: { name: "VL_ICMS", description: "Valor do ICMS" },
      15: { name: "VL_BC_ICMS_ST", description: "Base de cálculo do ICMS ST" },
      16: { name: "ALIQ_ST", description: "Alíquota do ICMS ST" },
      17: { name: "VL_ICMS_ST", description: "Valor do ICMS ST" },
      18: { name: "IND_APUR", description: "Indicador de período de apuração do IPI" },
      19: { name: "CST_IPI", description: "Código da situação tributária do IPI" },
      20: { name: "COD_ENQ", description: "Código de enquadramento legal do IPI" },
      21: { name: "VL_BC_IPI", description: "Base de cálculo do IPI" },
      22: { name: "ALIQ_IPI", description: "Alíquota do IPI" },
      23: { name: "VL_IPI", description: "Valor do IPI" },
      24: { name: "CST_PIS", description: "Código da situação tributária do PIS" },
      25: { name: "VL_BC_PIS", description: "Base de cálculo do PIS" },
      26: { name: "ALIQ_PIS", description: "Alíquota do PIS" },
      27: { name: "QUANT_BC_PIS", description: "Quantidade base de cálculo PIS" },
      28: { name: "ALIQ_PIS_QUANT", description: "Alíquota PIS por quantidade" },
      29: { name: "VL_PIS", description: "Valor do PIS" },
      30: { name: "CST_COFINS", description: "Código da situação tributária da COFINS" },
      31: { name: "VL_BC_COFINS", description: "Base de cálculo da COFINS" },
      32: { name: "ALIQ_COFINS", description: "Alíquota da COFINS" },
      33: { name: "QUANT_BC_COFINS", description: "Quantidade base COFINS" },
      34: { name: "ALIQ_COFINS_QUANT", description: "Alíquota COFINS por quantidade" },
      35: { name: "VL_COFINS", description: "Valor da COFINS" },
      36: { name: "COD_CTA", description: "Código da conta analítica contábil" }
    }
  },

  "C190": {
    description: "Registro Analítico do ICMS",
    fields: {
      0: { name: "REG", description: "Texto fixo contendo C190" },
      1: { name: "CST_ICMS", description: "Código da situação tributária do ICMS" },
      2: { name: "CFOP", description: "Código Fiscal de Operações e Prestações" },
      3: { name: "ALIQ_ICMS", description: "Alíquota do ICMS" },
      4: { name: "VL_OPR", description: "Valor total das operações" },
      5: { name: "VL_BC_ICMS", description: "Base de cálculo do ICMS" },
      6: { name: "VL_ICMS", description: "Valor do ICMS" },
      7: { name: "VL_BC_ICMS_ST", description: "Base de cálculo do ICMS ST" },
      8: { name: "VL_ICMS_ST", description: "Valor do ICMS ST" },
      9: { name: "VL_RED_BC", description: "Valor da redução da base de cálculo" },
      10: { name: "VL_IPI", description: "Valor do IPI" },
      11: { name: "COD_OBS", description: "Código da observação do lançamento fiscal" }
    }
  },

  "D700": {
    description: "Documento Fiscal de Serviços de Comunicação, Telecomunicação, Energia Elétrica ou Gás Canalizado",
    fields: {
      0: { name: "REG", description: "Texto fixo contendo D700" },
      1: { name: "IND_OPER", description: "Indicador do tipo de operação: 0-Entrada; 1-Saída" },
      2: { name: "IND_EMIT", description: "Indicador do emitente do documento fiscal: 0-Própria; 1-Terceiros" },
      3: { name: "COD_PART", description: "Código do participante (campo 02 do registro 0150)" },
      4: { name: "COD_MOD", description: "Código do modelo do documento fiscal" },
      5: { name: "COD_SIT", description: "Código da situação do documento fiscal" },
      6: { name: "SER", description: "Série do documento fiscal(Serie da nf)" },
      7: { name: "NUM_DOC", description: "Número do documento fiscal" },
      8: { name: "DT_DOC", description: "Data da emissão do documento fiscal" },
      9: { name: "DT_E_S", description: "Data da entrada ou saída" },
      10: { name: "VL_DOC", description: "Valor total do documento fiscal" },
      11: { name: "VL_DESC", description: "Valor total do desconto" },
      12: { name: "VL_SERV", description: "Valor total da prestação de serviços" },
      13: { name: "VL_SERV_NT", description: "Valor total da prestação de serviços não tributado pelo ICMS" },
      14: { name: "VL_TERC", description: "Valor total cobrado em nome de terceiros" },
      15: { name: "VL_DA", description: "Valor total de despesas acessórias" },
      16: { name: "VL_BC_ICMS", description: "Base de cálculo do ICMS" },
      17: { name: "VL_ICMS", description: "Valor do ICMS" },
      19: { name: "VL_ICMS_ST", description: "Valor do ICMS substituição tributária" },
      20: { name: "COD_INF", description: "Código da informação complementar do documento fiscal (campo 02 do registro 0450)" },
      18: { name: "VL_PIS", description: "Valor do PIS" },
      22: { name: "VL_COFINS", description: "Valor da COFINS" },
      21: { name: "CHV_DOCe", description: "Chave do documento eletrônico" }
    }
  },

  "D730": {
    description: "Registro analítico do documento fiscal de serviços (ICMS)",
    fields: {
      0: { name: "REG", description: "Texto fixo contendo D730" },
      1: { name: "CST_ICMS", description: "Código da Situação Tributária do ICMS" },
      2: { name: "CFOP", description: "Código Fiscal de Operação e Prestação" },
      3: { name: "VL_SERV", description: "Valor total da prestação de serviços" },
      4: { name: "VL_BC_ICMS", description: "Base de cálculo do ICMS" },
      5: { name: "ALIQ_ICMS", description: "Alíquota do ICMS" },
      6: { name: "VL_ICMS", description: "Valor do ICMS" },
      7: { name: "VL_BC_ICMS_ST", description: "Base de cálculo do ICMS substituição tributária" },
      8: { name: "ALIQ_ST", description: "Alíquota do ICMS ST" },
      9: { name: "VL_ICMS_ST", description: "Valor do ICMS substituição tributária" },
      10: { name: "VL_RED_BC", description: "Valor não tributado em função da redução da base de cálculo" },
      11: { name: "COD_OBS", description: "Código da observação do lançamento fiscal (campo 02 do registro 0460)" }
    }
  },

  "9001": {
    description: "Abertura do Bloco 9",
    fields: {
      0: { name: "REG", description: "Texto fixo contendo 9001" },
      1: { name: "IND_MOV", description: "Indicador de movimento do bloco" }
    }
  },

  "9900": {
    description: "Registro de totalização por tipo de registro",
    fields: {
      0: { name: "REG", description: "Texto fixo contendo 9900" },
      1: { name: "REG_BLC", description: "Registro que está sendo totalizado" },
      2: { name: "QTD_REG_BLC", description: "Quantidade de registros do tipo informado" }
    }
  },

  "9990": {
    description: "Encerramento do Bloco 9",
    fields: {
      0: { name: "REG", description: "Texto fixo contendo 9990" },
      1: { name: "QTD_LIN_9", description: "Quantidade total de linhas do Bloco 9" }
    }
  },

  "9999": {
    description: "Encerramento do Arquivo Digital",
    fields: {
      0: { name: "REG", description: "Texto fixo contendo 9999" },
      1: { name: "QTD_LIN", description: "Quantidade total de linhas do arquivo" }
    }
  }
};