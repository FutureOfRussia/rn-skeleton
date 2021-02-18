import { Insets, ViewStyle } from 'react-native'
import React from 'react'

export default interface OpacityButtonProps {
  style?: ViewStyle[] | ViewStyle
  onPress?: () => void
  onLongPress?: () => void
  children?: React.ReactNode
  hitSlop?: Insets
  disabled?: boolean
  debounce?: boolean
}
