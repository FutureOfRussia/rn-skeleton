import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'

import { TabOneParamList } from '../types/Navigation'
import { useTerms } from '../hooks'
import { TabOne } from '../screens'

const TabOneStack = createStackNavigator<TabOneParamList>()

export default function TabOneNavigator(): JSX.Element {
  const { titles } = useTerms()

  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen name="TabOneScreen" component={TabOne} options={{ headerTitle: titles.tabOneTitle }} />
    </TabOneStack.Navigator>
  )
}
