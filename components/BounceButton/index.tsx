import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated'
import { DeviceEventEmitter, Pressable, View } from 'react-native'
import * as Haptics from 'expo-haptics'
import React from 'react'

import { hitSlop as getHitSlop } from '../../helpers/Utilities'
import { px } from '../../helpers/Dimensions'
import BounceButtonProps from './types'

export default function BounceButton({
  style = {},
  onPress = () => {},
  children = <View />,
  hitSlop = px(10),
  debounce = false,
  haptic = false,
  disabled = false,
}: BounceButtonProps) {
  const scale = useSharedValue(1)

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: withTiming(scale.value, {
          duration: 100,
          easing: Easing.bezier(0.11, 0, 0.5, 0),
        }),
      },
    ],
  }))

  const onPressIn = async () => {
    if (haptic) await Haptics.selectionAsync()
    scale.value = 0.96
  }

  const onPressOut = async () => {
    if (haptic) await Haptics.selectionAsync()
    scale.value = 1
  }

  const onClickHandler = () => {
    setTimeout(() => {
      if (debounce) DeviceEventEmitter.emit('onClick', onPress)
      else onPress()
    }, 100)
  }

  return (
    <Pressable
      onPress={onClickHandler}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      hitSlop={getHitSlop(hitSlop)}
      disabled={disabled}
    >
      <Animated.View style={[style, animatedStyle]}>{children}</Animated.View>
    </Pressable>
  )
}
