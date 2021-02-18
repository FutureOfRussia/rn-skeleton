import React from 'react'

import { EditScreenInfo, Text, View } from '../../components'
import { Colors } from '../../constants'
import { useTerms } from '../../hooks'
import styles from './styles'

export default function TabTwo() {
  const { titles } = useTerms()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{titles.tabTwo}</Text>
      <View style={styles.separator} lightColor={Colors.GRAY} darkColor={Colors.white(0.1)} />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
    </View>
  )
}
