const initialState = {geohash: ''}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case 'MAP':
            console.log("geohash reducer: MAP payload", action.payload, " state=",state);
            return state;
        case 'SETGEOHASH':
            console.log("geohash reducer: SETGEOHASH to", action.payload);
            return action.payload;
        default:
            return state
    }
}
