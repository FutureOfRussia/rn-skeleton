import { StyleSheet } from 'react-native'
import { px } from '../../helpers/Dimensions'
import { black } from '../../helpers/Colors'
import { Colors } from '../../constants'

export default StyleSheet.create({
  button: {
    width: '100%',
    height: px(45),
    borderRadius: px(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    height: '100%',
    borderRadius: px(3),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledBtn: {
    backgroundColor: black(0.6),
  },
  text: {
    textAlign: 'center',
    color: Colors.WHITE,
    fontSize: px(14),
  },
  disabledText: {
    color: Colors.BLACK,
  },
  icon: {
    height: px(20),
  },
})
