import React from 'react'
import { View as DefaultView } from 'react-native'
import { useThemeColor } from '../../hooks'
import { ThemeProps } from '../../../types'

type ViewProps = ThemeProps & DefaultView['props']

export default function View(props: ViewProps) {
  const {
    style, lightColor, darkColor, ...otherProps
  } = props
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background')

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />
}
