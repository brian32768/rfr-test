import { getMapQuery } from '../utils'

const initialState = {
    center: '', // We'd use a coord [0,0] here in real life.
    zoom: ''
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case 'MAP':
//          console.log("map reducer: MAP action", action, " state=", state);
            try {
                console.log("map reducer: Loading state from query", action.meta.query);
                const newState = getMapQuery(action.meta.query)
                console.log("map reducer: MAP", state, " ==>", newState);
                return newState;
            } catch(err) {
                console.log("map reducer: No values to update right now.");
            }
            return state;
        case 'SETCENTER': {
            const newState = {
                center: action.payload,
                zoom: state.zoom};
            console.log("map reducer: SETCENTER", state, " =>", newState);
            return newState; }
        case 'SETZOOM': {
            const newState = {
                center: state.center,
                zoom: action.payload};
            console.log("map reducer: SETZOOM", state, " =>", newState);
            return newState;
        }
        default:
            return state
    }
}
