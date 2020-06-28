import React, { useState, useEffect } from 'react'
import { ColorSchemeName, ImageBackground } from 'react-native'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as Localization from 'expo-localization'
import { useDispatch } from 'react-redux'
import LinkingConfiguration from '../helpers/LinkingConfiguration'
import BottomTabNavigator from './BottomTabNavigator'
import { Styles, Colors, Images } from '../constants'
import { NotFound } from '../screens'
import { Dispatch } from '../models'

const Stack = createStackNavigator()

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  const { appState: { setAppState } }: Dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      let [locale] = await Localization.locale.split('-')
      if (locale !== 'ru') locale = 'en'
      setAppState({ locale })
    }

    setLoading(true)
    fetchData().then(() => setLoading(false)).catch((e) => console.log(e))
  }, [])

  if (loading) {
    return (
      <ImageBackground
        source={Images.splash}
        resizeMode="contain"
        style={[Styles.fullFlex, { backgroundColor: Colors.WHITE }]}
      />
    )
  }

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Root" component={BottomTabNavigator} />
        <Stack.Screen name="NotFound" component={NotFound} options={{ title: 'Oops!' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
