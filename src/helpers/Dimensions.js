import { height, totalSize, width } from 'react-native-dimension'

const denominator = height(1) / width(1) > 2 ? 7.6 : 7.6
const px = (num) => num * (totalSize(1) / denominator)

export {
  width,
  height,
  totalSize,
  px,
}
