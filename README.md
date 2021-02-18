[![runs with expo](https://img.shields.io/badge/Runs%20with%20Expo-000.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://expo.io/)
# rn-skeleton
React Native skeleton project.

## Usage
* **Install Expo CLI**  
  
  ```sh
  npm install -g expo-cli # in the root directory
  ```
  
* **Install Expo client for iOS and Android**  
  
  * 🍎 [Download Expo client for iOS from the App Store](https://itunes.com/apps/exponent)
  * 🤖 [Download Expo client for Android from the Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
  
* **Clone repository** 

  ```bash
  git clone https://github.com/FutureOfRussia/rn-skeleton.git
  ```

* **Install project dependencies**  
  
  Navigate to the project folder in your terminal `cd rn-skeleton` and  run `npm install`.  
  
* **Starting the development server**  
  
  Type ```expo start``` to start the local development server of Expo CLI.  
  
* **Opening the app on your phone/tablet**  
  
  * 🍎 On your iPhone or iPad, open the default Apple "Camera" app and scan the QR code you see in the terminal or in Expo Dev Tools.
  * 🤖 On your Android device, press "Scan QR Code" on the "Projects" tab of the Expo client app and scan the QR code you see in the terminal or in Expo Dev Tools.
  
## Custom components
### [Bounce Button](https://github.com/FutureOfRussia/rn-skeleton/blob/master/components/BounceButton/index.tsx)
Button with bouncing animation. Based on Pressable component from React Native and React Native Reanimated animation.
#### Usage example
```tsx
<BounceButton onPress={() => console.log('Hello World!')}>
  <Text>Press</Text>
</BounceButton>
```
#### Props
#### `debounce`

Determines if the debounce module is enabled. To use this module, an `useDebounce` hook must be placed in the root component.

| Type   | Required | Default |
| ------ | -------- | ------- |
| bool   | No       | false   |

---
#### `disabled`

Specifies the disabled state of the button.

| Type   | Required | Default |
| ------ | -------- | ------- |
| bool   | No       | false   |

---
#### `haptic`

Enabled vibration when pressed and released.

| Type   | Required | Default |
| ------ | -------- | ------- |
| bool   | No       | false   |

---
#### `hitSlop`

Sets additional distance outside of element in which a press can be detected.

| Type   | Required | Default |
| ------ | -------- | ------- |
| number | No       | 10 px   |

---
#### `onPress`

Press event callback.

| Type     | Required |
| -------- | -------- |
| function | No       |

---
#### `style`

Supports animated styles.

| Type   | Required |
| ------ | -------- |
| style  | No       |

---

### [Opacity Button](https://github.com/FutureOfRussia/rn-skeleton/blob/master/components/OpacityButton/index.tsx)
Button with opacity animation. Based on Pressable component from React Native.
#### Usage example
```tsx
<OpacityButton onPress={() => console.log('Hello World!')}>
  <Text>Press</Text>
</OpacityButton>
```
#### Props
#### `debounce`

Determines if the debounce module is enabled. To use this module, an `useDebounce` hook must be placed in the root component.

| Type   | Required | Default |
| ------ | -------- | ------- |
| bool   | No       | false   |

---
#### `disabled`

Specifies the disabled state of the button.

| Type   | Required | Default |
| ------ | -------- | ------- |
| bool   | No       | false   |

---
#### `hitSlop`

Sets additional distance outside of element in which a press can be detected.

| Type   | Required | Default |
| ------ | -------- | ------- |
| number | No       | 10 px   |

---
#### `onLongPress`

Long press event callback.

| Type     | Required |
| -------- | -------- |
| function | No       |

---
#### `onPress`

Press event callback.

| Type     | Required |
| -------- | -------- |
| function | No       |

---
#### `style`

| Type   | Required |
| ------ | -------- |
| style  | No       |

---

### [Locale Notification](https://github.com/FutureOfRussia/rn-skeleton/blob/master/components/LocaleNotification/index.tsx)
Component for displaying local push notifications.
#### Usage example
In the root component:
```tsx
import { LocaleNotification } from './components/LocaleNotification'

return (
  <View>
    <App />
    <LocaleNotification />
  </View>
)
```
Call from anywhere:
```tsx
import { pushNotification } from '../LocaleNotification'

return (
  <BounceButton onPress={() => pushNotification({ msg: 'Hello World!' })}>
    <Text>Press</Text>
  </BounceButton>
)
```

#### API

`pushNotification(notification)` - Push a new Notification to the event loop.

Arguments:

- **notification (_Notification_)** -- Notification object.

#### Notification
- **msg (_string_ - require)** - Notification text.
- **action (_function_)** - If passed, the action button will be displayed. Callback of the action button.
- **actionLabel (_string_)** - Action button label. Default value - 'Ok'.

### [Update Banner](https://github.com/FutureOfRussia/rn-skeleton/blob/master/components/UpdateBanner/index.tsx)
Component for managing Expo OTA updates. If there is an available update for the application, a banner will be shown with which you can install this update and restart the application. Uses expo [update module](https://docs.expo.io/versions/latest/sdk/updates/).
#### Usage example
In the root component:
```tsx
import { UpdateBanner } from './components'

return (
  <View>
    <App />
    <UpdateBanner />
  </View>
)
```

### [Http client](https://github.com/FutureOfRussia/rn-skeleton/blob/master/api/HttpClient.tsx)
Used to process requests to the server and its responses.
```ts
import AsyncStorage from '@react-native-community/async-storage'
import axios, { AxiosInstance } from 'axios'
import { apiEndpoint } from '../constants'

export default function HttpClient(): AxiosInstance {
  const config = {
    baseURL: `${apiEndpoint}`, // base path to API
    headers: { 'Content-Type': 'application/json' },
  }

  const axiosInstance = axios.create(config)

  axiosInstance.interceptors.request.use(async (_conf) => {
    // get authorization token from device storage
    const token = JSON.parse((await AsyncStorage.getItem('token')) || '')
    const conf = _conf

    // checking the token and adding it to the request header
    if (token && moment.unix(token.expiration_date).isAfter(moment())) {
      conf.headers.Authorization = `Bearer ${token.access_token}`
    }

    return conf
  }, (error) => Promise.reject(error))

  axiosInstance.interceptors.response.use((response) => response, async (error) => {
    console.log(error) // here you can process the server response
    return Promise.reject(error)
  })

  return axiosInstance
}
```
#### Usage example
```ts
const getUserImages = async (id: number) => {
  const { data } = await HttpClient.get('api/images', { params: { user_id: id } })
  console.log(data)
}
```

## Using Redux with the Rematch library
### Types
```ts
// types.ts

export type Values = {
  title: string
}

export type State = {
  values: Values
}

export type Dispatch = {
  values: {
    changeTitle: (payload: string) => Values
    changeTitleAsync: (payload: string) => Promise<void>
  }
}
```

### Model
The model brings together state, reducers, async actions & action creators in one place.
```ts
// values.ts
import { Values, Dispatch, State } from './types'

const initialState: Values = {
  title: "It's React Native project!", // initial state
}

export default {
  state: initialState,
  reducers: {
    // handle state changes with pure functions
    changeTitle: (state: Values, payload: string): Values => ({ ...state, title: payload }),
  },
  effects: (dispatch: Dispatch) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    changeTitleAsync: async (payload: string, state: State) => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      dispatch.main.changeTitle(payload)
    },
  }),
}
```

### Store
Connect all models to the store.
```ts
// store.ts

import { init } from '@rematch/core'
import values from './values'

export default init({ models: { values } })
```
Wrap the root component in a provider.
```tsx
// App.tsx

import { Provider } from 'react-redux'
import store from './store'

return (
  <View>
    <Provider store={store}>
      <App />
    </Provider>
  </View>
)
```

### Selector and Dispatch
Use [hooks from react-redux](https://react-redux.js.org/api/hooks) to get and modify store data.
```tsx
import { useDispatch,useSelector } from 'react-redux'
import { Dispatch, State, Values } from './types'

function TextInputWithRedux() {
  const { state: { changeTitle } } = useDispatch<Dispatch>()
  const { title } = useSelector<State, Values>((state) => state.values)

  return <TextInput value={title} onChangeText={(value) => changeTitle(value)} />
}
```

## Libraries
* [Expo SDK 40](https://docs.expo.io/)
* [React Navigation v5](https://reactnavigation.org/docs/getting-started)
* [React Native Reanimated v2](https://docs.swmansion.com/react-native-reanimated/)
* A [Redux](https://github.com/reduxjs/redux) Framework [Rematch](https://github.com/rematch/rematch)
* [axios](https://github.com/axios/axios)
* [TypeScript](https://www.typescriptlang.org/docs/home), [Prettier](https://prettier.io/docs/en/), [ESLint](https://eslint.org/docs/user-guide/getting-started)
