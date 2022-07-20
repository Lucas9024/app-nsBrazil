import * as React from 'react'
import { Text } from 'react-native'

export default function FormDivisionTitle (props: {
    title: string
  }) {
  return (
      <Text style={{ marginLeft: 10, fontSize: 26, marginTop: 15 }}>
      {props.title}
    </Text>)
}
