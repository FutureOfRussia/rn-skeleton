import AsyncStorage from '@react-native-community/async-storage'
import axios, { AxiosInstance } from 'axios'
import moment from 'moment'

import { pushNotification } from '../components/LocaleNotification'

export const API_ENDPOINTS = 'https://api.sample.com/'

export const httpClient = (): AxiosInstance => {
  const config = {
    baseURL: API_ENDPOINTS,
    headers: { 'Content-Type': 'application/json' },
  }

  const axiosInstance = axios.create(config)

  axiosInstance.interceptors.request.use(
    async _conf => {
      const token = JSON.parse((await AsyncStorage.getItem('token')) || '')
      const conf = _conf

      if (token && moment.unix(token.expiration_date).isAfter(moment())) {
        conf.headers.Authorization = `Bearer ${token.access_token}`
      }

      return conf
    },
    error => Promise.reject(error),
  )

  axiosInstance.interceptors.response.use(
    response => response,
    async error => {
      const { data } = error.response
      let msg = 'Oops! Something went wrong!'

      if (data?.errors && typeof data.errors === 'object') {
        msg = Object.values<string[]>(data.errors)
          .map(err => err.join(' '))
          .join(' ')
      } else if (data?.message && typeof data.message === 'string') {
        msg = data.message
      } else if (data?.error && typeof data.error === 'string') {
        msg = data.error
      }

      pushNotification({ msg })

      return Promise.reject(error)
    },
  )

  return axiosInstance
}
