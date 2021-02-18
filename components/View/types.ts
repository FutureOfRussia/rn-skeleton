import { View as DefaultView } from 'react-native'

import { ThemeProps } from '../../types/Support'

export type ViewProps = ThemeProps & DefaultView['props']
