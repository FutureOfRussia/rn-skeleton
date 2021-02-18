import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Provider } from 'react-redux'
import React from 'react'

import { useCachedResources, useColorScheme, useDebounce } from './hooks'
import { LocaleNotification } from './components/LocaleNotification'
import { UpdateBanner } from './components'
import Navigation from './navigation'
import store from './store'

export default function App(): JSX.Element {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  useDebounce()

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Provider store={store}>
        <Navigation colorScheme={colorScheme} isLoadingComplete={isLoadingComplete} />
        <LocaleNotification />
        <UpdateBanner />
        <StatusBar />
      </Provider>
    </SafeAreaProvider>
  )
}
