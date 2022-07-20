import * as React from 'react'
import { Appbar } from 'react-native-paper'
import { Platform } from 'react-native'

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical'

const AppBarHome = (props: {
    title: string
}) => (
    <Appbar.Header style={{ backgroundColor: '#1F5987' }}>
       <Appbar.Content title={props.title} subtitle="NS-Brazil" />
       <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
    </Appbar.Header>
)

export default AppBarHome
