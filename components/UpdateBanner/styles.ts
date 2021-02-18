import { StyleSheet } from 'react-native'

import { shadow } from '../../helpers/Utilities'
import { px } from '../../helpers/Dimensions'
import { Colors } from '../../constants'

export default StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: px(30),
  },
  content: {
    width: '100%',
    borderRadius: px(15),
    borderWidth: px(1),
    borderColor: Colors.WHITE,
    ...shadow(),
  },
  textBlock: {
    padding: px(20),
  },
  title: {
    fontSize: px(24),
    fontWeight: '600',
    textAlign: 'center',
  },
  subtitle: {
    marginTop: px(15),
    fontSize: px(16),
    fontWeight: '300',
    textAlign: 'center',
  },
  buttonBlock: {
    width: '100%',
    height: px(50),
    borderTopWidth: px(1),
    borderColor: Colors.WHITE,
  },
  button: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: px(16),
    fontWeight: '500',
    color: Colors.LINK,
  },
})
