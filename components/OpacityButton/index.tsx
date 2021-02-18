import { DeviceEventEmitter, Pressable, View } from 'react-native'
import React from 'react'

import OpacityButtonProps from './types'

export default function OpacityButton({
  style = {},
  onPress = () => {},
  children = <View />,
  hitSlop = undefined,
  disabled = false,
  debounce = false,
  onLongPress,
}: OpacityButtonProps) {
  const onClickHandler = () => {
    if (debounce) DeviceEventEmitter.emit('onClick', onPress)
    else onPress()
  }

  return (
    <Pressable
      onPress={onClickHandler}
      onLongPress={onLongPress || undefined}
      style={({ pressed }) => [style, { opacity: pressed ? 0.2 : 1 }]}
      hitSlop={hitSlop}
      disabled={disabled}
    >
      {children}
    </Pressable>
  )
}
