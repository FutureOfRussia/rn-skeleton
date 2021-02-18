import { StyleSheet } from 'react-native'

import { px } from '../../helpers/Dimensions'
import { Colors } from '../../constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  developmentModeText: {
    marginBottom: px(20),
    fontSize: px(14),
    lineHeight: px(19),
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: px(30),
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: px(10),
    marginBottom: px(20),
  },
  welcomeImage: {
    width: px(100),
    height: px(80),
    resizeMode: 'contain',
    marginTop: px(3),
    marginLeft: -px(10),
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: px(50),
  },
  homeScreenFilename: {
    marginVertical: px(7),
  },
  codeHighlightText: {
    color: Colors.GRAY,
  },
  codeHighlightContainer: {
    borderRadius: px(3),
    paddingHorizontal: px(4),
  },
  getStartedText: {
    fontSize: px(17),
    lineHeight: px(24),
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: px(15),
    marginHorizontal: px(20),
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: px(15),
  },
  helpLinkText: {
    textAlign: 'center',
  },
  buttonBlock: {
    width: '100%',
    paddingHorizontal: px(30),
    marginTop: px(20),
  },
  button: {
    width: '100%',
    height: px(60),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: px(50),
  },
})
