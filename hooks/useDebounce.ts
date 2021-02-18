import { useDebouncedCallback } from 'use-debounce'
import { DeviceEventEmitter } from 'react-native'
import { useEffect } from 'react'

export default function useDebounce() {
  const debounced = useDebouncedCallback((onPress: () => void) => onPress(), 500, {
    leading: true,
    trailing: false,
  })

  useEffect(() => {
    const onClickListener = DeviceEventEmitter.addListener('onClick', debounced.callback)
    return () => onClickListener.remove()
  }, [debounced])
}
