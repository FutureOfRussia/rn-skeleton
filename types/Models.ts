// AppState
export interface AppState {
  locale: 'ru' | 'en'
}

export interface AppStateDispatch {
  setAppState: (payload: Record<string, unknown>) => AppState
}

// Full State
export interface State {
  appState: AppState
}

// Full Dispatch
export interface Dispatch {
  appState: AppStateDispatch
}
