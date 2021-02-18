import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import React, { useEffect, useState } from 'react'
import { Pressable, View } from 'react-native'
import { mix } from 'react-native-redash'

import { Notification } from '../../types/Support'
import { px } from '../../helpers/Dimensions'
import { useThemeColor } from '../../hooks'
import BounceButton from '../BounceButton'
import { Colors } from '../../constants'
import styles from './styles'
import Text from '../Text'

let listener: { setShow: (value: boolean) => void; setNotification: (value: Notification) => void } | null = null
let processing = false
let show = false
let timer: NodeJS.Timeout | null = null
const eventLoop: (() => void)[] = []

const setShow = (value: boolean) => {
  show = value
  listener?.setShow(value)
}

const push = ({ msg, action, actionLabel }: Notification) => {
  listener?.setNotification({
    msg,
    action: action
      ? () => {
          close()
          action()
        }
      : undefined,
    actionLabel,
  })

  setShow(true)
}

const process = () => {
  if (eventLoop.length) {
    eventLoop[0]()
    eventLoop.shift()
    timer = setTimeout(() => {
      setShow(false)
      setTimeout(process, 500)
    }, 7250)
  } else {
    processing = false
  }
}

const close = () => {
  if (timer) clearTimeout(timer)
  setShow(false)
  setTimeout(process, 500)
}

export const pushNotification = (newNotification: Notification) => {
  if (listener) {
    eventLoop.push(() => push(newNotification))
    if (!processing) {
      processing = true
      process()
    }
  }
}

export function LocaleNotification() {
  const [showValue, setShowValue] = useState(show)
  const [notification, setNotification] = useState<Notification>({
    msg: '',
    action: undefined,
    actionLabel: 'Ok',
  })
  const animated = useSharedValue(0)

  const backgroundColor = useThemeColor({}, 'reverseBackground')

  useEffect(() => {
    listener = { setNotification, setShow: setShowValue }
    return () => {
      listener = null
    }
  }, [])

  animated.value = withTiming(showValue ? 1 : 0, {
    duration: 500,
    easing: Easing.ease,
  })

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: mix(animated.value, -px(95), px(60)) }],
    opacity: animated.value,
  }))

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Pressable style={[styles.content, { backgroundColor }]} onPress={close}>
        <View style={styles.textBlock}>
          <Text lightColor={Colors.WHITE} darkColor={Colors.BLACK} style={styles.text}>
            {notification.msg}
          </Text>
        </View>
        {!!notification.action && (
          <View style={styles.btnBlock}>
            <BounceButton onPress={notification.action}>
              <Text style={styles.btnText}>{notification.actionLabel || 'Ok'}</Text>
            </BounceButton>
          </View>
        )}
      </Pressable>
    </Animated.View>
  )
}
