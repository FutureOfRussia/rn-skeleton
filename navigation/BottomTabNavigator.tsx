import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import * as React from 'react'

import { BottomTabParamList } from '../types/Navigation'
import useColorScheme from '../hooks/useColorScheme'
import TabOneNavigator from './TabOneNavigator'
import TabTwoNavigator from './TabTwoNavigator'
import { px } from '../helpers/Dimensions'
import Colors from '../constants/Colors'
import { useTerms } from '../hooks'

const BottomTab = createBottomTabNavigator<BottomTabParamList>()

export default function BottomTabNavigator(): JSX.Element {
  const colorScheme = useColorScheme()
  const { titles } = useTerms()

  return (
    <BottomTab.Navigator initialRouteName="TabOne" tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          title: titles.tabOne,
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          title: titles.tabTwo,
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  )
}

function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={px(30)} style={{ marginBottom: -px(3) }} {...props} />
}
