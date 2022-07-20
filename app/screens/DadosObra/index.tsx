/* eslint-disable array-callback-return */
/* eslint-disable no-return-assign */
/* eslint-disable react/jsx-key */
import * as React from 'react'
import { ScrollView, Text, View } from 'react-native'

import FormDivisionTitle from '../../components/FormDivisionTitle'
import { TextInput, Button } from 'react-native-paper'

import { FormDadosDaObra } from './array'

export function DadosObra () {
  const [arrayForm, setArrayForm] = React.useState(FormDadosDaObra)
  const [isAbleToSubmit, setIsAbleToSubmit] = React.useState(true)

  return (

        <ScrollView>

<FormDivisionTitle title='Dados da Obra'/>

{arrayForm.slice(0, 4).map((item, index) => (
  <TextInput
  key={index}
  mode='outlined'
  label={item.label}
  onChangeText={(text: string) => {
    item.value = text
    setArrayForm([...arrayForm])
    arrayForm.every(item => item.value !== '') === true
      ? setIsAbleToSubmit(false)
      : setIsAbleToSubmit(true)
  }}
  style={{ margin: 10 }}
/>
))}

<FormDivisionTitle title='Dados do Cliente'/>

{arrayForm.slice(4, arrayForm.length).map((item, index) => (
  <TextInput
  key={index}
  mode='outlined'
  label={item.label}
  onChangeText={(text: string) => {
    item.value = text
    setArrayForm([...arrayForm])

    arrayForm.every(item => item.value !== '') === true
      ? setIsAbleToSubmit(false)
      : setIsAbleToSubmit(true)
  }}
  style={{ margin: 10 }}
/>
))}

 <FormDivisionTitle title='Confira os dados:'/>

{
   arrayForm.map((item, index) => (
     <View style={{ display: 'flex' }}>
       <Text style={{ marginLeft: 10, flex: 1 }}>
       {item.label}:{item.value}
     </Text>
     </View>
   ))
}

   {/* <Button
   mode="contained"
   style={{ margin: 10, padding: 10, marginTop: 20 }}
   onPress={() => console.log(
     arrayForm.every(item => item.value !== '') === true
       ? arrayForm.map(item => {
         item.value = ''
         setArrayForm([...arrayForm])
       })
       : arrayForm.map(item => {
         item.value = 'TESTANDO'
         setArrayForm([...arrayForm])
       }
       )
   )}>
    TESTAR
  </Button> */}

   <Button
   disabled={isAbleToSubmit}
   mode="contained"
   style={{ margin: 10, padding: 10, marginBottom: 40, marginTop: 20 }}

   onPress={() => console.log(
     FormDadosDaObra.every(item => item.value !== '')
   )}>
    Enviar
  </Button>

</ScrollView>
  )
}
