import React from 'react'
import { Provider } from 'react-redux'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { useColorScheme, useCachedResources } from './src/hooks'
import Navigation from './src/navigation'
import store from './src/store'

export default function App() {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  if (!isLoadingComplete) {
    return null
  }
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Navigation colorScheme={colorScheme} />
        <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      </Provider>
    </SafeAreaProvider>
  )
}
