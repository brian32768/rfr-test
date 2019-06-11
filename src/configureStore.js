import logger from 'redux-logger'
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { connectRoutes } from 'redux-first-router'

import { title } from './reducers'
import routesMap from './routesMap'
import page from './pageReducer'

import swapi from './swapiReducer'

export default function configureStore(preloadedState) {
    const { reducer, middleware, enhancer } = connectRoutes(routesMap)

    const rootReducer = combineReducers({
        title,
        page,
        swapi,
        location: reducer
    })

    const middlewares = applyMiddleware(middleware, logger)
    const composeEnhancers =
        typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose
    const enhancers = composeEnhancers(enhancer, middlewares)

    const store = createStore(rootReducer, preloadedState, enhancers)

    return { store }
}
