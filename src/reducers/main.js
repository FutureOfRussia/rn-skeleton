// @flow
import * as actions from '../actions/main'

export type MainState = {
  title: string,
}

const initialState: MainState = {
  title: "It's React Native skeleton project!",
}

export default function main(state = initialState, action) {
  switch (action.type) {
    case actions.SET_TITLE:
      return {
        ...state,
        title: action.payload,
      }
    default:
      return state
  }
}
