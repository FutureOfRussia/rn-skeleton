import { ActivityIndicator, View as DefaultView } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Updates from 'expo-updates'
import { BlurView } from 'expo-blur'

import { useColorScheme, useTerms } from '../../hooks'
import { px } from '../../helpers/Dimensions'
import BounceButton from '../BounceButton'
import { Colors } from '../../constants'
import styles from './styles'
import View from '../View'
import Text from '../Text'

export default function UpdateBanner() {
  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false)
  const [load, setLoad] = useState(false)
  const { updateBanner: terms } = useTerms()
  const colorScheme = useColorScheme()

  useEffect(() => {
    Updates.checkForUpdateAsync()
      .then(update => {
        if (update.isAvailable) setShow(true)
      })
      .catch(() => setShow(false))
  }, [])

  const update = async () => {
    try {
      setLoading(true)
      await Updates.fetchUpdateAsync()
      setLoad(true)
      setLoading(false)
    } catch (e) {
      setLoad(false)
      setLoading(false)
    }
  }

  const reload = async () => {
    try {
      setLoading(true)
      await Updates.reloadAsync()
      setLoading(false)
    } catch (e) {
      setLoading(false)
    }
  }

  if (show) {
    return (
      <BlurView tint={colorScheme} intensity={85} style={styles.container}>
        <View style={styles.content}>
          <DefaultView style={styles.textBlock}>
            <Text style={styles.title}>{terms.title}</Text>
            <Text style={styles.subtitle}>{loading ? terms.loading : <>{load ? terms.done : terms.subtitle}</>}</Text>
          </DefaultView>
          <DefaultView style={styles.buttonBlock}>
            {load ? (
              <BounceButton style={styles.button} onPress={reload} disabled={loading} debounce>
                <Text style={styles.buttonText}>{loading ? terms.load : terms.reload}</Text>
                {loading && <ActivityIndicator style={{ marginLeft: px(10) }} size="small" color={Colors.LINK} />}
              </BounceButton>
            ) : (
              <BounceButton style={styles.button} onPress={update} disabled={loading} debounce>
                <Text style={styles.buttonText}>{loading ? terms.load : terms.update}</Text>
                {loading && <ActivityIndicator style={{ marginLeft: px(10) }} size="small" color={Colors.LINK} />}
              </BounceButton>
            )}
          </DefaultView>
        </View>
      </BlurView>
    )
  }

  return null
}
