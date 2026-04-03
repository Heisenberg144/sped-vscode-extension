# SPED Fiscal Tools

Extensão de highlighting avançado para arquivos SPED Fiscal (EFD ICMS/IPI).

Feita pra quem passa o dia dentro de arquivo SPED e sabe o quanto é difícil ler aquilo sem enlouquecer.

---

## Instalação

1. Abra o VS Code
2. Vá em **Extensões** (`Ctrl+Shift+X`)
3. Pesquise por `SPED Fiscal Tools`
4. Clique em **Instalar**

Para ativar o tema após instalar:

- `Ctrl+Shift+P` → **Preferences: Color Theme** → selecione **SPED Fiscal Dark** ou **NF-e Fiscal Dark**

---

## O que a extensão faz

### Highlighting para SPED Fiscal (`.txt`, `.sped`, `.dec`)

Arquivo SPED bruto é uma parede de texto. A extensão aplica uma hierarquia de cores que segue o fluxo real de leitura de um auditor — você para de ler campo por campo e começa a enxergar estrutura.

A lógica de cores segue uma ordem cognitiva intencional:

**Estrutura e blocos**

- Pipes `|` → roxo forte — ancora o olho verticalmente
- Bloco 0 → violeta claro
- Bloco C → azul
- Bloco D → verde
- Bloco 9 → laranja
- Registros como C100, D700 → azul destacado em negrito
- Registros de controle (9900, 9990, 9999) → amarelo

**Identificação do documento**

- Modelo, série, número e chave de acesso (44 dígitos) compartilham a mesma família de cor — você reconhece o grupo instantaneamente e sabe que está validando o documento certo.
  **Valores financeiros**

- `VL_DOC` e equivalentes → verde neon, sempre dominante
- Nenhum outro campo sobrepõe o valor total visualmente

**Classificação fiscal**

- CFOP → vermelho em negrito
- CST → laranja
- A natureza da operação salta antes de qualquer outra coisa

**Cadastro e identificação**

- CNPJ → verde forte em negrito
- CPF → verde claro
- IE → verde
- Tipo de perfil → amarelo

**Datas**

- Data do documento → ciano
- Data do período → azul em negrito
- Data vazia → índigo em itálico

**Impostos — cada tributo tem sua família de cor**

| Tributo      | Base             | Alíquota        | Valor                   |
| ------------ | ---------------- | --------------- | ----------------------- |
| ICMS         | azul claro       | azul médio      | azul forte (negrito)    |
| ICMS ST      | azul profundo    | azul mais forte | azul escuro (negrito)   |
| ICMS ST D730 | ciano específico | ciano           | ciano (negrito)         |
| PIS          | verde claro      | verde           | verde-azulado (negrito) |
| COFINS       | lima             | lima neon       | lima (negrito)          |
| IPI          | roxo suave       | roxo médio      | roxo escuro (negrito)   |

A regra é simples: você identifica o tributo pelo tom e entende o tipo do campo (base, alíquota ou valor) pela intensidade da cor.

---

### Hover com documentação de campos

Passe o mouse sobre qualquer campo de um arquivo SPED ou tag de um XML fiscal e veja:

- Nome do campo
- Descrição do que ele representa
- Registro ou bloco ao qual pertence
- Valores possíveis quando aplicável (ex: `tpNF`, `modFrete`, `CRT`, `CST`)

Para desativar: `Ctrl+Shift+P` → **Toggle SPED Field Documentation**

A configuração `sped.fieldsEnabled` também pode ser ajustada diretamente nas settings do VS Code.

---

## Autor

Adrian Gabriel Cirino
