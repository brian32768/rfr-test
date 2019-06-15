import { connectRoutes } from 'redux-first-router'
import queryString from 'query-string'

const routesMap = {
  HOME: '/',
  MAP:  '/map',
  USER: '/user/:id',
  // I could put a thunk here that would load data from a remote service, example used the starwars api
}

export default connectRoutes(routesMap, {
  querySerializer: queryString // This is what puts your queries into the address bar.
})
