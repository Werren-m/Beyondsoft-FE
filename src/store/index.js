import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import reducer from './reducers'

// const reducers = combineReducers({ reducer })

const middlewares = applyMiddleware(thunk)

const store = createStore(reducer, middlewares)

export default store