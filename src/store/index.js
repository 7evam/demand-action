import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from '../reducers'
import { loadState, saveState } from '../utils/localStorage'
import thunk from 'redux-thunk'

const persistedState = loadState();

const middleware = [thunk]

const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const store = createStore(
    rootReducer,
    persistedState,
    composeEnhancers(applyMiddleware(...middleware))
)

store.subscribe(() => {
    saveState({
        incidentReducer: store.getState().incidentReducer
    })
})

export default store