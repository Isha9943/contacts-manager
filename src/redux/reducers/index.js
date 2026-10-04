// root reducer
import { combineReducers } from 'redux'
import contactReducer from './contactReducer'
import userReducer from './userreducer'

export default combineReducers({
    contacts: contactReducer,
    profile: userReducer
})