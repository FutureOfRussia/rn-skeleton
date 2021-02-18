import { StackScreenProps } from '@react-navigation/stack'
import { Text, View } from 'react-native'
import React from 'react'

import { RootStackParamList } from '../../types/Navigation'
import { OpacityButton } from '../../components'
import { useTerms } from '../../hooks'
import styles from './styles'

export default function NotFound({ navigation }: StackScreenProps<RootStackParamList, 'NotFound'>) {
  const { notFound: terms } = useTerms()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{terms.title}</Text>
      <OpacityButton onPress={() => navigation.replace('Root')} style={styles.link}>
        <Text style={styles.linkText}>{terms.navigate}</Text>
      </OpacityButton>
    </View>
  )
}
