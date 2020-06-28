import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons'
import { useColorScheme, useTerms } from '../hooks'
import { TabOne, TabTwo } from '../screens'
import { px } from '../helpers/Dimensions'
import { Colors } from '../constants'

const BottomTab = createBottomTabNavigator()
const Stack = createStackNavigator()

function TabBarIcon(props: { name: string, color: string }) {
  return <Ionicons size={px(30)} style={{ marginBottom: -px(3) }} {...props} />
}

function TabOneNavigator() {
  const { titles: { tabOne: title } } = useTerms()

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabOne"
        component={TabOne}
        options={{ headerTitle: title }}
      />
    </Stack.Navigator>
  )
}

function TabTwoNavigator() {
  const { titles: { tabTwo: title } } = useTerms()

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabTwo"
        component={TabTwo}
        options={{ headerTitle: title }}
      />
    </Stack.Navigator>
  )
}

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme()
  const { tabs } = useTerms()

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          tabBarLabel: tabs.tabOne,
          tabBarIcon: ({ color }: { color: string }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarLabel: tabs.tabTwo,
          tabBarIcon: ({ color }: { color: string }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  )
}
