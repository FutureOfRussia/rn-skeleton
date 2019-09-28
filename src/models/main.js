// @flow
export type MainState = {
  title: string,
}

const initialState: MainState = {
  title: "It's React Native skeleton project!",
}

export default {
  state: initialState,
  reducers: {
    changeTitle: (state, payload) => ({ ...state, title: payload }),
  },
  effects: (dispatch) => ({
    changeTitleAsync: async (payload, rootState) => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      dispatch.main.changeTitle(payload)
    },
  }),
}
