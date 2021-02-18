import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'

import { TabTwoParamList } from '../types/Navigation'
import { useTerms } from '../hooks'
import { TabTwo } from '../screens'

const TabTwoStack = createStackNavigator<TabTwoParamList>()

export default function TabTwoNavigator(): JSX.Element {
  const { titles } = useTerms()

  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen name="TabTwoScreen" component={TabTwo} options={{ headerTitle: titles.tabTwoTitle }} />
    </TabTwoStack.Navigator>
  )
}
