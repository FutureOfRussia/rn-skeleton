export const SET_TITLE = 'SET_TITLE'

export const setTitle = (data, callback = () => {}) => (dispatch) => {
  dispatch({
    type: SET_TITLE,
    payload: data,
  })
  callback()
}
