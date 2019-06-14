const geohashMiddleware = store => {
    console.log('geohashMiddleware active');
    return next => action => {
        try {
            console.log('geohashMiddleware action', action);
            switch (action.type) {

                default:
                    console.log('uh geohashMiddleware action', action);
                    break
            }
            return next(action)
        } catch(err) {
            console.error('geohashMiddleware error', err)
            throw err
        }
    }
}

export default geohashMiddleware
