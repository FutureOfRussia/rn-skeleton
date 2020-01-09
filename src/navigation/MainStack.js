import { createStackNavigator } from 'react-navigation-stack'
import Main from '../screens/Main'

export default createStackNavigator({
  Main,
}, {
  initialRouteName: 'Main',
  headerMode: 'none',
})
