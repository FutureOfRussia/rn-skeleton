import { StyleSheet } from 'react-native'
import { Colors } from '../../constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  input: {
    width: '100%',
    height: 70,
    backgroundColor: Colors.black,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    color: Colors.white,
    fontSize: 18,
  },
  text: {
    width: '100%',
    height: 30,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: Colors.black,
    fontSize: 18,
  },
})
