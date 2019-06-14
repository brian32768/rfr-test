import { NOT_FOUND } from 'redux-first-router'

const components = {
    HOME: 'Home',
    MAP:   'Map',
    USER:  'User',
    [NOT_FOUND]: 'NotFound'
}

export default (state = 'HOME', action = {}) => {
    let newState = state;
    switch (action.type) {
        case "MAP":
            newState = 'Map';
            break;

        case "HOME":
            newState = 'Home';
            break;

        case "USER":
            newState = "User";
            break;
            
        default:
            newState = components[action.type] || state
            break;
    }
    console.log("page reducer: action=", action, " newState=", newState);
    return newState
}
