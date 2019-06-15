import page from '../reducers/page'

const geohashMiddleware = store => {
    return next => action => {
        try {
            const state = store.getState()
            switch (action.type) {
                case 'SETGEOHASH':
                    console.log('geohashMiddleware action', action.type, " action=",action, " state=",state);

                    // Calling the "page" reducer here will cause the URL address to update.
                    store.dispatch({ type:"MAP", payload: action.payload }, state)
                    break;
                default:
                    //console.log('geohashMiddleware action', action.type, action);
                    break;
            }
            return next(action)
        } catch(err) {
            console.error('geohashMiddleware error', err)
            throw err
        }
    }
}

export default geohashMiddleware
