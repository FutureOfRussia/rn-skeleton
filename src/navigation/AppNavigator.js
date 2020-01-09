import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import MainStack from './MainStack'

export default createAppContainer(createSwitchNavigator(
  {
    Main: MainStack,
  },
  { initialRouteName: 'Main' },
))
