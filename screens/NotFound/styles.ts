import { StyleSheet } from 'react-native'

import { px } from '../../helpers/Dimensions'
import { Colors } from '../../constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.GRAY,
    alignItems: 'center',
    justifyContent: 'center',
    padding: px(20),
  },
  title: {
    fontSize: px(20),
    fontWeight: 'bold',
  },
  link: {
    marginTop: px(15),
    paddingVertical: px(15),
  },
  linkText: {
    fontSize: px(14),
    color: Colors.LINK,
  },
})
