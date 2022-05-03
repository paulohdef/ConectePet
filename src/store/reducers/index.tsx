import { combineReducers } from 'redux'
import requerimentReducer from './requeriments'
import userReducer from './users'

const rootReducer = combineReducers({
  requeriment: requerimentReducer,
  user: userReducer,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
