import logger from 'redux-logger'
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { mapMiddleware } from './middleware'

import { map, title, page } from './reducers'
import routes from './routesMap'

export default function configureStore(preloadedState) {
    const { reducer, middleware, enhancer } = routes;

    const rootReducer = combineReducers({
        map,
        page,
        title,
        location: reducer
    })

    const middlewares = applyMiddleware(middleware, mapMiddleware, logger)
    const composeEnhancers =
        typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

    const enhancers = composeEnhancers(enhancer, middlewares)
    const store = createStore(rootReducer, preloadedState, enhancers)

    return { store }
}
