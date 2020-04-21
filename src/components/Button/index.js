// @flow
import React, { memo } from 'react'
import {
  TouchableOpacity, Text, ActivityIndicator, Image, View,
} from 'react-native'
import { Colors } from '../../constants'
import styles from './styles'

type ButtonProps = {
  color?: string,
  label?: string,
  disabled?: boolean,
  disabledWithoutColor?: boolean,
  loading?: boolean,
  icon?: number,
  buttonStyle?: Object,
  textStyle?: Object,
  iconStyle?: Object,
  onPress?: Function,
}

Button.defaultProps = {
  color: Colors.BLACK,
  label: '',
  disabled: false,
  disabledWithoutColor: false,
  loading: false,
  icon: null,
  buttonStyle: {},
  textStyle: {},
  iconStyle: {},
  onPress: () => {},
}

function Button({
  label, onPress, buttonStyle, textStyle, disabled,
  color, loading, disabledWithoutColor, icon, iconStyle,
}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button, buttonStyle, { backgroundColor: color }, disabled && styles.disabledBtn,
      ]}
      disabled={disabled || loading || disabledWithoutColor}
    >
      {loading ? (
        <ActivityIndicator color={Colors.white()} />
      ) : (
        <View style={styles.content}>
          {!!icon && <Image resizeMode="contain" source={icon} style={[styles.icon, iconStyle]} />}
          {!!label && (
            <Text style={[styles.text, textStyle, disabled && styles.disabledText]}>
              {label}
            </Text>
          )}
        </View>
      )}
    </TouchableOpacity>
  )
}

export default memo(Button)
