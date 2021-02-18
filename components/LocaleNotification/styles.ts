import { StyleSheet } from 'react-native'

import { shadow } from '../../helpers/Utilities'
import { px } from '../../helpers/Dimensions'
import { Colors } from '../../constants'

export default StyleSheet.create({
  container: {
    zIndex: 999,
    position: 'absolute',
    top: 0,
    width: '100%',
    paddingHorizontal: px(16),
    ...shadow({ shadowOpacity: 1, elevation: 1 }),
  },
  content: {
    flex: 1,
    paddingLeft: px(15),
    paddingTop: px(20),
    paddingBottom: px(10),
    paddingRight: px(10),
    borderRadius: px(5),
    overflow: 'hidden',
  },
  textBlock: {
    paddingRight: px(5),
    paddingBottom: px(10),
  },
  text: {
    fontSize: px(16),
  },
  btnBlock: {
    alignItems: 'flex-end',
  },
  btnText: {
    fontSize: px(16),
    color: Colors.LINK,
  },
})
