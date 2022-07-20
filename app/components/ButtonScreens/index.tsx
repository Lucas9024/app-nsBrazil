import * as React from 'react'

import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

export function ButtonScreens (props: {
    screen: string
    title: string
}) {
  const navigation = useNavigation()

  function openScreen (screen: any) {
    navigation.navigate(screen)
  }
  return (
            <Button
            mode='contained'
            style={{ margin: 10, padding: 10, marginTop: 20 }}
            onPress={() => { openScreen(props.screen) }}> {props.title}
            </Button>
  )
}
