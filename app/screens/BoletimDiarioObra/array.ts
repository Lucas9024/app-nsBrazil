import { Form } from "../../helpers";

export const FormBoletimDiarioObra: Form[] = [
    {label: ' Data ', value: ''}, 
    {label: ' Horário ', value: ''}, 
    {label: ' Entrada ', value: ''}, 
    {label: ' Saída ', value: ''},
    
    /** Início Checkbox - Efetivos na obra/quantidade  */
    {label: ' Encarregado ', value: ''}, 
    {label: ' Aplicador ', value: ''}, 
    {label: ' Ajudante ', value: ''},
    {label: ' Misturador ', value: ''},  
    {label: ' Cliente ', value: ''},
    {label: ' Obra ', value: ''},
    {label: ' Revestimento ', value: ''},

    /** Fim Checkbox  */
    /** Início Checkbox - Aplicação  */

    {label: ' Própria ', value: ''},
    {label: ' Terceirizada ', value: ''},

    /**Fim checkbox */
    
    /** Início checkbox - Clima */
    {label: ' Temperatura ', value: ''},
    {label: ' Umidade do ar ', value: ''},
    /**Fim checkbox */

    {label: ' Metragem ', value: ''},
    {label: ' Histórico da etapa ', value: ''},
    {label: ' Produto ' , value: ''},
    {label: ' Consumo ' , value: ''},
    {label: ' Metragem ', value: ''},

    /**TextArea - observação empreiteiro */

    {label: ' Observação do empreiteiro ', value: ''},

    /**TextArea - observação contratada */

    {label: ' Observação da contratada ', value: ''},

    {label: 'Assinatura da contratada', value: ''}, 
    {label: 'empreiteiro', value: ''},
]