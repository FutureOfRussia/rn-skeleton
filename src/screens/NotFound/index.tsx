import * as React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useNavigation, StackActions } from '@react-navigation/native'
import { useTerms } from '../../hooks'
import styles from './styles'

export default function NotFound() {
  const { notFound: terms } = useTerms()
  const navigation = useNavigation()

  const goToRoot = () => navigation.dispatch(StackActions.replace('Root'))

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{terms.title}</Text>
      <TouchableOpacity onPress={goToRoot} style={styles.link}>
        <Text style={styles.linkText}>{terms.link}</Text>
      </TouchableOpacity>
    </View>
  )
}
