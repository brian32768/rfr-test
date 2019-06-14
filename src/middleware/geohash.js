import page from '../reducers/page'

const geohashMiddleware = store => {
    console.log('geohashMiddleware active');
    return next => action => {
        try {
            console.log('geohashMiddleware action', action.type, action);
            switch (action.type) {
                case 'SETGEOHASH':
                    const state = store.getState()
                    store.dispatch({ type:"MAP", payload: action.payload.geohash }, state)
                    break;
                default:
                    console.log('uh geohashMiddleware action', action.type, action);
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
