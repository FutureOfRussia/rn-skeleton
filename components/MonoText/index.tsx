import React from 'react'

import { TextProps } from '../Text/types'
import Text from '../Text'

export default function MonoText({ style, ...props }: TextProps): JSX.Element {
  return <Text {...props} style={[style, { fontFamily: 'space-mono' }]} />
}
