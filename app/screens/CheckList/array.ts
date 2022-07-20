import { Form } from '../../helpers'

export const FormDadosDoClienteOUProduto: Form[] = [
  { label: 'Cliente', value: '' },
  { label: 'CPF', value: '' },
  { label: 'CNPJ', value: '' },
  { label: 'Incrição Estadual/RG', value: '' },
  { label: 'Endereço completo', value: '' },
  { label: 'Endereço da Obra', value: '' },
  { label: 'Celular', value: '' },
  { label: 'E-mail', value: '' },
  { label: 'Responsável', value: '' },
  { label: 'Setor', value: '' },
  
  { label: 'Dados Levantados', value: '' },
  { label: 'Tipo de uso do local', value: '' }, 

  /*inicio checkbox - Tipo de estrutura */
  {label: 'piso', value: ''}, 
  {label: 'parede', value: ''},
  {label: 'tanque enterrado', value: ''},
  {label: 'tanque elevado', value: ''},
  {label: 'piso', value: ''},
  /**input */
  {label: 'outro', value: ''}, 

  /**Fim checkbox */

  /** NOVA SEÇÃO - SISTEMA PRINCIPAL  / APLICADOR / ESPECIFICADOR  */

  {label: 'sistema principal', value: ''}, 
  {label: 'metragem', value: ''},
  {label: 'Aplicador', value: ''},
  {label: 'Celular', value: ''},
  {label: 'E-mail', value: ''},
  {label: 'Especificador', value: ''},

  /** NOVA SEÇÃO - SOLICITAÇÃO DE REVESTIMENTO */
  {label: ' Cor', value: ''},
  {label: ' Espessura', value: ''},
  {label: ' Área total', value: ''},
  {label: ' Rodapé', value: ''},
  {label: 'Altura', value: ''},
  {label: ' Juntas', value: ''},
  {label: ' Caneleta', value: ''},
  {label: 'Faixas demarcatórias', value: ''},
  {label: ' Ref. de bordas/ lábios polim.: ', value: ''},

    /*inicio checkbox - Sinalizações */
  {label: ' Hidrante ', value: ''},
  {label: ' Extintor ', value: ''},
  {label: ' Acabamento ', value: ''},
  {label: 'Anti-derrapante', value: ''},
  {label: ' liso ', value: ''},
  {label: ' Resistência mecânica ', value: ''},
  {label: ' Aspecto estético ', value: ''},
  /*Fim checkbox */

  /**NOVA SEÇÃO - Tipo de substrato */

  {label: ' Idade do concreto ', value: ''},
  {label: ' MPA ', value: ''},
  {label: ' Baixa resistência ', value: ''},
  {label: ' Revestimento existente ', value: ''},
  {label: ' Idade do concreto ', value: ''},

  /*inicio checkbox - REVESTIMENTO EXISTENTE */
   {label: ' Laje apoiada no solo ', value: ''},
  {label: ' Contrapiso de argamassa desempenada ', value: ''},
  {label: ' Contrapiso de argamassa liso queimado ', value: ''},
  {label: ' Laje apoiada no solo sem lona plástica ', value: ''},
  {label: ' Granilite ', value: ''},
  {label: ' Korodour ', value: ''},
  {label: ' Asfalto ', value: ''},
  {label: ' Aço de carbono ', value: ''},
  {label: ' Placa metálica ', value: ''},
  {label: ' Pedra  ', value: ''},
  {label: ' Porosidade ', value: ''},
  {label: ' Irregular ', value: ''},
  {label: ' Fissuras e rachaduras ', value: ''},
  {label: ' Contaminação com óleo ', value: ''},
  {label: ' Com umidade ascendente ', value: ''},
  {label: ' Partes soltas ou ocas ', value: ''},
  {label: ' Com endurecedor de superfície ', value: ''},
  {label: ' Laje apoiada no solo ', value: ''},
  {label: ' Desgastado ', value: ''},
  {label: ' Desplacando ', value: ''},
  /**input */
  {label: ' Outro ', value: ''},
  /*Fim checkbox */

  /**NOVA SEÇÃO -  SOLICITAÇÃO QUÍMICA*/
  {label: ' Substancias químicas ', value: ''},
  {label: ' Concentração  ', value: ''},
  {label: ' Temperatura ', value: ''},
  {label: ' Intensidade ', value: ''},
  {label: ' Ambiente ', value: ''},

  /**NOVA SEÇÃO - PREPARO DE BASE*/
  {label: ' fresamento/polimento ', value: ''},
  /**input */
  {label: ' outro ', value: ''},
  
  /**NOVA SEÇÃO - REPARO */

  {label: ' Material ', value: '' },
  {label: ' Espessura ', value: '' },
  
  /**NOVA SEÇÃO - LIMPEZA */
   /**Inicio checkbox - limpeza */

   {label: ' Manual ', value: '',},
    {label: ' Mecânica ', value: ''},
    {label: ' Diaria ', value: ''},
    {label: ' Semanal ', value: ''}, 
    /**input */
    {label: ' Quais produtos ', value: ''},
    /** fim checkbox*/

      
  /**NOVA SEÇÃO - Expectativa de liberação */
  {label: ' 24 horas ', value: ''},
  {label: ' 48 horas ', value: ''},
  /**Input */
  {label: ' Outro ', value: ''},

  /**NOVA SEÇÃO - RENDIMENTOS */
  {label: ' Produto ', value: ''},
  {label: ' Peso do kit ', value: ''},
  {label: ' Consumo Kg / m² ', value: ''},
  {label: ' RENDIMENTO / EMBALAGEM ', value: ''},
  {label: ' Nº de camadas ', value: ''},
  {label: ' Área ', value: ''},
  {label: ' Metragem ', value: ''},

  /**TextArea - recomendação para a obra */
  {label: 'recomendação para a obra', value: ''}


]
