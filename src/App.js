import React from 'react'
import { connect } from 'react-redux'

// Go read this: https://github.com/faceyspacey/redux-first-router-link#readme
import { NavLink } from 'redux-first-router-link'

// Import everything as an object so that we can look up a component using its name.
import * as components from './components'

const App = ({ page, geohash, changeUser }) => {
  const Component = components[page]
  console.log("App geohash=", geohash);
  return (
    <>
        <NavLink
            to={ '/map/'+ geohash }
            activeClassName='active'
            activeStyle={{ color: 'pink' }}
            exact={true}
            strict={true}
        > Map </NavLink>

        <NavLink to="/user/123"
            activeClassName='active'
            activeStyle={{ color: 'red' }}>User 123</NavLink>

        <NavLink to={{ type: 'USER', payload: { id: 456 } }}>User 456</NavLink>

        <button onClick={() => changeUser(789)}>User 789</button>

        <Component />
    </>
  )
}

const mapStateToProps = (state) => {
    console.log("App state=", state);
    return {
        page: state.page,
        geohash: state.geohash
    }
}
const mapDispatchToProps = dispatch => ({
  changeUser: id => dispatch({ type: 'USER', payload: { id } })
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
