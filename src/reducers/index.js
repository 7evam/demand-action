import { combineReducers } from 'redux'
import incidentReducer from './incidentReducer'
import modalReducer from './modalReducer'

const rootReducer = combineReducers({
    incidentReducer,
    modalReducer
})

export default rootReducer