import { NOT_FOUND } from 'redux-first-router'

const components = {
    HOME: 'Home',
    MAP:   'Map',
    USER:  'User',
    [NOT_FOUND]: 'NotFound'
}

export default (state = 'Home', action = {}) => {
    let newState = state;
    console.log("page reducer: action=", action, " old state=", state);
    // if Im leaving the MAP I should stash the geohash
    if (state === "Map" && action.type !== "MAP") {
        console.log("Stash the geohash==================================================");
    }
    switch (action.type) {
        case "MAP":
        // If we are moving into the MAP url from another place
        // then we need to push the geohash into state, otherwise
        // the SETGEOHASH will have already done that.
            console.log('page reducer action.payload', action.payload, " state=",state);
            /*
            if (state.page !== 'Map')
                console.log("We're landing on Map");
            else {
                console.log("We're already on the map.");
            }
            try {
                if (action.payload.query.geohash === state.geohash) {
                    console.log("Already synced.")
                } else {
                    action.payload = {
                        query: action.payload.query,
                        geohash: action.payload.query.geohash
                    }
                    console.log("Syncing query", action.payload);
                }
            } catch(err) {
                console.log("Sync no workie", err, state);
            }
*/
            newState = 'Map';
            break;

        case "HOME":
            newState = 'Home';
            break;

        case "USER":
        // how do I see the previous location here? let's try This
            try {
                const old_geohash = action.meta.location.prev.payload.query.geohash
                console.log("Sadly we're leaving behind geohash", old_geohash);
                action.payload = {...action.payload, 'geohash':old_geohash};
                console.log('action is now', action);
            } catch(err) {
                console.log("Can't read prev geohash");
            }
            newState = "User";
            break;

        default:
            newState = components[action.type] || state
            break;
    }
    console.log("page reducer: new state=", newState);
    return newState
}
