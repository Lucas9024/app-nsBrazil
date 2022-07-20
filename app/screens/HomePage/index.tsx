/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from 'react'
import { View, Text } from 'react-native'

import { ButtonScreens } from '../../components/ButtonScreens'

export function HomePage () {
  return (
        <View>
            <ButtonScreens screen='DadosObra' title='Dados da Obra'/>
            <ButtonScreens screen='CheckList' title='CheckList'/>
        </View>
  )
}
