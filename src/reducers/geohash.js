const initialState = ''

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case 'SETGEOHASH':
            console.log("SETGEOHASH to", action.payload);
            return action.payload;
            break;
        default:
            return state
    }
}
