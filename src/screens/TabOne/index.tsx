import React from 'react'
import { Text, View, EditScreenInfo } from '../../components'
import { white } from '../../helpers/Colors'
import { Colors } from '../../constants'
import { useTerms } from '../../hooks'
import styles from './styles'

export default function TabOne() {
  const { tabOne: terms } = useTerms()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{terms.title}</Text>
      <View style={styles.separator} lightColor={Colors.GRAY} darkColor={white(0.1)} />
      <EditScreenInfo path={terms.path} />
    </View>
  )
}
