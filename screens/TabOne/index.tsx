import React from 'react'

import { View, Text, EditScreenInfo } from '../../components'
import { Colors } from '../../constants'
import { useTerms } from '../../hooks'
import styles from './styles'

export default function TabOne() {
  const { titles } = useTerms()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{titles.tabOne}</Text>
      <View style={styles.separator} lightColor={Colors.GRAY} darkColor={Colors.white(0.1)} />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  )
}
