const images = {
  splash: require('../../assets/images/splash.png'),
  icon: require('../../assets/images/icon.png'),
  favicon: require('../../assets/images/favicon.png'),
}

const list = (() => {
  const mapImages: Array<number> = []
  const getValues = (obj: any): void => Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === 'number' || typeof obj[key] === 'string') {
      mapImages.push(obj[key])
    } else {
      getValues(obj[key])
    }
  })
  getValues(images)
  return mapImages
})()

export default {
  ...images,
  list,
}
