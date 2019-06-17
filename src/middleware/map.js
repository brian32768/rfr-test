import page from '../reducers/page'
import { setMapQuery } from '../utils'

const mapMiddleware = store => {
    return next => action => {
        try {
            const state = store.getState()
            console.log("mapMiddleware action=",action, " state=",state);
            switch (action.type) {
                case 'SETCENTER':
                    // Calling the "page" reducer here will cause the URL address to update.
                    store.dispatch({type:"MAP",
                        payload: { query: setMapQuery(action.payload, state.map.zoom) }
                    }, state)
                    break;
                case 'SETZOOM':
                    // Calling the "page" reducer here will cause the URL address to update.
                    store.dispatch({type:"MAP",
                        payload: { query: setMapQuery(state.map.center, action.payload) }
                    }, state)
                    break;
                default:
                    //console.log('mapMiddleware action', action.type, action);
                    break;
            }
            return next(action)
        } catch(err) {
            console.error('mapMiddleware error', err)
            throw err
        }
    }
}

export default mapMiddleware
