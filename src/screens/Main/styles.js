import { StyleSheet } from 'react-native'
import { Colors } from '../../constants'
import { px } from '../../helpers/Dimensions'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: px(30),
  },
  input: {
    width: '100%',
    height: px(45),
    backgroundColor: Colors.BLACK,
    borderRadius: px(3),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: px(10),
    color: Colors.WHITE,
    fontSize: px(14),
    marginBottom: px(20),
  },
  text: {
    width: '100%',
    marginBottom: px(20),
    paddingHorizontal: px(10),
    color: Colors.BLACK,
    fontSize: px(14),
  },
})
