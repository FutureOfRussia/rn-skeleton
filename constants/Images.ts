type Key = 'splash' | 'icon' | 'adaptive_icon' | 'favicon'

type Images = { [key in Key]: number }

const images: Images = {
  splash: require('../assets/images/splash.png'),
  icon: require('../assets/images/icon.png'),
  adaptive_icon: require('../assets/images/adaptive-icon.png'),
  favicon: require('../assets/images/favicon.png'),
}

export default {
  list: Object.values(images),
  ...images,
}
