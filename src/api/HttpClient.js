import { AsyncStorage } from 'react-native'
import axios from 'axios'
import { apiEndpoint } from '../constants'

export default function () {
  const config = {
    baseURL: `${apiEndpoint}/dims-api/v1`,
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const axiosInstance = axios.create(config)

  axiosInstance.interceptors.request.use(async (_conf) => {
    const token = await AsyncStorage.getItem('token')
    const conf = _conf
    if (token) conf.headers.Authorization = `Token ${token}`
    return conf
  }, (error) => Promise.reject(error))

  axiosInstance.interceptors.response.use((response) => response, async (error) => (
    Promise.reject(error)
  ))

  return axiosInstance
}
