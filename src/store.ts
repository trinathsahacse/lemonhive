import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import accessTokenReducer from './reduxSlices/accessTokenSlice'
import accessProductReducer from './reduxSlices/accsessProductSlice'

const reducer = combineReducers({
  accessTokenReducer,
  accessProductReducer,
})

const store = configureStore({
  reducer,
})

export type AppDispatch = typeof store.dispatch

export default store