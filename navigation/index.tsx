import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { ActivityIndicator, ColorSchemeName } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import * as Localization from 'expo-localization'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as React from 'react'

import LinkingConfiguration from '../helpers/LinkingConfiguration'
import { RootStackParamList } from '../types/Navigation'
import BottomTabNavigator from './BottomTabNavigator'
import { useTerms, useThemeColor } from '../hooks'
import { Dispatch } from '../types/Models'
import { NotFound } from '../screens'
import { Styles } from '../constants'
import { View } from '../components'

const Stack = createStackNavigator<RootStackParamList>()

export default function Navigation({
  colorScheme,
  isLoadingComplete,
}: {
  colorScheme: ColorSchemeName
  isLoadingComplete: boolean
}): JSX.Element {
  const {
    appState: { setAppState },
  } = useDispatch<Dispatch>()
  const [loading, setLoading] = useState(false)
  const tintColor = useThemeColor({}, 'tint')
  const { titles } = useTerms()

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      let [locale] = await Localization.locale.split('-')
      if (locale !== 'ru') locale = 'en'
      setAppState({ locale })
      setLoading(false)
    })()
  }, [setAppState])

  return (
    <NavigationContainer linking={LinkingConfiguration} theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {isLoadingComplete && !loading ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Root" component={BottomTabNavigator} />
          <Stack.Screen name="NotFound" component={NotFound} options={{ title: titles.notFound }} />
        </Stack.Navigator>
      ) : (
        <View style={[Styles.fullFlex, Styles.centered]}>
          <ActivityIndicator size="large" color={tintColor} />
        </View>
      )}
    </NavigationContainer>
  )
}
