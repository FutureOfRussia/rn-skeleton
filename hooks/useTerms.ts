import { useSelector } from 'react-redux'

import { AppState, State } from '../types/Models'
import * as Languages from '../assets/languages'

export default function useTerms() {
  const { locale } = useSelector<State, AppState>(state => state.appState)

  return Languages[locale]
}
