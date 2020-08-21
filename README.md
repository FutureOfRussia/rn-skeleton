[![runs with expo](https://img.shields.io/badge/Runs%20with%20Expo-000.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://expo.io/)
# rn-skeleton
React Native skeleton project.

### Usage
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
  
### Code examples
#### Navigation
Simple navigation container with a stack and one screen inside.
```js
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Main } from '../screens'

const Stack = createStackNavigator()

export default function () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
```
_More information in the official [documentation](https://reactnavigation.org/docs/navigation-container)._
#### Data Model used by the Rematch library
The model brings together state, reducers, async actions & action creators in one place.
```ts 
interface InitialState {
  title: string
}

interface Dispatch {
  main: {
    changeTitle: (payload: string) => InitialState
    changeTitleAsync: (payload: string) => Promise<void>
  }
}

const initialState = {
  title: "It's React Native project!", // initial state
}

export default {
  state: initialState,
  reducers: {
    // handle state changes with pure functions
    changeTitle: (state, payload: string): InitialState => ({ ...state, title: payload }),
  },
  effects: (dispatch: Dispatch) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    changeTitleAsync: async (payload: string) => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      dispatch.main.changeTitle(payload)
    },
  }),
}
```
_More information in the official [documentation](https://rematch.github.io/rematch/)._
#### Http client
Used to process requests to the server and its responses.
```js
import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'
import { apiEndpoint } from '../constants'

export default function HttpClient() {
  const config = {
    baseURL: `${apiEndpoint}`, // base path to API
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const axiosInstance = axios.create(config)

  axiosInstance.interceptors.request.use(async (_conf) => {
    const token = await AsyncStorage.getItem('token') // get authorization token from device storage
    const conf = _conf
    if (token) conf.headers.Authorization = `Token ${token}` // checking the token and adding it to the request header
    return conf
  }, (error) => Promise.reject(error))

  axiosInstance.interceptors.response.use((response) => response, async (error) => {
    console.log(error) // here you can process the server response
    return Promise.reject(error)
  })

  return axiosInstance
}
```
Usage:
```js
const getUserImages = async (id) => {
  const res = await HttpClient.get(images, { params: { user_id: id } })
  console.log(res)
}
```
### Libraries used
* [Expo SDK 38](https://docs.expo.io/)
* [React Navigation v5](https://reactnavigation.org/docs/getting-started)
* A Redux Framework [Rematch](https://github.com/rematch/rematch)
* [axios](https://github.com/axios/axios)
* [ESLint](https://eslint.org/docs/user-guide/getting-started) and [Airbnb config](https://github.com/vuejs/eslint-config-airbnb) for him
* [TypeScript](https://www.typescriptlang.org/docs/home)
