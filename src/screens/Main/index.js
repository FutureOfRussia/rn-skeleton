// @flow
import React, { Component } from 'react'
import { View, TextInput, Text } from 'react-native'
import { connect } from 'react-redux'
import { getTitleSelector } from '../../selectors/main'
import styles from './styles'

type MainScreenType = {
  title: string,
  changeTitle: Function,
}

class Main extends Component<MainScreenType> {
  _onChangeText = (text) => this.props.changeTitle(text)

  render() {
    const { title } = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
        <TextInput value={title} onChangeText={this._onChangeText} style={styles.input} />
      </View>
    )
  }
}

const mapState = (state) => ({
  title: getTitleSelector(state),
})

const mapDispatch = ({ main: { changeTitle } }) => ({
  changeTitle,
})

export default connect(mapState, mapDispatch)(Main)
