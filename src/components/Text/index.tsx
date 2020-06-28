import React from 'react'
import { Text as DefaultText, TextStyle } from 'react-native'
import { useThemeColor } from '../../hooks'
import { ThemeProps } from '../../../types'

type TextProps = ThemeProps & DefaultText['props'] & { fontFamily?: TextStyle['fontFamily'] }

export default function Text(props: TextProps) {
  const {
    fontFamily, style, lightColor, darkColor, ...otherProps
  } = props
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text')

  return <DefaultText style={[{ color, fontFamily }, style]} {...otherProps} />
}
