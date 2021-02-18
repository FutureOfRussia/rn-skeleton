import { View as DefaultView } from 'react-native'
import React from 'react'

import { useThemeColor } from '../../hooks'
import { ViewProps } from './types'

export default function View({ style, lightColor, darkColor, ...otherProps }: ViewProps): JSX.Element {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background')

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />
}
