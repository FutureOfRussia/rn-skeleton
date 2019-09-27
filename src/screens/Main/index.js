// @flow
import React, { Component } from 'react'
import { View, TextInput, Text } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setTitle } from '../../actions/main'
import { getTitleSelector } from '../../selectors/main'
import styles from './styles'

type MainScreenType = {
  title: string,
  actions: {
    setTitle: typeof setTitle,
  }
}

class Main extends Component<MainScreenType> {
  static getDerivedStateFromProps(props) {
    return {
      title: props.title,
    }
  }

  constructor(props) {
    super(props)

    this.state = {
      title: '',
    }
  }

  _onChangeText = (text) => this.props.actions.setTitle(text)

  render() {
    const { title } = this.state

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
        <TextInput value={title} onChangeText={this._onChangeText} style={styles.input} />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  title: getTitleSelector(state),
})
const mapDispatchToProps = (dispatch: Function) => ({
  actions: bindActionCreators({
    setTitle,
  }, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
