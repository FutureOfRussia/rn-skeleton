import { Dimensions } from 'react-native'

const handleSize = (num: number): number => {
  'worklet'

  if (num <= 0) return 0
  if (num > 100) return 1

  return num / 100
}

const myWidth = Dimensions.get('window').width
const myHeight = Dimensions.get('window').height

export const width = (num: number): number => {
  'worklet'

  return myWidth * handleSize(num)
}
export const height = (num: number): number => {
  'worklet'

  return myHeight * handleSize(num)
}

export const px = (num: number): number => {
  'worklet'

  return num * (width(1) / 4.14)
}
