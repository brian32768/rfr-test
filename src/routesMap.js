import { connectRoutes } from 'redux-first-router'

const routesMap = {
  HOME: '/',
  MAP:  '/map/:geohash?',
  USER: '/user/:id',
  // I could put a thunk here that would load data from a remote service, example used the starwars api
}

export default connectRoutes(routesMap)
