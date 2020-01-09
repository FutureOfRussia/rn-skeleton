import { height, width, totalSize } from 'react-native-dimension'
import Colors from './Colors'
import Styles from './Styles'

const apiEndpoint = ''
const denominator = height(1) / width(1) > 2 ? 7.6 : 7.6
const px = (num) => num * (totalSize(1) / denominator)

export {
  Colors,
  Styles,
  height,
  width,
  totalSize,
  px,
  apiEndpoint,
}
