const DEFAULT = 'RFR demo'

export default (state = DEFAULT, action = {}) => {
  switch (action.type) {
    case 'MAP':
      return DEFAULT
    case 'USER':
      return `${DEFAULT} - user ${action.payload.id}`
    default:
      return state
  }
}
