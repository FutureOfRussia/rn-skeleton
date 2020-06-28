import React from 'react'
import { TouchableOpacity } from 'react-native'
import * as WebBrowser from 'expo-web-browser'
import { black, white } from '../../helpers/Colors'
import Colors from '../../constants/Colors'
import { useTerms } from '../../hooks'
import styles from './styles'
import Text from '../Text'
import View from '../View'

export default function EditScreenInfo({ path }: { path: string }) {
  const { editScreenInfo: terms } = useTerms()

  const handleHelpPress = async () => {
    await WebBrowser.openBrowserAsync(
      'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet',
    )
  }

  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Text style={styles.getStartedText} lightColor={black(0.8)} darkColor={white(0.8)}>
          {terms.termOne}
        </Text>
        <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
          darkColor={white(0.05)}
          lightColor={black(0.05)}
        >
          <Text fontFamily="space-mono">{path}</Text>
        </View>
        <Text style={styles.getStartedText} lightColor={black(0.8)} darkColor={white(0.8)}>
          {terms.termTwo}
        </Text>
      </View>
      <View style={styles.helpContainer}>
        <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>{terms.link}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
