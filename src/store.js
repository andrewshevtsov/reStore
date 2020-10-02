import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'

// middleware example
const logMiddleware = ({ getState }) => (next) => (action) => {
    console.log(action.type, getState())
    return next(action)
}

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
}
// middleware example

const store = createStore(reducer, applyMiddleware(stringMiddleware, logMiddleware))

store.dispatch('HELLO_WORLD')

export default store