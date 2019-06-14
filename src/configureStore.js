import logger from 'redux-logger'
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { geohashMiddleware } from './middleware'

import { geohash, title, page } from './reducers'
import routes from './routesMap'

export default function configureStore(preloadedState) {
    const { reducer, middleware, enhancer } = routes;

    const rootReducer = combineReducers({
        geohash,
        page,
        title,
        location: reducer
    })

    const middlewares = applyMiddleware(middleware, geohashMiddleware, logger)
    const composeEnhancers =
        typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

    const enhancers = composeEnhancers(enhancer, middlewares)
    const store = createStore(rootReducer, preloadedState, enhancers)

    return { store }
}
