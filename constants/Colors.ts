const tintColorLight = '#2f95dc'
const tintColorDark = '#fff'

export default {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
    reverseBackground: '#000',
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
    reverseBackground: '#fff',
  },
  LINK: '#2e78b7',
  TRANSPARENT: 'transparent',
  WHITE: '#FFFFFF',
  BLACK: '#000000',
  GRAY: '#EEEEEE',
  white: (opacity = 1): string => `rgba(255, 255, 255, ${opacity})`,
  black: (opacity = 1): string => `rgba(0, 0, 0, ${opacity})`,
  rgb: (r = 0, g = 0, b = 0): string => `rgb(${r}, ${g}, ${b})`,
  rgba: (r = 0, g = 0, b = 0, a = 0): string => `rgba(${r}, ${g}, ${b}, ${a})`,
}
