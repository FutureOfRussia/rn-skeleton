import * as WebBrowser from 'expo-web-browser'
import React from 'react'

import { pushNotification } from '../LocaleNotification'
import { useTerms, useThemeColor } from '../../hooks'
import { Colors, Styles } from '../../constants'
import OpacityButton from '../OpacityButton'
import BounceButton from '../BounceButton'
import EditScreenInfoProps from './types'
import MonoText from '../MonoText'
import styles from './styles'
import Text from '../Text'
import View from '../View'

export default function EditScreenInfo({ path }: EditScreenInfoProps) {
  const buttonBackground = useThemeColor({}, 'reverseBackground')
  const buttonText = useThemeColor({ light: Colors.WHITE, dark: Colors.LINK }, 'text')
  const { editScreenInfo: terms } = useTerms()

  const handleHelpPress = async () => {
    const url = 'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
    await WebBrowser.openBrowserAsync(url)
  }

  return (
    <View style={Styles.fullWidth}>
      <View style={styles.getStartedContainer}>
        <Text style={styles.getStartedText} lightColor={Colors.black(0.8)} darkColor={Colors.white(0.8)}>
          {terms.body[0]}
        </Text>
        <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
          darkColor={Colors.white(0.05)}
          lightColor={Colors.black(0.05)}
        >
          <MonoText>{path}</MonoText>
        </View>
        <Text style={styles.getStartedText} lightColor={Colors.black(0.8)} darkColor={Colors.white(0.8)}>
          {terms.body[1]}
        </Text>
      </View>
      <View style={styles.helpContainer}>
        <OpacityButton onPress={handleHelpPress} style={styles.helpLink}>
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            {terms.tap}
          </Text>
        </OpacityButton>
      </View>
      <View style={styles.buttonBlock}>
        <BounceButton
          style={[styles.button, { backgroundColor: buttonBackground }]}
          onPress={() => pushNotification({ msg: 'Hello World!' })}
          debounce
        >
          <Text style={{ color: buttonText }}>Press</Text>
        </BounceButton>
      </View>
    </View>
  )
}
