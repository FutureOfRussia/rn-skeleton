import Animated from 'react-native-reanimated'
import { ViewStyle } from 'react-native'
import React from 'react'

export default interface BounceButtonProps {
  style?: (Animated.AnimateStyle<ViewStyle> | undefined)[] | Animated.AnimateStyle<ViewStyle> | undefined
  onPress?: () => void
  children?: React.ReactNode
  hitSlop?: number
  debounce?: boolean
  haptic?: boolean
  disabled?: boolean
}
