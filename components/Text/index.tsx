import { Text as DefaultText } from 'react-native'
import React from 'react'

import { useThemeColor } from '../../hooks'
import { TextProps } from './types'

export default function Text({ style, lightColor, darkColor, ...otherProps }: TextProps): JSX.Element {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text')

  return <DefaultText style={[{ color }, style]} {...otherProps} />
}
