import { AppState } from '../types/Models'

const initialState: AppState = {
  locale: 'en',
}

export default {
  state: initialState,
  reducers: {
    setAppState: (state: AppState, payload: Record<string, unknown>): AppState => ({
      ...state,
      ...payload,
    }),
  },
}
