import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from '../reducers'

const middlewares = [
  createLogger(),
  thunk,
]

const store = createStore(reducer, applyMiddleware(...middlewares))

export default store
