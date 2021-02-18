import { StyleSheet } from 'react-native'

import { px } from '../../helpers/Dimensions'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: px(20),
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: px(30),
    height: px(1),
    width: '80%',
  },
})
