import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Main from '../screens/Main'

const MainStackNavigator = createStackNavigator({
  Main: {
    screen: Main,
    navigationOptions: {
      header: null,
    },
  },
})

export default createAppContainer(MainStackNavigator)
