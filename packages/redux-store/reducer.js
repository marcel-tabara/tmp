import {
  counterServiceReducer,
} from '@template/services'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  counterServiceReducer,
})

export default rootReducer
