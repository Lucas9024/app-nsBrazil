import {Form} from '../../helpers'; 

 export const FormTermoInicioObra: Form[] = [
    {label: 'Data', value: ''},
    {label: 'Tipo de revestimento', value: ''}, 
    {label: ' Metragem ', value: ''},

    /**NOVA SEÇÃO - DADOS CLIENTES  */
    {label: ' Razão social ', value: ''},
    {label: ' Endereço completo ', value: ''},
    {label: ' CEP ', value: ''},
    {label: ' CNPJ/CPF ', value: ''},
    {label: ' Inscrição industrial / RG ', value: ''}, 
    {label: 'Endereço da Obra', value: ''}, 
    {label: ' Contato ', value: ''},
    {label: ' Setor ', value: ''},
    {label: ' E-mail ', value: ''},
    {label: ' Telefone/celular ', value: ''},
      /**NOVA SEÇÃO - INFRAESTRUTURA  */
   {label: ' Acesso de local remoto ', value: ''},
   {label: ' Quadro de força ', value: ''},
   {label: ' Distância do quadro de força até o local do trabalho ', value: ''},
   /**Sim e não - WC VESTUÁRIO  */
   {label: ' Sim ', value: ''}, 
   {label: ' Não ', value: ''}, 
   /**Sim e não -   Ponto de alimentação de agua*/
   {label: ' Sim ', value:''},
   {label: ' Não ', value:''},
   /**Sim e não -   Ponto de alimentação de agua para os outros */
   {label: ' Sim ', value: ''},
   {label: ' Não ', value: ''},

   /**Inicio Checkbox - Ventilação  */
   {label: ' Janelas ', value: ''}, 
   {label: ' Varandas ', value: ''},
   /**FIM checkbox */

   /**SIM E NÃO - ILUMINAÇÃO */
   {label: ' Sim ', value: ''}, 
   {label: ' Não ', value: ''}, 
    /**SIM E NÃO - SUFICIENTE */
    {label: ' Sim ', value: ''}, 
    {label: ' Não ', value: ''},
    /**TextArea - comentários */
    {label: ' Comentários ', value: ''}, 

   /**NOVA SEÇÃO - AMBIENTE DE TRABALHO */

   {label: ' Isolamento da área ', value: ''}, 
   {label: ' Remoção de entulho ', value: ''}, 
   {label: ' pó ', value: ''}, 
   /**NOVA SEÇÃO - Etapas prevístas  */
    /** Previsão  */
   {label: ' Uma etapa prevista de quantos dias? ', value: ''}, 
   {label: ' Dias corridos por etapas ', value: ''},
   /** sim ou não -  FINS DE SEMANA? */
   {label: ' Sim ', value: ''},
   {label: ' Não ', value: ''},  

    /** sim ou não -  Trabalho noturno?  */
    {label: ' Sim ', value: ''},
    {label: ' Não ', value: ''},

    /**TextArea - comentários ou recomendações técnicas */
    {label: ' Comentários/recomendações técnicas ', value: ''}, 

   

 ]
