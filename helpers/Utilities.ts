import { HitSlop, Shadow } from '../types/Support'
import { Colors } from '../constants'

export const hitSlop = (offset: number): HitSlop => ({
  top: offset,
  left: offset,
  bottom: offset,
  right: offset,
})

export const shadow = ({ shadowColor, shadowOffset, shadowRadius, shadowOpacity, elevation }: Shadow = {}) => ({
  shadowColor: shadowColor || Colors.black(0.5),
  shadowOffset: { width: shadowOffset?.width || 0, height: shadowOffset?.height || 0 },
  shadowRadius: shadowRadius || 10,
  shadowOpacity: shadowOpacity || 0.5,
  elevation: elevation || 10,
})
