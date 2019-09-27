// @flow
import { createSelector } from 'reselect'
import { MainState } from '../reducers/main'

export const getMainStateSelector = (state) => state.main

export const getTitleSelector = createSelector(
  getMainStateSelector,
  (state: MainState) => state.title,
)
