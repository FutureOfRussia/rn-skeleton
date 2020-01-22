import { AsyncStorage } from 'react-native'
import axios from 'axios'

export default function () {
  const config = {
    baseURL: '',
    header: {
      'Content-Type': 'application/json',
    },
  }

  this.axiosInstance = axios.create(config)

  this.axiosInstance.interceptors.request.use(async (_conf) => {
    this.token = await AsyncStorage.getItem('token')

    const conf = _conf

    if (this.token) {
      conf.headers.Authorization = `Bearer ${this.token}`
    }

    return conf
  }, (error) => Promise.reject(error))

  this.axiosInstance.interceptors.response.use((response) => response, async (error) => {
    if (error.response) {
      console.log('Http error: ', error.response.status)
    }

    return Promise.reject(error.response ? error.response : error)
  })

  return this.axiosInstance
}
