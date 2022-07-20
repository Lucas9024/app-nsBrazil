import * as React from 'react'

import { HomePage } from '../screens/HomePage'
import { DadosObra } from '../screens/DadosObra'
import { CheckList } from '../screens/CheckList'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
const { Screen, Navigator } = createNativeStackNavigator()

export function StackRoutes () {
  return (
    <Navigator>
      <Screen name="NS-Brazil"
      options={({ route }) => ({
        headerTitle: route.name,
        headerTitleStyle: {
          fontSize: 24,
          color: '#000'

        }
      })}
      component={HomePage} />
      <Screen name="DadosObra"
            options={() => ({
              headerTitle: 'Dados da Obra'
            })}
      component={DadosObra} />
      <Screen name="CheckList" component={CheckList} />
    </Navigator>
  )
}
