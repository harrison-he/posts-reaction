import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import home from './Reducers/HomeReducer'

const rootReducer = combineReducers({
    home
})

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

export default store