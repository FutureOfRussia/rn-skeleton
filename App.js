import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import store from './src/store'
import AppNavigator from './src/navigation/AppNavigator'
import { Styles } from './src/constants'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
    }
  }

  _loadResourcesAsync = async () => Promise.all([
    Font.loadAsync({}),
  ])

  _handleLoadingError = (error) => console.warn(error)

  _handleFinishLoading = () => this.setState({ loading: false })

  render() {
    if (this.state.loading) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      )
    }
    return (
      <Provider store={store}>
        <View style={Styles.full}>
          <AppNavigator />
        </View>
      </Provider>
    )
  }
}
