import { height, width, totalSize } from 'react-native-dimension'
import Colors from './Colors'
import Styles from './Styles'

const apiEndpoint = ''
const pxToTotalSize = (px) => totalSize(px / 19.5)

export {
  Colors,
  Styles,
  height,
  width,
  totalSize,
  pxToTotalSize,
  apiEndpoint,
}
