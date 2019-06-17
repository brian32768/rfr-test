import { NOT_FOUND } from 'redux-first-router'

const components = {
    HOME: 'Home',
    MAP:   'Map',
    USER:  'User',
    [NOT_FOUND]: 'NotFound'
}

export default (state = 'Home', action = {}) => {
    const newState = components[action.type] || state
    //console.log("page reducer: ", action.type, " state=", state, " newState=", newState);
    return newState
}
